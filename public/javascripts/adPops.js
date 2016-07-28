'use strict';
require('../stylesheets/adPops.css');
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
	var view = require('../templates/adPops.jade');
	var html = view({
		'data': data
	});
	$('.adPops').html(html);
	bindEvents();
}
function bindEvents(){
	$('.adPops').on('mouseover','.tabs',function(){
		if(!$(this).hasClass('active')){
			$('.tabs').removeClass('active');
			$(this).addClass('active');
			//console.log($(this).index());
			var curIndex=$(this).index();
			$('.content').hide();
			$('.content').eq(curIndex).show(100);
		}
	})
	$('.adPops').on('click','.adPops-push',function(){
		if(pageParams.push==1){
			$(this).parents('.adPops').animate({right:'-450px'},function(){
				$('.adPops-push i').removeClass('push-out');
				$('.adPops-push i').addClass('push-in');
				$('.adPops-push p').text('展开');
			});
			pageParams.push=0;
		}else{
			$(this).parents('.adPops').animate({right:'0'},function(){
				$('.adPops-push i').removeClass('push-in');
				$('.adPops-push i').addClass('push-out');
				$('.adPops-push p').text('收起');
			});
			pageParams.push=1;
		}
	})
}