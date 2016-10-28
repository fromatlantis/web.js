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
	init: function(options){
		//console.log(state.msgs);
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
				if(record.data.nonp_loan_lvl !='unknown' && record.data.nonp_loan_lvl < 3){
					var store = Page.Store;
					options.title = '行业：' + record.data.industry_name;
					store.dispatch(Page.Action.index(options));
					store.dispatch(Page.Action.industry(record.data));
					Page.Render.init(options);
				}else{
					Page.destroy();
				}
			}
		})
		
	},
	destroy: function() {
		Page.Store.getInitialState();//初始化store，否则多次Init是会导致留有旧数据
		Page.isFirstLoad = true;
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
		industryNormInfo: apiPath + '/bhoApi/industryNormInfo'
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
		var width = options.width || 450;
		$modal.width(width);
		var template = Page.UI.indexView();
		var html = template(Page.Store.getState());
		$modal.html(html);
		if(Page.isFirstLoad){
			$(document.body).append($modal);
			//console.log($modal.height());
			$modal.css({'margin-left':-$modal.width()/2});
			Page.isFirstLoad=false;
		}
		var industry = Page.UI.industry();
		//console.log(Page.Store.getState());
		var industryHtml = industry(Page.Store.getState());
		$('.__modal-body').html(industryHtml);
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
		'.__modal-footer button@click': 'destroy',
		'.__modal-close@click': 'destroy',
		'.lvl-tips@mouseover': 'showTips',
		'.lvl-tips@mouseout': 'hideTips'
	}) 
	return {
		init: function() {
			events.dispatch(this);
		},
		destroy: function() {
			Page.destroy();
		},
		showTips: function(){
			$('.tips-info').show();
		},
		hideTips: function(){
			$('.tips-info').hide();
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
