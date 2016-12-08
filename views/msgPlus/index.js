'use strict';
//console.time('time');
//console.profile();
require('./index.css');
require('../adPops/index.css');

var Store = require('Store');
var Events = require('Events');

var ICPage = require('./ICIndex.js');
var selfPage = require('./selfIndex.js');

//require('slimscroll');//滚动条插件

var Page = {
	isFirstLoad:true,
	input:{},        //传入参数
	push: 1,
	ajaxDataType: typeof CVal == "undefined" ? 'jsonp' : 'jsonp',
	init: function(options){
		if(Page.isFirstLoad){
			$(document.body).append('<div class="msg-plus"></div>');
			Page.HandleEvents.init();
			Page.isFirstLoad = false;
			Page.input = options || {};
		}

		var store = Page.Store;
		store.dispatch(Page.Action.index());
		Page.Render.init();

		if(Page.input.position =='ic' ){
			//require.ensure('./ICIndex.js',function(){
				//var ICPage = require('./ICIndex.js');
			 	ICPage.init();//信贷主管
			//},'ic');
		}else{
			//require.ensure('./selfIndex.js',function(){
				//var selfPage = require('./selfIndex.js');
			 	selfPage.init();//信贷员
			//},'self');
		}
	}
}

Page.APIS = (function(){
	var apiPath = typeof CVal == "undefined" ? 'http://21.32.95.248:8088/bhoserver' : CVal.path;
	var postData = {};
	if(typeof CVal != "undefined"){
		postData.userId = CVal.getUserId();
		postData.posId = CVal.getPostId();
		postData.orgId  = CVal.getOrgId();
	}
	/**
	else{
		postData.userId = "20091206140";
		postData.posId ="E02";
		postData.orgId  ="13011576";
	}
	**/
	var Apis = {                         
		news: apiPath + '/portals/indNewsList'                                             //行业新闻推荐 20081802220
	}
	return {
		getNews: function() {
			return $.ajax({
				url: Apis.news,
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
		newsView: function() {
			return require('./tmpl/news.jade');
		}
	}
}());

Page.Store = (function(){
	var store = new Store();
	return store;
}());

Page.Render = (function(){
	//var $msgPlus = $('.msg-plus'); //注意本函数为立即执行函数，如果在此定义dom还未渲染，所以此时获取不到dom，因此必须在调用方法内获取dom
	function index() {
		var $msgPlus = $('.msg-plus');
		var template = Page.UI.indexView();
		var html = template(Page.Store.getState());
		$msgPlus.html(html);
		//保证从新闻返回时，处于展开状态
		if(Page.push == 0) {
			$('.msg-tabs').css({'margin-left':0});
		}
	}
	function news() {
		var $msgPlus = $('.msg-plus');
		var template = Page.UI.newsView();
		var html = template(Page.Store.getState());
		$msgPlus.html(html);
		require.ensure('slimscroll',function(){
			require('slimscroll');
			 $('.adPops-content').slimScroll({
	            position: "right",
	            height: '325px',
	            distance: '2px',
	            railVisible: true,
	            size: '5px',                    
	            color: '#999',                    
	            railOpacity: '0.5',
	            railColor: '#eee'
	        });
		},'slimscroll');//第三个参数是给这个模块命名，否则[name]是一个自动分配的id
	}
	return {
		init: function() {
			index();
		},
		news: function() {
			news();
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
	var events = new Events({
		'.news@click': 'showNews',
		'.showhide@click': 'foldBox',
		'.home@click': 'showIndex',
		'.news-card .news-title@click': 'gotoNews',
		'.news-card .news-tags span@click': 'gotoNewsByIndustryId',
		'.close-icon@click': 'closeNews',
		'.plus-helper@click': 'plusHelp'
	})
	return {
		init: function() {
			events.dispatch(this);
		},
		showNews: function() {
			Page.Render.news();
			//如果微门户为收起状态，则需要先将其展开
			if(Page.push==1){
				push('left');
			}
			$.when(Page.APIS.getNews()).done(function(data){
				Page.Store.dispatch(Page.Action.news(data.data));
				Page.Render.news();
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
		gotoNews: function() {
			var id = $(this).data('id');
			if(typeof CVal !='undefined' && typeof CVal.jump === 'function'){
				CVal.jump("psbcias", "/webpage?id=" + id);
			}
		},
		gotoNewsByIndustryId: function() {
			var id = $(this).data('industry-id');
			if(typeof CVal !='undefined' && typeof CVal.jump === 'function'){
				CVal.jump("psbcias", "psbciasToken_webpage_websearch", " {'industryId':' " + id + " '} ");
			}
		},
		closeNews: function() {
			Page.init();
		},
		plusHelp: function() {
			var $helper = $(this);
			var $box = $('.plus-helper-box');
			if($box.is(':visible')){
				$helper.removeClass('helper-off');
				$box.hide();
			}else{
				$helper.addClass('helper-off');
				$box.show();
			}
		}
	}
}());

Page.Action = (function() {
	return {
		index: function(){
			var tabs=[
				{title:'结清未贷',des:'展示15天内未进行小额贷款续贷的客户'},
				{title:'即将结清',des:'未来30天内办理正常结清的小额贷款客户'},
				{title:'贷后助手',des:'明天将会进入贷后检查周期的小额客户信息'},
				{title:'业务通报',des:'截止昨天小额信贷业务办理情况'}
			];
			return {
				type: 'tabs',
				payload : tabs
			}
		},
		news: function(record) {
			if(!!record){
				for(var i=0;i<record.length;i++){
					//var content = '<div>' + record[i].content +'</div>';
					record[i].content = record[i].content.replace(/<[^>]+>/g,'').replace(/\s+/g,'').substring(0,100);//去掉空格，取前100个字
					record[i].content = record[i].content.replace(/(<\/?a[^>]*>)(?!.*\1)/ig,'');
					//console.log(record[i].content);
				}
			}else{
				record = [];
			}
			return {
				type:'news',
				payload:record
			}
		}
	}
}());

//Page.init();

module.exports=Page;//pack-lib打包类库使用