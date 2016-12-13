'use strict';
/**
注意立即执行函数内方法外的变量非最新实时值，比例获取dom，如果dom是在Js内添加的，那么$(dom)永远为空，因此需要放在立即执行行数内的方法内
**/
//console.time('time');
//console.profile();
require('./index.css');
var Store = require('Store');
var Events = require('Events');
var Page = {
	isFirstLoad:true,
	loadOnce:false,
	init: function(options){
		//console.log(state.msgs);
		var opts = options || {};
		Page.input = opts;
		if(opts.ajaxUrl){
			function firstRequest(callback){
				$.when(
					Page.APIS.getIndustryNormInfo(options)
				).done(function(data){
					callback(data);
				})
			}
			firstRequest(function(record){
				//console.log(record);
				if(record.code == 1000 && record.data){
					var starLvl = options.starLvl || 6;
					if(record.data.nonp_loan_lvl !='unknown' && record.data.nonp_loan_lvl < starLvl){
						var store = Page.Store;
						//options.title = '行业：' + record.data.industry_name;
						record.data.starTitle = starTitleMap(record.data.nonp_loan_lvl);
						options.title = '行业风险警示';
						store.dispatch(Page.Action.index(options));
						store.dispatch(Page.Action.industry(record.data));
						Page.Render.init(options);
						function starTitleMap(k) {
							var map = {
								1:'低',
								2:'较低',
								3:'一般',
								4:'较高',
								5:'高'
							}
							return map[k];
						}
					}else{
						Page.destroy();
					}
				}
			})
		}else{
			Page.Store.dispatch(Page.Action.index(options));
			Page.Render.init(options);
		}
	},
	destroy: function() {
		Page.Store.getInitialState();//初始化store，否则多次Init是会导致留有旧数据
		Page.isFirstLoad = true;
		Page.loadOnce = false;
		$('.__modal').remove();
	}
}

Page.APIS = (function(){
	var apiPath = typeof CVal == "undefined" ? 'http://21.32.95.248:8088/bhoserver' : CVal.path;
	var postData = {};
	if(typeof CVal != "undefined"){
		postData.userId = CVal.getUserId();
		postData.posId = CVal.getPostId();
		postData.orgId  = CVal.getOrgId();
	}
	var Apis = {
		industryNormInfo: apiPath + '/bhoApi/industryNormInfo',
		industryLeaveMessage: apiPath + '/bhoApi/industryLeaveMessage',
		industryGoodToUser: apiPath + '/bhoApi/industryLeaveMessage'
	}
	return {
		getIndustryNormInfo: function(options) {
			postData.cityId = options.data.cityId;
			postData.industryId = options.data.industryId;
			return $.ajax({
				url: Apis.industryNormInfo,
				type: 'GET',
				dataType: 'jsonp',
				data: postData,
			 	jsonp: '_callback'
			})
		},
		industryLeaveMessage: function(msg) {
			if(Page.input.data){
				postData.cityId = Page.input.data.cityId;
				postData.industryId = Page.input.data.industryId;
				postData.message = msg;
			}
			return $.ajax({
				url: Apis.industryLeaveMessage,
				type: 'GET',
				dataType: 'jsonp',
				data: postData,
			 	jsonp: '_callback'
			})
		},
		industryGoodToUser: function() {
			return $.ajax({
				url: Apis.industryGoodToUser,
				type: 'GET',
				dataType: 'jsonp',
				//data: postData,
			 	jsonp: '_callback'
			})
		}
	}
}());

Page.UI = (function(){
	return {
		indexView: function() {
			return require('./tmpl/index.jade');
		},
		industry: function() {
			return require('./tmpl/industryNorm.jade');
		}
	}
}());

Page.Store = (function(){
	var store = new Store();
	return store;
}());

