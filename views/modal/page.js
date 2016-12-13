'use strict';
/**
注意立即执行函数内方法外的变量非最新实时值，比例获取dom，如果dom是在Js内添加的，那么$(dom)永远为空，因此需要放在立即执行行数内的方法内
**/
//console.time('time');
//console.profile();
require('./index.css');
var Store = require('Store');
var Events = require('Events');

var store = new Store();

function Page (options) {
	var opts = options || {};
	this.opts = opts;
	this.init();
	if(opts.overlay) {
		var $overlay = '<div class="page-overlay"></div>';
		$(document.body).append($overlay);
	}
}
Page.prototype = {
	constructor: Page,	//继承时必须显示指定
	init: function(){
		//$(document.body).append('<div class="__modal"></div>');
		var $modal = $('<div class="__modal"></div>');
		var width = this.opts.width || 450;
		$modal.width(width);
		var template = _UI().indexView();
		store.dispatch(_Action().index(this.opts));
		var html = template(store.getState());
		$modal.html(html).find('.__modal-body').html(this.opts.content);
		$(document.body).append($modal);
		$modal.css({'margin-left':-$modal.width()/2});                                                                          
		this.container = $modal;
		_HandleEvents.call(this).init();
	},
	destroy: function() {
		//console.log(this.container);
		this.container.remove();
		$(".page-overlay").hide();
	},
	update: function(options) {
		var opts = options || {};
		var $modal = this.container;
		//$modal.width(width);
		var template = _UI().indexView();
		//store.dispatch(_Action().index(opts));
		var html = template(store.getState());
		$modal.find('.__modal-body').html(opts.content);
		//$modal.css({'margin-left':-$modal.width()/2});    
	}

	/**这种模式也不错
	handleEvents: function() {
		this.container.find('.__modal-footer')
            .on('click.__modal', '.__modal-close', $.proxy(this.destroy, this));
        this.container.find('.__modal-header')
            .on('click.__modal', '.__modal-close', $.proxy(this.destroy, this));
	}
	**/
}
function _UI() {
	return {
		indexView: function() {
			return require('./tmpl/index.jade');
		}
	}
}

function _HandleEvents() {
	var _self = this;
	var events = new Events({
		'.__modal-close@click': 'destroy'
	}); 
	return {
		init: function() {
			events.dispatch(this,_self.container);
		},
		destroy: function() {
			//console.log(_self);
			_self.destroy();
		}
	}
}

function _Action() {
	return {
		index: function(record){
			//console.log(record);
			var tabs=[],content=[];
			return {
				type: 'opts',
				payload: record
			}
		}
	}
}

/**
var m1 = new Page({
	loadOnce: true,
	title: '我是标题1',
	content: '<li>我是正文</li>'
});
m1.update({
	content:'<li>我是正文1</li>'
});
//m1.init();
//console.log(m1.constructor);
var m2 = new Page({
	width: 800,
	title: '我是标题',
	content: '<li>我是正文2</li>'
});
//m2.init();
**/
/**
Page.init({
	width: 800,
	title: '我是标题2',
	content: '<li>我是正文</li>'
});
**/
//console.timeEnd('time');
module.exports = Page;
