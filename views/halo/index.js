'use strict';
var Template = require('Template');
var Store = require('Store');
var Events = require('Events');
function halo(options) {
	var opts = options || {};
	var template = new Template(), store = new Store(), events = new Events();
	this.template = template;
	this.store = store;
	this.events = events;
	//this.$ = window.jQuery;
}
module.exports=halo;//function 对象必须用new
