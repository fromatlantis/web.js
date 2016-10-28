'use strict';
var profile = require('../profile/index.js');
var msgPlus = require('../msgPlus/index.js');
var modal = require('../modal/index.js');
/**IE8不支持
function haloPlugins(options) {
	var opts = options || {};
	this.profile = profile;
	this.msgPlus = msgPlus;
	//this.$ = window.jQuery;
}
**/
var haloPlugins = {};
haloPlugins.profile = profile;
haloPlugins.msgPlus = msgPlus;
haloPlugins.modal = modal;
module.exports=haloPlugins;//function 对象必须用new
