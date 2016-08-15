'use strict';
require('commonCss');
require('./template/index.css');
require('./index.css');

//swiper轮播插件
require('swiper2Css');
var Swiper = require('swiper2');

var pageParams={

}

var template = require("./index.jade"); //返回一个函数

var html = template({
	'nav':'home',
	'router': ['首页']
});
$('body').html(html);
var mySwiper = new Swiper('.swiper-container',{
	loop: true,
	autoplay: 3000,
	pagination : '.pagination'
}); 