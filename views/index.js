'use strict';
require('commonCss');
require('./template/index.css');
require('./index.css');

//swiper轮播插件
require('swiper2Css');
var Swiper = require('swiper2');

var Store = require('Store');
var store =  new Store({
	counter: 0,
	todos: []
});

function action () {
	return {
		type: 'todos',
		payload : {
			id: 1,
			content: '待办事项1'
		}
	}
}
function action2 () {
	return {
		type: 'age',
		payload : 28
	}
}
store.dispatch(action());
store.dispatch(action2());

var state = store.getState();
//state.age = 30;
console.log(state);
//console.log(state.counter);


var pageParams={

}

var template = require("./index.jade"); //返回一个函数

var html = template({
	'nav':'home',
	'router': ['首页']
});
$('body').html(html);//最好不要用body，这样将script标签清掉了，但是不影响页面运行，因为js已经加载
var mySwiper = new Swiper('.swiper-container',{
	loop: true,
	autoplay: 3000,
	pagination : '.pagination'
}); 