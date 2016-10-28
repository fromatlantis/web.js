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
		Page.HandleEvents.init();
		var store = Page.Store;
		//store.dispatch(Page.Action.index());
		Page.Render.init();
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
		var $content = $('ul.content');
		var template = Page.UI.index();
		var html = template(Page.Store.getState());
		$content.html(html);
	}
	return {
		init: function() {
			index();
		}
	}
}());

Page.HandleEvents = (function(){
	var events = new Events({
		'.news@click': 'showNews'
	})
	return {
		init: function() {
			events.dispatch(this);
		},
		showNews: function() {
			$.when(Page.APIS.getNews()).done(function(data){
				Page.Store.dispatch(Page.Action.news(data.data));
				Page.Render.news();
				if(Page.push==1){
					push('left');
				}
			})
		}
	}
}());

Page.Action = (function() {
	return {
		index: function(record) {
			for(var i=0;i<record.length;i++){
				//var content = '<div>' + record[i].content +'</div>';
				record[i].content = record[i].content.replace(/<[^>]+>/g,'').replace(/\s+/g,'').substring(0,100)
				//console.log(record[i].content);
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