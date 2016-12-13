'use strict';
/**
注意立即执行函数内方法外的变量非最新实时值，比例获取dom，如果dom是在Js内添加的，那么$(dom)永远为空，因此需要放在立即执行行数内的方法内
**/
//console.time('time');
//console.profile();
require('./index.css');
var Store = require('Store');
var Events = require('Events');
var Page = {
	appendFlag: true,
	init: function(options){
		//console.log(state.msgs);
		var opts = options || {};
		Page.input = opts;
		Page.loadOnce = opts.loadOnce;
		Page.Store.dispatch(Page.Action.index(options));
		Page.Render.init(options);
	},
	destroy: function(_self) {
		Page.Store.getInitialState();//初始化store，否则多次Init是会导致留有旧数据
		_self.remove();
		Page.appendFlag = true;
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
	function index(options) {
		var $modal = $('<div class="__modal"></div>');
		var opts = options || {};
		var width = options.width || 450;
		$modal.width(width);
		if(opts.id){
			$modal.attr('id',opts.id);
		}
		var template = Page.UI.indexView();
		var html = template(Page.Store.getState());
		$modal.html(html).find('.__modal-body').html(opts.content);
		if(opts.bodyHeight) {
			$modal.find('.__modal-body').height(opts.bodyHeight);
		}
		if(Page.appendFlag){
			$(document.body).append($modal);
		}
		if(Page.loadOnce){
			Page.appendFlag = false;
		}
		$modal.css({'margin-left':-$modal.width()/2});
		Page.HandleEvents.init();
	}
	return {
		init: function(options) {
			index(options);
		}
	}
}());

Page.HandleEvents = (function(){
	var events = new Events({
		//'.__modal-footer button@click': 'destroy',
		'.__modal-close@click': 'destroy',
	}); 
	return {
		init: function() {
			events.dispatch(this);
		},
		destroy: function() {
			var $modal = $(this).parents('.__modal');
			$modal.remove();
			Page.appendFlag = true;
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

//console.timeEnd('time');
//console.log(Page);

module.exports = Page;
