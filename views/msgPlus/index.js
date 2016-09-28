'use strict';
//console.time('time');
//console.profile();
require('./index.css');
require('../adPops/index.css');
var Store = require('Store');
var Events = require('Events');

var Page = {
	push: 0,
	ajaxDataType: typeof CVal == "undefined" ? 'json' : 'jsonp',
	init: function(){
		function firstRequest(callback){
			$(document.body).append('<div class="msg-plus"></div>');
			$.when(
				Page.APIS.getMsgs(),
				Page.APIS.getClosedSum()
			).done(function(data,sum){
				data[0].data.sum = sum[0].data[0];//注意返回值是一个ajax对象，数据要用data[0]获取，否则报错
				callback(data[0].data);
			})
		}
		firstRequest(function(record){
			var store = Page.Store;
			store.dispatch(Page.Action.index(record));
			Page.Render.init();
			/**
			require.ensure('slimscroll',function(){
				require('slimscroll');
				 $('.msg-content>.content.active').slimScroll({
                    position: "right",
                    height: '500px',
                    distance: '3px',
                    railVisible: false,
                    size: '5px',                    
                    color: '#999',                    
                    railOpacity: '0.5',
                    railColor: '#eee'
                });
			},'slimscroll');//第三个参数是给这个模块命名，否则[name]是一个自动分配的id
			**/
		})
	}
}

Page.APIS = (function(){
	var apiPath = typeof CVal == "undefined" ? '' : CVal.path;
	var postData = {};
	if(typeof CVal != "undefined"){
		postData.userId = CVal.getUserId();
		postData.posId = CVal.getPostId();
		postData.orgId  = CVal.getOrgId();
	}
	var Apis = {
		msgs: apiPath + '/portals/getDataClosed.json',
		msgs2: apiPath + '/portals/getCloseDataSoon.json',
		msgs3: apiPath + '/portals/getLoanRemindListByUserId.json',
		news: apiPath + '/portals/news.json',
		closedSum: apiPath + '/portals/getDataClosedSum.json',
		closeDataSoonSum: apiPath + '/portals/getCloseDataSoonSum.json',
		dealShowData: apiPath + '/portals/dealShowData.json',
		loanRemindAlteraction: apiPath + '/portals/loanRemindAlteraction.json'
	}
	return {
		getMsgs: function() {
			return $.ajax({
				url: Apis.msgs,
				type: 'GET',
				dataType: Page.ajaxDataType,
				data: postData,
			 	jsonp: '_callback'
			})
		},
		getMsgs2: function() {
			return $.ajax({
				url: Apis.msgs2,
				type: 'GET',
				dataType: Page.ajaxDataType,
				data: postData,
				jsonp: '_callback'
			})
		},
		getMsgs3: function() {
			return $.ajax({
				url: Apis.msgs3,
				type: 'GET',
				dataType: Page.ajaxDataType,
				data: postData,
				jsonp: '_callback'
			})
		},
		getNews: function() {
			return $.ajax({
				url: Apis.news,
				type: 'GET',
				dataType: Page.ajaxDataType,
				data: postData,
				jsonp: '_callback'
			})
		},
		getClosedSum: function() {
			return $.ajax({
				url: Apis.closedSum,
				type: 'GET',
				dataType: Page.ajaxDataType,
				data: postData,
				jsonp: '_callback'
			})
		},
		getCloseDataSoonSum: function() {
			return $.ajax({
				url: Apis.closeDataSoonSum,
				type: 'GET',
				dataType: Page.ajaxDataType,
				data: postData,
				jsonp: '_callback'
			})
		},
		dealShowData: function(loanId,isLoaning,isShow) {
			postData.loanId=loanId;
			postData.isLoaning=isLoaning;
			postData.isShow=isShow;
			return $.ajax({
				url: Apis.dealShowData,
				type: 'GET',
				dataType: Page.ajaxDataType,
				data: postData,
				jsonp: '_callback'
			})
		},
		loanRemindAlteraction: function(rmdId,alterType) {
			postData.rmdId=rmdId;
			postData.alterType=alterType;
			return $.ajax({
				url: Apis.loanRemindAlteraction,
				type: 'GET',
				dataType: Page.ajaxDataType,
				data: postData,
				jsonp: '_callback'
			})
		}
	}
}());

Page.UI = (function(){
	return {
		indexView: function() {
			return require('./tmpl/index.jade');
		},
		detailView: function() {
			return require('./tmpl/detail.jade');
		},
		newsView: function() {
			return require('./tmpl/news.jade');
		}
	}
}());

Page.Store = (function(){
	var store = new Store({
		msgs: {
			tabs:[],
			content:[]
		},
		tab: {
			index: 0
		}
	});
	return store;
}());

Page.Render = (function(){
	//var $msgPlus = $('.msg-plus'); //注意本函数为立即执行函数，如果在此定义dom还未渲染，所以此时获取不到dom，因此必须在调用方法内获取dom
	function index() {
		var $msgPlus = $('.msg-plus');
		var template = Page.UI.indexView();
		var html = template(Page.Store.getState());
		$msgPlus.html(html);
		Page.HandleEvents.init();
	}
	function detail() {
		var $msgPlus = $('.msg-plus');
		var template = Page.UI.detailView();
		var html = template(Page.Store.getState());
		$msgPlus.html(html);
	}
	function news() {
		var $msgPlus = $('.msg-plus');
		var template = Page.UI.newsView();
		var html = template(Page.Store.getState());
		$msgPlus.html(html);
	}
	return {
		init: function() {
			index();
			$('.content-tabs').trigger('change.tabs',0); 
		},
		news: function() {
			news();
		},
		detail: function() {
			detail();
		} 
	}
}());

