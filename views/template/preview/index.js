'use strict';
require('commonCss');
require('./index.css');

var Util=require('Util');
var FetchApi=require('FetchApi');
var downloadUtil=require('downexcel');
var util=new Util();

var Apis={
	preview:'/apis/preview.json'
}
var pageParams={
	//select:util.urlParam('select')?1:0,
	//router:['模版中心','模版列表','模版预览']
	type: util.urlParam('type'),
	nav: util.urlParam('nav')
}
var router;
if(pageParams.type == 'market') {
	router = ['模板中心','模板预览'];
}else if(pageParams.type == 'liked') {
	router = ['我的模板','收藏的模板','模板预览'];
}else {
	router = ['我的模板','发布的模板','模板预览'];
}
var template = require("./tmpl/index.jade"); //返回一个函数
var postData={};
postData.filePath='';

var preview=new FetchApi({
	urlApi:Apis.preview,
	postData:postData,
	dataType:'json',
	type:'get'
},function(){
	render(this.records);
})
function render(data){
	var html = template({
		'nav': pageParams.nav,
		'router': router,
		'data':data
	});
	$('body').html(html);
	bindEvents();
}
function bindEvents() {
	$('.download').click(function(){
		if(pageParams.select){
			new downloadUtil().down({
				url:'/surveyRpt/template/download',
				params:{'filename':'农户.doc'}
			});
		}else{
			new downloadUtil().down({
				url:'/surveyRpt/template/download',
				params:{'filename':'商户.doc'}
			});
		}
	})
	$('.generate-report .btn').click(function() {
		window.location.href = '/report/'
	})
}