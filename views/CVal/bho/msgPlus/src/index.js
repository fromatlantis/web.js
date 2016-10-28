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
			$.when(Page.APIS.getMsgs()).done(function(data){
				callback(data.data);
			})
		}
		firstRequest(function(record){
			var store = Page.Store;
			store.dispatch(Page.Action.index(record));
			Page.Render.init();
			$('.content-tabs').trigger('change.tabs',0); 
		})
	}
}

Page.APIS = (function(){
	var apiPath = typeof CVal == "undefined" ? '' : CVal.path;
	var postData = {};
	if(typeof CVal != "undefined"){
		postData.userId = CVal.getUserId();
		postData.postId = CVal.getPostId();
		postData.OrgId  = CVal.getOrgId();
	}
	var Apis = {
		msgs: apiPath + '/portals/getCloseDataSoon',
		msgs2: apiPath + '/portals/getDataClosed',
		msgs3: apiPath + '/portals/getCloseDataSoon',
		news: apiPath + '/portals/getCloseDataSoon',
		detail: apiPath + '/portals/getCloseDataSoon'
	}
	return {
		getMsgs: function() {
			return $.ajax({
				url: Apis.msgs,
				type: 'GET',
		        jsonp: '_callback',
				dataType: Page.ajaxDataType,
				data: postData
			})
		},
		getMsgs2: function() {
			return $.ajax({
				url: Apis.msgs2,
				type: 'GET',
		        jsonp: '_callback',
				dataType: Page.ajaxDataType,
				data: postData
			})
		},
		getMsgs3: function() {
			return $.ajax({
				url: Apis.msgs3,
				type: 'GET',
		        jsonp: '_callback',
				dataType: Page.ajaxDataType,
				data: postData
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
			$.ajax({
				url: Page.Apis.news,
				type: 'GET',
				dataType: 'JSON',
				data: {},
				success:function(res) {
					Page.Store.dispatch(Page.Action.news(res.records));
					Page.Render.news();
					if(Page.push==1){
						push('left');
					}
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
				var $item = $(this).parents('.content-item');
				$item.hide();
			}
			
		},
		showFlag: function() {
			var $flag = $(this).parents('.content-item').find('.flag-icon');
			$flag.show('fast');
		},
		showDetail: function() {
			$.ajax({
				url: Page.Apis.detail,
				type: 'GET',
				dataType: 'JSON',
				data: {},
				success:function(res) {
					Page.Store.dispatch(Page.Action.detail(res.records));
					Page.Render.detail();
				}
			})
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
					$.when(Page.APIS.getMsgs2()).done(function(data){
						Page.Store.dispatch(Page.Action.tab2(data.records));
						Page.Render.init();
						//$('.content-tabs').trigger('change.tabs',2); 
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
Page.init();
module.exports=Page;