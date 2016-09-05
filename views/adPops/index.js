'use strict';
(function(){
 	var root = this; 
 	require('commonCss');
	require('./index.css');
	var Page = {
		push: 0,
		Apis: {
			getPopsData:'/apis/adPops.json'
		},
		init: function(){
			function getData() {
				return $.ajax({
					url: Page.Apis.getPopsData,
					type: 'GET',
					dataType: 'JSON',
					data: {}
				})
			}
			function firstRequest(callback){
				$.when(getData()).done(function(data){
					callback(data);
				})
			}
			firstRequest(function(record){
				var store = Page.Store;
				store.dispatch(Page.Action.index(record));
				Page.Render.init();
			})
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
		var Store = require('Store');
		var store = new Store({
			data:{},
			pick: {
				'content' : '&#xe60d;',
				'text': '收起'
			},
			tab: {
				index: 0,
				content: '<p>内容一</p>'
			}
		});
		return store;
	}());

	Page.Render = (function(){
		function index() {
			var store = Page.Store;
			var state = store.getState();
			var template = Page.UI.indexView();
			var html = template(state);
			$('.adPops').html(html);
		}
		function mq(){
			require.ensure('marquee',function(){
				require('marquee');
				$('.news-content').marquee({
					delay:4000,
					speed:500,
					rowHeight:20
				})
			},'marquee');//第三个参数是给这个模块命名，否则[name]是一个自动分配的id
		}
		return {
			init: function() {
				index();
				mq();
				//bindEvents();
			} 
		}
	}());

	Page.HandleEvents = (function(){
		var store = Page.Store;
		$(document).on('click','.adPops-push',function(){
			var propWidth=$('.adPops').width();
			var template = Page.UI.indexView();
			if(Page.push == 0){
				$(this).parents('.adPops').animate({right:'-'+propWidth},function(){
					store.dispatch(Page.Action.push());
					//console.log(store.getState());
					Page.Render.init();
					Page.push = 1;
				});
			}else {
				$(this).parents('.adPops').animate({right:'0'},function(){
					store.dispatch(Page.Action.pull());
					Page.Render.init();
					Page.push = 0;
				});
			}
		})
		$(document).on('click','.tabs ',function(){
			var record = {
				index: 1,
				content: '<p>内容二</p>'
			}
			store.dispatch(Page.Action.tabActive(record));
			Page.Render.init();
		})	
	}());

	Page.Action = (function() {
		return {
			index: function(record){
				return {
					type: 'data',
					payload : record
				}
			},
			push: function() {
				return {
					type:'pick',
					payload: {
						'content': '&#xe60e;',
						'text': '展开'
					}
				}
			},
			pull: function() {
				return {
					type:'pick',
					payload: {
						'content': '&#xe60d;',
						'text': '收起'
					}
				}
			},
			tabActive: function(record) {
				return {
					type:'tab',
					payload: record
				}
			}
 		}
	}());

	Page.init();

	var adPops = Page;
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
	  		exports = module.exports = adPops;
		}
		exports.adPops = adPops;
	} else {
		root.adPops = adPops;
	}
	if (typeof define === 'function' && (define.amd || define.cmd)) {
		define('adPops', [], function() {
	  		return adPops;
		});
	}

}.call(this));