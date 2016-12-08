'use strict';
require('commonCss');
require('./index.css');

var Util=require('Util');
var util=new Util();

var Apis = {
	del: '/surveyRpt/template/delete',
	preview:'/surveypRpt/template/preview'
}
var pageParams={
	select:util.urlParam('select'),
	//router:['模版中心'],
	type:util.urlParam('type')
}
var nav;
if(pageParams.type =='market'){
	pageParams.router=['模板中心'];
	nav = 'market';
}else if(pageParams.type == 'liked') {
	pageParams.router=['我的模板','收藏的模板'];
	nav = 'templateLiked';
}else {
	pageParams.router=['我的模板','发布的模板'];
	nav = 'template';
}
/**
var nav = 'market';
if(pageParams.select){
	pageParams.router=['我的报告','报告列表','选择模版']
}else if(pageParams.type!='market'){
	pageParams.router=['我的模板','模板列表']
	nav = 'template';
}
**/
var template = require("./tmpl/index.jade"); //返回一个函数

var html = template({
	'router': pageParams.router,
	'nav': nav
});
$('body').html(html);
var postData={};
postData.id='';
bindEvents();
function bindEvents(){
	$('.template-list').click(function(){
		window.location.href='/template/preview?type=' + pageParams.type + '&nav=' + nav;
		/**
		if(pageParams.select){
			window.location.href='/template/preview?select=1';
		}else{
			window.location.href='/template/preview';
		}
		**/
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
