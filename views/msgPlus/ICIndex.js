
/**
*微门户-信贷主管
*/
'use strict';
//console.time('time');
//console.profile();

var Store = require('Store');
var Events = require('Events');

var Page = {
	isFirstLoad:true,
	push: 0,
	ajaxDataType: typeof CVal == "undefined" ? 'jsonp' : 'jsonp',
	init: function(){
		if(Page.isFirstLoad){
			Page.HandleEvents.init();
			Page.isFirstLoad = false;
		}
		var store = Page.Store;
		store.dispatch(Page.Action.index());
		Page.Render.init();
		$('.content-tabs').trigger('change.tabs',0); 
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
	else{
		postData.userId = "20091206140";
		postData.posId ="E02";
		postData.orgId  ="13011576";
	}
	var Apis = {           
		news: apiPath + '/portals/indNewsList',                                             //行业新闻推荐 20081802220
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
		index: function() {
			return require('./tmpl/ICIndex.jade');
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
		var $wrapper = $('.plus-wrapper');
		var template = Page.UI.index();
		var html = template(Page.Store.getState());
		$wrapper.html(html);
	}
	return {
		init: function() {
			index();
		}
	}
}());

Page.HandleEvents = (function(){
	var events = new Events({
		'.content-tabs@change.tabs':'changeTabs'
	})
	return {
		init: function() {
			events.dispatch(this);
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
		index: function(){
			var tabs=['业务通报'];
			return {
				type: 'tabs',
				payload : tabs
			}
		}
	}
}());

//Page.init();

module.exports=Page;//pack-lib打包类库使用