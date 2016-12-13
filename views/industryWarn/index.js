'use strict';
/**
注意立即执行函数内方法外的变量非最新实时值，比例获取dom，如果dom是在Js内添加的，那么$(dom)永远为空，因此需要放在立即执行行数内的方法内
**/
//console.time('time');
//console.profile();
require('./index.css');
var Store = require('Store');
var Events = require('Events');
var Modal = require('../modal/page.js')
var Page = {
	input: null,
	output: null,
	firstLoad: true,
	init: function(options){
		Page.input = options;
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
					record.data.starTitle = starTitleMap(record.data.nonp_loan_lvl);
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
					//Page.destroy();
				}
			}
		})
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
			postData.cityId = options.cityId;
			postData.industryId = options.industryId;
			return $.ajax({
				url: Apis.industryNormInfo,
				type: 'GET',
				dataType: 'jsonp',
				data: postData,
			 	jsonp: '_callback'
			})
		},
		industryLeaveMessage: function(msg) {
			if(Page.input){
				postData.cityId = Page.input.cityId;
				postData.industryId = Page.input.industryId;
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
		}
	}
}());

Page.Store = (function(){
	var store = new Store();
	return store;
}());

Page.Render = (function(){
	var $container = $('.container');
	function index() {
		var template = Page.UI.indexView();
		//console.log(state.msgs);
		var html = template(Page.Store.getState());
		//$container.html(html);
		Page.HandleEvents.init();
		if(Page.firstLoad){
			Page.modal = new Modal({
				width: 550,
				title: '行业风险警示',
				content: html,
				footer: ['<button class="btn btn-primary btn-feedback-more">需要更多信息</button>',
					'<button class="btn btn-primary btn-feedback-good">很好用，我知道了</button>'].join('')
			});
			Page.firstLoad = false;
		}else{
			Page.modal.update({
				content: html
			});
		}
	}
	return {
		init: function() {
			index();
		}
	}
}());

Page.HandleEvents = (function(){
	var events = new Events({
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
		showFeedbackMore: function() {
			var $footer = $(this).parent('.__modal-footer');
			var tpl = ['<table class="btn-feedback-table">','<tr>','<td><input type="text" class="industry-feedback"></td>',
			'<td class="btn-feedback-box"><button class="btn btn-primary btn-feedback">提交</button></td>',
			'</tr>','</table>'].join('');
			$footer.html(tpl);
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
					Page.modal.destroy();
				})
			}
		},
		goodUse: function() {
			var $modal = $(this).parents('.__modal');
			$.when(
				Page.APIS.industryGoodToUser()
			).done(function(data){
				Page.modal.destroy();
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
		industry: function(record) {
			return {
				type: 'record',
				payload: record
			}
		}
	}
}());

/**
Page.init({
	cityId: "13000181",
	industryId: "0131"
});
**/

module.exports = Page;
