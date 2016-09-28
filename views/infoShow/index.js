'use strict';
(function(){
	var root = this;
	require('./index.css');
	//require('tags');//标签云
	var Store = require('Store');
	var Events = require('Events');
	var Tags = require('tags');
	var tags = new Tags();
	var Page = {
		Apis: {
			tags: '/apis/tags.json'
		},
		init: function(){
			//yPage.Render.init();
			Page.HandleEvents.init();
			
			function getMsgs() {
				return $.ajax({
					url: Page.Apis.tags,
					type: 'GET',
					dataType: 'JSON',
					data: {}
				})
			}
			function firstRequest(callback){
				$.when(getMsgs()).done(function(data){
					callback(data.records);
				})
			}
			firstRequest(function(record){
				Page.tagStore=record;
				Page.Render.init();
			})
			
		}
	}
	
	Page.UI = (function(){
		return {
			indexView: function() {
				return require('./tmpl/index.jade');
			},
			tabsView: function() {
				return require('./tmpl/tabs.jade');
			}
		}
	}());

	Page.Store = (function(){
		var store = new Store();
		return store;
	}());

	Page.Render = (function(){
		var $infoShow = $('.info-show');
		function index() {
			var template = Page.UI.indexView();
			//console.log(state.msgs);
			var html = template(Page.Store.getState());
			$infoShow.html(html);
		}
		function tabs(type) {
			var template = Page.UI.tabsView();
			//console.log(state.msgs);
			Page.Store.dispatch(Page.Action[type](Page.tagStore));
			//console.log(Page.Store.getState());
			var html = template(Page.Store.getState());
			$('.right-box').html(html);
			tags.init();
		}
		return {
			init: function() {
				Page.type=1;
				index();
			},
			tabs: function(type) {
				Page.type=2;
				tabs(type);
				Page.TabsEvents.init();
			}
		}
	}());

	Page.HandleEvents = (function(){
		var events = new Events({
			'.switch@click': 'switchMode'
		}) 
		return {
			init: function() {
				events.dispatch(this);
			},
			switchMode: function() {
				if(Page.type==1){
					Page.Render.tabs('base');
				}else{
					Page.Render.init();
				}
			}
		}
	}());

	Page.TabsEvents = (function(){
		var events = new Events({
			'.finance@click': 'tabs'
		}) 
		return {
			init: function() {
				events.dispatch(this);
			},
			tabs: function() {
				Page.Render.tabs('finance');
				$('.finance').addClass('active').siblings('.active').removeClass('active');
			}
		}
	}());


	Page.Action = (function() {
		return {
			base: function(record){
				return {
					type: 'tags',
					payload : record.base
				}
			},
			finance: function(record){
				console.log(record);
				return {
					type: 'tags',
					payload : record.finance
				}
			}
 		}
	}());

	Page.init();

	/**
	var msgPlus = Page;
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
	  		exports = module.exports = msgPlus;
		}
		exports.msgPlus = msgPlus;
	} else {
		root.msgPlus = msgPlus;
	}
	if (typeof define === 'function' && (define.amd || define.cmd)) {
		define('msgPlus', [], function() {
	  		return msgPlus;
		});
	}
	**/
}.call(this));