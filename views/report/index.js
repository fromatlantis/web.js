'use strict';
require('commonCss');
require('../template/index.css');
require('./index.css');

var Apis = {
	del: '/surveyRpt/template/delete'
}
var pageParams={
	router:['我的报告','历史报告']
}

var template    = require("./tmpl/index.jade"); //返回一个函数

var html = template({
	'nav':'report',
	'router': pageParams.router
});
$('body').html(html);
bindEvents();
var postData={};
postData.id='';
function bindEvents(){
	$('.new').click(function(){
		window.location.href='/template?select=1';
	})
	$('.class').click(function(){
		var $tab=$(this);
		if(!$tab.hasClass('current')){
			$('.class').removeClass('current');
			$tab.addClass('current');
		}
	})
	$('span.del').click(function(event){
		event.stopPropagetion();
		var delApi=new FetchApi({
			urlApi:Apis.del,
			postData:postData,
			dataType:'text'
		},function(){
			alert(this.records);
		})
	})
}