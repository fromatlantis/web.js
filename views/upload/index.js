'use strict';
require('commonCss');
require('./index.css');

var Util=require('Util');
var util=new Util();

require('jquery.form');

var Apis={
	upload:'/surveyRpt/reportLoan/upload.json'
}
var pageParams={
	type:util.urlParam('type')?util.urlParam('type'):1
}

if(pageParams.type==1){
	pageParams.nav='upload1';
	pageParams.router=['模版中心','上传模版'];
}else if(pageParams.type==2){
	pageParams.nav='upload2';
	pageParams.router=['调查报告','上传报告'];
}

var template    = require("./tmpl/index.jade"); //返回一个函数

var html = template({
	'nav':pageParams.nav,
	'router': pageParams.router
});
$('body').html(html);
$('#select-file').on('change',function(){
	var tmpl=['<p>文件：',$(this).val(),'</p>'];
	$('.preview').html(tmpl.join(''));
	$('#file-upload').show();
	$('#file-save').hide();
})
$('#uploadForm').ajaxForm({
	type:'post',
	url:Apis.upload,
	dataType:'text',
	data:{xmlFileName:'word-key-farmer.xml'},
	success:function(data){
		//console.log(data);
		$('.preview').html(data);
		$('#file-upload').hide();
		$('#file-save').show();
	}
})