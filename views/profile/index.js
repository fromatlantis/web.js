'use strict';
require('./index.css');
//require('./index2.css');
var Store = require('Store');
var Events = require('Events');

//swiper轮播插件
//require('swiper2Css');
//var Swiper = require('swiper2');
var Util = require('Util');
var util = new Util();

var Page = {
	isFirstLoad:true,
	ajaxDataType: typeof CVal == "undefined" ? 'jsonp' : 'jsonp',
	init: function(options){
		var opts = options || {};
		function firstRequest(callback){
			var store = Page.Store;
			$.when(
				Page.APIS.getCustomerInfo(opts),
				Page.APIS.getAssetsMonthlyStat(opts),
				Page.APIS.getCustomerCreditCardInfo(opts)
			).done(function(data,monthlyStat,creditCardInfo){
				if(data[0].code == 1000 && monthlyStat[0].code == 1000 && creditCardInfo[0].code == 1000){
					var _data={},_data2=[],_data3=[];
					if(data[0].data){
						var _data = data[0].data;
						store.dispatch(Page.Action.index(_data));
					}
					if(monthlyStat[0].data){
						_data2 = monthlyStat[0].data;
						store.dispatch(Page.Action.assetsMonthlyStat(_data2));
					}
					if(creditCardInfo[0].data){
						_data3 = creditCardInfo[0].data;
						store.dispatch(Page.Action.customerCreditCardInfo(_data3));
					}
					if(!$.isEmptyObject(_data)){
						callback(store);
					}
				}
			});
		}
		if(Page.isFirstLoad){
			//程序一定要严谨，考虑全面
			firstRequest(function(store){
				$(document.body).append('<div class="profile"></div>');//一定要放在回调里，防止多次执行
				Page.Render.init();//不能放在外面，防止dom未加载的情况
			})
		}
	},
	destroy: function(){
		Page.Store.getInitialState();//初始化store，否则多次Init是会导致留有旧数据
		$('.profile').remove();
		Page.isFirstLoad = true;
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
		customerInfo: apiPath + '/bhoApi/getCustomerInfoByIdNo',	//根据身份证号获取客户信息
		customerPosInfo: apiPath + '/bhoApi/customerPosInfo',//    查询指定客户POS信息
		assetsMonthlyStat: apiPath + '/bhoApi/getAssetsMonthlyStat',	//客户储蓄交易按月统计
		customerCreditCardInfo: apiPath + '/bhoApi/customerCreditCardInfo'	//查询指定客户信用卡信息
		//customerInfo: apiPath + 'http://21.32.95.196:8080/bhoserver/bhoApi/getCustomerInfoByIdNo',	//根据身份证号获取客户信息
		//customerPosInfo: apiPath + 'http://21.32.95.196:8080/bhoserver/bhoApi/customerPosInfo',//    查询指定客户POS信息
		//assetsMonthlyStat: apiPath + 'http://21.32.95.196:8080/bhoserver/bhoApi/getAssetsMonthlyStat',	//客户储蓄交易按月统计
		//customerCreditCardInfo: apiPath + 'http://21.32.95.196:8080/bhoserver/bhoApi/customerCreditCardInfo'	//查询指定客户信用卡信息
	}
	return {
		getCustomerInfo: function(opts) {
			postData.certificateCode = opts.certificateCode;
			return $.ajax({
				url: Apis.customerInfo,
				type: 'GET',
				dataType: Page.ajaxDataType,
				data: postData,
			 	jsonp: '_callback'
			})
		},
		getCustomerPosInfo: function(opts) {
			postData.certificateCode = opts.certificateCode;
			return $.ajax({
				url: Apis.customerPosInfo,
				type: 'GET',
				dataType: Page.ajaxDataType,
				data: postData,
			 	jsonp: '_callback'
			})
		},
		getAssetsMonthlyStat: function(opts) {
			postData.certificateCode = opts.certificateCode;
			return $.ajax({
				url: Apis.assetsMonthlyStat,
				type: 'GET',
				dataType: Page.ajaxDataType,
				data: postData,
			 	jsonp: '_callback'
			})
		},
		getCustomerCreditCardInfo: function(opts) {
			postData.certificateCode = opts.certificateCode;
			return $.ajax({
				url: Apis.customerCreditCardInfo,
				type: 'GET',
				dataType: Page.ajaxDataType,
				data: postData,
			 	jsonp: '_callback'
			})
		}
	}
}());