Page.HandleEvents = (function(){
	function push(type){
		var $msgPlus = $('.msg-plus'),
			$msgContent = $('.msg-content'),
			$msgTabs = $('.msg-tabs'),
			$icon = $('.showhide').find('i');
		if(type=='right'){
			$msgPlus.animate({right:-322},function(){
				$msgTabs.animate({'margin-left':-322});
				Page.push=1;
				$icon.html('&#xe636;');
				$icon.next('span').text('展开');
			})
		}else if(type=='left'){
			$msgPlus.animate({right:0});
			$msgTabs.animate({'margin-left':0});
			Page.push=0;
			$icon.html('&#xe635;');
			$icon.next('span').text('收起');
		}
	}	
	$(document).on('click','.close-icon',function(){
		Page.Render.init();
	})
	var events = new Events({
		'.news@click': 'showNews',
		'.content-item .item-title@click': 'showItemMore',
		'.item-deal .no-more@click': 'noMore',
		'.item-deal .can-next@click': 'showFlag',
		'.showhide@click': 'foldBox',
		'.home@click': 'showIndex',
		'.content-tabs td@click': 'changeMsgTabs',
		'.content-tabs@change.tabs':'changeTabs'//自定义事件
	})
	return {
		init: function() {
			events.dispatch(this);
		},
		showNews: function() {
			$.when(Page.APIS.getNews()).done(function(data){
				Page.Store.dispatch(Page.Action.news(data.records));
				Page.Render.news();
				if(Page.push==1){
					push('left');
				}
			})
		},
		showItemMore: function() {
			var $itme = $(this).parent('.content-item');
			var $more = $itme.find('.item-more');
			if($more.is(':visible')) {
				$more.hide('fast');
			}else {
				$more.show('fast');
			}			
		},
		noMore: function() {
			var r = confirm('确认后将不再展示');
			if(r == true) {
				var loanId = $(this).data('loanid');
				var rmdId = $(this).data('rmdid');
				var dealFlag = 0;//是否有续贷意愿
				var $item = $(this).parents('.content-item');
				var $flag = $(this).parents('.content-item').find('.flag-icon');
				if($flag.is(':visible')){
					dealFlag = 1;
				}
				if(!!loanId){
					$.when(Page.APIS.dealShowData(loanId,dealFlag,0)).done(function(data){
						$item.hide();
					})
				}else if(!!rmdId){
					$.when(Page.APIS.loanRemindAlteraction(rmdId,'notips')).done(function(data){
						$item.hide();
					})
				}
			}
		},
		showFlag: function() {
			var loanId = $(this).data('loanid');
			var rmdId = $(this).data('rmdid');
			var $flag = $(this).parents('.content-item').find('.flag-icon');
			if(!!loanId){
				$.when(Page.APIS.dealShowData(loanId,1,1)).done(function(data){
					$flag.show('fast');
				})
			}else if(!!rmdId){
				$.when(Page.APIS.loanRemindAlteraction(rmdId,'inspected')).done(function(data){
					$flag.show('fast');
				})
			}
		},
		foldBox: function() {
			if(Page.push==0){
				push('right');
			}else if(Page.push==1){
				push('left');
			}
		},
		showIndex: function() {
			if(Page.push==1){
				push('left');
			}
		},
		changeMsgTabs: function() {
			var tabIndex = $(this).data('tab-index');
			var state = Page.Store.getState();
			if(!$(this).hasClass('active')){
				if(tabIndex==2 && !state.tab3) {
					$.when(Page.APIS.getMsgs3()).done(function(data){
						Page.Store.dispatch(Page.Action.tab3(data.data));
						Page.Render.init();
						//$('.content-tabs').trigger('change.tabs',2); 
						Page.HandleEvents.changeTabs('change.tabs',2);
					})
				}else if(tabIndex==1 && !state.tab2) {
					$.when(
						Page.APIS.getMsgs2(),
						Page.APIS.getCloseDataSoonSum()
					).done(function(data,sum){
						data[0].data.sum = sum[0].data[0];//注意返回值是一个ajax对象，数据要用data[0]获取，否则报错
						Page.Store.dispatch(Page.Action.tab2(data[0].data));
						Page.Render.init();
						Page.HandleEvents.changeTabs('change.tabs',1);
					})
				}
			}
			Page.HandleEvents.changeTabs('change.tabs',tabIndex);
		},
		changeTabs: function(e,index) {
			var tabIndex = index;
			$('.content-tabs td[data-tab-index='+index+']').addClass('active').siblings('.active').removeClass('active');
			$('ul.content[data-tab-index='+index+']').addClass('active').siblings('.active').removeClass('active');
		}
	}
}());

Page.Action = (function() {
	return {
		index: function(record){
			var tabs=['已经结清','即将结清','贷后助手'],
				content=record;
			/**
			for(var i=0;i<record.length;i++){
				for(var key in record[i]){
					tabs.push(key);
					content.push(record[i][key]);
				}
			}
			**/
			return {
				type: 'msgs',
				payload : {
					tabs:tabs,
					content:content
				}
			}
		},
		tab2: function(record){
			return {
				type: 'tab2',
				payload : {
					content:record
				}
			}
		},
		tab3: function(record){
			return {
				type: 'tab3',
				payload : {
					content:record
				}
			}
		},
		news: function(record) {
			return {
				type:'news',
				payload:record
			}
		},
		detail: function(record) {
			return {
				type:'detail',
				payload:record
			}
		}
	}
}());

//Page.init();

module.exports=Page;//pack-lib打包类库使用