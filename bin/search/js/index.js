(function(){
	var Apis={
	};
	var pageParams={
	};
	var w=$(window).width();
	var $searchCard=$('.search-card');
	var $resultCard=$('.result-card');
	var $keyWord=$('.key-word');
	var pushLeft=(w-$searchCard.width()-32)/2;
	var pushRight=$resultCard.width()+20;
	main();
	function main(){
		initLayout();
		bindEvents();
	}
	function bindEvents(){
		$('.search-keyword i').click(function(){
			//console.log(left);
			if($keyWord.val()!=''){
				$searchCard.css({'-webkit-transform':'translateX(0)'});
				$resultCard.addClass('show');
				$resultCard.css({'-webkit-transform':'translateX(0)'});
			}
		})
		var last;
		$('.key-word').keyup(function(event){
			last = event.timeStamp;
			var me=$(this);
			setTimeout(function(){
				if(last-event.timeStamp==0){
					var key=me.val();
					console.log(key);
					if(key==''){
						hideResult();
					}
				}
			},1000);
		})
		$('.tab-item').click(function(){
			if(!$(this).hasClass('current')){
				$('.tab-item').removeClass('current');
				$(this).addClass('current');
			}
		})
	}
	function initLayout(){
		$searchCard.css({'-webkit-transform':'translateX('+pushLeft+'px)'});
		$resultCard.css({'-webkit-transform':'translateX('+pushRight+'px)'});
	}
	function showResult(){
		$searchCard.css({'-webkit-transform':'translateX(0)'});
		$resultCard.addClass('show');
		$resultCard.css({'-webkit-transform':'translateX(0)'});
	}
	function hideResult(){
		$resultCard.removeClass('show');
		initLayout();
	}
})();
//select相关
(function(){
	var $title=$('.select-title');
	var $iconAll=$title.find('i');
	var $option=$('.select-option');
	var $dd=$option.find('dd');
	$title.click(function(e){
		selectUp();
		var $selectChip=$(this).parents('.select-chip');
		var $dl=$selectChip.find('dl');
		var $icon=$(this).find('i');
		if($icon.hasClass('select-title-rotate')){
			$icon.removeClass('select-title-rotate');
			$dl.hide('fast');
		}else{
			$icon.addClass('select-title-rotate');
			$dl.show('fast');
		}
		e.stopPropagation();
	})
	$dd.click(function(){
		var title=$(this).parents('.select-chip').find('.select-title span');
		title.text($(this).text());
	})
	$(document).click(function(){
		selectUp();
	})
	function selectUp(){
		$option.hide();
		$iconAll.removeClass('select-title-rotate');
	}
})();