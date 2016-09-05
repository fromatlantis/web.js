'use strict';
require('commonCss');
require('./index.css');

//require('marquee');

var pageParams={
	push:1
}
main();
function main(){
	var data={
		title:['热门新闻','行业新闻','最新动态'],
		content:[
			'<p>内容一</p>',
			'<h1>内容二</h1>',
			'<li>内容三</li>'
		]
	}
	var view = require('./tmpl/index.jade');
	var html = view({
		'data': data
	});
	$('.adPops').html(html);
	//alert('1');
	require.ensure('marquee',function(){
		require('marquee');
		$('.news-content').marquee({
			delay:4000,
			speed:500,
			rowHeight:20
		})
	},'marquee');//第三个参数是给这个模块命名，否则[name]是一个自动分配的id
	bindEvents();
}
function bindEvents(){
	$('.adPops').on('mouseover','.tabs',function(){
		if(!$(this).hasClass('active')){
			$('.tabs').removeClass('active');
			$(this).addClass('active');
			//console.log($(this).index());
			var curIndex=$(this).index();
			$('.content-chip').hide();
			$('.content-chip').eq(curIndex).show(100);
		}
	})
	$('.adPops').on('click','.adPops-push',function(){
		if(pageParams.push==1){
			var propWidth=$('.adPops').width();
			$(this).parents('.adPops').animate({right:'-'+propWidth},function(){
				$('.adPops-push i').html('&#xe60e');
				$('.adPops-push p').text('展开');
			});
			pageParams.push=0;
		}else{
			$(this).parents('.adPops').animate({right:'0'},function(){
				$('.adPops-push i').html('&#xe60d');
				$('.adPops-push p').text('收起');
			});
			pageParams.push=1;
		}
	})
}