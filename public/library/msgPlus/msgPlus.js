(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("$"));
	else if(typeof define === 'function' && define.amd)
		define("msgPlus", ["$"], factory);
	else if(typeof exports === 'object')
		exports["msgPlus"] = factory(require("$"));
	else
		root["msgPlus"] = factory(root["$"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/library/msgPlus/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	//console.time('time');
	//console.profile();
	__webpack_require__(2);
	__webpack_require__(6);
	var Store = __webpack_require__(7);
	var Events = __webpack_require__(8);

	var Page = {
		push: 0,
		ajaxDataType: typeof CVal == "undefined" ? 'json' : 'jsonp',
		init: function(){
			function firstRequest(callback){
				$(document.body).append('<div class="msg-plus"></div>');
				$.when(
					Page.APIS.getMsgs(),
					Page.APIS.getClosedSum()
				).done(function(data,sum){
					data[0].data.sum = sum[0].data[0];//注意返回值是一个ajax对象，数据要用data[0]获取，否则报错
					callback(data[0].data);
				})
			}
			firstRequest(function(record){
				var store = Page.Store;
				store.dispatch(Page.Action.index(record));
				Page.Render.init();
				/**
				require.ensure('slimscroll',function(){
					require('slimscroll');
					 $('.msg-content>.content.active').slimScroll({
	                    position: "right",
	                    height: '500px',
	                    distance: '3px',
	                    railVisible: false,
	                    size: '5px',                    
	                    color: '#999',                    
	                    railOpacity: '0.5',
	                    railColor: '#eee'
	                });
				},'slimscroll');//第三个参数是给这个模块命名，否则[name]是一个自动分配的id
				**/
			})
		}
	}

	Page.APIS = (function(){
		var apiPath = typeof CVal == "undefined" ? '' : CVal.path;
		var postData = {};
		if(typeof CVal != "undefined"){
			postData.userId = CVal.getUserId();
			postData.posId = CVal.getPostId();
			postData.orgId  = CVal.getOrgId();
		}
		var Apis = {
			msgs: apiPath + '/portals/getDataClosed.json',
			msgs2: apiPath + '/portals/getCloseDataSoon.json',
			msgs3: apiPath + '/portals/getLoanRemindListByUserId.json',
			news: apiPath + '/portals/news.json',
			closedSum: apiPath + '/portals/getDataClosedSum.json',
			closeDataSoonSum: apiPath + '/portals/getCloseDataSoonSum.json',
			dealShowData: apiPath + '/portals/dealShowData.json',
			loanRemindAlteraction: apiPath + '/portals/loanRemindAlteraction.json'
		}
		return {
			getMsgs: function() {
				return $.ajax({
					url: Apis.msgs,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
				 	jsonp: '_callback'
				})
			},
			getMsgs2: function() {
				return $.ajax({
					url: Apis.msgs2,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			getMsgs3: function() {
				return $.ajax({
					url: Apis.msgs3,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			getNews: function() {
				return $.ajax({
					url: Apis.news,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			getClosedSum: function() {
				return $.ajax({
					url: Apis.closedSum,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			getCloseDataSoonSum: function() {
				return $.ajax({
					url: Apis.closeDataSoonSum,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			dealShowData: function(loanId,isLoaning,isShow) {
				postData.loanId=loanId;
				postData.isLoaning=isLoaning;
				postData.isShow=isShow;
				return $.ajax({
					url: Apis.dealShowData,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			loanRemindAlteraction: function(rmdId,alterType) {
				postData.rmdId=rmdId;
				postData.alterType=alterType;
				return $.ajax({
					url: Apis.loanRemindAlteraction,
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
				return __webpack_require__(9);
			},
			detailView: function() {
				return __webpack_require__(13);
			},
			newsView: function() {
				return __webpack_require__(14);
			}
		}
	}());

	Page.Store = (function(){
		var store = new Store({
			msgs: {
				tabs:[],
				content:[]
			},
			tab: {
				index: 0
			}
		});
		return store;
	}());

	Page.Render = (function(){
		//var $msgPlus = $('.msg-plus'); //注意本函数为立即执行函数，如果在此定义dom还未渲染，所以此时获取不到dom，因此必须在调用方法内获取dom
		function index() {
			var $msgPlus = $('.msg-plus');
			var template = Page.UI.indexView();
			var html = template(Page.Store.getState());
			$msgPlus.html(html);
			Page.HandleEvents.init();
		}
		function detail() {
			var $msgPlus = $('.msg-plus');
			var template = Page.UI.detailView();
			var html = template(Page.Store.getState());
			$msgPlus.html(html);
		}
		function news() {
			var $msgPlus = $('.msg-plus');
			var template = Page.UI.newsView();
			var html = template(Page.Store.getState());
			$msgPlus.html(html);
		}
		return {
			init: function() {
				index();
				$('.content-tabs').trigger('change.tabs',0); 
			},
			news: function() {
				news();
			},
			detail: function() {
				detail();
			} 
		}
	}());

	Page.HandleEvents = (function(){
		function push(type){
			var $msgPlus = $('.msg-plus'),
				$msgContent = $('.msg-content'),
				$msgTabs = $('.msg-tabs'),
				$icon = $('.showhide').find('i');
			if(type=='right'){
				$msgPlus.animate({right:-322},function(){
					$msgTabs.animate({'margin-left':-322});
					Page.push=1;
					$icon.html('&#xe636;');
					$icon.next('span').text('展开');
				})
			}else if(type=='left'){
				$msgPlus.animate({right:0});
				$msgTabs.animate({'margin-left':0});
				Page.push=0;
				$icon.html('&#xe635;');
				$icon.next('span').text('收起');
			}
		}	
		$(document).on('click','.close-icon',function(){
			Page.Render.init();
		})
		var events = new Events({
			'.news@click': 'showNews',
			'.content-item .item-title@click': 'showItemMore',
			'.item-deal .no-more@click': 'noMore',
			'.item-deal .can-next@click': 'showFlag',
			'.showhide@click': 'foldBox',
			'.home@click': 'showIndex',
			'.content-tabs td@click': 'changeMsgTabs',
			'.content-tabs@change.tabs':'changeTabs'//自定义事件
		})
		return {
			init: function() {
				events.dispatch(this);
			},
			showNews: function() {
				$.when(Page.APIS.getNews()).done(function(data){
					Page.Store.dispatch(Page.Action.news(data.records));
					Page.Render.news();
					if(Page.push==1){
						push('left');
					}
				})
			},
			showItemMore: function() {
				var $itme = $(this).parent('.content-item');
				var $more = $itme.find('.item-more');
				if($more.is(':visible')) {
					$more.hide('fast');
				}else {
					$more.show('fast');
				}			
			},
			noMore: function() {
				var r = confirm('确认后将不再展示');
				if(r == true) {
					var loanId = $(this).data('loanid');
					var rmdId = $(this).data('rmdid');
					var dealFlag = 0;//是否有续贷意愿
					var $item = $(this).parents('.content-item');
					var $flag = $(this).parents('.content-item').find('.flag-icon');
					if($flag.is(':visible')){
						dealFlag = 1;
					}
					if(!!loanId){
						$.when(Page.APIS.dealShowData(loanId,dealFlag,0)).done(function(data){
							$item.hide();
						})
					}else if(!!rmdId){
						$.when(Page.APIS.loanRemindAlteraction(rmdId,'notips')).done(function(data){
							$item.hide();
						})
					}
				}
			},
			showFlag: function() {
				var loanId = $(this).data('loanid');
				var rmdId = $(this).data('rmdid');
				var $flag = $(this).parents('.content-item').find('.flag-icon');
				if(!!loanId){
					$.when(Page.APIS.dealShowData(loanId,1,1)).done(function(data){
						$flag.show('fast');
					})
				}else if(!!rmdId){
					$.when(Page.APIS.loanRemindAlteraction(rmdId,'inspected')).done(function(data){
						$flag.show('fast');
					})
				}
			},
			foldBox: function() {
				if(Page.push==0){
					push('right');
				}else if(Page.push==1){
					push('left');
				}
			},
			showIndex: function() {
				if(Page.push==1){
					push('left');
				}
			},
			changeMsgTabs: function() {
				var tabIndex = $(this).data('tab-index');
				var state = Page.Store.getState();
				if(!$(this).hasClass('active')){
					if(tabIndex==2 && !state.tab3) {
						$.when(Page.APIS.getMsgs3()).done(function(data){
							Page.Store.dispatch(Page.Action.tab3(data.data));
							Page.Render.init();
							//$('.content-tabs').trigger('change.tabs',2); 
							Page.HandleEvents.changeTabs('change.tabs',2);
						})
					}else if(tabIndex==1 && !state.tab2) {
						$.when(
							Page.APIS.getMsgs2(),
							Page.APIS.getCloseDataSoonSum()
						).done(function(data,sum){
							data[0].data.sum = sum[0].data[0];//注意返回值是一个ajax对象，数据要用data[0]获取，否则报错
							Page.Store.dispatch(Page.Action.tab2(data[0].data));
							Page.Render.init();
							Page.HandleEvents.changeTabs('change.tabs',1);
						})
					}
				}
				Page.HandleEvents.changeTabs('change.tabs',tabIndex);
			},
			changeTabs: function(e,index) {
				var tabIndex = index;
				$('.content-tabs td[data-tab-index='+index+']').addClass('active').siblings('.active').removeClass('active');
				$('ul.content[data-tab-index='+index+']').addClass('active').siblings('.active').removeClass('active');
			}
		}
	}());

	Page.Action = (function() {
		return {
			index: function(record){
				var tabs=['已经结清','即将结清','贷后助手'],
					content=record;
				/**
				for(var i=0;i<record.length;i++){
					for(var key in record[i]){
						tabs.push(key);
						content.push(record[i][key]);
					}
				}
				**/
				return {
					type: 'msgs',
					payload : {
						tabs:tabs,
						content:content
					}
				}
			},
			tab2: function(record){
				return {
					type: 'tab2',
					payload : {
						content:record
					}
				}
			},
			tab3: function(record){
				return {
					type: 'tab3',
					payload : {
						content:record
					}
				}
			},
			news: function(record) {
				return {
					type:'news',
					payload:record
				}
			},
			detail: function(record) {
				return {
					type:'detail',
					payload:record
				}
			}
		}
	}());

	//Page.init();

	module.exports=Page;//pack-lib打包类库使用
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	var state = {};
	function Store(options) {
		var opts = options || {};
		state = opts;
	}
	Store.prototype.getState = function() {
		if(typeof Object.freeze === 'function'){
			Object.freeze(state);//冻结对象不可修改
		}
		return state;
	}
	Store.prototype.dispatch = function (action) {
		if(action.hasOwnProperty('type') && action.hasOwnProperty('payload')){
			//console.log(action.type+'变化前：'+JSON.stringify(state[action.type]));
			var tempState = $.extend(true,{},state);
			tempState[action.type] = action.payload;
			state = tempState;
			//console.log(state);
			//console.log(action.type+'变化后：'+JSON.stringify(state[action.type]));
		}else{
			//console.log('action必须遵从标准结构，如：{"type":"user","payload":{"name":"vincent","age":"18"}}');
		}
	}
	module.exports=Store;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	function Events(options) {
		var opts = options || {};
		this.events = opts;
	}
	Events.prototype.dispatch = function (eventsHandle) {
		var events = this.events;
		//var eventSplitter = /^(\w+)\s*(.*)$/;
		for(var key in events) {
			var method = events[key];
			//var match = key.match(eventSplitter);
			var el = key.split('@')[0],eventName = key.split('@')[1];
			//console.log(eventsHandle);
			$(el).on(eventName,eventsHandle[method]);
		}
	}
	module.exports=Events;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(10);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (BUS_LAT, msgs, parseInt, tab2, tab3, undefined) {
	buf.push("<div class=\"msg-content\"><div class=\"serach-chip\"><i class=\"iconfont search-icon\">&#xe627;</i><input type=\"text\" placeholder=\"查找...\"></div><table class=\"content-tabs\"><tr>");
	// iterate msgs.tabs
	;(function(){
	  var $$obj = msgs.tabs;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var item = $$obj[index];

	if(index==0)
	{
	buf.push("<td" + (jade.attr("data-tab-index", '' + (index) + '', true, true)) + " class=\"active\">" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</td>");
	}
	else
	{
	buf.push("<td" + (jade.attr("data-tab-index", '' + (index) + '', true, true)) + ">" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</td>");
	}
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var item = $$obj[index];

	if(index==0)
	{
	buf.push("<td" + (jade.attr("data-tab-index", '' + (index) + '', true, true)) + " class=\"active\">" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</td>");
	}
	else
	{
	buf.push("<td" + (jade.attr("data-tab-index", '' + (index) + '', true, true)) + ">" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</td>");
	}
	    }

	  }
	}).call(this);

	buf.push("</tr></table><ul data-tab-index='0' class=\"content\"><div class=\"content-tips\">已结结清<span class=\"red-num\">" + (jade.escape(null == (jade_interp = msgs.content.sum.COUNTS) ? "" : jade_interp)) + "</span>笔，共<span class=\"red-num\">" + (jade.escape(null == (jade_interp = msgs.content.sum.AMOUNTALL) ? "" : jade_interp)) + "</span>万元</div>");
	// iterate msgs.content
	;(function(){
	  var $$obj = msgs.content;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var value = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = (index+1)+'.') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.CUS_NAME) ? "" : jade_interp)) + "</span><span class=\"end-day\">已经结清<span class=\"day-num\">" + (jade.escape(null == (jade_interp = value.DAYS) ? "" : jade_interp)) + "</span>天</span>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon show\">&#xe63d;</i>");
	}
	}else{
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon\">&#xe63d;</i>");
	}
	}
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("data-lng", '' + (value.BUS_LNG) + '', true, true)) + (jade.attr("data-lat", '' + (BUS_LAT) + '', true, true)) + (jade.attr("src", __webpack_require__(12), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"can-next\">有续贷意愿</button></div></li>");
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var value = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = (index+1)+'.') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.CUS_NAME) ? "" : jade_interp)) + "</span><span class=\"end-day\">已经结清<span class=\"day-num\">" + (jade.escape(null == (jade_interp = value.DAYS) ? "" : jade_interp)) + "</span>天</span>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon show\">&#xe63d;</i>");
	}
	}else{
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon\">&#xe63d;</i>");
	}
	}
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("data-lng", '' + (value.BUS_LNG) + '', true, true)) + (jade.attr("data-lat", '' + (BUS_LAT) + '', true, true)) + (jade.attr("src", __webpack_require__(12), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"can-next\">有续贷意愿</button></div></li>");
	    }

	  }
	}).call(this);

	buf.push("</ul><ul data-tab-index='1' class=\"content\">");
	if(tab2){
	{
	buf.push("<div class=\"content-tips\">即将结清<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab2.content.sum.COUNTS) ? "" : jade_interp)) + "</span>笔，共<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab2.content.sum.AMOUNTALL) ? "" : jade_interp)) + "</span>万元</div>");
	// iterate tab2.content
	;(function(){
	  var $$obj = tab2.content;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var value = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = (index+1)+'.') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.CUS_NAME) ? "" : jade_interp)) + "</span><span class=\"end-day\">距结清还有<span class=\"day-num\">" + (jade.escape(null == (jade_interp = value.DAYS) ? "" : jade_interp)) + "</span>天</span>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon show\">&#xe63d;</i>");
	}
	}else{
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon\">&#xe63d;</i>");
	}
	}
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("data-lng", '' + (value.BUS_LNG) + '', true, true)) + (jade.attr("data-lat", '' + (BUS_LAT) + '', true, true)) + (jade.attr("src", __webpack_require__(12), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"can-next\">有续贷意愿</button></div></li>");
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var value = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = (index+1)+'.') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.CUS_NAME) ? "" : jade_interp)) + "</span><span class=\"end-day\">距结清还有<span class=\"day-num\">" + (jade.escape(null == (jade_interp = value.DAYS) ? "" : jade_interp)) + "</span>天</span>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon show\">&#xe63d;</i>");
	}
	}else{
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon\">&#xe63d;</i>");
	}
	}
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("data-lng", '' + (value.BUS_LNG) + '', true, true)) + (jade.attr("data-lat", '' + (BUS_LAT) + '', true, true)) + (jade.attr("src", __webpack_require__(12), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"can-next\">有续贷意愿</button></div></li>");
	    }

	  }
	}).call(this);

	}
	}
	buf.push("</ul><ul data-tab-index='2' class=\"content\">");
	if(tab3){
	{
	buf.push("<div class=\"content-tips\">总共检查<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab3.content.length) ? "" : jade_interp)) + "</span>人，贷后检查总额");
	var total=0
	for(var i=0;i<tab3.content.length;i++){
	{
	total=total+parseInt(tab3.content[i].dueBillAmount)
	}
	}
	buf.push("<span class=\"red-num\">" + (jade.escape(null == (jade_interp = total/10000) ? "" : jade_interp)) + "</span>万元</div>");
	// iterate tab3.content
	;(function(){
	  var $$obj = tab3.content;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var value = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = (index+1)+'.') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.cusName) ? "" : jade_interp)) + "</span><span class=\"end-date\">" + (jade.escape((jade_interp = value.dueBillBeginDate) == null ? '' : jade_interp)) + "~" + (jade.escape((jade_interp = value.dueBillEndDate) == null ? '' : jade_interp)) + "</span>");
	if(value.alterType=='inspected'){
	{
	buf.push("<i title=\"已调查\" class=\"iconfont flag-icon show\">&#xe63d;</i>");
	}
	}else{
	{
	buf.push("<i title=\"已调查\" class=\"iconfont flag-icon\">&#xe63d;</i>");
	}
	}
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td>");
	if(value.remindType==1){
	{
	buf.push("<span>贷后首期检查</span>");
	}
	}else if(value.remindType==2){
	{
	buf.push("<span>贷后常规检查</span>");
	}
	}else{
	{
	buf.push("<span>贷后特别检查</span>");
	}
	}
	buf.push("<span>" + (jade.escape(null == (jade_interp = value.dueBillAmount/10000) ? "" : jade_interp)) + "万</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("data-lng", '' + (value.busLng) + '', true, true)) + " data-lat=\"{#value.busLat}\"" + (jade.attr("src", __webpack_require__(12), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.appOpName) ? "" : jade_interp)) + "</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " class=\"no-more\">不再显示</button><button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " class=\"can-next\">已调查</button></div></li>");
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var value = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = (index+1)+'.') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.cusName) ? "" : jade_interp)) + "</span><span class=\"end-date\">" + (jade.escape((jade_interp = value.dueBillBeginDate) == null ? '' : jade_interp)) + "~" + (jade.escape((jade_interp = value.dueBillEndDate) == null ? '' : jade_interp)) + "</span>");
	if(value.alterType=='inspected'){
	{
	buf.push("<i title=\"已调查\" class=\"iconfont flag-icon show\">&#xe63d;</i>");
	}
	}else{
	{
	buf.push("<i title=\"已调查\" class=\"iconfont flag-icon\">&#xe63d;</i>");
	}
	}
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td>");
	if(value.remindType==1){
	{
	buf.push("<span>贷后首期检查</span>");
	}
	}else if(value.remindType==2){
	{
	buf.push("<span>贷后常规检查</span>");
	}
	}else{
	{
	buf.push("<span>贷后特别检查</span>");
	}
	}
	buf.push("<span>" + (jade.escape(null == (jade_interp = value.dueBillAmount/10000) ? "" : jade_interp)) + "万</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("data-lng", '' + (value.busLng) + '', true, true)) + " data-lat=\"{#value.busLat}\"" + (jade.attr("src", __webpack_require__(12), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.appOpName) ? "" : jade_interp)) + "</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " class=\"no-more\">不再显示</button><button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " class=\"can-next\">已调查</button></div></li>");
	    }

	  }
	}).call(this);

	}
	}
	buf.push("</ul></div><div class=\"msg-tabs\"><table><tr><td class=\"home active\"> <i class=\"iconfont\">&#xe60f;</i><span>消息</span></td><td class=\"news\"> <i class=\"iconfont\">&#xe634;</i><span>新闻</span></td><td class=\"showhide\"> <i class=\"iconfont\">&#xe635;</i><span>收起</span></td></tr></table></div>");}.call(this,"BUS_LAT" in locals_for_with?locals_for_with.BUS_LAT:typeof BUS_LAT!=="undefined"?BUS_LAT:undefined,"msgs" in locals_for_with?locals_for_with.msgs:typeof msgs!=="undefined"?msgs:undefined,"parseInt" in locals_for_with?locals_for_with.parseInt:typeof parseInt!=="undefined"?parseInt:undefined,"tab2" in locals_for_with?locals_for_with.tab2:typeof tab2!=="undefined"?tab2:undefined,"tab3" in locals_for_with?locals_for_with.tab3:typeof tab3!=="undefined"?tab3:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];

	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }

	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */

	function nulls(val) {
	  return val != null && val !== '';
	}

	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}

	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};


	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];

	  var keys = Object.keys(obj);

	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];

	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }

	  return buf.join('');
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var jade_encode_html_rules = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	var jade_match_html = /[&<>"]/g;

	function jade_encode_char(c) {
	  return jade_encode_html_rules[c] || c;
	}

	exports.escape = jade_escape;
	function jade_escape(html){
	  var result = String(html).replace(jade_match_html, jade_encode_char);
	  if (result === '' + html) return html;
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */

	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(11).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};

	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/map-icon.png?a74aeb53";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(10);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (detail) {
	buf.push("<div class=\"theme-blue adPops-container\"><div class=\"adPops-title\"><div class=\"back-home\"><span>返回</span></div></div><div class=\"adPops-content\"><div class=\"content-chip\">" + (null == (jade_interp = detail.content) ? "" : jade_interp) + "</div></div></div>");}.call(this,"detail" in locals_for_with?locals_for_with.detail:typeof detail!=="undefined"?detail:undefined));;return buf.join("");
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(10);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<div class=\"theme-blue adPops-container\"><div class=\"adPops-title\"><div class=\"back-home theme-blue\"><img" + (jade.attr("src", __webpack_require__(15), true, true)) + " class=\"yc-logo\">行业新闻<i class=\"iconfont close-icon\">&#xe639;</i></div></div><div class=\"adPops-content\"><div class=\"news-card\"><div class=\"news-title\">27日机构强推买入 6股极度低估</div><div class=\"news-summary\">立思辰：教育生态再添新军估值与投资建议:我们预计百年英才将于2016年10月实现并表,1-8月百年英才实现净利润约730万元,预计9-12月业绩约770万元,并表后2016年对公司业绩贡献约570万元;相对公司全年业绩,百年英才对公司2016年业绩影响相对较小,我们暂不对公司业绩进行调整。预计201</div><div class=\"news-footer\"><span class=\"news-source\">凤凰网财经</span><span class=\"news-time\">2016-09-26</span><div class=\"news-tags\"><span>小麦</span><span>创业板</span></div></div></div><div class=\"news-card\"><div class=\"news-title\">27日机构强推买入 6股极度低估</div><div class=\"news-summary\">立思辰：教育生态再添新军估值与投资建议:我们预计百年英才将于2016年10月实现并表,1-8月百年英才实现净利润约730万元,预计9-12月业绩约770万元,并表后2016年对公司业绩贡献约570万元;相对公司全年业绩,百年英才对公司2016年业绩影响相对较小,我们暂不对公司业绩进行调整。预计201</div><div class=\"news-footer\"><span class=\"news-source\">凤凰网财经</span><span class=\"news-time\">2016-09-26</span><div class=\"news-tags\"><span>小麦</span><span>创业板</span></div></div></div><div class=\"news-card\"><div class=\"news-title\">27日机构强推买入 6股极度低估</div><div class=\"news-summary\">立思辰：教育生态再添新军估值与投资建议:我们预计百年英才将于2016年10月实现并表,1-8月百年英才实现净利润约730万元,预计9-12月业绩约770万元,并表后2016年对公司业绩贡献约570万元;相对公司全年业绩,百年英才对公司2016年业绩影响相对较小,我们暂不对公司业绩进行调整。预计201</div><div class=\"news-footer\"><span class=\"news-source\">凤凰网财经</span><span class=\"news-time\">2016-09-26</span><div class=\"news-tags\"><span>小麦</span><span>创业板</span></div></div></div></div></div>");;return buf.join("");
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/yc_logo.png?bd5e375e";

/***/ }
/******/ ])
});
;