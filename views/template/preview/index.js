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
	select:util.urlParam('select')?1:0,
	router:['模版中心','模版列表','模版预览']
}

if(pageParams.select){
	pageParams.router=['报告管理','报告列表','选择模版','模版预览']
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
		'nav':'template',
		'select':pageParams.select,
		'router': pageParams.router,
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
}