(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("$"));
	else if(typeof define === 'function' && define.amd)
		define("haloPlugins", ["$"], factory);
	else if(typeof exports === 'object')
		exports["haloPlugins"] = factory(require("$"));
	else
		root["haloPlugins"] = factory(root["$"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

/******/ 			script.src = __webpack_require__.p + "" + ({"1":"echarts","2":"slimscroll"}[chunkId]||chunkId) + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/library/haloPlugins/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var profile = __webpack_require__(1);
	var msgPlus = __webpack_require__(19);
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
	module.exports=haloPlugins;//function 对象必须用new


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	__webpack_require__(3);
	//require('./index2.css');
	var Store = __webpack_require__(10);
	var Events = __webpack_require__(11);

	//swiper轮播插件
	//require('swiper2Css');
	//var Swiper = require('swiper2');
	var Util = __webpack_require__(12);
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
					/**
					Page.mySwiper = new Swiper('.swiper-container',{
						mode:'vertical',
						mousewheelControl:true,
						onSlideChangeStart:function() {
							var index = Page.mySwiper.activeIndex;
							$('.title-item:eq('+index+')').addClass('active').siblings('.active').removeClass('active');
						}
					});
					**/
					__webpack_require__.e/* nsure */(1, function(){/* WEBPACK VAR INJECTION */(function($) {

						Page.Render.init();//不能放在外面，防止dom未加载的情况
						Page.isFirstLoad = false;

						var baseData = store.getState().database;
						var echarts = __webpack_require__(18);
						var baseChart = echarts.init(document.getElementById('slide-base'));//基本信息
						var compositeChart = echarts.init(document.getElementById('slide-composite'));//综合指标
						//var scatterChart = echarts.init(document.getElementById('slide-correlation'));//行业关联
						var financeChart = echarts.init(document.getElementById('slide-finance'));//理财
						var posChart = echarts.init(document.getElementById('pos-monthly'));//pos信息按月统计

						/**
						* 数据填充
						*/
						var handleGraphJson = function(nodeObj,_json){
							if(!nodeObj) return;
							
							if(nodeObj.idx){
								var flag = false,
									idxArr = nodeObj.idx.split(','),
									_label = nodeObj.label;
								$.each(idxArr,function(i,_idx){
									var _val = baseData[_idx];
									if(_val != undefined && _val != 'NULL') flag = true;
								});
								if(flag){
									_label = _label.replace(/[#]/g,function(){
										var _val = baseData[idxArr.shift()];
										if(_val ===  true) _val = '是';
										else if(_val ===  false) _val = '否';
										return _val;
									});
									_label = _label.replace(/[$]/g,function(){
										var _val = util.formatMoney(baseData[idxArr.shift()]);
										return _val;
									});
									nodeObj.label = _label;
									_json.nodes.push(nodeObj);
									_json.edges.push({sourceID: "root", attributes: {}, targetID: nodeObj.id, size: 1});
								}
							}else{
								_json.nodes.push(nodeObj);
								if(nodeObj.id!='-1'){//隐藏点，处理label过长溢出问题
									_json.edges.push({sourceID: "root", attributes: {}, targetID: nodeObj.id, size: 1});
								}
							}
						}
						//基本信息
						var baseJson = {edges: [],nodes: [
							{color: "#03a9f4", label: "基本信息", attributes: {}, y: 0, x: 0, id: "root", size: 50}
							]},baseConf = [
								{color: "#4f19c7", label: "身份证 #",idx: "certificate_code", attributes: {}, y: -100, x: -120, id: "id",size: 15},
								{color: "#4f19c7", label: "学历 #" ,idx: "educational_level", attributes: {}, y: 150, x: 200, id: "education", size: 15},
								{color: "#4f19c7", label: "是否居住满一年 - #",idx: "rsd_year_flag", attributes: {}, y: 100, x: 120, id: "living", size: 15},
								{color: "#4f19c7", label: "月收入 $",idx: "monthly_profit", attributes: {}, y: -150, x: -200, id: "income", size: 15},
								{color: "#4f19c7", label: "#",idx: "cus_name", attributes: {}, y: -100, x: 100, id: "name", size: 15},
								{color: "#4f19c7", label: "是否本地户口 - #",idx: "is_native_account", attributes: {}, y: 100, x: -100, id: "address", size: 15},
								{color: "#4f19c7", label: "手机 #",idx: "mobile_phone", attributes: {}, y: -50, x: 80, id: "phone", size: 15},
								{color: "#4f19c7", label: "", attributes: {}, y: 100, x: 225, id: "-1", size: 0.01}
							];
						for(var i=0,len = baseConf.length;i<len;i++){
							handleGraphJson(baseConf[i],baseJson);
						}
						//myChart.showLoading();
						Page.DrawGraph(baseJson,baseChart);
						//综合指标
						var compositeJson = {edges: [],nodes: [
							{color: "#03a9f4", label: "个贷业务综合指标", attributes: {}, y: 0, x: 0, id: "root", size: 50}
							]},compositeConf = [
								{color: "#4f19c7", label: "已拒贷贷款：#笔，共$",idx:"rejected_loan_cnt,rejected_loan_amt,",attributes: {}, y: -60, x: -70, id: "1", size: 15},
								{color: "#4f19c7", label: "已核销贷款：#笔，共$", idx: "canceled_loan_cnt,canceled_loan_amt",attributes: {}, y: -40, x: 60, id: "2", size: 15},
								{color: "#4f19c7", label: "在途贷款：#笔，共$", idx: "curr_loan_cnt,curr_loan_amt",attributes: {}, y: 50, x: -80, id: "3", size: 15},
								{color: "#4f19c7", label: "在途贷款余额：$", idx: "curr_loan_bal",attributes: {}, y: -80, x: 60, id: "4", size: 15},
								{color: "#4f19c7", label: "历史逾期次数：#次", idx: "overdue_times_his",attributes: {}, y: 80, x: -60, id: "5", size: 15},
								{color: "#4f19c7", label: "历史逾期本金：$", idx: "overdue_capital_his",attributes: {}, y: -60, x: 70, id: "6", size: 15},
								{color: "#4f19c7", label: "", attributes: {}, y: 100, x: 120, id: "-1", size: 0.01}
							];
						for(var i=0,len = compositeConf.length;i<len;i++){
							handleGraphJson(compositeConf[i],compositeJson);
						}
				        Page.DrawGraph(compositeJson,compositeChart);
			  
				        //Page.DrawScatter(baseData,scatterChart);//行业关联散点图
				        Page.DrawPie(baseData,financeChart);
				        
				        /**
				        * pos按月份数据处理
				        */
				        var handleBarJson = function(){
				        	var result = {};
				        	var labelArr = [];
				        	var valueArr = [];
				        	for(var i=1;i<=12;i++){
				        		labelArr.push('第'+i+'个月');
				        		valueArr.push(parseFloat(baseData['trans_amt_'+i]).toFixed(2));
				        	}
				        	result.label = labelArr;
				        	result.value = valueArr;
				        	return result;
				        }
				        Page.DrawBar(handleBarJson(),posChart);
					
	/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))});//第三个参数是给这个模块命名，否则[name]是一个自动分配的id 
					/**
					* 明细数据填充
					*/
					//Page.loadDetails(opts);
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
				return __webpack_require__(14);
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

	Page.DrawGraph = function(json,myChart){
		var nodes=[],edges=[];
		for(var i=0;i<json.nodes.length;i++){
			var nodeItem={};
			var node=json.nodes[i];
			nodeItem.x=node.x;
			nodeItem.y=node.y;
			nodeItem.id=node.id;
			nodeItem.name=node.label;
			nodeItem.symbolSize=node.size;
			nodeItem.itemStyle={
				normal:{
					color:node.color
				}
			}
			nodes.push(nodeItem);
		}
		for(var i=0;i<json.edges.length;i++){
			var edgeItem={};
			edgeItem.source=json.edges[i].sourceID;
			edgeItem.target=json.edges[i].targetID;
			edges.push(edgeItem);
		}
	    myChart.hideLoading();
	    myChart.setOption({
	        title: {
	            text: ''
	        },
	        animationDurationUpdate: 1500,
	        animationEasingUpdate: 'quinticInOut',
	        series : [
	            {
	                type: 'graph',
	                layout: 'none',
	                // progressiveThreshold: 700,
	                data: nodes,
	                edges: edges,
	                label: {
	                    //normal配置项设置默认label的展示情况
	                    normal: {
	                        position: 'right',
	                        show: true
	                    },
	                    emphasis: {
	                        position: 'right',
	                        show: true
	                    }
	                },
	                //roma: scale//缩放, move//平移, true//都开启, false//都不开启
	                roam: false,
	                focusNodeAdjacency: true,
	                lineStyle: {
	                    normal: {
	                        width: 0.5,
	                        curveness: 0.3,
	                        opacity: 0.7
	                    }
	                }
	            }
	        ]
	    }, true);
	}

	Page.DrawScatter = function(data,myChart){
		data = data || {};
		var data = [
		    [[10,0.5,50,'汽车制造业',2015],[20,0.4,50,'服装业',2015],[30,0.3,50,'养殖业',2015],[40,0.2,50,'农业',2015],[50,0.1,50,'服务业',2015]]
		];
	 	myChart.hideLoading();
	    myChart.setOption({
		    title: {
		        text: ''
		    },
		    legend: {
		        right: 10,
		        data: ['行业']
		    },
		    xAxis: {
		    	name:'排名',
		        splitLine: {
		            lineStyle: {
		                type: 'dashed'
		            }
		        }
		    },
		    yAxis: {
		    	name:'关联度',
		        splitLine: {
		            lineStyle: {
		                type: 'dashed'
		            }
		        },
		        scale: true
		    },
		    series: [{
		        name: '行业',
		        data: data[0],
		        type: 'scatter',
		        symbolSize: function (data) {
		            return data[2];
		        },
		        label: {
		            emphasis: {
		                show: true,
		                formatter: function (param) {
		                    return param.data[3];
		                },
		                position: 'top'
		            }
		        },
		        itemStyle: {
		            normal: {
		                shadowBlur: 10,
		                shadowColor: 'rgba(25, 100, 150, 0.5)',
		                shadowOffsetY: 5,
		                color: '#03a9f4'
		            }
		        }
		    }]
		}, true);
	}

	Page.DrawPie = function(data,myChart) {
		data = data || {};
		myChart.hideLoading();
	    myChart.setOption({
	    	title : {},
	    	tooltip : {
	    		trigger: 'item',
	    		formatter: "{a} <br>{b} : {c} ({d}%)" 
	    	},
	    	legend: {
	    		orient:'vertical',
	    		left:'left',
	    		data:['购买基金','购买理财','购买国债','购买保险']
	    	},
	    	series: [{
	    		name:'理财信息',
	    		type:'pie',
	    		radius:'55%',
	    		center:['50%','50%'],
	    		data:[
	    			{value:data.fund_amt||0,name:'购买基金'},
	    			{value:data.financing_amt||0,name:'购买理财'},
	    			{value:data.national_debt_amt||0,name:'购买国债'},
	    			{value:data.insurance_amt||0,name:'购买保险'}
	    		],
	    		itemStyle: {
	    			emphasis: {
	    				shadowBlur:10,
	    				shadowOffsetX:0,
	    				shadowColor:'rgba(0,0,0,0.5)'
	    			}
	    		}
	    	}]
	    })
	}

	Page.DrawBar = function(data,myChart) {
		data = data || {};
		//console.log(data);
		myChart.hideLoading();
		myChart.setOption({
			title: {
				text:'距今最近的第N个月交易总金额',
				textStyle: {
					color:'#555',
					fontSize:14
				}
			},
			color:['#3398DB'],
			tooltip : {
				trigger: 'axis',
				axisPointer : {
					type: 'shadow'
				}
			},
			grid: {
				left:'3%',
				right:'4%',
				bottom:'3%',
				containLabel:true
			},
			xAxis : [{
				type:'category',
				data:data.label,
				axisTick:{
					alignWithLabel:true
				}
			}],
			yAxis : [{
				type:'value'
			}],
			series : [{
				name:'交易总金额',
				type:'bar',
				barWidth:'60%',
				data:data.value
			}]
		})
	}
	/**
	* 明细数据填充
	*/
	//资产
	//信用卡
	//POS
	Page.loadDetails = function(opts){
		$.when(
			Page.APIS.getCustomerPosInfo(opts)
		).done(function(data){
			//注意：如果是多个接口，返回值是一个ajax对象，数据要用data[0]获取，否则报错；如果是一个接口则直接data获取
			if(data.code==1000 && data.data){
				//console.log(data.data.tb_ml_cpv_pos);
			}else{
				// alert(data.message);
			}
		})
	}

	/**
	Page.init({
		certificateCode:'410185197009166013'
	});
	**/

	module.exports = Page;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	var state = {};
	function Store(options) {
		var opts = options || {};
		state = this.initState = opts;
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
	Store.prototype.getInitialState = function() {
		state = this.initState;
		//console.log(state.customerCreditCardInfo);
		return state;
	}
	module.exports=Store;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 11 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var config=__webpack_require__(13);

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
/* 13 */
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
			"slimscroll": "javascripts/lib/jquery.slimscroll.js"
		}
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(15);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (Number, assetsMonthlyStat, customerCreditCardInfo, database, isNaN, parseInt, undefined) {
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
	buf.push("<div class=\"profile-header\">客户综合信息<div class=\"header-fr\"><i class=\"iconfont profile-close\">&#xe60b;</i></div></div><div class=\"left-box\"><div class=\"title-top\"><img" + (jade.attr("src", __webpack_require__(17), true, true)) + " class=\"user-icon\"><p class=\"text-title\">邮储河北省分行</p><p class=\"text-small\">信息科技部</p><p class=\"text-small\">三农金融部 </p></div><div class=\"title-item active\">概览</div><div data-move=\".base\" class=\"title-item\">基本信息</div><div class=\"title-item\">综合指标</div><div class=\"title-item\">资产信息</div><div class=\"title-item\">信用卡</div><div class=\"title-item\">POS信息</div><div class=\"title-item finance\">理财</div></div><div class=\"right-box\"><div class=\"swiper-container\"><div class=\"swiper-wrapper\"><div class=\"swiper-slide home-slide\"><div class=\"info-card\"><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>客户姓名：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.cus_name)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>月收入：</span>" + (jade.escape((jade_interp = util.formatMoney(database.monthly_profit)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>教育水平：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.educational_level)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>是否居住满一年：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.rsd_year_flag)) == null ? '' : jade_interp)) + "</td></tr></table></div><div class=\"info-title\">客户基本信息</div></div><div class=\"info-card card-col2\"><div class=\"info-title\">个贷业务综合指标</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>已拒贷贷款：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.rejected_loan_cnt)) == null ? '' : jade_interp)) + " 笔，共" + (jade.escape((jade_interp = util.formatMoney(database.rejected_loan_amt)) == null ? '' : jade_interp)) + "</td><td><span>已核销贷款：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.canceled_loan_cnt)) == null ? '' : jade_interp)) + " 笔，共" + (jade.escape((jade_interp = util.formatMoney(database.canceled_loan_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>在途贷款：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.curr_loan_cnt)) == null ? '' : jade_interp)) + " 笔，共" + (jade.escape((jade_interp = util.formatMoney(database.curr_loan_amt)) == null ? '' : jade_interp)) + "</td><td><span>在途贷款余额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.curr_loan_bal)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>历史逾期次数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.overdue_times_his)) == null ? '' : jade_interp)) + " 次</td><td> <span>历史逾期本金：</span>" + (jade.escape((jade_interp = util.formatMoney(database.overdue_capital_his)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-card card-col2\"><div class=\"info-title\">POS信息</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>商户名称：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.mer_name)) == null ? '' : jade_interp)) + "</td></tr><tr><td><span>营业执照注册地址：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.bus_lic_reg_addr)) == null ? '' : jade_interp)) + "</td></tr><tr><td><span>商户法定代表人姓名：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.mer_legal_name)) == null ? '' : jade_interp)) + "</td></tr><tr><td><span>近一年月均交易金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.total_amt_ly)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-card\"><div class=\"info-title\">资产信息汇总</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>介质数量：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.media_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>被司法查询次数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.justice_query_times)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>年月均交易额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.avg_amt_yearly)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-card\"><div class=\"info-title\">理财信息</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>购买基金：</span>" + (jade.escape((jade_interp = util.formatMoney(database.fund_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>购买理财：</span>" + (jade.escape((jade_interp = util.formatMoney(database.financing_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>购买国债：</span>" + (jade.escape((jade_interp = util.formatMoney(database.national_debt_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td><span>购买保险：</span>" + (jade.escape((jade_interp = util.formatMoney(database.insurance_amt)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-card card-col2\"><div class=\"info-title\">信用卡信息</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>信用卡数量：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.credist_card_cnt)) == null ? '' : jade_interp)) + "</td><td> <span>信用卡账户数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.acct_num_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>最低授信额度：</span>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_min)) == null ? '' : jade_interp)) + "</td><td> <span>最高授信额度：</span>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_max)) == null ? '' : jade_interp)) + "</td></tr><tr><td colspan=\"2\"><span>近一年月均消费金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_consume)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div style=\"clear:both;\"></div></div><div id=\"slide-base\" class=\"swiper-slide move\"></div><div id=\"slide-composite\" class=\"swiper-slide\"></div><div class=\"swiper-slide detail-slide\"><div class=\"info-detail first-info\"><table class=\"info-table\">\t\t\t\t\t\t\t\t<tr><td><b>介质数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.media_cnt)) == null ? '' : jade_interp)) + "</td><td> <b>折的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_book)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>卡的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_card)) == null ? '' : jade_interp)) + "</td><td> <b>活期一本通数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_onebk_cdm)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>定期一本通数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_onebk_fix)) == null ? '' : jade_interp)) + "</td><td><b>单的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_bill)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>活期折的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_book_cdm)) == null ? '' : jade_interp)) + "</td><td><b>定期折的数量： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_book_fix)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>外币定期单的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_bill_foreign)) == null ? '' : jade_interp)) + "</td><td><b>被司法查询次数： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.justice_query_times)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>资产总金额：</b>" + (jade.escape((jade_interp = util.formatMoney(database.total_savings_amt)) == null ? '' : jade_interp)) + "</td><td><b>活期余额： </b>" + (jade.escape((jade_interp = util.formatMoney(database.cdm_bal_sum)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>定期余额：</b>" + (jade.escape((jade_interp = util.formatMoney(database.fix_bal_sum)) == null ? '' : jade_interp)) + "</td><td><b>最早开户日期： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cd_earliest_open_date)) == null ? '' : jade_interp)) + "</td></tr></table></div><div class=\"info-detail\"><div class=\"detail-title\"><strong>年月额均交易金额：" + (jade.escape((jade_interp = util.formatMoney(database.avg_amt_yearly)) == null ? '' : jade_interp)) + "</strong></div><div style=\"max-height:200px;\" class=\"detail-body\"><table class=\"info-table\">");
	if(assetsMonthlyStat){			
	{
	// iterate assetsMonthlyStat						
	;(function(){
	  var $$obj = assetsMonthlyStat						;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var assetStat = $$obj[index];

	if ((index%2==0))
	{
	buf.push("<tr><td><b>交易日期：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	else
	{
	buf.push("<tr class=\"even\"><td><b>交易日期：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var assetStat = $$obj[index];

	if ((index%2==0))
	{
	buf.push("<tr><td><b>交易日期：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	else
	{
	buf.push("<tr class=\"even\"><td><b>交易日期：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	    }

	  }
	}).call(this);

	}
	}
	buf.push("</table></div></div></div><div class=\"swiper-slide detail-slide\"><div class=\"info-detail first-info\"><table class=\"info-table\">\t\t\t\t\t\t\t\t<tr><td><b>信用卡数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.credist_card_cnt)) == null ? '' : jade_interp)) + "</td><td> <b>累计授信额度：</b>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_sum)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>办理日期(最早)：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.earliest_open_date)) == null ? '' : jade_interp)) + "</td><td> <b>注销日期(最晚)：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.latest_close_date)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>最低授信额度：</b>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_min)) == null ? '' : jade_interp)) + "</td><td><b>最高授信额度：</b>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_max)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>近一年月均消费次数： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_sum_consume)) == null ? '' : jade_interp)) + "</td><td><b>近一年月均取现金额： </b>" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_withdrawl)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>近一年月均取现次数： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_sum_withdrawl)) == null ? '' : jade_interp)) + "</td><td><b>近一年月均利息金额： </b>" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_interest)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>近一年月均利息次数： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_sum_interest)) == null ? '' : jade_interp)) + "</td><td><b>近一年月均费用金额： </b>" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_fee)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>近一年月均费用次数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_sum_fee)) == null ? '' : jade_interp)) + "</td></tr></table></div><div class=\"info-detail\"><div class=\"detail-title\"><strong>近一年月均消费金额：" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_consume)) == null ? '' : jade_interp)) + "</strong></div><div style=\"max-height:200px;\" class=\"detail-body\">\t\t\t\t\t\t\t\t<table class=\"info-table\">");
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
	buf.push("</table></div></div></div><div class=\"swiper-slide detail-slide\"><div class=\"info-detail first-info\"><div class=\"detail-title\"><strong>商户名称：" + (jade.escape((jade_interp = util.fixedEmpty(database.mer_name)) == null ? '' : jade_interp)) + "</strong></div><div class=\"detail-body\"><table class=\"info-table\">\t\t\t\t\t\t\t\t<tr><td><b>商户法定代表人姓名：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.mer_legal_name)) == null ? '' : jade_interp)) + "</td><td> <b>商户拥有pos数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.pos_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td colspan=\"2\"> <b>营业执照注册地址：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.bus_lic_reg_addr)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-detail\"><div class=\"detail-title\"><strong>近一年月均交易金额: " + (jade.escape((jade_interp = util.formatMoney(database.total_amt_ly)) == null ? '' : jade_interp)) + "</strong></div><div id=\"pos-monthly\" style=\"height:270px;\" class=\"detail-body\">\t\t\t\t\t\t\t\t</div></div></div><div class=\"slide-finance swiper-slide\"><div id=\"slide-finance\"></div></div></div></div></div><div style=\"clear:both;\"></div><div class=\"profile-footer\"></div>");}.call(this,"Number" in locals_for_with?locals_for_with.Number:typeof Number!=="undefined"?Number:undefined,"assetsMonthlyStat" in locals_for_with?locals_for_with.assetsMonthlyStat:typeof assetsMonthlyStat!=="undefined"?assetsMonthlyStat:undefined,"customerCreditCardInfo" in locals_for_with?locals_for_with.customerCreditCardInfo:typeof customerCreditCardInfo!=="undefined"?customerCreditCardInfo:undefined,"database" in locals_for_with?locals_for_with.database:typeof database!=="undefined"?database:undefined,"isNaN" in locals_for_with?locals_for_with.isNaN:typeof isNaN!=="undefined"?isNaN:undefined,"parseInt" in locals_for_with?locals_for_with.parseInt:typeof parseInt!=="undefined"?parseInt:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}

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
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	//console.time('time');
	//console.profile();
	__webpack_require__(20);
	__webpack_require__(21);
	var Store = __webpack_require__(10);
	var Events = __webpack_require__(11);

	var Page = {
		push: 0,
		ajaxDataType: typeof CVal == "undefined" ? 'jsonp' : 'jsonp',
		init: function(){
			function firstRequest(callback){
				$(document.body).append('<div class="msg-plus"></div>');
				$.when(
					Page.APIS.getMsgs(),
					Page.APIS.getClosedSum()
				).done(function(data,sum){
					data[0].data.sum = sum[0].data[0];//注意：如果是多个接口，返回值是一个ajax对象，数据要用data[0]获取，否则报错；如果是一个接口则直接data获取
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
		var apiPath = typeof CVal == "undefined" ? 'http://21.32.95.248:8088/bhoserver' : CVal.path;
		var postData = {};
		if(typeof CVal != "undefined"){
			postData.userId = CVal.getUserId();
			postData.posId = CVal.getPostId();
			postData.orgId  = CVal.getOrgId();
		}
		else{
			postData.userId = "20111207770";
			postData.posId ="E02";
			postData.orgId  ="13011576";
		}
		var Apis = {
			msgs: apiPath + '/portals/getDataClosed',
			msgs2: apiPath + '/portals/getCloseDataSoon',
			msgs3: apiPath + '/portals/getLoanRemindListByUserId',
			news: apiPath + '/portals/news',
			closedSum: apiPath + '/portals/getDataClosedSum',
			closeDataSoonSum: apiPath + '/portals/getCloseDataSoonSum',
			dealShowData: apiPath + '/portals/dealShowData',
			loanRemindAlteraction: apiPath + '/portals/loanRemindAlteraction',
			bulletinInfo: apiPath + '/portals/bulletinInform/getBulletinInformDetail'
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
			bulletinInfo: function() {
				return $.ajax({
					url: Apis.bulletinInfo,
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
				return __webpack_require__(22);
			},
			detailView: function() {
				return __webpack_require__(24);
			},
			newsView: function() {
				return __webpack_require__(25);
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
			__webpack_require__.e/* nsure */(2, function(){/* WEBPACK VAR INJECTION */(function($) {
				__webpack_require__(26);
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
			
	/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))});//第三个参数是给这个模块命名，否则[name]是一个自动分配的id
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
			'.content-tabs@change.tabs':'changeTabs',//自定义事件
			'.text-ellipsis@mouseover':'showTips',
			'.text-ellipsis@mouseout':'hideTips'
		})
		return {
			init: function() {
				events.dispatch(this);
			},
			showNews: function() {
				Page.Render.news();
				if(Page.push==1){
					push('left');
				}
				/**
				$.when(Page.APIS.getNews()).done(function(data){
					Page.Store.dispatch(Page.Action.news(data.records));
					Page.Render.news();
					if(Page.push==1){
						push('left');
					}
				})
				**/
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
					/**
					else if(tabIndex==3 && !state.tab4) {
						$.when(Page.APIS.bulletinInfo()).done(function(data){
							Page.Store.dispatch(Page.Action.tab4(data.data));
							Page.Render.init();
							//$('.content-tabs').trigger('change.tabs',2); 
							Page.HandleEvents.changeTabs('change.tabs',3);
						})
					}
					**/
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
			index: function(record){
				var tabs=['已经结清','即将结清','贷后助手','业务通报'],
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
			},//业务通报tab页
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(15);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (BUS_LAT, msgs, parseInt, tab2, tab3, undefined) {
	buf.push("<div class=\"msg-content\"><div class=\"serach-chip\">个贷助手</div><table class=\"content-tabs\"><tr>");
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

	buf.push("</tr></table><ul data-tab-index='0' class=\"content\"><div class=\"content-tips\">已经结清<span class=\"red-num\">" + (jade.escape(null == (jade_interp = msgs.content.sum.COUNTS) ? "" : jade_interp)) + "</span>笔，共<span class=\"red-num\">" + (jade.escape(null == (jade_interp = msgs.content.sum.AMOUNTALL/10000) ? "" : jade_interp)) + "</span>万元</div>");
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
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("data-lng", '' + (value.BUS_LNG) + '', true, true)) + (jade.attr("data-lat", '' + (BUS_LAT) + '', true, true)) + (jade.attr("src", __webpack_require__(23), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button>");
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
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("data-lng", '' + (value.BUS_LNG) + '', true, true)) + (jade.attr("data-lat", '' + (BUS_LAT) + '', true, true)) + (jade.attr("src", __webpack_require__(23), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button>");
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

	buf.push("</ul><ul data-tab-index='1' class=\"content\">");
	if(tab2){
	{
	buf.push("<div class=\"content-tips\">即将结清<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab2.content.sum.COUNTS) ? "" : jade_interp)) + "</span>笔，共<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab2.content.sum.AMOUNTALL/10000) ? "" : jade_interp)) + "</span>万元</div>");
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
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("data-lng", '' + (value.BUS_LNG) + '', true, true)) + (jade.attr("data-lat", '' + (value.BUS_LAT) + '', true, true)) + (jade.attr("src", __webpack_require__(23), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button>");
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
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("data-lng", '' + (value.BUS_LNG) + '', true, true)) + (jade.attr("data-lat", '' + (value.BUS_LAT) + '', true, true)) + (jade.attr("src", __webpack_require__(23), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button>");
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
	buf.push("</ul><ul data-tab-index='3' class=\"content\"><li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">1.</span><span>杜士凯</span><span class=\"end-day\">已调查<span class=\"day-num\">3</span>笔</span></div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>停留8天</span><span>13833901253</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + " title=\"河北省石家庄市\" class=\"map-icon\"></td></tr><tr><td colspan=\"2\"><span>制造业</span></td></tr><tr><td colspan=\"2\"><p class=\"text-ellipsis\"> <b>通报详情：</b>杜士凯：调查结论及建议10万,杜士凯：填写损益表10万,高保帅：调查结论及建议7万,高保帅：填写损益表10万,王中良：调查结论及建议7万,王中良：填写损益表10万</p><p class=\"text-tooltip\">杜士凯：调查结论及建议10万,杜士凯：填写损益表10万,高保帅：调查结论及建议7万,高保帅：填写损益表10万,王中良：调查结论及建议7万,王中良：填写损益表10万</p></td></tr></table></div></li><li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">2.</span><span>李国军</span><span class=\"end-day\">待调查<span class=\"day-num\">1</span>笔</span></div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>停留8天</span><span>15028831666</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(23), true, true)) + " title=\"河北省石家庄市\" class=\"map-icon\"></td></tr><tr><td colspan=\"2\"><span>制造业</span></td></tr><tr><td colspan=\"2\"><p class=\"text-ellipsis\"> <b>通报详情：</b>10-04 申请金额30万</p><p class=\"text-tooltip\">10-04 申请金额30万</p></td></tr></table></div></li></ul></div><div class=\"msg-tabs\"><table><tr><td class=\"home active\"> <i class=\"iconfont\">&#xe60f;</i><span>消息</span></td><td class=\"news\"> <i class=\"iconfont\">&#xe634;</i><span>新闻</span></td><td class=\"showhide\"> <i class=\"iconfont\">&#xe635;</i><span>收起</span></td></tr></table></div>");}.call(this,"BUS_LAT" in locals_for_with?locals_for_with.BUS_LAT:typeof BUS_LAT!=="undefined"?BUS_LAT:undefined,"msgs" in locals_for_with?locals_for_with.msgs:typeof msgs!=="undefined"?msgs:undefined,"parseInt" in locals_for_with?locals_for_with.parseInt:typeof parseInt!=="undefined"?parseInt:undefined,"tab2" in locals_for_with?locals_for_with.tab2:typeof tab2!=="undefined"?tab2:undefined,"tab3" in locals_for_with?locals_for_with.tab3:typeof tab3!=="undefined"?tab3:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/map-icon.png?a74aeb53";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(15);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (detail) {
	buf.push("<div class=\"theme-blue adPops-container\"><div class=\"adPops-title\"><div class=\"back-home\"><span>返回</span></div></div><div class=\"adPops-content\"><div class=\"content-chip\">" + (null == (jade_interp = detail.content) ? "" : jade_interp) + "</div></div></div>");}.call(this,"detail" in locals_for_with?locals_for_with.detail:typeof detail!=="undefined"?detail:undefined));;return buf.join("");
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(15);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<div class=\"theme-blue adPops-container\"><div class=\"adPops-title\"><div class=\"back-home theme-blue\"><img" + (jade.attr("src", __webpack_require__(17), true, true)) + " class=\"yc-logo\">行业新闻<i class=\"iconfont close-icon\">&#xe639;</i></div></div><div class=\"adPops-content\"><div class=\"content-box\"><div class=\"news-card\"><div class=\"news-title\">27日机构强推买入 6股极度低估</div><div class=\"news-summary\">杜士凯：调查结论及建议10万,杜士凯：填写损益表10万,高保帅：调查结论及建议7万,高保帅：填写损益表10万,王中良：调查结论及建议7万,王中良：填写损益表10万杜士凯：调查结论及建议10万,杜士凯：填写损益表10万,高保帅：调查结论及建议7万,高保帅：填写损益表10万,王中良：调查结论及建议7万,王中良：填写损益表10万杜士凯：调查结论及建议10万</div><div class=\"news-footer\"><span class=\"news-source\">凤凰网财经</span><span class=\"news-time\">2016-09-26</span><div class=\"news-tags\"><span>小麦</span><span>创业板</span></div></div></div><div class=\"news-card\"><div class=\"news-title\">27日机构强推买入 6股极度低估</div><div class=\"news-summary\">杜士凯：调查结论及建议10万,杜士凯：填写损益表10万,高保帅：调查结论及建议7万,高保帅：填写损益表10万,王中良：调查结论及建议7万,王中良：填写损益表10万杜士凯：调查结论及建议10万,杜士凯：填写损益表10万,高保帅：调查结论及建议7万,高保帅：填写损益表10万,王中良：调查结论及建议7万,王中良：填写损益表10万杜士凯：调查结论及建议10万</div><div class=\"news-footer\"><span class=\"news-source\">凤凰网财经</span><span class=\"news-time\">2016-09-26</span><div class=\"news-tags\"><span>小麦</span><span>创业板</span></div></div></div><div class=\"news-card\"><div class=\"news-title\">27日机构强推买入 6股极度低估</div><div class=\"news-summary\">杜士凯：调查结论及建议10万,杜士凯：填写损益表10万,高保帅：调查结论及建议7万,高保帅：填写损益表10万,王中良：调查结论及建议7万,王中良：填写损益表10万杜士凯：调查结论及建议10万,杜士凯：填写损益表10万,高保帅：调查结论及建议7万,高保帅：填写损益表10万,王中良：调查结论及建议7万,王中良：填写损益表10万杜士凯：调查结论及建议10万</div><div class=\"news-footer\"><span class=\"news-source\">凤凰网财经</span><span class=\"news-time\">2016-09-26</span><div class=\"news-tags\"><span>小麦</span><span>创业板</span></div></div></div></div></div></div>");;return buf.join("");
	}

/***/ }
/******/ ])
});
;