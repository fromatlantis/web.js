'use strict';
(function(){
	//console.time('time');
	//console.profile();
	var root = this;
	require('./index.css');
	require('../adPops/index.css');
	var Store = require('Store');
	var Events = require('Events');
	var Page = {
		push: 0,
		Apis: {
			msgs: '/apis/msgs.json',
			news: '/apis/news.json',
			detail: '/apis/msgDetail.json'
		},
		init: function(){
			function getMsgs() {
				return $.ajax({
					url: Page.Apis.msgs,
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
		var $msgPlus = $('.msg-plus');
		function index() {
			var template = Page.UI.indexView();
			//console.log(state.msgs);
			var html = template(Page.Store.getState());
			$msgPlus.html(html);
			Page.HandleEvents.init();
		}
		function detail() {
			var template = Page.UI.detailView();
			var html = template(Page.Store.getState());
			$msgPlus.html(html);
		}
		function news() {
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
				$msgPlus.animate({right:-302},function(){
					$msgTabs.animate({'margin-left':-302});
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
		$(document).on('click','.back-home',function(){
			Page.Render.init();
		})
		var events = new Events({
			'.news@click': 'showNews',
			'.content-item@click': 'showItemMore',
			'.item-deal .no-more@click': 'noMore',
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
				var $itme = $(this);
				var $more = $(this).find('.item-more');
				if($more.is(':visible')) {
					$more.hide('fast');
				}else {
					$more.show('fast');
				}			
			},
			noMore: function() {
				var $item = $(this).parents('.content-item');
				$item.hide();
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
	//console.timeEnd('time');
	//console.profileEnd();
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

}.call(this));