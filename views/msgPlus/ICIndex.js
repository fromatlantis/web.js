
/**
*微门户-信贷主管
*/
'use strict';
//console.time('time');
//console.profile();

var Store = require('Store');
var Events = require('Events');

var Page = {
	isFirstLoad:true,
	push: 0,
	ajaxDataType: typeof CVal == "undefined" ? 'jsonp' : 'jsonp',
	init: function(){
		if(Page.isFirstLoad){
			Page.HandleEvents.init();
			Page.isFirstLoad = false;
		}
		var store = Page.Store;
		store.dispatch(Page.Action.index());
		Page.Render.init();
		$('.content-tabs').trigger('change.tabs',0);
		
		function firstRequest(callback){
			$.when(
				Page.APIS.getLoanManagerInform()
			).done(function(inform){
				if(inform.code == 1000 ){
					Page.Store.dispatch(Page.Action.records(inform.data));
					callback();
				}
			})
		}
		firstRequest(function(){
			Page.Render.init();
			$('.content-tabs').trigger('change.tabs',0); 
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
	/**
	else{
		postData.userId = "20080689860";
		postData.posId ="E21";
		postData.orgId  ="13007263";
	}
	**/
	var Apis = {           
		inform: apiPath + '/portals/getLoanManagerInform'                                //信贷主管通报
	}
	return {
		getLoanManagerInform: function() {
			return $.ajax({
				url: Apis.inform,
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
		index: function() {
			return require('./tmpl/ICIndex.jade');
		}
	}
}());

Page.Store = (function(){
	var store = new Store();
	return store;
}());

Page.Render = (function(){
	//var $msgPlus = $('.msg-plus'); //注意本函数为立即执行函数，如果在此定义dom还未渲染，所以此时获取不到dom，因此必须在调用方法内获取dom
	function index() {
		var $wrapper = $('.plus-wrapper');
		var template = Page.UI.index();
		var html = template(Page.Store.getState());
		$wrapper.html(html);
	}
	return {
		init: function() {
			index();
		}
	}
}());

Page.HandleEvents = (function(){
	var events = new Events({
		'.content-tabs@change.tabs':'changeTabs',
		'.item-tabs span@click':'swicthCheckList',
		'.item-title@click':'showMore'
	})
	return {
		init: function() {
			events.dispatch(this);
		},
		changeTabs: function(e,index) {
			var tabIndex = index;
			$('.content-tabs td[data-tab-index='+index+']').addClass('active').siblings('.active').removeClass('active');
			$('ul.content[data-tab-index='+index+']').addClass('active').siblings('.active').removeClass('active');
		},
		swicthCheckList: function() {
			var me = $(this);
			if(!me.hasClass('current')){
				me.addClass('current').siblings('.current').removeClass('current');
				var type = me.data('type');
				var $checked = me.parents('.content-item').find('.checked-list');
				var $checking = me.parents('.content-item').find('.checking-list');
				if(type == 'checking'){
					$checking.show();
					$checked.hide();
				}else{
					$checking.hide();
					$checked.show();
				}
			}
		},
		showMore: function() {
			var $tabs = $(this).next('.item-tabs');
			var $more = $tabs.next('.item-more');
			if($tabs.is(':visible')){
				$tabs.hide();
				$more.hide();
			}else{
				$tabs.show();
				$more.show();
			}
		}
	}
}());

Page.Action = (function() {
	return {
		index: function(){
			var tabs=['业务通报'];
			return {
				type: 'tabs',
				payload : tabs
			}
		},
		records: function(records) {
			return {
				type: 'records',
				payload: records
			}
		}
	}
}());

//Page.init();
var  ICPage = Page;
module.exports = ICPage;//pack-lib打包类库使用