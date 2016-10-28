'use strict';
/**
注意立即执行函数内方法外的变量非最新实时值，比例获取dom，如果dom是在Js内添加的，那么$(dom)永远为空，因此需要放在立即执行行数内的方法内
**/
console.time('time');
//console.profile();
require('./index.css');
var Store = require('Store');
var Events = require('Events');

function Page (options) {
	var opts = options || {};
	this.opts = opts;
	var width = opts.width || 450;
	//$(document.body).append('<div class="__modal" style="width:'+width+'px;"></div>');
	//$('.__modal').width(width);
	Page.Store.dispatch(Page.Action.index(opts));
	//Page.Render.init();
}
/**
var Page = {
	init: function(options){
		
	}
}
**/
Page.prototype = {
	init:function(){
		//$(document.body).append('<div class="__modal"></div>');
		var $modal = $('<div class="__modal"></div>');
		var width = this.opts.width || 450;
		$modal.width(width);
		var template = Page.UI.indexView();
		//console.log(state.msgs);
		var html = template(Page.Store.getState());
		$modal.html(html);
		$(document.body).append($modal);
	}
}
Page.UI = (function(){
	return {
		indexView: function() {
			return require('./tmpl/index.jade');
		}
	}
}());

Page.Store = (function(){
	var store = new Store();
	return store;
}());

Page.Render = (function(){
	function index() {
		var $modal = $('.__modal');
		var template = Page.UI.indexView();
		//console.log(state.msgs);
		var html = template(Page.Store.getState());
		$modal.html(html);
		Page.HandleEvents.init();
	}
	return {
		init: function() {
			index();
		}
	}
}());

Page.HandleEvents = (function(){
	var events = new Events({
		'button@click': 'showDetail',
	}) 
	return {
		init: function() {
			events.dispatch(this);
		},
		showDetail: function() {
			alert('1');
		}
	}
}());

Page.Action = (function() {
	return {
		index: function(record){
			var tabs=[],content=[];
			return {
				type: 'opts',
				payload: record
			}
		}
	}
}());

var m1 = new Page({
	title: '我是标题1',
	content: '<li>我是正文</li>'
});
m1.init();
var m2 = new Page({
	width: 800,
	title: '我是标题',
	content: '<li>我是正文2</li>'
});
m2.init();
/**
Page.init({
	width: 800,
	title: '我是标题2',
	content: '<li>我是正文</li>'
});
**/
console.timeEnd('time');
console.log(m1);
module.exports = Page;
