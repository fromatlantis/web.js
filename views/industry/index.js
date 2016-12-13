'use strict';
/**
注意立即执行函数内方法外的变量非最新实时值，比例获取dom，如果dom是在Js内添加的，那么$(dom)永远为空，因此需要放在立即执行行数内的方法内
**/
//console.time('time');
//console.profile();
require('commonCss');
require('../template/index.css');
require('./index.css');
var Store = require('Store');
var Events = require('Events');
//var Modal = require('../modal/index.js');	//dependency to an entry point is not allowed
var Modal = require('../modal/page.js');
var Page = {
	input: null,
	output: null,
	init: function(){
		Page.Render.init();
		/**
		function firstRequest(callback){
			$.when(Page.APIS.getMsgs()).done(function(data){
				callback(data.records);
			})
		}
		firstRequest(function(record){
			var store = Page.Store;
			store.dispatch(Page.Action.index(record));
			Page.Render.init();
		})
		**/
	}
}

Page.APIS = (function(){
	/**
	var Apis = {
		msgs: '/apis/msgs.json'
	}
	return {
		getMsgs: function() {
			return $.ajax({
				url: Page.Apis.msgs,
				type: 'GET',
				dataType: 'JSON',
				data: {}
			})
		}
	}
	**/
}());

Page.UI = (function(){
	return {
		indexView: function() {
			return require('./tmpl/index.jade');
		},
		modal: function() {
			return require('./tmpl/modal.jade');
		}
	}
}());

Page.Store = (function(){
	var store = new Store({
		router: ['行业管理'],
		nav: 'industry'
	});
	return store;
}());

Page.Render = (function(){
	var $container = $('.container');
	function index() {
		var template = Page.UI.indexView();
		//console.log(state.msgs);
		var html = template(Page.Store.getState());
		$container.html(html);
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
		'.btn-link.del@click': 'delete',
		'.preview@click': 'edit'
	}) 
	return {
		init: function() {
			events.dispatch(this);
		},
		delete: function() {
			var $card = $(this).parents('.template-list');
			$card.hide(500);
		},
		edit: function() {
			var template = Page.UI.modal();
			var html = template(Page.Store.getState());
			Page.modal = new Modal({
				width:500,
				overlay: true,
				title: '行业编辑',
				content: html,
				footer: '<button class="btn btn-primary save-industry">提交</button>'
			});
		}
	}
}());

Page.Action = (function() {
	/**
	return {
		index: function(record){
			var tabs=[],content=[];
			for(var i=0;i<record.length;i++){
				for(var key in record[i]){
					tabs.push(key);
					content.push(record[i][key]);
				}
			}
			return {
				type: 'msgs',
				payload : {
					tabs:tabs,
					content:content
				}
			}
		},
		detail: function(record) {
			return {
				type:'detail',
				payload:record
			}
		}
	}
	**/
}());

Page.init();
//console.timeEnd('time');

module.exports = Page;
