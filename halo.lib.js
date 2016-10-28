'use strict';
var Store = require('Store');
var Events = require('Events');
function halo(options) {
	var opts = options || {};
	this.a = 'a';
	this.Store = Store;
	this.Events = Events;
	this.$ = window.jQuery;
}
module.exports=halo;