Page.UI = (function(){
	return {
		indexView: function() {
			return require('./tmpl/index.jade');
			//return require('./tmpl/index2.jade');
		}
	}
}());

Page.Store = (function(){
	var store = new Store({
		database:{},
		customerPosInfo:{},
		assetsMonthlyStat:{},
		customerCreditCardInfo:{}
	});
	return store;
}());

Page.Render = (function(){
	function index() {
		var $profile = $('.profile');
		var template = Page.UI.indexView();
		//console.log(state.msgs);
		var html = template(Page.Store.getState());
		$profile.html(html);
		Page.HandleEvents.init();
	}
	function destroy(){
		$('.profile').remove();
	}
	return {
		init: function() {
			index();
		},
		destroy: function() {
			destroy();
		}
	}
}());

Page.HandleEvents = (function(){
	var last;
	/**
	$rightBox.scroll(function(){

	})
	**/
	var events = new Events({
		'.profile .title-item@click': 'moveTo',
		'.profile .profile-close@click': 'close'
	}) 
	return {
		init: function() {
			events.dispatch(this);
		},
		moveTo: function(event) {
			/**
			var index = parseInt($(this).index())-1;
			$(this).addClass('active').siblings('.active').removeClass('active');
			Page.mySwiper.swipeTo(index,200,false);
			**/
			last = event.timeStamp == undefined ? new Date().getTime() : event.timeStamp;
			event.timeStamp = last;
			var index = $(this).index()-1;
			var $wrapper = $('.swiper-wrapper');
			var h = $('.swiper-slide').height();
			$(this).addClass('active').siblings('.active').removeClass('active');
			$wrapper.css({'margin-top':-index*h});
			/**
			setTimeout(function(){
				if(last-event.timeStamp == 0){
					//$wrapper.animate({marginTop:-index*h},500);
					$wrapper.css({'margin-top':-index*h});
				}
			},350);
			**/
		},
		close: function(event){
			Page.destroy();
		}
	}
}());

Page.Action = (function() {
	function sortMonthly(a,b){
		return a.tb_ml_cpv_assets_monthly_stat.summ_mon - b.tb_ml_cpv_assets_monthly_stat.summ_mon;
	}
	function sortCredit(a,b){
		return a.tb_ml_cpv_credit_monthly_trans_stat.summ_mon - b.tb_ml_cpv_credit_monthly_trans_stat.summ_mon;
	}
	return {
		index: function(record){
			var telArr = [];
			if(record.mobile_phone){
				telArr = record.mobile_phone.split(' ');
				record.telArr = telArr;
				if(telArr.length > 0 && telArr[0].length >= 11){
					for(var i = 0;i < telArr.length; i++){
						telArr[i] = telArr[i].replace(/\(/,' (来自');
						telArr[i] = telArr[i].replace(/\)/,' 系统)');
					}
					record.telFirst = telArr[0].substring(0,11);
				}
			}else{
				record.telArr = '';
			}
			return {
				type: 'database',
				payload : record
			}
		},
		customerPosInfo: function(record){
			return {
				type: 'customerPosInfo',
				payload : record
			}
		},
		assetsMonthlyStat: function(record){
			record = record.sort(sortMonthly);
			return {
				type: 'assetsMonthlyStat',
				payload : record
			}
		},
		customerCreditCardInfo: function(record){
			//console.log(record);
			record = record.sort(sortCredit);
			return {
				type: 'customerCreditCardInfo',
				payload : record
			}
		}
	}
}());

/**
Page.init({
	certificateCode:'410185197009166013'
});
**/

module.exports = Page;