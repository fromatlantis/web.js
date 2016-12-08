(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("haloPlugins", [], factory);
	else if(typeof exports === 'object')
		exports["haloPlugins"] = factory();
	else
		root["haloPlugins"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonphaloPlugins"];
/******/ 	window["webpackJsonphaloPlugins"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + ({"1":"slimscroll"}[chunkId]||chunkId) + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://21.32.95.248:8088/bhoserver/resources/static/js/bho/haloPlugins/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var profile = __webpack_require__(1);
	var msgPlus = __webpack_require__(18);
	var modal = __webpack_require__(29);
	/**IE8不支持
	function haloPlugins(options) {
		var opts = options || {};
		this.profile = profile;
		this.msgPlus = msgPlus;
		//this.$ = window.jQuery;
	}
	**/
	var haloPlugins = {};
	haloPlugins.profile = profile;
	haloPlugins.msgPlus = msgPlus;
	haloPlugins.modal = modal;
	module.exports=haloPlugins;//function 对象必须用new


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(2);
	//require('./index2.css');
	var Store = __webpack_require__(9);
	var Events = __webpack_require__(10);

	//swiper轮播插件
	//require('swiper2Css');
	//var Swiper = require('swiper2');
	var Util = __webpack_require__(11);
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
				return __webpack_require__(13);
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	'use strict';
	//var state = {};
	function Store(options) {
		var opts = options || {};
		this.state = this.initState = opts;
	}
	Store.prototype.getState = function() {
		if(typeof Object.freeze === 'function'){
			Object.freeze(this.state);//冻结对象不可修改
		}
		return this.state;
	}
	Store.prototype.dispatch = function (action) {
		if(action.hasOwnProperty('type') && action.hasOwnProperty('payload')){
			//console.log(action.type+'变化前：'+JSON.stringify(state[action.type]));
			var tempState = $.extend(true,{},this.state);
			tempState[action.type] = action.payload;
			this.state = tempState;
			//console.log(state);
			//console.log(action.type+'变化后：'+JSON.stringify(state[action.type]));
		}else{
			//console.log('action必须遵从标准结构，如：{"type":"user","payload":{"name":"vincent","age":"18"}}');
		}
	}
	Store.prototype.getInitialState = function() {
		this.state = this.initState;
		//console.log(state.customerCreditCardInfo);
		return this.state;
	}
	module.exports=Store;


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
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
			//$(el).off(eventName).on(eventName,eventsHandle[method]);
			if(!!eventsHandle[method]){
				if($(el).length>0){
					$(el).off(eventName).on(eventName,eventsHandle[method]);
				}else{
					$(document).off(eventName,el).on(eventName,el,eventsHandle[method]);
				}
			}else{
				//console.log(method);
			}
		}
	}
	module.exports=Events;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var config=__webpack_require__(12);

	function Util(){
		this.version='1.0.0';
	}
	/**
	 * [formatDate description]
	 * //示例： 
		alert(new Date().Format("yyyy年MM月dd日")); 
		alert(new Date().Format("MM/dd/yyyy")); 
		alert(new Date().Format("yyyyMMdd")); 
		alert(new Date().Format("yyyy-MM-dd hh:mm:ss"));
	 */
	Util.prototype.formatDate=function(format,date){
		if(!date){
			date=new Date();
		}else{
			date=new Date(date);
		}
		var args = {
	       "M+": date.getMonth() + 1,
	       "d+": date.getDate(),
	       "h+": date.getHours(),
	       "m+": date.getMinutes(),
	       "s+": date.getSeconds(),
	       "q+": Math.floor((date.getMonth() + 3) / 3),  //quarter
	       "S": date.getMilliseconds()
	   };
	   if (/(y+)/.test(format))
	       format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	   for (var i in args) {
	       var n = args[i];
	       if (new RegExp("(" + i + ")").test(format))
	           format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
	   }
	   return format;
	}
	Util.prototype.getDateStr=function(count) { 
		var dd = new Date(); 
		dd.setDate(dd.getDate()+count);//获取count天后的日期 
		var y = dd.getFullYear(); 
		var m = dd.getMonth()+1;//获取当前月份的日期 
		var d = dd.getDate(); 
		return y+"-"+m+"-"+d; 
	} 
	Util.prototype.getDate=function(str){
		str = str.replace(/-/g,"/");
		return new Date(str );
	}
	Util.prototype.urlParam=function(key){
	 	return _urlParam(key);
	}
	//两个数组取差集
	Util.prototype.diffArr=function(target,array,key){
		var result=target.slice();
		for(var i=0;i<result.length;i++){
			for(var j=0;j<array.length;j++){
				if(result[i][key]===array[j][key]){
					result.splice(i,1);
					i--;
					break;
				}
			}
		}
		return result;
	}
	//手机号脱敏处理
	Util.prototype.concealMobile=function(mobile){
		var reg = /^(\d{3})\d{4}(\d{4})$/;
		return mobile.replace(reg,"$1****$2");
	}
	function _urlParam(key){
		var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
	 	var r = window.location.search.substr(1).match(reg);
	 	if(r!=null) return unescape(r[2]); return null;
	}

	Util.prototype.fixedEmpty = function(value,_default){
		if(value=='' || value==undefined || value==null||value == 'NULL'){
			return _default || '-';
		}else if(!isNaN(value)){
			value = parseInt(value) == value ? value : value.toFixed(2)
		}
		return value;
	}

	Util.prototype.formatMoney = function(_money,_digit){
		var tpMoney = '-';
		var digit = _digit || 2;
		if(undefined != _money){
			tpMoney = _money;			
		}
		tpMoney = new Number(tpMoney);
		if(isNaN(tpMoney)){
			return '-';
		}
		tpMoney = tpMoney.toFixed(digit);
		var re = /^(-?\d+)(\d{3})(\.?\d*)/;
		while(re.test(tpMoney)){
			tpMoney = tpMoney.replace(re,'$1,$2$3')	
		}
		return tpMoney + '元';
	}

	module.exports=Util;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
		"devPath": "views",
		"buildPath": "bin/assets",
		"libPath": "public/library",
		"publicPath": "/surveyRpt/",
		"staticPath": "public",
		"debug": true,
		"online": false,
		"hot": false,
		"testServer": {
			"sftp": {
				"host": "21.32.95.249",
				"remotePath": "/opt/www/exj_managerv2/wechat/v4.0",
				"user": "root",
				"pass": "aliyun123123Q"
			},
			"wx": {
				"appId": "wxda1ad46a30222ae2"
			}
		},
		"onServer": {
			"sftp": {
				"host": "21.32.95.249",
				"remotePath": "/surveyTemp/trunk/WebRoot/shorthand",
				"user": "niuzhiwei",
				"pass": "niuzhiwei"
			},
			"wx": {
				"appId": "wx9e60458de7e99750"
			}
		},
		"alias": {
			"zepto": "javascripts/lib/zepto.min.js",
			"jquery": "javascripts/lib/jquery-1.10.2.min.js",
			"Template": "javascripts/core/Template.js",
			"commonCss": "stylesheets/common.css",
			"Util": "javascripts/core/Util.js",
			"swiper2": "javascripts/lib/swiper2.x/swiper.min.js",
			"swiper2Css": "javascripts/lib/swiper2.x/swiper.css",
			"jquery.form": "javascripts/lib/jquery.form.js",
			"FetchApi": "javascripts/core/FetchApi.js",
			"downexcel": "javascripts/core/downexcel.js",
			"marquee": "javascripts/lib/marquee.js",
			"tags": "javascripts/lib/tags/tags.js",
			"Store": "javascripts/core/Store.js",
			"Events": "javascripts/core/Events.js",
			"echarts": "javascripts/lib/echarts.js",
			"slimscroll": "javascripts/lib/jquery.slimscroll.js",
			"moment": "javascripts/lib/moment.js",
			"CVal": "library/src/CVal/CVal.js",
			"crypto": "javascripts/lib/crypto-js"
		}
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(moment) {var jade = __webpack_require__(15);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (Number, assetsMonthlyStat, customerCreditCardInfo, database, isNaN, moment, parseInt, undefined) {
	var util = { 
	fixedEmpty: function(value,_default){
	if(value=='' || value==undefined || value==null||value == 'NULL'){
	return _default || '-';
	}else if(!isNaN(value)){
	value = parseInt(value) == value ? value : value.toFixed(2)
	}
	return value;
	},
	formatMoney: function(_money,_digit) {
	var tpMoney = '-';
	var digit = _digit || 2;
	if(undefined != _money){
	tpMoney = _money;			
	}
	tpMoney = new Number(tpMoney);
	if(isNaN(tpMoney)){
	return '-';
	}
	tpMoney = tpMoney.toFixed(digit);
	var re = /^(-?\d+)(\d{3})(\.?\d*)/;
	while(re.test(tpMoney)){
	tpMoney = tpMoney.replace(re,'$1,$2$3')	
	}
	return tpMoney + '元';
	}
	}
	buf.push("<div class=\"profile-header\">客户综合信息 — " + (jade.escape((jade_interp = database.cus_name) == null ? '' : jade_interp)) + "<div class=\"header-fr\"><i class=\"iconfont profile-close\">&#xe639;</i></div></div><div class=\"left-box\"><div class=\"title-top\"><img" + (jade.attr("src", __webpack_require__(17), true, true)) + " class=\"user-icon\"><p class=\"text-title\">邮储河北省分行</p><p class=\"text-small\">信息科技部</p><p class=\"text-small\">三农金融部 </p></div><div class=\"title-item active\">概览</div><div data-move=\".base\" class=\"title-item\">基本信息</div><div class=\"title-item\">个贷指标</div><div class=\"title-item\">资产信息</div><div class=\"title-item\">信用卡</div><div class=\"title-item\">POS信息</div></div><div class=\"right-box\"><div class=\"swiper-container\"><div class=\"swiper-wrapper\"><div class=\"swiper-slide home-slide\"><div class=\"info-card\"><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>客户姓名：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.cus_name)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>证件号：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.certificate_code)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>移动电话：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.telFirst)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>是否本地户口：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.is_native_account)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>教育水平：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.educational_level)) == null ? '' : jade_interp)) + "</td></tr></table></div><div class=\"info-title\">客户基本信息</div></div><div class=\"info-card card-col2\"><div class=\"info-title\">个贷业务综合指标</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>已核销贷款笔数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.canceled_loan_cnt)) == null ? '' : jade_interp)) + "</td><td><span>在途贷款笔数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.curr_loan_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>已核销贷款金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.canceled_loan_amt)) == null ? '' : jade_interp)) + "</td><td><span>在途贷款金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.curr_loan_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>历史逾期次数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.overdue_times_his)) == null ? '' : jade_interp)) + "</td><td><span>在途贷款余额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.curr_loan_bal)) == null ? '' : jade_interp)) + "\t</td></tr><tr><td> <span>历史逾期本金：</span>" + (jade.escape((jade_interp = util.formatMoney(database.overdue_capital_his)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-card card-col2\"><div class=\"info-title\">POS信息</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>商户名称：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.mer_name)) == null ? '' : jade_interp)) + "</td></tr><tr><td><span>营业执照注册地址：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.bus_lic_reg_addr)) == null ? '' : jade_interp)) + "</td></tr><tr><td><span>商户法定代表人姓名：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.mer_legal_name)) == null ? '' : jade_interp)) + "</td></tr><tr><td><span>商户拥有的pos数量：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.pos_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td><span>近一年月均交易金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.total_amt_ly)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-card\"><div class=\"info-title\">资产信息</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>最早开户日期：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.cd_earliest_open_date)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>活期余额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.cdm_bal_sum)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>定期余额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.fix_bal_sum)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>年月均交易额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.avg_amt_yearly)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>年月均交易次数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.avg_cnt_yearly)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-card\"><div class=\"info-title\">理财信息</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>购买基金金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.fund_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>购买理财金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.financing_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>购买国债金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.national_debt_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td><span>购买保险金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.insurance_amt)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-card card-col2\"><div class=\"info-title\">信用卡信息</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>信用卡数量：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.credist_card_cnt)) == null ? '' : jade_interp)) + "</td><td> <span>最早办理日期：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.earliest_open_date)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>信用卡账户数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.acct_num_cnt)) == null ? '' : jade_interp)) + "</td><td> <span>最晚注销日期：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.latest_close_date)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>最低授信额度：</span>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_min)) == null ? '' : jade_interp)) + "</td><td> <span>最高授信额度：</span>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_max)) == null ? '' : jade_interp)) + "</td></tr><tr><td colspan=\"2\"><span>近一年月均消费金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_consume)) == null ? '' : jade_interp)) + "</td></tr><tr><td colspan=\"2\"><span>近一年月均消费次数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_sum_consume)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div style=\"clear:both;\"></div></div><div id=\"slide-base\" class=\"swiper-slide detail-slide\"><div class=\"info-detail first-info\"><div class=\"detail-title\"><strong>" + (jade.escape((jade_interp = util.fixedEmpty(database.cus_name)) == null ? '' : jade_interp)) + "</strong></div><div class=\"detail-body\"><table class=\"info-table\"><tr><td> <b>移动电话：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.telArr[0])) == null ? '' : jade_interp)) + "");
	// iterate database.telArr
	;(function(){
	  var $$obj = database.telArr;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var item = $$obj[index];

	if(index > 0 && item != '')
	{
	buf.push("<p class=\"base-tel-arr\">" + (jade.escape((jade_interp = util.fixedEmpty(item)) == null ? '' : jade_interp)) + "</p>");
	}
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var item = $$obj[index];

	if(index > 0 && item != '')
	{
	buf.push("<p class=\"base-tel-arr\">" + (jade.escape((jade_interp = util.fixedEmpty(item)) == null ? '' : jade_interp)) + "</p>");
	}
	    }

	  }
	}).call(this);

	buf.push("</td></tr><tr> <td> <b>证件号码：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.certificate_code)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>是否本地户口：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.is_native_account)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>是否居住满一年：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.rsd_year_flag)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>教育水平：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.educational_level)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>月收入：</b>" + (jade.escape((jade_interp = util.formatMoney(database.monthly_profit)) == null ? '' : jade_interp)) + "</td></tr></table></div></div></div><div id=\"slide-composite\" class=\"swiper-slide detail-slide\"><div class=\"info-detail first-info\"><div class=\"detail-title\"><strong>个贷业务综合指标</strong></div><div class=\"detail-body\"><table class=\"info-table\">\t\t\t\t\t\t\t\t<tr><td><b>已拒贷贷款笔数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.rejected_loan_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>已拒贷贷款金额：</b>" + (jade.escape((jade_interp = util.formatMoney(database.rejected_loan_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>已核销贷款笔数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.canceled_loan_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>已核销贷款金额：</b>" + (jade.escape((jade_interp = util.formatMoney(database.canceled_loan_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>在途贷款笔数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.curr_loan_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>在途贷款金额：</b>" + (jade.escape((jade_interp = util.formatMoney(database.curr_loan_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>在途贷款余额：</b>" + (jade.escape((jade_interp = util.formatMoney(database.curr_loan_bal)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>历史逾期次数： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.overdue_times_his)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>历史逾期本金：</b>" + (jade.escape((jade_interp = util.formatMoney(database.overdue_capital_his)) == null ? '' : jade_interp)) + "</td></tr></table></div></div></div><div class=\"swiper-slide detail-slide finance-slide\"><div class=\"info-detail\"><div class=\"detail-title\"><strong>合计：" + (jade.escape((jade_interp = util.fixedEmpty(database.media_cnt)) == null ? '' : jade_interp)) + "</strong></div><div class=\"detail-body\"><table class=\"info-table\">\t\t\t\t\t\t\t\t<tr><td> <b>卡的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_card)) == null ? '' : jade_interp)) + "</td><td> <b>活期一本通数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_onebk_cdm)) == null ? '' : jade_interp)) + "</td><td> <b>定期一本通数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_onebk_fix)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>折的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_book)) == null ? '' : jade_interp)) + "</td><td> <b>活期折的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_book_cdm)) == null ? '' : jade_interp)) + "</td><td><b>定期折的数量： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_book_fix)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>单的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_bill)) == null ? '' : jade_interp)) + "</td><td> <b>外币定期单的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_bill_foreign)) == null ? '' : jade_interp)) + "</td><td><b>未知类型： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_none)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-detail\"><div class=\"detail-title\"><strong>合计：" + (jade.escape((jade_interp = util.formatMoney(database.total_savings_amt)) == null ? '' : jade_interp)) + "</strong></div><div class=\"detail-body\"><table class=\"info-table\"><tr><td><b>活期余额：</b>" + (jade.escape((jade_interp = util.formatMoney(database.cdm_bal_sum)) == null ? '' : jade_interp)) + "</td><td><b>购买理财：</b>" + (jade.escape((jade_interp = util.formatMoney(database.financing_amt)) == null ? '' : jade_interp)) + "</td><td><b>购买基金：</b>" + (jade.escape((jade_interp = util.formatMoney(database.fund_amt)) == null ? '' : jade_interp)) + "\t\t\t\t\t\t\t\t</td></tr><tr><td><b>定期余额：</b>" + (jade.escape((jade_interp = util.formatMoney(database.fix_bal_sum)) == null ? '' : jade_interp)) + "</td><td><b>购买国债：</b>" + (jade.escape((jade_interp = util.formatMoney(database.national_debt_amt)) == null ? '' : jade_interp)) + "</td><td><b>购买保险：</b>" + (jade.escape((jade_interp = util.formatMoney(database.insurance_amt)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-detail\"><div class=\"detail-title\"><p><b>年月均交易：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.avg_cnt_yearly)) == null ? '' : jade_interp)) + "次，共" + (jade.escape((jade_interp = util.formatMoney(database.avg_amt_yearly)) == null ? '' : jade_interp)) + " </p><p class=\"monthly-stat-counts\"><span> <b>年月均出账：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.avg_cnt_yearly_out)) == null ? '' : jade_interp)) + "次，共" + (jade.escape((jade_interp = util.formatMoney(database.avg_amt_yearly_out)) == null ? '' : jade_interp)) + "</span><span> <b>年月均进账：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.avg_cnt_yearly_in)) == null ? '' : jade_interp)) + "次，共" + (jade.escape((jade_interp = util.formatMoney(database.avg_amt_yearly_in)) == null ? '' : jade_interp)) + "</span></p></div><div style=\"height:190px;\" class=\"detail-body detail-items\"><table class=\"info-table monthly-stat\"><tr class=\"monthly-stat-header\"><td>交易日期</td><td>交易金额</td><td>次数</td><td>交易金额均值</td><td>单笔最大金额</td><td>单笔最小金额</td></tr>");
	if(assetsMonthlyStat){			
	{
	// iterate assetsMonthlyStat						
	;(function(){
	  var $$obj = assetsMonthlyStat						;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var assetStat = $$obj[index];

	buf.push("<tr class=\"even\"><td><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt) ? "" : jade_interp)) + "</span></td><td><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_avg)) == null ? '' : jade_interp)) + "</span></td><td> <span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_max)) == null ? '' : jade_interp)) + "</span></td><td><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_min)) == null ? '' : jade_interp)) + "</span></td></tr>");
	if(assetStat.tb_ml_cpv_assets_monthly_stat.rank_mon_trans_amt_in==1)
	{
	buf.push("<tr class=\"monthly-stat-detail no1\"><td class=\"tips-sub-nav\">进账</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.fixedEmpty(assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_avg_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_max_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_min_in)) == null ? '' : jade_interp)) + "</td></tr>");
	}
	else
	{
	buf.push("<tr class=\"monthly-stat-detail\"><td class=\"tips-sub-nav\">进账</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.fixedEmpty(assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_avg_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_max_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_min_in)) == null ? '' : jade_interp)) + "</td></tr>");
	}
	if(assetStat.tb_ml_cpv_assets_monthly_stat.rank_mon_trans_amt_out==1)
	{
	buf.push("<tr class=\"monthly-stat-detail no1\"><td class=\"tips-sub-nav\">出账</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.fixedEmpty(assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_avg_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_max_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_min_out)) == null ? '' : jade_interp)) + "</td></tr>");
	}
	else
	{
	buf.push("<tr class=\"monthly-stat-detail\"><td class=\"tips-sub-nav\">出账</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.fixedEmpty(assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_avg_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_max_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_min_out)) == null ? '' : jade_interp)) + "</td></tr>");
	}
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var assetStat = $$obj[index];

	buf.push("<tr class=\"even\"><td><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt) ? "" : jade_interp)) + "</span></td><td><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_avg)) == null ? '' : jade_interp)) + "</span></td><td> <span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_max)) == null ? '' : jade_interp)) + "</span></td><td><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_min)) == null ? '' : jade_interp)) + "</span></td></tr>");
	if(assetStat.tb_ml_cpv_assets_monthly_stat.rank_mon_trans_amt_in==1)
	{
	buf.push("<tr class=\"monthly-stat-detail no1\"><td class=\"tips-sub-nav\">进账</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.fixedEmpty(assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_avg_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_max_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_min_in)) == null ? '' : jade_interp)) + "</td></tr>");
	}
	else
	{
	buf.push("<tr class=\"monthly-stat-detail\"><td class=\"tips-sub-nav\">进账</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.fixedEmpty(assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_avg_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_max_in)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_min_in)) == null ? '' : jade_interp)) + "</td></tr>");
	}
	if(assetStat.tb_ml_cpv_assets_monthly_stat.rank_mon_trans_amt_out==1)
	{
	buf.push("<tr class=\"monthly-stat-detail no1\"><td class=\"tips-sub-nav\">出账</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.fixedEmpty(assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_avg_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_max_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_min_out)) == null ? '' : jade_interp)) + "</td></tr>");
	}
	else
	{
	buf.push("<tr class=\"monthly-stat-detail\"><td class=\"tips-sub-nav\">出账</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.fixedEmpty(assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_avg_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_max_out)) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt_min_out)) == null ? '' : jade_interp)) + "</td></tr>");
	}
	    }

	  }
	}).call(this);

	}
	}
	buf.push("</table></div></div></div><div class=\"swiper-slide detail-slide\"><div class=\"info-detail first-info\"><table class=\"info-table\">\t\t\t\t\t\t\t\t<tr><td><b>信用卡数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.credist_card_cnt)) == null ? '' : jade_interp)) + "</td><td> <b>近一年月均消费次数： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_sum_consume)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>信用卡账户数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.acct_num_cnt)) == null ? '' : jade_interp)) + "</td><td><b>近一年月均取现金额： </b>" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_withdrawl)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>办理日期(最早)：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.earliest_open_date)) == null ? '' : jade_interp)) + "</td><td> <b>近一年月均取现次数： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_sum_withdrawl)) == null ? '' : jade_interp)) + "\t</td></tr><tr><td> <b>注销日期(最晚)：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.latest_close_date)) == null ? '' : jade_interp)) + "</td><td><b>近一年月均利息金额： </b>" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_interest)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>最低授信额度：</b>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_min)) == null ? '' : jade_interp)) + "</td><td> <b>近一年月均利息次数： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_sum_interest)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>最高授信额度：</b>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_max)) == null ? '' : jade_interp)) + "</td><td><b>近一年月均费用金额： </b>" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_fee)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>累计授信额度：</b>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_sum)) == null ? '' : jade_interp)) + "</td><td><b>近一年月均费用次数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_sum_fee)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>逾期天数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.overdue_days)) == null ? '' : jade_interp)) + "</td><td><b>逾期数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.overdue_terms)) == null ? '' : jade_interp)) + "</td></tr></table></div><div class=\"info-detail\"><div class=\"detail-title\"><strong>近一年月均消费金额：" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_consume)) == null ? '' : jade_interp)) + "</strong></div><div style=\"height:188px;\" class=\"detail-body detail-items\">\t\t\t\t\t\t\t\t<table class=\"info-table\">");
	if(customerCreditCardInfo && customerCreditCardInfo){		
	{
	// iterate customerCreditCardInfo						
	;(function(){
	  var $$obj = customerCreditCardInfo						;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var assetStat = $$obj[index];

	if ((index%2==0))
	{
	buf.push("<tr><td><b>统计月份：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	else
	{
	buf.push("<tr class=\"even\"><td><b>统计月份：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var assetStat = $$obj[index];

	if ((index%2==0))
	{
	buf.push("<tr><td><b>统计月份：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	else
	{
	buf.push("<tr class=\"even\"><td><b>统计月份：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	    }

	  }
	}).call(this);

	}
	}
	buf.push("</table></div></div></div><div class=\"swiper-slide detail-slide\"><div class=\"info-detail first-info\"><div class=\"detail-title\"><strong>商户名称：" + (jade.escape((jade_interp = util.fixedEmpty(database.mer_name)) == null ? '' : jade_interp)) + "</strong></div><div class=\"detail-body\"><table class=\"info-table\">\t\t\t\t\t\t\t\t<tr><td><b>商户法定代表人姓名：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.mer_legal_name)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>商户拥有pos数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.pos_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td colspan=\"2\"> <b>营业执照注册地址：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.bus_lic_reg_addr)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-detail\"><div class=\"detail-title\"><strong>近一年月均交易金额: " + (jade.escape((jade_interp = util.formatMoney(database.total_amt_ly)) == null ? '' : jade_interp)) + "</strong></div><div id=\"pos-monthly\" style=\"height:240px;\" class=\"detail-body detail-items\"><table class=\"info-table\">");
	for(var i=1;i<=12;i++){
	{
	var key = 'trans_amt_' + i;
	if(i%2==0)
	{
	buf.push("<tr><td> <b>统计月份：</b>" + (jade.escape((jade_interp = moment().subtract(i,'M').format('YYYY-MM')) == null ? '' : jade_interp)) + "</td><td><b>交易金额：</b>" + (jade.escape((jade_interp = util.formatMoney(database[key])) == null ? '' : jade_interp)) + "</td></tr>");
	}
	else
	{
	buf.push("<tr class=\"even\"><td> <b>统计月份：</b>" + (jade.escape((jade_interp = moment().subtract(i,'M').format('YYYY-MM')) == null ? '' : jade_interp)) + "</td><td><b>交易金额：</b>" + (jade.escape((jade_interp = util.formatMoney(database[key])) == null ? '' : jade_interp)) + "</td></tr>");
	}
	}
	}
	buf.push("</table></div></div></div></div></div></div><div style=\"clear:both;\"></div><div class=\"profile-footer\"></div>");}.call(this,"Number" in locals_for_with?locals_for_with.Number:typeof Number!=="undefined"?Number:undefined,"assetsMonthlyStat" in locals_for_with?locals_for_with.assetsMonthlyStat:typeof assetsMonthlyStat!=="undefined"?assetsMonthlyStat:undefined,"customerCreditCardInfo" in locals_for_with?locals_for_with.customerCreditCardInfo:typeof customerCreditCardInfo!=="undefined"?customerCreditCardInfo:undefined,"database" in locals_for_with?locals_for_with.database:typeof database!=="undefined"?database:undefined,"isNaN" in locals_for_with?locals_for_with.isNaN:typeof isNaN!=="undefined"?isNaN:undefined,"moment" in locals_for_with?locals_for_with.moment:typeof moment!=="undefined"?moment:undefined,"parseInt" in locals_for_with?locals_for_with.parseInt:typeof parseInt!=="undefined"?parseInt:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js
	// version : 2.1.0
	// author : Tim Wood
	// license : MIT
	// momentjs.com

	(function (undefined) {

	    /************************************
	        Constants
	    ************************************/

	    var moment,
	        VERSION = "2.1.0",
	        round = Math.round, i,
	        // internal storage for language config files
	        languages = {},

	        // check for nodeJS
	        hasModule = (typeof module !== 'undefined' && module.exports),

	        // ASP.NET json date format regex
	        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
	        aspNetTimeSpanJsonRegex = /(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,

	        // format tokens
	        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
	        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

	        // parsing token regexes
	        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
	        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
	        parseTokenThreeDigits = /\d{3}/, // 000 - 999
	        parseTokenFourDigits = /\d{1,4}/, // 0 - 9999
	        parseTokenSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
	        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
	        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, // +00:00 -00:00 +0000 -0000 or Z
	        parseTokenT = /T/i, // T (ISO seperator)
	        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

	        // preliminary iso regex
	        // 0000-00-00 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000
	        isoRegex = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
	        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

	        // iso time formats and regexes
	        isoTimes = [
	            ['HH:mm:ss.S', /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
	            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
	            ['HH:mm', /(T| )\d\d:\d\d/],
	            ['HH', /(T| )\d\d/]
	        ],

	        // timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
	        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

	        // getter and setter names
	        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
	        unitMillisecondFactors = {
	            'Milliseconds' : 1,
	            'Seconds' : 1e3,
	            'Minutes' : 6e4,
	            'Hours' : 36e5,
	            'Days' : 864e5,
	            'Months' : 2592e6,
	            'Years' : 31536e6
	        },

	        unitAliases = {
	            ms : 'millisecond',
	            s : 'second',
	            m : 'minute',
	            h : 'hour',
	            d : 'day',
	            w : 'week',
	            M : 'month',
	            y : 'year'
	        },

	        // format function strings
	        formatFunctions = {},

	        // tokens to ordinalize and pad
	        ordinalizeTokens = 'DDD w W M D d'.split(' '),
	        paddedTokens = 'M D H h m s w W'.split(' '),

	        formatTokenFunctions = {
	            M    : function () {
	                return this.month() + 1;
	            },
	            MMM  : function (format) {
	                return this.lang().monthsShort(this, format);
	            },
	            MMMM : function (format) {
	                return this.lang().months(this, format);
	            },
	            D    : function () {
	                return this.date();
	            },
	            DDD  : function () {
	                return this.dayOfYear();
	            },
	            d    : function () {
	                return this.day();
	            },
	            dd   : function (format) {
	                return this.lang().weekdaysMin(this, format);
	            },
	            ddd  : function (format) {
	                return this.lang().weekdaysShort(this, format);
	            },
	            dddd : function (format) {
	                return this.lang().weekdays(this, format);
	            },
	            w    : function () {
	                return this.week();
	            },
	            W    : function () {
	                return this.isoWeek();
	            },
	            YY   : function () {
	                return leftZeroFill(this.year() % 100, 2);
	            },
	            YYYY : function () {
	                return leftZeroFill(this.year(), 4);
	            },
	            YYYYY : function () {
	                return leftZeroFill(this.year(), 5);
	            },
	            gg   : function () {
	                return leftZeroFill(this.weekYear() % 100, 2);
	            },
	            gggg : function () {
	                return this.weekYear();
	            },
	            ggggg : function () {
	                return leftZeroFill(this.weekYear(), 5);
	            },
	            GG   : function () {
	                return leftZeroFill(this.isoWeekYear() % 100, 2);
	            },
	            GGGG : function () {
	                return this.isoWeekYear();
	            },
	            GGGGG : function () {
	                return leftZeroFill(this.isoWeekYear(), 5);
	            },
	            e : function () {
	                return this.weekday();
	            },
	            E : function () {
	                return this.isoWeekday();
	            },
	            a    : function () {
	                return this.lang().meridiem(this.hours(), this.minutes(), true);
	            },
	            A    : function () {
	                return this.lang().meridiem(this.hours(), this.minutes(), false);
	            },
	            H    : function () {
	                return this.hours();
	            },
	            h    : function () {
	                return this.hours() % 12 || 12;
	            },
	            m    : function () {
	                return this.minutes();
	            },
	            s    : function () {
	                return this.seconds();
	            },
	            S    : function () {
	                return ~~(this.milliseconds() / 100);
	            },
	            SS   : function () {
	                return leftZeroFill(~~(this.milliseconds() / 10), 2);
	            },
	            SSS  : function () {
	                return leftZeroFill(this.milliseconds(), 3);
	            },
	            Z    : function () {
	                var a = -this.zone(),
	                    b = "+";
	                if (a < 0) {
	                    a = -a;
	                    b = "-";
	                }
	                return b + leftZeroFill(~~(a / 60), 2) + ":" + leftZeroFill(~~a % 60, 2);
	            },
	            ZZ   : function () {
	                var a = -this.zone(),
	                    b = "+";
	                if (a < 0) {
	                    a = -a;
	                    b = "-";
	                }
	                return b + leftZeroFill(~~(10 * a / 6), 4);
	            },
	            z : function () {
	                return this.zoneAbbr();
	            },
	            zz : function () {
	                return this.zoneName();
	            },
	            X    : function () {
	                return this.unix();
	            }
	        };

	    function padToken(func, count) {
	        return function (a) {
	            return leftZeroFill(func.call(this, a), count);
	        };
	    }
	    function ordinalizeToken(func, period) {
	        return function (a) {
	            return this.lang().ordinal(func.call(this, a), period);
	        };
	    }

	    while (ordinalizeTokens.length) {
	        i = ordinalizeTokens.pop();
	        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
	    }
	    while (paddedTokens.length) {
	        i = paddedTokens.pop();
	        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
	    }
	    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


	    /************************************
	        Constructors
	    ************************************/

	    function Language() {

	    }

	    // Moment prototype object
	    function Moment(config) {
	        extend(this, config);
	    }

	    // Duration Constructor
	    function Duration(duration) {
	        var years = duration.years || duration.year || duration.y || 0,
	            months = duration.months || duration.month || duration.M || 0,
	            weeks = duration.weeks || duration.week || duration.w || 0,
	            days = duration.days || duration.day || duration.d || 0,
	            hours = duration.hours || duration.hour || duration.h || 0,
	            minutes = duration.minutes || duration.minute || duration.m || 0,
	            seconds = duration.seconds || duration.second || duration.s || 0,
	            milliseconds = duration.milliseconds || duration.millisecond || duration.ms || 0;

	        // store reference to input for deterministic cloning
	        this._input = duration;

	        // representation for dateAddRemove
	        this._milliseconds = milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 36e5; // 1000 * 60 * 60
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = days +
	            weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = months +
	            years * 12;

	        this._data = {};

	        this._bubble();
	    }


	    /************************************
	        Helpers
	    ************************************/


	    function extend(a, b) {
	        for (var i in b) {
	            if (b.hasOwnProperty(i)) {
	                a[i] = b[i];
	            }
	        }
	        return a;
	    }

	    function absRound(number) {
	        if (number < 0) {
	            return Math.ceil(number);
	        } else {
	            return Math.floor(number);
	        }
	    }

	    // left zero fill a number
	    // see http://jsperf.com/left-zero-filling for performance comparison
	    function leftZeroFill(number, targetLength) {
	        var output = number + '';
	        while (output.length < targetLength) {
	            output = '0' + output;
	        }
	        return output;
	    }

	    // helper function for _.addTime and _.subtractTime
	    function addOrSubtractDurationFromMoment(mom, duration, isAdding, ignoreUpdateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = duration._days,
	            months = duration._months,
	            minutes,
	            hours,
	            currentDate;

	        if (milliseconds) {
	            mom._d.setTime(+mom._d + milliseconds * isAdding);
	        }
	        // store the minutes and hours so we can restore them
	        if (days || months) {
	            minutes = mom.minute();
	            hours = mom.hour();
	        }
	        if (days) {
	            mom.date(mom.date() + days * isAdding);
	        }
	        if (months) {
	            mom.month(mom.month() + months * isAdding);
	        }
	        if (milliseconds && !ignoreUpdateOffset) {
	            moment.updateOffset(mom);
	        }
	        // restore the minutes and hours after possibly changing dst
	        if (days || months) {
	            mom.minute(minutes);
	            mom.hour(hours);
	        }
	    }

	    // check if is an array
	    function isArray(input) {
	        return Object.prototype.toString.call(input) === '[object Array]';
	    }

	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if (~~array1[i] !== ~~array2[i]) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }

	    function normalizeUnits(units) {
	        return units ? unitAliases[units] || units.toLowerCase().replace(/(.)s$/, '$1') : units;
	    }


	    /************************************
	        Languages
	    ************************************/


	    Language.prototype = {
	        set : function (config) {
	            var prop, i;
	            for (i in config) {
	                prop = config[i];
	                if (typeof prop === 'function') {
	                    this[i] = prop;
	                } else {
	                    this['_' + i] = prop;
	                }
	            }
	        },

	        _months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
	        months : function (m) {
	            return this._months[m.month()];
	        },

	        _monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
	        monthsShort : function (m) {
	            return this._monthsShort[m.month()];
	        },

	        monthsParse : function (monthName) {
	            var i, mom, regex;

	            if (!this._monthsParse) {
	                this._monthsParse = [];
	            }

	            for (i = 0; i < 12; i++) {
	                // make the regex if we don't have it already
	                if (!this._monthsParse[i]) {
	                    mom = moment([2000, i]);
	                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	                }
	                // test the regex
	                if (this._monthsParse[i].test(monthName)) {
	                    return i;
	                }
	            }
	        },

	        _weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
	        weekdays : function (m) {
	            return this._weekdays[m.day()];
	        },

	        _weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
	        weekdaysShort : function (m) {
	            return this._weekdaysShort[m.day()];
	        },

	        _weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
	        weekdaysMin : function (m) {
	            return this._weekdaysMin[m.day()];
	        },

	        weekdaysParse : function (weekdayName) {
	            var i, mom, regex;

	            if (!this._weekdaysParse) {
	                this._weekdaysParse = [];
	            }

	            for (i = 0; i < 7; i++) {
	                // make the regex if we don't have it already
	                if (!this._weekdaysParse[i]) {
	                    mom = moment([2000, 1]).day(i);
	                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	                }
	                // test the regex
	                if (this._weekdaysParse[i].test(weekdayName)) {
	                    return i;
	                }
	            }
	        },

	        _longDateFormat : {
	            LT : "h:mm A",
	            L : "MM/DD/YYYY",
	            LL : "MMMM D YYYY",
	            LLL : "MMMM D YYYY LT",
	            LLLL : "dddd, MMMM D YYYY LT"
	        },
	        longDateFormat : function (key) {
	            var output = this._longDateFormat[key];
	            if (!output && this._longDateFormat[key.toUpperCase()]) {
	                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
	                    return val.slice(1);
	                });
	                this._longDateFormat[key] = output;
	            }
	            return output;
	        },

	        isPM : function (input) {
	            return ((input + '').toLowerCase()[0] === 'p');
	        },

	        _meridiemParse : /[ap]\.?m?\.?/i,
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'pm' : 'PM';
	            } else {
	                return isLower ? 'am' : 'AM';
	            }
	        },

	        _calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        calendar : function (key, mom) {
	            var output = this._calendar[key];
	            return typeof output === 'function' ? output.apply(mom) : output;
	        },

	        _relativeTime : {
	            future : "in %s",
	            past : "%s ago",
	            s : "a few seconds",
	            m : "a minute",
	            mm : "%d minutes",
	            h : "an hour",
	            hh : "%d hours",
	            d : "a day",
	            dd : "%d days",
	            M : "a month",
	            MM : "%d months",
	            y : "a year",
	            yy : "%d years"
	        },
	        relativeTime : function (number, withoutSuffix, string, isFuture) {
	            var output = this._relativeTime[string];
	            return (typeof output === 'function') ?
	                output(number, withoutSuffix, string, isFuture) :
	                output.replace(/%d/i, number);
	        },
	        pastFuture : function (diff, output) {
	            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
	        },

	        ordinal : function (number) {
	            return this._ordinal.replace("%d", number);
	        },
	        _ordinal : "%d",

	        preparse : function (string) {
	            return string;
	        },

	        postformat : function (string) {
	            return string;
	        },

	        week : function (mom) {
	            return weekOfYear(mom, this._week.dow, this._week.doy).week;
	        },
	        _week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    };

	    // Loads a language definition into the `languages` cache.  The function
	    // takes a key and optionally values.  If not in the browser and no values
	    // are provided, it will load the language file module.  As a convenience,
	    // this function also returns the language values.
	    function loadLang(key, values) {
	        values.abbr = key;
	        if (!languages[key]) {
	            languages[key] = new Language();
	        }
	        languages[key].set(values);
	        return languages[key];
	    }

	    // Determines which language definition to use and returns it.
	    //
	    // With no parameters, it will return the global language.  If you
	    // pass in a language key, such as 'en', it will return the
	    // definition for 'en', so long as 'en' has already been loaded using
	    // moment.lang.
	    function getLangDefinition(key) {
	        if (!key) {
	            return moment.fn._lang;
	        }
	        if (!languages[key] && hasModule) {
	            try {
	                !(function webpackMissingModule() { var e = new Error("Cannot find module \"./lang\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
	            } catch (e) {
	                // call with no params to set to default
	                return moment.fn._lang;
	            }
	        }
	        return languages[key];
	    }


	    /************************************
	        Formatting
	    ************************************/


	    function removeFormattingTokens(input) {
	        if (input.match(/\[.*\]/)) {
	            return input.replace(/^\[|\]$/g, "");
	        }
	        return input.replace(/\\/g, "");
	    }

	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;

	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }

	        return function (mom) {
	            var output = "";
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }

	    // format date using native date object
	    function formatMoment(m, format) {
	        var i = 5;

	        function replaceLongDateFormatTokens(input) {
	            return m.lang().longDateFormat(input) || input;
	        }

	        while (i-- && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	        }

	        if (!formatFunctions[format]) {
	            formatFunctions[format] = makeFormatFunction(format);
	        }

	        return formatFunctions[format](m);
	    }


	    /************************************
	        Parsing
	    ************************************/


	    // get the regex to find the next token
	    function getParseRegexForToken(token, config) {
	        switch (token) {
	        case 'DDDD':
	            return parseTokenThreeDigits;
	        case 'YYYY':
	            return parseTokenFourDigits;
	        case 'YYYYY':
	            return parseTokenSixDigits;
	        case 'S':
	        case 'SS':
	        case 'SSS':
	        case 'DDD':
	            return parseTokenOneToThreeDigits;
	        case 'MMM':
	        case 'MMMM':
	        case 'dd':
	        case 'ddd':
	        case 'dddd':
	            return parseTokenWord;
	        case 'a':
	        case 'A':
	            return getLangDefinition(config._l)._meridiemParse;
	        case 'X':
	            return parseTokenTimestampMs;
	        case 'Z':
	        case 'ZZ':
	            return parseTokenTimezone;
	        case 'T':
	            return parseTokenT;
	        case 'MM':
	        case 'DD':
	        case 'YY':
	        case 'HH':
	        case 'hh':
	        case 'mm':
	        case 'ss':
	        case 'M':
	        case 'D':
	        case 'd':
	        case 'H':
	        case 'h':
	        case 'm':
	        case 's':
	            return parseTokenOneOrTwoDigits;
	        default :
	            return new RegExp(token.replace('\\', ''));
	        }
	    }

	    function timezoneMinutesFromString(string) {
	        var tzchunk = (parseTokenTimezone.exec(string) || [])[0],
	            parts = (tzchunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
	            minutes = +(parts[1] * 60) + ~~parts[2];

	        return parts[0] === '+' ? -minutes : minutes;
	    }

	    // function to convert string input to date
	    function addTimeToArrayFromToken(token, input, config) {
	        var a, datePartArray = config._a;

	        switch (token) {
	        // MONTH
	        case 'M' : // fall through to MM
	        case 'MM' :
	            datePartArray[1] = (input == null) ? 0 : ~~input - 1;
	            break;
	        case 'MMM' : // fall through to MMMM
	        case 'MMMM' :
	            a = getLangDefinition(config._l).monthsParse(input);
	            // if we didn't find a month name, mark the date as invalid.
	            if (a != null) {
	                datePartArray[1] = a;
	            } else {
	                config._isValid = false;
	            }
	            break;
	        // DAY OF MONTH
	        case 'D' : // fall through to DDDD
	        case 'DD' : // fall through to DDDD
	        case 'DDD' : // fall through to DDDD
	        case 'DDDD' :
	            if (input != null) {
	                datePartArray[2] = ~~input;
	            }
	            break;
	        // YEAR
	        case 'YY' :
	            datePartArray[0] = ~~input + (~~input > 68 ? 1900 : 2000);
	            break;
	        case 'YYYY' :
	        case 'YYYYY' :
	            datePartArray[0] = ~~input;
	            break;
	        // AM / PM
	        case 'a' : // fall through to A
	        case 'A' :
	            config._isPm = getLangDefinition(config._l).isPM(input);
	            break;
	        // 24 HOUR
	        case 'H' : // fall through to hh
	        case 'HH' : // fall through to hh
	        case 'h' : // fall through to hh
	        case 'hh' :
	            datePartArray[3] = ~~input;
	            break;
	        // MINUTE
	        case 'm' : // fall through to mm
	        case 'mm' :
	            datePartArray[4] = ~~input;
	            break;
	        // SECOND
	        case 's' : // fall through to ss
	        case 'ss' :
	            datePartArray[5] = ~~input;
	            break;
	        // MILLISECOND
	        case 'S' :
	        case 'SS' :
	        case 'SSS' :
	            datePartArray[6] = ~~ (('0.' + input) * 1000);
	            break;
	        // UNIX TIMESTAMP WITH MS
	        case 'X':
	            config._d = new Date(parseFloat(input) * 1000);
	            break;
	        // TIMEZONE
	        case 'Z' : // fall through to ZZ
	        case 'ZZ' :
	            config._useUTC = true;
	            config._tzm = timezoneMinutesFromString(input);
	            break;
	        }

	        // if the input is null, the date is not valid
	        if (input == null) {
	            config._isValid = false;
	        }
	    }

	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function dateFromArray(config) {
	        var i, date, input = [];

	        if (config._d) {
	            return;
	        }

	        for (i = 0; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }

	        // add the offsets to the time to be parsed so that we can have a clean array for checking isValid
	        input[3] += ~~((config._tzm || 0) / 60);
	        input[4] += ~~((config._tzm || 0) % 60);

	        date = new Date(0);

	        if (config._useUTC) {
	            date.setUTCFullYear(input[0], input[1], input[2]);
	            date.setUTCHours(input[3], input[4], input[5], input[6]);
	        } else {
	            date.setFullYear(input[0], input[1], input[2]);
	            date.setHours(input[3], input[4], input[5], input[6]);
	        }

	        config._d = date;
	    }

	    // date from string and format string
	    function makeDateFromStringAndFormat(config) {
	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var tokens = config._f.match(formattingTokens),
	            string = config._i,
	            i, parsedInput;

	        config._a = [];

	        for (i = 0; i < tokens.length; i++) {
	            parsedInput = (getParseRegexForToken(tokens[i], config).exec(string) || [])[0];
	            if (parsedInput) {
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	            }
	            // don't parse if its not a known token
	            if (formatTokenFunctions[tokens[i]]) {
	                addTimeToArrayFromToken(tokens[i], parsedInput, config);
	            }
	        }

	        // add remaining unparsed input to the string
	        if (string) {
	            config._il = string;
	        }

	        // handle am pm
	        if (config._isPm && config._a[3] < 12) {
	            config._a[3] += 12;
	        }
	        // if is 12 am, change hours to 0
	        if (config._isPm === false && config._a[3] === 12) {
	            config._a[3] = 0;
	        }
	        // return
	        dateFromArray(config);
	    }

	    // date from string and array of format strings
	    function makeDateFromStringAndArray(config) {
	        var tempConfig,
	            tempMoment,
	            bestMoment,

	            scoreToBeat = 99,
	            i,
	            currentScore;

	        for (i = 0; i < config._f.length; i++) {
	            tempConfig = extend({}, config);
	            tempConfig._f = config._f[i];
	            makeDateFromStringAndFormat(tempConfig);
	            tempMoment = new Moment(tempConfig);

	            currentScore = compareArrays(tempConfig._a, tempMoment.toArray());

	            // if there is any input that was not parsed
	            // add a penalty for that format
	            if (tempMoment._il) {
	                currentScore += tempMoment._il.length;
	            }

	            if (currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempMoment;
	            }
	        }

	        extend(config, bestMoment);
	    }

	    // date from iso format
	    function makeDateFromString(config) {
	        var i,
	            string = config._i,
	            match = isoRegex.exec(string);

	        if (match) {
	            // match[2] should be "T" or undefined
	            config._f = 'YYYY-MM-DD' + (match[2] || " ");
	            for (i = 0; i < 4; i++) {
	                if (isoTimes[i][1].exec(string)) {
	                    config._f += isoTimes[i][0];
	                    break;
	                }
	            }
	            if (parseTokenTimezone.exec(string)) {
	                config._f += " Z";
	            }
	            makeDateFromStringAndFormat(config);
	        } else {
	            config._d = new Date(string);
	        }
	    }

	    function makeDateFromInput(config) {
	        var input = config._i,
	            matched = aspNetJsonRegex.exec(input);

	        if (input === undefined) {
	            config._d = new Date();
	        } else if (matched) {
	            config._d = new Date(+matched[1]);
	        } else if (typeof input === 'string') {
	            makeDateFromString(config);
	        } else if (isArray(input)) {
	            config._a = input.slice(0);
	            dateFromArray(config);
	        } else {
	            config._d = input instanceof Date ? new Date(+input) : new Date(input);
	        }
	    }


	    /************************************
	        Relative Time
	    ************************************/


	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
	        return lang.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }

	    function relativeTime(milliseconds, withoutSuffix, lang) {
	        var seconds = round(Math.abs(milliseconds) / 1000),
	            minutes = round(seconds / 60),
	            hours = round(minutes / 60),
	            days = round(hours / 24),
	            years = round(days / 365),
	            args = seconds < 45 && ['s', seconds] ||
	                minutes === 1 && ['m'] ||
	                minutes < 45 && ['mm', minutes] ||
	                hours === 1 && ['h'] ||
	                hours < 22 && ['hh', hours] ||
	                days === 1 && ['d'] ||
	                days <= 25 && ['dd', days] ||
	                days <= 45 && ['M'] ||
	                days < 345 && ['MM', round(days / 30)] ||
	                years === 1 && ['y'] || ['yy', years];
	        args[2] = withoutSuffix;
	        args[3] = milliseconds > 0;
	        args[4] = lang;
	        return substituteTimeAgo.apply({}, args);
	    }


	    /************************************
	        Week of Year
	    ************************************/


	    // firstDayOfWeek       0 = sun, 6 = sat
	    //                      the day of the week that starts the week
	    //                      (usually sunday or monday)
	    // firstDayOfWeekOfYear 0 = sun, 6 = sat
	    //                      the first week is the week that contains the first
	    //                      of this day of the week
	    //                      (eg. ISO weeks use thursday (4))
	    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
	        var end = firstDayOfWeekOfYear - firstDayOfWeek,
	            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
	            adjustedMoment;


	        if (daysToDayOfWeek > end) {
	            daysToDayOfWeek -= 7;
	        }

	        if (daysToDayOfWeek < end - 7) {
	            daysToDayOfWeek += 7;
	        }

	        adjustedMoment = moment(mom).add('d', daysToDayOfWeek);
	        return {
	            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
	            year: adjustedMoment.year()
	        };
	    }


	    /************************************
	        Top Level Functions
	    ************************************/

	    function makeMoment(config) {
	        var input = config._i,
	            format = config._f;

	        if (input === null || input === '') {
	            return null;
	        }

	        if (typeof input === 'string') {
	            config._i = input = getLangDefinition().preparse(input);
	        }

	        if (moment.isMoment(input)) {
	            config = extend({}, input);
	            config._d = new Date(+input._d);
	        } else if (format) {
	            if (isArray(format)) {
	                makeDateFromStringAndArray(config);
	            } else {
	                makeDateFromStringAndFormat(config);
	            }
	        } else {
	            makeDateFromInput(config);
	        }

	        return new Moment(config);
	    }

	    moment = function (input, format, lang) {
	        return makeMoment({
	            _i : input,
	            _f : format,
	            _l : lang,
	            _isUTC : false
	        });
	    };

	    // creating with utc
	    moment.utc = function (input, format, lang) {
	        return makeMoment({
	            _useUTC : true,
	            _isUTC : true,
	            _l : lang,
	            _i : input,
	            _f : format
	        });
	    };

	    // creating with unix timestamp (in seconds)
	    moment.unix = function (input) {
	        return moment(input * 1000);
	    };

	    // duration
	    moment.duration = function (input, key) {
	        var isDuration = moment.isDuration(input),
	            isNumber = (typeof input === 'number'),
	            duration = (isDuration ? input._input : (isNumber ? {} : input)),
	            matched = aspNetTimeSpanJsonRegex.exec(input),
	            sign,
	            ret;

	        if (isNumber) {
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (matched) {
	            sign = (matched[1] === "-") ? -1 : 1;
	            duration = {
	                y: 0,
	                d: ~~matched[2] * sign,
	                h: ~~matched[3] * sign,
	                m: ~~matched[4] * sign,
	                s: ~~matched[5] * sign,
	                ms: ~~matched[6] * sign
	            };
	        }

	        ret = new Duration(duration);

	        if (isDuration && input.hasOwnProperty('_lang')) {
	            ret._lang = input._lang;
	        }

	        return ret;
	    };

	    // version number
	    moment.version = VERSION;

	    // default format
	    moment.defaultFormat = isoFormat;

	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    moment.updateOffset = function () {};

	    // This function will load languages and then set the global language.  If
	    // no arguments are passed in, it will simply return the current global
	    // language key.
	    moment.lang = function (key, values) {
	        if (!key) {
	            return moment.fn._lang._abbr;
	        }
	        if (values) {
	            loadLang(key, values);
	        } else if (!languages[key]) {
	            getLangDefinition(key);
	        }
	        moment.duration.fn._lang = moment.fn._lang = getLangDefinition(key);
	    };

	    // returns language data
	    moment.langData = function (key) {
	        if (key && key._lang && key._lang._abbr) {
	            key = key._lang._abbr;
	        }
	        return getLangDefinition(key);
	    };

	    // compare moment object
	    moment.isMoment = function (obj) {
	        return obj instanceof Moment;
	    };

	    // for typechecking Duration objects
	    moment.isDuration = function (obj) {
	        return obj instanceof Duration;
	    };


	    /************************************
	        Moment Prototype
	    ************************************/


	    moment.fn = Moment.prototype = {

	        clone : function () {
	            return moment(this);
	        },

	        valueOf : function () {
	            return +this._d + ((this._offset || 0) * 60000);
	        },

	        unix : function () {
	            return Math.floor(+this / 1000);
	        },

	        toString : function () {
	            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
	        },

	        toDate : function () {
	            return this._offset ? new Date(+this) : this._d;
	        },

	        toISOString : function () {
	            return formatMoment(moment(this).utc(), 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	        },

	        toArray : function () {
	            var m = this;
	            return [
	                m.year(),
	                m.month(),
	                m.date(),
	                m.hours(),
	                m.minutes(),
	                m.seconds(),
	                m.milliseconds()
	            ];
	        },

	        isValid : function () {
	            if (this._isValid == null) {
	                if (this._a) {
	                    this._isValid = !compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray());
	                } else {
	                    this._isValid = !isNaN(this._d.getTime());
	                }
	            }
	            return !!this._isValid;
	        },

	        utc : function () {
	            return this.zone(0);
	        },

	        local : function () {
	            this.zone(0);
	            this._isUTC = false;
	            return this;
	        },

	        format : function (inputString) {
	            var output = formatMoment(this, inputString || moment.defaultFormat);
	            return this.lang().postformat(output);
	        },

	        add : function (input, val) {
	            var dur;
	            // switch args to support add('s', 1) and add(1, 's')
	            if (typeof input === 'string') {
	                dur = moment.duration(+val, input);
	            } else {
	                dur = moment.duration(input, val);
	            }
	            addOrSubtractDurationFromMoment(this, dur, 1);
	            return this;
	        },

	        subtract : function (input, val) {
	            var dur;
	            // switch args to support subtract('s', 1) and subtract(1, 's')
	            if (typeof input === 'string') {
	                dur = moment.duration(+val, input);
	            } else {
	                dur = moment.duration(input, val);
	            }
	            addOrSubtractDurationFromMoment(this, dur, -1);
	            return this;
	        },

	        diff : function (input, units, asFloat) {
	            var that = this._isUTC ? moment(input).zone(this._offset || 0) : moment(input).local(),
	                zoneDiff = (this.zone() - that.zone()) * 6e4,
	                diff, output;

	            units = normalizeUnits(units);

	            if (units === 'year' || units === 'month') {
	                // average number of days in the months in the given dates
	                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
	                // difference in months
	                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
	                // adjust by taking difference in days, average number of days
	                // and dst in the given months.
	                output += ((this - moment(this).startOf('month')) -
	                        (that - moment(that).startOf('month'))) / diff;
	                // same as above but with zones, to negate all dst
	                output -= ((this.zone() - moment(this).startOf('month').zone()) -
	                        (that.zone() - moment(that).startOf('month').zone())) * 6e4 / diff;
	                if (units === 'year') {
	                    output = output / 12;
	                }
	            } else {
	                diff = (this - that);
	                output = units === 'second' ? diff / 1e3 : // 1000
	                    units === 'minute' ? diff / 6e4 : // 1000 * 60
	                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
	                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                    diff;
	            }
	            return asFloat ? output : absRound(output);
	        },

	        from : function (time, withoutSuffix) {
	            return moment.duration(this.diff(time)).lang(this.lang()._abbr).humanize(!withoutSuffix);
	        },

	        fromNow : function (withoutSuffix) {
	            return this.from(moment(), withoutSuffix);
	        },

	        calendar : function () {
	            var diff = this.diff(moment().startOf('day'), 'days', true),
	                format = diff < -6 ? 'sameElse' :
	                diff < -1 ? 'lastWeek' :
	                diff < 0 ? 'lastDay' :
	                diff < 1 ? 'sameDay' :
	                diff < 2 ? 'nextDay' :
	                diff < 7 ? 'nextWeek' : 'sameElse';
	            return this.format(this.lang().calendar(format, this));
	        },

	        isLeapYear : function () {
	            var year = this.year();
	            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	        },

	        isDST : function () {
	            return (this.zone() < this.clone().month(0).zone() ||
	                this.zone() < this.clone().month(5).zone());
	        },

	        day : function (input) {
	            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	            if (input != null) {
	                if (typeof input === 'string') {
	                    input = this.lang().weekdaysParse(input);
	                    if (typeof input !== 'number') {
	                        return this;
	                    }
	                }
	                return this.add({ d : input - day });
	            } else {
	                return day;
	            }
	        },

	        month : function (input) {
	            var utc = this._isUTC ? 'UTC' : '',
	                dayOfMonth,
	                daysInMonth;

	            if (input != null) {
	                if (typeof input === 'string') {
	                    input = this.lang().monthsParse(input);
	                    if (typeof input !== 'number') {
	                        return this;
	                    }
	                }

	                dayOfMonth = this.date();
	                this.date(1);
	                this._d['set' + utc + 'Month'](input);
	                this.date(Math.min(dayOfMonth, this.daysInMonth()));

	                moment.updateOffset(this);
	                return this;
	            } else {
	                return this._d['get' + utc + 'Month']();
	            }
	        },

	        startOf: function (units) {
	            units = normalizeUnits(units);
	            // the following switch intentionally omits break keywords
	            // to utilize falling through the cases.
	            switch (units) {
	            case 'year':
	                this.month(0);
	                /* falls through */
	            case 'month':
	                this.date(1);
	                /* falls through */
	            case 'week':
	            case 'day':
	                this.hours(0);
	                /* falls through */
	            case 'hour':
	                this.minutes(0);
	                /* falls through */
	            case 'minute':
	                this.seconds(0);
	                /* falls through */
	            case 'second':
	                this.milliseconds(0);
	                /* falls through */
	            }

	            // weeks are a special case
	            if (units === 'week') {
	                this.weekday(0);
	            }

	            return this;
	        },

	        endOf: function (units) {
	            return this.startOf(units).add(units, 1).subtract('ms', 1);
	        },

	        isAfter: function (input, units) {
	            units = typeof units !== 'undefined' ? units : 'millisecond';
	            return +this.clone().startOf(units) > +moment(input).startOf(units);
	        },

	        isBefore: function (input, units) {
	            units = typeof units !== 'undefined' ? units : 'millisecond';
	            return +this.clone().startOf(units) < +moment(input).startOf(units);
	        },

	        isSame: function (input, units) {
	            units = typeof units !== 'undefined' ? units : 'millisecond';
	            return +this.clone().startOf(units) === +moment(input).startOf(units);
	        },

	        min: function (other) {
	            other = moment.apply(null, arguments);
	            return other < this ? this : other;
	        },

	        max: function (other) {
	            other = moment.apply(null, arguments);
	            return other > this ? this : other;
	        },

	        zone : function (input) {
	            var offset = this._offset || 0;
	            if (input != null) {
	                if (typeof input === "string") {
	                    input = timezoneMinutesFromString(input);
	                }
	                if (Math.abs(input) < 16) {
	                    input = input * 60;
	                }
	                this._offset = input;
	                this._isUTC = true;
	                if (offset !== input) {
	                    addOrSubtractDurationFromMoment(this, moment.duration(offset - input, 'm'), 1, true);
	                }
	            } else {
	                return this._isUTC ? offset : this._d.getTimezoneOffset();
	            }
	            return this;
	        },

	        zoneAbbr : function () {
	            return this._isUTC ? "UTC" : "";
	        },

	        zoneName : function () {
	            return this._isUTC ? "Coordinated Universal Time" : "";
	        },

	        daysInMonth : function () {
	            return moment.utc([this.year(), this.month() + 1, 0]).date();
	        },

	        dayOfYear : function (input) {
	            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
	            return input == null ? dayOfYear : this.add("d", (input - dayOfYear));
	        },

	        weekYear : function (input) {
	            var year = weekOfYear(this, this.lang()._week.dow, this.lang()._week.doy).year;
	            return input == null ? year : this.add("y", (input - year));
	        },

	        isoWeekYear : function (input) {
	            var year = weekOfYear(this, 1, 4).year;
	            return input == null ? year : this.add("y", (input - year));
	        },

	        week : function (input) {
	            var week = this.lang().week(this);
	            return input == null ? week : this.add("d", (input - week) * 7);
	        },

	        isoWeek : function (input) {
	            var week = weekOfYear(this, 1, 4).week;
	            return input == null ? week : this.add("d", (input - week) * 7);
	        },

	        weekday : function (input) {
	            var weekday = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
	            return input == null ? weekday : this.add("d", input - weekday);
	        },

	        isoWeekday : function (input) {
	            // behaves the same as moment#day except
	            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	            // as a setter, sunday should belong to the previous week.
	            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
	        },

	        // If passed a language key, it will set the language for this
	        // instance.  Otherwise, it will return the language configuration
	        // variables for this instance.
	        lang : function (key) {
	            if (key === undefined) {
	                return this._lang;
	            } else {
	                this._lang = getLangDefinition(key);
	                return this;
	            }
	        }
	    };

	    // helper for adding shortcuts
	    function makeGetterAndSetter(name, key) {
	        moment.fn[name] = moment.fn[name + 's'] = function (input) {
	            var utc = this._isUTC ? 'UTC' : '';
	            if (input != null) {
	                this._d['set' + utc + key](input);
	                moment.updateOffset(this);
	                return this;
	            } else {
	                return this._d['get' + utc + key]();
	            }
	        };
	    }

	    // loop through and add shortcuts (Month, Date, Hours, Minutes, Seconds, Milliseconds)
	    for (i = 0; i < proxyGettersAndSetters.length; i ++) {
	        makeGetterAndSetter(proxyGettersAndSetters[i].toLowerCase().replace(/s$/, ''), proxyGettersAndSetters[i]);
	    }

	    // add shortcut for year (uses different syntax than the getter/setter 'year' == 'FullYear')
	    makeGetterAndSetter('year', 'FullYear');

	    // add plural methods
	    moment.fn.days = moment.fn.day;
	    moment.fn.months = moment.fn.month;
	    moment.fn.weeks = moment.fn.week;
	    moment.fn.isoWeeks = moment.fn.isoWeek;

	    // add aliased format methods
	    moment.fn.toJSON = moment.fn.toISOString;

	    /************************************
	        Duration Prototype
	    ************************************/


	    moment.duration.fn = Duration.prototype = {
	        _bubble : function () {
	            var milliseconds = this._milliseconds,
	                days = this._days,
	                months = this._months,
	                data = this._data,
	                seconds, minutes, hours, years;

	            // The following code bubbles up values, see the tests for
	            // examples of what that means.
	            data.milliseconds = milliseconds % 1000;

	            seconds = absRound(milliseconds / 1000);
	            data.seconds = seconds % 60;

	            minutes = absRound(seconds / 60);
	            data.minutes = minutes % 60;

	            hours = absRound(minutes / 60);
	            data.hours = hours % 24;

	            days += absRound(hours / 24);
	            data.days = days % 30;

	            months += absRound(days / 30);
	            data.months = months % 12;

	            years = absRound(months / 12);
	            data.years = years;
	        },

	        weeks : function () {
	            return absRound(this.days() / 7);
	        },

	        valueOf : function () {
	            return this._milliseconds +
	              this._days * 864e5 +
	              (this._months % 12) * 2592e6 +
	              ~~(this._months / 12) * 31536e6;
	        },

	        humanize : function (withSuffix) {
	            var difference = +this,
	                output = relativeTime(difference, !withSuffix, this.lang());

	            if (withSuffix) {
	                output = this.lang().pastFuture(difference, output);
	            }

	            return this.lang().postformat(output);
	        },

	        add : function (input, val) {
	            // supports only 2.0-style add(1, 's') or add(moment)
	            var dur = moment.duration(input, val);

	            this._milliseconds += dur._milliseconds;
	            this._days += dur._days;
	            this._months += dur._months;

	            this._bubble();

	            return this;
	        },

	        subtract : function (input, val) {
	            var dur = moment.duration(input, val);

	            this._milliseconds -= dur._milliseconds;
	            this._days -= dur._days;
	            this._months -= dur._months;

	            this._bubble();

	            return this;
	        },

	        get : function (units) {
	            units = normalizeUnits(units);
	            return this[units.toLowerCase() + 's']();
	        },

	        as : function (units) {
	            units = normalizeUnits(units);
	            return this['as' + units.charAt(0).toUpperCase() + units.slice(1) + 's']();
	        },

	        lang : moment.fn.lang
	    };

	    function makeDurationGetter(name) {
	        moment.duration.fn[name] = function () {
	            return this._data[name];
	        };
	    }

	    function makeDurationAsGetter(name, factor) {
	        moment.duration.fn['as' + name] = function () {
	            return +this / factor;
	        };
	    }

	    for (i in unitMillisecondFactors) {
	        if (unitMillisecondFactors.hasOwnProperty(i)) {
	            makeDurationAsGetter(i, unitMillisecondFactors[i]);
	            makeDurationGetter(i.toLowerCase());
	        }
	    }

	    makeDurationAsGetter('Weeks', 6048e5);
	    moment.duration.fn.asMonths = function () {
	        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12;
	    };


	    /************************************
	        Default Lang
	    ************************************/


	    // Set default language, other languages will inherit from English.
	    moment.lang('en', {
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~ (number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });


	    /************************************
	        Exposing Moment
	    ************************************/


	    // CommonJS module is defined
	    if (hasModule) {
	        module.exports = moment;
	    }
	    /*global ender:false */
	    if (typeof ender === 'undefined') {
	        // here, `this` means `window` in the browser, or `global` on the server
	        // add `moment` as a global object via a string identifier,
	        // for Closure Compiler "advanced" mode
	        this['moment'] = moment;
	    }
	    /*global define:false */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return moment;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	}).call(this);


/***/ },
/* 15 */
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
	    str = str || __webpack_require__(16).readFileSync(filename, 'utf8')
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
/* 16 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/yc_logo.png?bd5e375e";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	//console.time('time');
	//console.profile();
	__webpack_require__(19);
	__webpack_require__(20);
	var Store = __webpack_require__(9);
	var Events = __webpack_require__(10);

	var ICPage = __webpack_require__(21);
	var selfPage = __webpack_require__(24);
	var Page = {
		isFirstLoad:true,
		push: 0,
		ajaxDataType: typeof CVal == "undefined" ? 'jsonp' : 'jsonp',
		init: function(options){
			if(Page.isFirstLoad){
				$(document.body).append('<div class="msg-plus"></div>');
				Page.HandleEvents.init();
				Page.isFirstLoad = false;
			}
			var store = Page.Store;
			store.dispatch(Page.Action.index());
			Page.Render.init();
			if(options && options.position =='ic' ){
				//require.ensure('./ICIndex.js',function(){
					//var ICPage = require('./ICIndex.js');
				 	ICPage.init();
				//},'ic');
			}else{
				//require.ensure('./selfIndex.js',function(){
					//var selfPage = require('./selfIndex.js');
				 	selfPage.init();
				//},'self');
			}
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
			postData.userId = "20091206140";
			postData.posId ="E02";
			postData.orgId  ="13011576";
		}
		**/
		var Apis = {                         
			news: apiPath + '/portals/indNewsList'                                             //行业新闻推荐 20081802220
		}
		return {
			getNews: function() {
				return $.ajax({
					url: Apis.news,
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
				return __webpack_require__(26);
			},
			newsView: function() {
				return __webpack_require__(27);
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
			var $msgPlus = $('.msg-plus');
			var template = Page.UI.indexView();
			var html = template(Page.Store.getState());
			$msgPlus.html(html);
		}
		function news() {
			var $msgPlus = $('.msg-plus');
			var template = Page.UI.newsView();
			var html = template(Page.Store.getState());
			$msgPlus.html(html);
			__webpack_require__.e/* nsure */(1, function(){
				__webpack_require__(28);
				 $('.adPops-content').slimScroll({
		            position: "right",
		            height: '325px',
		            distance: '2px',
		            railVisible: true,
		            size: '5px',                    
		            color: '#999',                    
		            railOpacity: '0.5',
		            railColor: '#eee'
		        });
			});//第三个参数是给这个模块命名，否则[name]是一个自动分配的id
		}
		return {
			init: function() {
				index();
			},
			news: function() {
				news();
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
			Page.init();
		})
		var events = new Events({
			'.news@click': 'showNews',
			'.showhide@click': 'foldBox',
			'.home@click': 'showIndex'
		})
		return {
			init: function() {
				events.dispatch(this);
			},
			showNews: function() {
				$.when(Page.APIS.getNews()).done(function(data){
					Page.Store.dispatch(Page.Action.news(data.data));
					Page.Render.news();
					if(Page.push==1){
						push('left');
					}
				})
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
			}
		}
	}());

	Page.Action = (function() {
		return {
			index: function(){
				var tabs=['已经结清','即将结清','贷后助手','业务通报'];
				return {
					type: 'tabs',
					payload : tabs
				}
			},
			news: function(record) {
				
				for(var i=0;i<record.length;i++){
					//var content = '<div>' + record[i].content +'</div>';
					record[i].content = record[i].content.replace(/<[^>]+>/g,'').replace(/\s+/g,'').substring(0,100)
					//console.log(record[i].content);
				}
				
				return {
					type:'news',
					payload:record
				}
			}
		}
	}());

	//Page.init();

	module.exports=Page;//pack-lib打包类库使用

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	*微门户-信贷主管
	*/
	'use strict';
	//console.time('time');
	//console.profile();

	var Store = __webpack_require__(9);
	var Events = __webpack_require__(10);

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
			postData.userId = "20131224570";
			postData.posId ="E02";
			postData.orgId  ="13011576";
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
				return __webpack_require__(22);
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

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(15);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (records, tabs, undefined) {
	buf.push("<table class=\"content-tabs ic-content-tabs\"><tr>");
	// iterate tabs
	;(function(){
	  var $$obj = tabs;
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

	buf.push("</tr></table><ul data-tab-index='0' class=\"content ic-content\">");
	if(records)
	{
	// iterate records
	;(function(){
	  var $$obj = records;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var record = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = index+1) ? "" : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = record.userName) == null ? '' : jade_interp)) + "</span><span class=\"text-small\">月放款 <span class=\"text-red\">" + (jade.escape((jade_interp = record.monCashAmount/10000) == null ? '' : jade_interp)) + "</span>万 </span>");
	if(record.monMinus)
	{
	buf.push("月目标差距<span class=\"text-red\">" + (jade.escape((jade_interp = record.monMinus/10000) == null ? '' : jade_interp)) + "</span>万");
	}
	buf.push("</div><div class=\"item-tabs\"><span data-type=\"checking\" class=\"current\">待调查" + (jade.escape((jade_interp = record.checkingQuantity) == null ? '' : jade_interp)) + "笔 " + (jade.escape((jade_interp = record.checkingAmount/10000) == null ? '' : jade_interp)) + "万</span><span data-type=\"checked\">已调查" + (jade.escape((jade_interp = record.checkedQuantity) == null ? '' : jade_interp)) + "笔 " + (jade.escape((jade_interp = record.checkedAmount/10000) == null ? '' : jade_interp)) + "万 </span></div><div class=\"item-more\">");
	// iterate record.checkingDetails
	;(function(){
	  var $$obj = record.checkingDetails;
	  if ('number' == typeof $$obj.length) {

	    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
	      var item = $$obj[$index];

	buf.push("<table class=\"item-more-table checking-list\"><tr><td colspan=\"2\"><span class=\"ic-name\">" + (jade.escape((jade_interp = item.customerName) == null ? '' : jade_interp)) + "</span><span>待调查</span><span>" + (jade.escape((jade_interp = item.actionStatus) == null ? '' : jade_interp)) + "</span></td></tr><tr><td><span>" + (jade.escape((jade_interp = item.appOpName) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = item.amount/10000) == null ? '' : jade_interp)) + "万</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + (jade.attr("title", '' + (item.registeredAddress) + '', true, true)) + " class=\"map-icon\"></td></tr><tr><td colspan=\"2\"><span>" + (jade.escape((jade_interp = item.workCorpType) == null ? '' : jade_interp)) + "</span></td></tr><tr><td colspan=\"2\"><p class=\"text-ellipsis\"><b>最新进展：</b><span class=\"text-red\">" + (jade.escape((jade_interp = item.informLastAction) == null ? '' : jade_interp)) + "</span></p></td></tr></table>");
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in $$obj) {
	      $$l++;      var item = $$obj[$index];

	buf.push("<table class=\"item-more-table checking-list\"><tr><td colspan=\"2\"><span class=\"ic-name\">" + (jade.escape((jade_interp = item.customerName) == null ? '' : jade_interp)) + "</span><span>待调查</span><span>" + (jade.escape((jade_interp = item.actionStatus) == null ? '' : jade_interp)) + "</span></td></tr><tr><td><span>" + (jade.escape((jade_interp = item.appOpName) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = item.amount/10000) == null ? '' : jade_interp)) + "万</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + (jade.attr("title", '' + (item.registeredAddress) + '', true, true)) + " class=\"map-icon\"></td></tr><tr><td colspan=\"2\"><span>" + (jade.escape((jade_interp = item.workCorpType) == null ? '' : jade_interp)) + "</span></td></tr><tr><td colspan=\"2\"><p class=\"text-ellipsis\"><b>最新进展：</b><span class=\"text-red\">" + (jade.escape((jade_interp = item.informLastAction) == null ? '' : jade_interp)) + "</span></p></td></tr></table>");
	    }

	  }
	}).call(this);

	// iterate record.checkedDetails
	;(function(){
	  var $$obj = record.checkedDetails;
	  if ('number' == typeof $$obj.length) {

	    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
	      var item = $$obj[$index];

	buf.push("<table class=\"item-more-table checked-list\"><tr><td colspan=\"2\"><span class=\"ic-name\">" + (jade.escape((jade_interp = item.customerName) == null ? '' : jade_interp)) + "</span><span>已调查</span><span>" + (jade.escape((jade_interp = item.actionStatus) == null ? '' : jade_interp)) + "</span></td></tr><tr><td><span>" + (jade.escape((jade_interp = item.appOpName) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = item.amount/10000) == null ? '' : jade_interp)) + "万</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + (jade.attr("title", '' + (item.registeredAddress) + '', true, true)) + " class=\"map-icon\"></td></tr><tr><td colspan=\"2\"><span>" + (jade.escape((jade_interp = item.workCorpType) == null ? '' : jade_interp)) + "</span></td></tr><tr><td colspan=\"2\"><p class=\"text-ellipsis\"><b>最新进展：</b><span class=\"text-red\">" + (jade.escape((jade_interp = item.informLastAction) == null ? '' : jade_interp)) + "</span></p></td></tr></table>");
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in $$obj) {
	      $$l++;      var item = $$obj[$index];

	buf.push("<table class=\"item-more-table checked-list\"><tr><td colspan=\"2\"><span class=\"ic-name\">" + (jade.escape((jade_interp = item.customerName) == null ? '' : jade_interp)) + "</span><span>已调查</span><span>" + (jade.escape((jade_interp = item.actionStatus) == null ? '' : jade_interp)) + "</span></td></tr><tr><td><span>" + (jade.escape((jade_interp = item.appOpName) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = item.amount/10000) == null ? '' : jade_interp)) + "万</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + (jade.attr("title", '' + (item.registeredAddress) + '', true, true)) + " class=\"map-icon\"></td></tr><tr><td colspan=\"2\"><span>" + (jade.escape((jade_interp = item.workCorpType) == null ? '' : jade_interp)) + "</span></td></tr><tr><td colspan=\"2\"><p class=\"text-ellipsis\"><b>最新进展：</b><span class=\"text-red\">" + (jade.escape((jade_interp = item.informLastAction) == null ? '' : jade_interp)) + "</span></p></td></tr></table>");
	    }

	  }
	}).call(this);

	buf.push("</div></li>");
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var record = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = index+1) ? "" : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = record.userName) == null ? '' : jade_interp)) + "</span><span class=\"text-small\">月放款 <span class=\"text-red\">" + (jade.escape((jade_interp = record.monCashAmount/10000) == null ? '' : jade_interp)) + "</span>万 </span>");
	if(record.monMinus)
	{
	buf.push("月目标差距<span class=\"text-red\">" + (jade.escape((jade_interp = record.monMinus/10000) == null ? '' : jade_interp)) + "</span>万");
	}
	buf.push("</div><div class=\"item-tabs\"><span data-type=\"checking\" class=\"current\">待调查" + (jade.escape((jade_interp = record.checkingQuantity) == null ? '' : jade_interp)) + "笔 " + (jade.escape((jade_interp = record.checkingAmount/10000) == null ? '' : jade_interp)) + "万</span><span data-type=\"checked\">已调查" + (jade.escape((jade_interp = record.checkedQuantity) == null ? '' : jade_interp)) + "笔 " + (jade.escape((jade_interp = record.checkedAmount/10000) == null ? '' : jade_interp)) + "万 </span></div><div class=\"item-more\">");
	// iterate record.checkingDetails
	;(function(){
	  var $$obj = record.checkingDetails;
	  if ('number' == typeof $$obj.length) {

	    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
	      var item = $$obj[$index];

	buf.push("<table class=\"item-more-table checking-list\"><tr><td colspan=\"2\"><span class=\"ic-name\">" + (jade.escape((jade_interp = item.customerName) == null ? '' : jade_interp)) + "</span><span>待调查</span><span>" + (jade.escape((jade_interp = item.actionStatus) == null ? '' : jade_interp)) + "</span></td></tr><tr><td><span>" + (jade.escape((jade_interp = item.appOpName) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = item.amount/10000) == null ? '' : jade_interp)) + "万</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + (jade.attr("title", '' + (item.registeredAddress) + '', true, true)) + " class=\"map-icon\"></td></tr><tr><td colspan=\"2\"><span>" + (jade.escape((jade_interp = item.workCorpType) == null ? '' : jade_interp)) + "</span></td></tr><tr><td colspan=\"2\"><p class=\"text-ellipsis\"><b>最新进展：</b><span class=\"text-red\">" + (jade.escape((jade_interp = item.informLastAction) == null ? '' : jade_interp)) + "</span></p></td></tr></table>");
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in $$obj) {
	      $$l++;      var item = $$obj[$index];

	buf.push("<table class=\"item-more-table checking-list\"><tr><td colspan=\"2\"><span class=\"ic-name\">" + (jade.escape((jade_interp = item.customerName) == null ? '' : jade_interp)) + "</span><span>待调查</span><span>" + (jade.escape((jade_interp = item.actionStatus) == null ? '' : jade_interp)) + "</span></td></tr><tr><td><span>" + (jade.escape((jade_interp = item.appOpName) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = item.amount/10000) == null ? '' : jade_interp)) + "万</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + (jade.attr("title", '' + (item.registeredAddress) + '', true, true)) + " class=\"map-icon\"></td></tr><tr><td colspan=\"2\"><span>" + (jade.escape((jade_interp = item.workCorpType) == null ? '' : jade_interp)) + "</span></td></tr><tr><td colspan=\"2\"><p class=\"text-ellipsis\"><b>最新进展：</b><span class=\"text-red\">" + (jade.escape((jade_interp = item.informLastAction) == null ? '' : jade_interp)) + "</span></p></td></tr></table>");
	    }

	  }
	}).call(this);

	// iterate record.checkedDetails
	;(function(){
	  var $$obj = record.checkedDetails;
	  if ('number' == typeof $$obj.length) {

	    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
	      var item = $$obj[$index];

	buf.push("<table class=\"item-more-table checked-list\"><tr><td colspan=\"2\"><span class=\"ic-name\">" + (jade.escape((jade_interp = item.customerName) == null ? '' : jade_interp)) + "</span><span>已调查</span><span>" + (jade.escape((jade_interp = item.actionStatus) == null ? '' : jade_interp)) + "</span></td></tr><tr><td><span>" + (jade.escape((jade_interp = item.appOpName) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = item.amount/10000) == null ? '' : jade_interp)) + "万</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + (jade.attr("title", '' + (item.registeredAddress) + '', true, true)) + " class=\"map-icon\"></td></tr><tr><td colspan=\"2\"><span>" + (jade.escape((jade_interp = item.workCorpType) == null ? '' : jade_interp)) + "</span></td></tr><tr><td colspan=\"2\"><p class=\"text-ellipsis\"><b>最新进展：</b><span class=\"text-red\">" + (jade.escape((jade_interp = item.informLastAction) == null ? '' : jade_interp)) + "</span></p></td></tr></table>");
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in $$obj) {
	      $$l++;      var item = $$obj[$index];

	buf.push("<table class=\"item-more-table checked-list\"><tr><td colspan=\"2\"><span class=\"ic-name\">" + (jade.escape((jade_interp = item.customerName) == null ? '' : jade_interp)) + "</span><span>已调查</span><span>" + (jade.escape((jade_interp = item.actionStatus) == null ? '' : jade_interp)) + "</span></td></tr><tr><td><span>" + (jade.escape((jade_interp = item.appOpName) == null ? '' : jade_interp)) + "</span><span>" + (jade.escape((jade_interp = item.amount/10000) == null ? '' : jade_interp)) + "万</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + (jade.attr("title", '' + (item.registeredAddress) + '', true, true)) + " class=\"map-icon\"></td></tr><tr><td colspan=\"2\"><span>" + (jade.escape((jade_interp = item.workCorpType) == null ? '' : jade_interp)) + "</span></td></tr><tr><td colspan=\"2\"><p class=\"text-ellipsis\"><b>最新进展：</b><span class=\"text-red\">" + (jade.escape((jade_interp = item.informLastAction) == null ? '' : jade_interp)) + "</span></p></td></tr></table>");
	    }

	  }
	}).call(this);

	buf.push("</div></li>");
	    }

	  }
	}).call(this);

	}
	buf.push("</ul>");}.call(this,"records" in locals_for_with?locals_for_with.records:typeof records!=="undefined"?records:undefined,"tabs" in locals_for_with?locals_for_with.tabs:typeof tabs!=="undefined"?tabs:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/map-icon.png?a74aeb53";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	*微门户-信贷员
	*/
	'use strict';
	//console.time('time');
	//console.profile();

	var Store = __webpack_require__(9);
	var Events = __webpack_require__(10);

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
				//$(document.body).append('<div class="msg-plus"></div>');
				$.when(
					Page.APIS.getMsgs(),
					Page.APIS.getClosedSum()
				).done(function(data,sum){
					//data[0].data.sum = sum[0].data[0];//注意：如果是多个接口，返回值是一个ajax对象，数据要用data[0]获取，否则报错；如果是一个接口则直接data获取
					//callback(data[0].data);
					if(data[0].code == 1000 && sum[0].code==1000){
						data[0].data.sum = sum[0].data;//注意返回值是一个ajax对象，数据要用data[0]获取，否则报错
						Page.Store.dispatch(Page.Action.tab1(data[0].data));
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
			postData.userId = "20091206140";
			postData.posId ="E02";
			postData.orgId  ="13011576";
		}
		**/
		var Apis = {
			msgs: apiPath + '/portals/getDataClosed',                                           //已经结清
			msgs2: apiPath + '/portals/getCloseDataSoon',                                       //即将结清
			msgs3: apiPath + '/portals/getLoanRemindListByUserId',                              //查询指定信贷员贷后需检查业务
			news: apiPath + '/portals/indNewsList',                                             //行业新闻推荐 20081802220
			closedSum: apiPath + '/portals/getDataClosedSum',                                   //已结清统计
			closeDataSoonSum: apiPath + '/portals/getCloseDataSoonSum',                         //即将结清统计
			dealShowData: apiPath + '/portals/dealShowData',                                    //处理是否续贷及显示
			loanRemindAlteraction: apiPath + '/portals/loanRemindAlteraction',                  //贷后提醒详细修改
			loanRemindStat: apiPath + '/portals/loanRemindStat',                  				//贷后提醒详细修改
			bulletinInfo: apiPath + '/portals/getBulletinInformDetail',                         //查询信贷员业务通报明细 20081802220
			getLoanGoal: apiPath + '/portals/getLoanMonthGoal'                                  //信贷员月目标
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
			},
			loanRemindStat: function() {
				return $.ajax({
					url: Apis.loanRemindStat,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			bulletinInfo: function() {
				return $.ajax({
					url: Apis.bulletinInfo,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			getLoanGoal: function() {
				return $.ajax({
					url: Apis.getLoanGoal,
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
				return __webpack_require__(25);
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
			'.content-item .item-title@click': 'showItemMore',
			'.item-deal .no-more@click': 'noMore',
			'.item-deal .can-next@click': 'showFlag',
			'.content-tabs td@click': 'changeMsgTabs',
			'.content-tabs@change.tabs':'changeTabs',//自定义事件
			'.text-ellipsis@mouseover':'showTips',
			'.text-ellipsis@mouseout':'hideTips'
		})
		return {
			init: function() {
				events.dispatch(this);
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
				$(this).addClass('disable');
				$(this).attr('disabled',true);
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
			changeMsgTabs: function() {
				var tabIndex = $(this).data('tab-index');
				var state = Page.Store.getState();
				if(!$(this).hasClass('active')){
					if(tabIndex==2 && !state.tab3) {
						$.when(
							Page.APIS.getMsgs3(),
							Page.APIS.loanRemindStat()
						).done(function(data,sum){
							if(data[0].code == 1000 && sum[0].code == 1000){
								data[0].data.sum = sum[0].data;
								Page.Store.dispatch(Page.Action.tab3(data[0].data));
								Page.Render.init();
								//$('.content-tabs').trigger('change.tabs',2); 
								Page.HandleEvents.changeTabs('change.tabs',2);
							}
						})
					}else if(tabIndex==1 && !state.tab2) {
						$.when(
							Page.APIS.getMsgs2(),
							Page.APIS.getCloseDataSoonSum()
						).done(function(data,sum){
							if(data[0].code == 1000 && sum[0].code == 1000){
								data[0].data.sum = sum[0].data;//注意返回值是一个ajax对象，数据要用data[0]获取，否则报错
								Page.Store.dispatch(Page.Action.tab2(data[0].data));
								Page.Render.init();
								Page.HandleEvents.changeTabs('change.tabs',1);
							}
						})
					}
					//业务通报
					else if(tabIndex==3 && !state.tab4) {
						$.when(
							Page.APIS.bulletinInfo(),
							Page.APIS.getLoanGoal()
						).done(function(data,goal){
							if(data[0].code == 1000 && goal[0].code == 1000){
								data[0].data.goal = goal[0].data;
								Page.Store.dispatch(Page.Action.tab4(data[0].data));
								Page.Render.init();
								Page.HandleEvents.changeTabs('change.tabs',3);
							}
						})
					}
				}
				Page.HandleEvents.changeTabs('change.tabs',tabIndex);
			},
			changeTabs: function(e,index) {
				var tabIndex = index;
				$('.content-tabs td[data-tab-index='+index+']').addClass('active').siblings('.active').removeClass('active');
				$('ul.content[data-tab-index='+index+']').addClass('active').siblings('.active').removeClass('active');
			},
			showTips:function(e){
				var $tips = $(this).next('.text-tooltip');
				$tips.show();
			},
			hideTips:function(e){
				var $tips = $(this).next('.text-tooltip');
				$tips.hide();
			}
		}
	}());

	Page.Action = (function() {
		return {
			index: function(){
				var tabs=['已经结清','即将结清','贷后助手','业务通报'];
				return {
					type: 'tabs',
					payload : tabs
				}
			},
			tab1: function(record){
				return {
					type: 'tab1',
					payload : {
						content:record
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
			},//即将结清tab页
			tab3: function(record){
				return {
					type: 'tab3',
					payload : {
						content:record
					}
				}
			},//贷后助手tab页
			tab4:function(record){
				return {
					type: 'tab4',
					payload : {
						content:record
					}
				}
			}//业务通报tab页
		}
	}());

	//Page.init();
	var selfPage = Page;
	module.exports = selfPage;//pack-lib打包类库使用

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(15);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (tab1, tab2, tab3, tab4, tabs, undefined) {
	buf.push("<table class=\"content-tabs\"><tr>");
	// iterate tabs
	;(function(){
	  var $$obj = tabs;
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

	buf.push("</tr></table><ul data-tab-index='0' class=\"content\">");
	if(tab1)
	{
	if(tab1.content.sum)
	{
	buf.push("<div class=\"content-tips\">已经结清<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab1.content.sum.COUNTS) ? "" : jade_interp)) + "</span>笔，共<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab1.content.sum.AMOUNTALL/10000) ? "" : jade_interp)) + "</span>万元</div>");
	}
	if(tab1.content.length > 0)
	{
	// iterate tab1.content
	;(function(){
	  var $$obj = tab1.content;
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
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " disabled=\"disabled\" class=\"can-next disable\">有续贷意愿</button>");
	}
	}else{
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"can-next\">有续贷意愿</button>");
	}
	}
	buf.push("</div></li>");
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
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " disabled=\"disabled\" class=\"can-next disable\">有续贷意愿</button>");
	}
	}else{
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"can-next\">有续贷意愿</button>");
	}
	}
	buf.push("</div></li>");
	    }

	  }
	}).call(this);

	}
	else
	{
	buf.push("<p class=\"none-data\">暂无数据。\t</p>");
	}
	}
	buf.push("</ul><ul data-tab-index='1' class=\"content\">");
	if(tab2){
	{
	if(tab2.content.sum)
	{
	buf.push("<div class=\"content-tips\">即将结清<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab2.content.sum.COUNTS) ? "" : jade_interp)) + "</span>笔，共<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab2.content.sum.AMOUNTALL/10000) ? "" : jade_interp)) + "</span>万元</div>");
	}
	if(tab2.content.length > 0)
	{
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
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " disabled=\"disabled\" class=\"can-next disable\">有续贷意愿</button>");
	}
	}else{
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"can-next\">有续贷意愿</button>");
	}
	}
	buf.push("</div></li>");
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
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " disabled=\"disabled\" class=\"can-next disable\">有续贷意愿</button>");
	}
	}else{
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"can-next\">有续贷意愿</button>");
	}
	}
	buf.push("</div></li>");
	    }

	  }
	}).call(this);

	}
	else
	{
	buf.push("<p class=\"none-data\">暂无数据。</p>");
	}
	}
	}
	buf.push("</ul><ul data-tab-index='2' class=\"content\">");
	if(tab3){
	{
	if(tab3.content.sum)
	{
	buf.push("<div class=\"content-tips\">总共检查<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab3.content.sum.CUSCOUNT) ? "" : jade_interp)) + "</span>人，贷后检查总额<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab3.content.sum.AMOUNTSUM/10000) ? "" : jade_interp)) + "</span>万元</div>");
	}
	// iterate tab3.content
	;(function(){
	  var $$obj = tab3.content;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var value = $$obj[index];

	if(value.checkFlag!='2'){
	{
	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = (index+1)+'.') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.cusName) ? "" : jade_interp)) + "</span><span class=\"end-date\">" + (jade.escape((jade_interp = value.dueBillBeginDate) == null ? '' : jade_interp)) + "~" + (jade.escape((jade_interp = value.dueBillEndDate) == null ? '' : jade_interp)) + "</span>");
	if(value.checkFlag=='1'){
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
	buf.push("<span>" + (jade.escape(null == (jade_interp = value.dueBillAmount/10000) ? "" : jade_interp)) + "万</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("data-lng", '' + (value.busLng) + '', true, true)) + (jade.attr("data-lat", '' + (value.busLat) + '', true, true)) + (jade.attr("src", __webpack_require__(23), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.appOpName) ? "" : jade_interp)) + "</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " class=\"no-more\">不再显示</button>");
	if(value.checkFlag=='1'){
	{
	buf.push("<button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " disabled=\"disabled\" class=\"can-next disable\">已调查</button>");
	}
	}else{
	{
	buf.push("<button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " class=\"can-next\">已调查</button>");
	}
	}
	buf.push("</div></li>");
	}
	}
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var value = $$obj[index];

	if(value.checkFlag!='2'){
	{
	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = (index+1)+'.') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.cusName) ? "" : jade_interp)) + "</span><span class=\"end-date\">" + (jade.escape((jade_interp = value.dueBillBeginDate) == null ? '' : jade_interp)) + "~" + (jade.escape((jade_interp = value.dueBillEndDate) == null ? '' : jade_interp)) + "</span>");
	if(value.checkFlag=='1'){
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
	buf.push("<span>" + (jade.escape(null == (jade_interp = value.dueBillAmount/10000) ? "" : jade_interp)) + "万</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("data-lng", '' + (value.busLng) + '', true, true)) + (jade.attr("data-lat", '' + (value.busLat) + '', true, true)) + (jade.attr("src", __webpack_require__(23), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.appOpName) ? "" : jade_interp)) + "</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " class=\"no-more\">不再显示</button>");
	if(value.checkFlag=='1'){
	{
	buf.push("<button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " disabled=\"disabled\" class=\"can-next disable\">已调查</button>");
	}
	}else{
	{
	buf.push("<button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " class=\"can-next\">已调查</button>");
	}
	}
	buf.push("</div></li>");
	}
	}
	    }

	  }
	}).call(this);

	}
	}
	buf.push("</ul><ul data-tab-index='3' class=\"content\">");
	if(tab4)
	{
	if(tab4.content.goal)
	{
	buf.push("<div class=\"content-tips\">月放款<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab4.content.goal.monthLoanAmount) ? "" : jade_interp)) + "</span>万 ");
	if(tab4.content.goal.monthMinus)
	{
	buf.push("<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab4.content.goal.monthMinus) ? "" : jade_interp)) + "</span>万");
	}
	buf.push("</div>");
	}
	if(tab4.content.length > 0)
	{
	// iterate tab4.content
	;(function(){
	  var $$obj = tab4.content;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var item = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = index+1) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = item.customerName) ? "" : jade_interp)) + "</span><span class=\"end-day\">" + (jade.escape(null == (jade_interp = item.informSurvey) ? "" : jade_interp)) + "</span></div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = item.actionStatus) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = item.mobilePhone) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + (jade.attr("title", '' + (item.registeredAddress) + '', true, true)) + " class=\"map-icon\"></td></tr><tr><td colspan=\"2\"><span>" + (jade.escape(null == (jade_interp = item.workCorpType) ? "" : jade_interp)) + "</span></td></tr><tr><td colspan=\"2\"><p class=\"text-ellipsis\"><b>通报详情：</b><span" + (jade.attr("title", '' + (item.researchDetail) + '', true, true)) + ">" + (jade.escape(null == (jade_interp = item.researchDetail) ? "" : jade_interp)) + "</span></p></td></tr></table></div></li>");
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var item = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = index+1) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = item.customerName) ? "" : jade_interp)) + "</span><span class=\"end-day\">" + (jade.escape(null == (jade_interp = item.informSurvey) ? "" : jade_interp)) + "</span></div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = item.actionStatus) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = item.mobilePhone) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + (jade.attr("title", '' + (item.registeredAddress) + '', true, true)) + " class=\"map-icon\"></td></tr><tr><td colspan=\"2\"><span>" + (jade.escape(null == (jade_interp = item.workCorpType) ? "" : jade_interp)) + "</span></td></tr><tr><td colspan=\"2\"><p class=\"text-ellipsis\"><b>通报详情：</b><span" + (jade.attr("title", '' + (item.researchDetail) + '', true, true)) + ">" + (jade.escape(null == (jade_interp = item.researchDetail) ? "" : jade_interp)) + "</span></p></td></tr></table></div></li>");
	    }

	  }
	}).call(this);

	}
	else
	{
	buf.push("<p class=\"none-data\">暂无数据。</p>");
	}
	}
	buf.push("</ul>");}.call(this,"tab1" in locals_for_with?locals_for_with.tab1:typeof tab1!=="undefined"?tab1:undefined,"tab2" in locals_for_with?locals_for_with.tab2:typeof tab2!=="undefined"?tab2:undefined,"tab3" in locals_for_with?locals_for_with.tab3:typeof tab3!=="undefined"?tab3:undefined,"tab4" in locals_for_with?locals_for_with.tab4:typeof tab4!=="undefined"?tab4:undefined,"tabs" in locals_for_with?locals_for_with.tabs:typeof tabs!=="undefined"?tabs:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(15);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<div class=\"msg-content\"><div class=\"serach-chip\">个贷助手</div><div class=\"plus-wrapper\"></div></div><div class=\"msg-tabs\"><table><tr><td class=\"home active\"> <i class=\"iconfont\">&#xe60f;</i><span>消息</span></td><td class=\"news\"> <i class=\"iconfont\">&#xe634;</i><span>新闻</span></td><td class=\"showhide\"> <i class=\"iconfont\">&#xe635;</i><span>收起</span></td></tr></table></div>");;return buf.join("");
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(moment) {var jade = __webpack_require__(15);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (moment, news, undefined) {
	buf.push("<div class=\"theme-blue adPops-container\"><div class=\"adPops-title\"><div class=\"back-home\"><img" + (jade.attr("src", __webpack_require__(17), true, true)) + " class=\"yc-logo\">行业新闻<i class=\"iconfont close-icon\">&#xe639;</i></div></div><div class=\"adPops-content\"><div class=\"content-box\">");
	if(news){
	{
	// iterate news
	;(function(){
	  var $$obj = news;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var item = $$obj[index];

	buf.push("<div" + (jade.attr("data-id", '' + (item.industryId) + '', true, true)) + " class=\"news-card\"><div class=\"news-title\">" + (jade.escape(null == (jade_interp = item.newsTitle) ? "" : jade_interp)) + "</div><div class=\"news-summary\">" + (jade.escape(null == (jade_interp = item.content) ? "" : jade_interp)) + "···</div><div class=\"news-footer\"><span class=\"news-source\">" + (jade.escape(null == (jade_interp = item.siteName) ? "" : jade_interp)) + "</span><span class=\"news-time\">" + (jade.escape(null == (jade_interp = moment(item.timestamp, 'YYYYMMDDHHmmss').format('YYYY-MM-DD HH:mm:ss')) ? "" : jade_interp)) + "</span><div class=\"news-tags\"><span>" + (jade.escape(null == (jade_interp = item.industryName) ? "" : jade_interp)) + "</span></div></div></div>");
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var item = $$obj[index];

	buf.push("<div" + (jade.attr("data-id", '' + (item.industryId) + '', true, true)) + " class=\"news-card\"><div class=\"news-title\">" + (jade.escape(null == (jade_interp = item.newsTitle) ? "" : jade_interp)) + "</div><div class=\"news-summary\">" + (jade.escape(null == (jade_interp = item.content) ? "" : jade_interp)) + "···</div><div class=\"news-footer\"><span class=\"news-source\">" + (jade.escape(null == (jade_interp = item.siteName) ? "" : jade_interp)) + "</span><span class=\"news-time\">" + (jade.escape(null == (jade_interp = moment(item.timestamp, 'YYYYMMDDHHmmss').format('YYYY-MM-DD HH:mm:ss')) ? "" : jade_interp)) + "</span><div class=\"news-tags\"><span>" + (jade.escape(null == (jade_interp = item.industryName) ? "" : jade_interp)) + "</span></div></div></div>");
	    }

	  }
	}).call(this);

	}
	}
	buf.push("</div></div></div>");}.call(this,"moment" in locals_for_with?locals_for_with.moment:typeof moment!=="undefined"?moment:undefined,"news" in locals_for_with?locals_for_with.news:typeof news!=="undefined"?news:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	注意立即执行函数内方法外的变量非最新实时值，比例获取dom，如果dom是在Js内添加的，那么$(dom)永远为空，因此需要放在立即执行行数内的方法内
	**/
	//console.time('time');
	//console.profile();
	__webpack_require__(30);
	var Store = __webpack_require__(9);
	var Events = __webpack_require__(10);
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
					var starLvl = options.starLvl || 3;
					if(record.data.nonp_loan_lvl !='unknown' && record.data.nonp_loan_lvl < starLvl){
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
				return __webpack_require__(31);
			},
			industry: function() {
				return __webpack_require__(32);
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


/***/ },
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(15);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (opts) {
	buf.push("<div class=\"__modal-header\">" + (jade.escape(null == (jade_interp = opts.title) ? "" : jade_interp)) + "<i class=\"iconfont __modal-close\">&#xe639;</i></div><div class=\"__modal-body\">" + (null == (jade_interp = opts.content) ? "" : jade_interp) + "</div><div class=\"__modal-footer\"><button class=\"btn btn-default\">关闭</button></div>");}.call(this,"opts" in locals_for_with?locals_for_with.opts:typeof opts!=="undefined"?opts:undefined));;return buf.join("");
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(15);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (Number, isNaN, parseInt, record) {
	var util = { 
	fixedEmpty: function(value,_default){
	if(value=='' || value==undefined || value==null||value == 'NULL'){
	return _default || '-';
	}else if(!isNaN(value)){
	value = parseInt(value) == value ? value : value.toFixed(2)
	}
	return value;
	},
	formatMoney: function(_money,_digit) {
	var tpMoney = '-';
	var digit = _digit || 2;
	if(undefined != _money){
	tpMoney = _money;			
	}
	tpMoney = new Number(tpMoney);
	if(isNaN(tpMoney)){
	return '-';
	}
	tpMoney = tpMoney.toFixed(digit);
	var re = /^(-?\d+)(\d{3})(\.?\d*)/;
	while(re.test(tpMoney)){
	tpMoney = tpMoney.replace(re,'$1,$2$3')	
	}
	return tpMoney;
	}
	}
	buf.push("<table class=\"industyr-info\"><tr><td colspan=\"2\"><b>市行名称：</b>" + (jade.escape(null == (jade_interp = util.fixedEmpty(record.city_name)) ? "" : jade_interp)) + "</td></tr><tr><td><b>贷款总笔数：</b>" + (jade.escape(null == (jade_interp = util.fixedEmpty(record.loan_cnt)) ? "" : jade_interp)) + "</td><td><b>贷款总金额：</b>" + (jade.escape((jade_interp = util.formatMoney(record.loan_amt/10000)) == null ? '' : jade_interp)) + " 万元</td></tr><tr><td><b>在途贷款笔数：</b>" + (jade.escape(null == (jade_interp = util.fixedEmpty(record.loan_cnt_curr)) ? "" : jade_interp)) + "</td><td><b>在途贷款金额：</b>" + (jade.escape((jade_interp = util.formatMoney(record.loan_amt_curr/10000)) == null ? '' : jade_interp)) + " 万元</td></tr><tr><td><b>在途贷款余额：</b>" + (jade.escape((jade_interp = util.formatMoney(record.loan_bal_curr/10000)) == null ? '' : jade_interp)) + " 万元</td><td><b>不良贷款笔数：</b>" + (jade.escape(null == (jade_interp = util.fixedEmpty(record.nonp_loan_cnt)) ? "" : jade_interp)) + "</td></tr><tr><td><b>不良贷款余额：</b>" + (jade.escape((jade_interp = util.formatMoney(record.nonp_loan_bal/10000)) == null ? '' : jade_interp)) + " 万元</td><td><b>不良率：</b>" + (jade.escape((jade_interp = util.formatMoney(record.nonp_loan_bal_rate*100)) == null ? '' : jade_interp)) + " %</td></tr><tr><td colspan=\"2\" class=\"nonp-lvl\"><b>优良等级：</b>");
	if(record.nonp_loan_lvl == 'unknown'){
	{
	buf.push("<" + (util.fixedEmpty(record.nonp_loan_lvl)) + "></" + (util.fixedEmpty(record.nonp_loan_lvl)) + ">");
	}
	}else{
	{
	var star = record.nonp_loan_lvl;
	var unstar = 5-star;
	for(var i = 0;i< star;i++){
	{
	buf.push("<i class=\"iconfont __star\">&#xe63c;</i>");
	}
	}
	for(var i = 0;i< unstar;i++){
	{
	buf.push("<i class=\"iconfont __unstar\">&#xe63c;</i>");
	}
	}
	}
	}
	buf.push("<div class=\"tips-holder\"><i class=\"iconfont lvl-tips\">&#xe621;</i><div class=\"tips-info\"><li>5颗星对应不良率区间[0,0.5%]</li><li>4颗星对应不良率区间(0.5%,2%]</li><li>3颗星对应不良率区间(2%,3%]</li><li>2颗星对应不良率区间(3%,5%]</li><li>1颗星对应不良率区间(5%,1]</li><li>'unknown'代表数据异常，无法判断星级</li></div></div></td></tr></table>");}.call(this,"Number" in locals_for_with?locals_for_with.Number:typeof Number!=="undefined"?Number:undefined,"isNaN" in locals_for_with?locals_for_with.isNaN:typeof isNaN!=="undefined"?isNaN:undefined,"parseInt" in locals_for_with?locals_for_with.parseInt:typeof parseInt!=="undefined"?parseInt:undefined,"record" in locals_for_with?locals_for_with.record:typeof record!=="undefined"?record:undefined));;return buf.join("");
	}

/***/ }
/******/ ])
});
;