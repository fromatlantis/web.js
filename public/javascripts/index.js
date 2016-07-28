'use strict';
require('../stylesheets/index.css');
var TableHelper = require('./core/TableHelper');
var template    = require("../../views/index.jade"); //返回一个函数

var html = template({
	'title': 'hello  world2!'
});
console.log('jade =' + html);
$('body').html(html);
var tableHelper = new TableHelper();