Page.Render = (function(){
	function index(options) {
		var $modal = $('<div class="__modal"></div>');
		var opts = options || {};
		var width = options.width || 450;
		$modal.width(width);
		if(opts.id){
			$modal.attr('id',opts.id);
		}
		var template = Page.UI.indexView();
		var html = template(Page.Store.getState());
		$modal.html(html).find('.__modal-body').html(opts.content);
		if(opts.bodyHeight) {
			$modal.find('.__modal-body').height(opts.bodyHeight);
		}
		if(!Page.loadOnce){
			$(document.body).append($modal);
		}
		$modal.css({'margin-left':-$modal.width()/2});
		if(opts.ajaxUrl){
			var industry = Page.UI.industry();
			//console.log(Page.Store.getState());
			var industryHtml = industry(Page.Store.getState());
			$('.__modal-body').html(industryHtml);
			Page.loadOnce = true;
		}
		/**行业弹窗只弹一次
		//行业警示弹窗
		if(opts.ajaxUrl && Page.isFirstLoad){
			$(document.body).append($modal);
			//console.log($modal.height());
			$modal.css({'margin-left':-$modal.width()/2});
			var industry = Page.UI.industry();
			//console.log(Page.Store.getState());
			var industryHtml = industry(Page.Store.getState());
			$('.__modal-body').html(industryHtml);
			Page.isFirstLoad=false;
		//普通弹窗
		}
		if(!opts.ajaxUrl){
			$(document.body).append($modal);
			//console.log($modal.height());
			$modal.css({'margin-left':-$modal.width()/2});
		}
		**/
		Page.HandleEvents.init();
	}
	return {
		init: function(options) {
			index(options);
		}
	}
}());

Page.HandleEvents = (function(){
	var events = new Events({
		//'.__modal-footer button@click': 'destroy',
		'.__modal-close@click': 'destroy',
		//'.lvl-tips@mouseover': 'showTips',
		//'.lvl-tips@mouseout': 'hideTips',
		'.btn-feedback-good@click': 'goodUse',					//行业弹窗很好用反馈
		'.btn-feedback-more@click': 'showFeedbackMore',
		'.btn-feedback@click': 'leaveMsg',						//行业弹窗更多信息反馈
		'.industry-feedback@focus': 'checkTextEmpty'
	}); 
	var emptyFlag;
	return {
		init: function() {
			events.dispatch(this);
		},
		destroy: function() {
			var $modal = $(this).parents('.__modal');
			$modal.remove();
			Page.loadOnce = false;
		},
		showTips: function(){
			$('.tips-info').show();
		},
		hideTips: function(){
			$('.tips-info').hide();
		},
		showFeedbackMore: function() {
			var tpl = ['<table class="btn-feedback-table">','<tr>','<td><input tyoe="text" class="industry-feedback"></td>',
			'<td class="btn-feedback-box"><button class="btn btn-primary btn-feedback">提交</button></td>',
			'</tr>','</table>'].join('');
			$('.__modal-footer').html(tpl);
		},
		leaveMsg: function() {
			var msg = $('.industry-feedback').val();
			if(msg == '' || msg =='请填写您的反馈信息'){
				$('.industry-feedback').val('请填写您的反馈信息');
				emptyFlag = true;
			}else{
				emptyFlag = false;
			}
			var $modal = $(this).parents('.__modal');
			if(!emptyFlag){
				$.when(
					Page.APIS.industryLeaveMessage(msg)
				).done(function(data){
					//callback(data);
					$modal.remove();
					Page.loadOnce = false;
				})
			}
		},
		goodUse: function() {
			var $modal = $(this).parents('.__modal');
			$.when(
				Page.APIS.industryGoodToUser()
			).done(function(data){
				//callback(data);
				$modal.remove();
				Page.loadOnce = false;
			})
		},
		checkTextEmpty: function() {
			if(emptyFlag) {
				$(this).val('');
				emptyFlag = false;
			}
		}
	}
}());

Page.Action = (function() {
	return {
		index: function(record){
			var tabs=[],content=[];
			return {
				type: 'opts',
				payload: record
			}
		},
		industry: function(record) {
			return {
				type: 'record',
				payload: record
			}
		}
	}
}());

//console.timeEnd('time');
//console.log(Page);

module.exports = Page;
