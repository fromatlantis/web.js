'use strict';
//console.time('time');
//console.profile();
require('./index.css');
require('../adPops/index.css');
var Store = require('Store');
var Events = require('Events');

var ICPage = require('./ICIndex.js');
var selfPage = require('./selfIndex.js');
var Page = {
	isFirstLoad:true,
	push: 0,
	ajaxDataType: typeof CVal == "undefined" ? 'jsonp' : 'jsonp',
	init: function(){
		if(Page.isFirstLoad){
			$(document.body).append('<div class="msg-plus"></div>');
			Page.HandleEvents.init();
			Page.isFirstLoad = false;
		}
		var store = Page.Store;
		store.dispatch(Page.Action.index());
		Page.Render.init();
		ICPage.init();
	}
}

Page.APIS = (function(){
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
	$(document).on('click','.close-icon',function(){
		Page.Render.init();
	})
	var events = new Events({
		//'.news@click': 'showNews',
		'.showhide@click': 'foldBox',
		'.home@click': 'showIndex'
	})
	return {
		init: function() {
			events.dispatch(this);
		},
		/**
		showNews: function() {
			$.when(Page.APIS.getNews()).done(function(data){
				Page.Store.dispatch(Page.Action.news(data.data));
				Page.Render.news();
				if(Page.push==1){
					push('left');
				}
			})
		},
		**/
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
		}
	}
}());

Page.Action = (function() {
	return {
		index: function(){
			var tabs=['已经结清','即将结清','贷后助手','业务通报'];
			return {
				type: 'tabs',
				payload : tabs
			}
		},
		news: function(record) {
			
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