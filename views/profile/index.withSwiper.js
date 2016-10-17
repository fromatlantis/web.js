'use strict';
require('./index.css');
//require('./index2.css');
var Store = require('Store');
var Events = require('Events');

//swiper轮播插件
require('swiper2Css');
var Swiper = require('swiper2');
var UtilFn = require('Util'),Util = new UtilFn();

var Page = {
	isFirstLoad:true,
	ajaxDataType: typeof CVal == "undefined" ? 'jsonp' : 'jsonp',
	init: function(options){
		var opts = options || {};
		$(document.body).append('<div class="profile"></div>');
		function firstRequest(callback){
			var store = Page.Store;
				
			var _loadCnt = 4;
			$.when(
				Page.APIS.getCustomerInfo(opts)
			).done(function(data){
				//注意：如果是多个接口，返回值是一个ajax对象，数据要用data[0]获取，否则报错；如果是一个接口则直接data获取
				if(data.code==1000 && data.data){
					// callback(data.data.tb_ml_cpv_union_head_five_par);
				}else{
					// alert(data.message);
				}
				_loadCnt--;
				var _data = data.data.tb_ml_cpv_union_head_five_par;
				store.dispatch(Page.Action.index(_data));
				loadDone();
			});
			//POS信息
			$.when(
				Page.APIS.getCustomerPosInfo(opts)
			).done(function(data){
				_loadCnt--;
				var _data = data.data || {};
				store.dispatch(Page.Action.customerPosInfo(_data.tb_ml_cpv_pos || {}));
				loadDone();
			});
			//储蓄交易
			$.when(
				Page.APIS.getAssetsMonthlyStat(opts)
			).done(function(data){
				_loadCnt--;
				var _data = data.data || [];
				store.dispatch(Page.Action.assetsMonthlyStat(_data));
				loadDone();
			});
			//信用卡
			$.when(
				Page.APIS.getCustomerCreditCardInfo(opts)
			).done(function(data){
				_loadCnt--;
				var _data = data.data || [];
				store.dispatch(Page.Action.customerCreditCardInfo(_data));
				loadDone();
			});
			//请求结束检测
			function loadDone(){
				if(_loadCnt == 0){
					Page.Render.init();
					callback(store);
				}
					
			}
		}
		
		firstRequest(function(store){
			Page.mySwiper = new Swiper('.swiper-container',{
				mode:'vertical',
				mousewheelControl:true,
				onSlideChangeStart:function() {
					var index = Page.mySwiper.activeIndex;
					$('.title-item:eq('+index+')').addClass('active').siblings('.active').removeClass('active');
				}
			});
			require.ensure('echarts',function(){
				var baseData = store.getState().database;
				var echarts = require('echarts');
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
							if(_val != undefined) flag = true;
						});
						if(flag){
							_label = _label.replace(/[#]/g,function(){
								var _val = baseData[idxArr.shift()];
								if(_val ===  true) _val = '是';
								else if(_val ===  false) _val = '否';
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
						{color: "#4f19c7", label: "居住满一年", attributes: {}, y: 100, x: 120, id: "living", size: 15},
						{color: "#4f19c7", label: "月收入 #",idx: "monthly_profit", attributes: {}, y: -150, x: -200, id: "income", size: 15},
						{color: "#4f19c7", label: "#",idx: "cus_name", attributes: {}, y: -100, x: 100, id: "name", size: 15},
						{color: "#4f19c7", label: "是否本地户口 - #",idx: "is_native_account", attributes: {}, y: 100, x: -100, id: "address", size: 15},
						{color: "#4f19c7", label: "#",idx: "mobile_phone", attributes: {}, y: -50, x: 80, id: "phone", size: 15},
						{color: "#4f19c7", label: "", attributes: {}, y: 100, x: 135, id: "-1", size: 0.01}
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
						{color: "#4f19c7", label: "已拒贷贷款：#笔，共#",idx:"rejected_loan_cnt,rejected_loan_amt,",attributes: {}, y: 0, x: -80, id: "1", size: 15},
						{color: "#4f19c7", label: "已核销贷款：#笔，共#", idx: "canceled_loan_cnt,canceled_loan_amt",attributes: {}, y: 0, x: 80, id: "2", size: 15},
						{color: "#4f19c7", label: "在途贷款：#笔，共#", idx: "curr_loan_cnt,curr_loan_amt",attributes: {}, y: 50, x: -80, id: "3", size: 15},
						{color: "#4f19c7", label: "在途贷款余额：#", idx: "curr_loan_bal",attributes: {}, y: -80, x: 60, id: "4", size: 15},
						{color: "#4f19c7", label: "历史逾期次数：#次", idx: "overdue_times_his",attributes: {}, y: 80, x: -60, id: "5", size: 15},
						{color: "#4f19c7", label: "历史逾期本金：#", idx: "overdue_capital_his",attributes: {}, y: -50, x: 80, id: "6", size: 15},
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
		        		valueArr.push(baseData['trans_amt_'+i]);
		        	}
		        	result.label = labelArr;
		        	result.value = valueArr;
		        	return result;
		        }
		        Page.DrawBar(handleBarJson(),posChart);
			},'echarts');//第三个参数是给这个模块命名，否则[name]是一个自动分配的id 
			/**
			* 明细数据填充
			*/
			Page.loadDetails(opts);
		})
	},
	destroy: function(){
		$('.profile').remove();
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
		customerInfo: apiPath + 'http://21.32.95.248:8088/bhoserver/bhoApi/getCustomerInfoByIdNo',	//根据身份证号获取客户信息
		customerPosInfo: apiPath + 'http://21.32.95.248:8088/bhoserver/bhoApi/customerPosInfo',//    查询指定客户POS信息
		assetsMonthlyStat: apiPath + 'http://21.32.95.248:8088/bhoserver/bhoApi/getAssetsMonthlyStat',	//客户储蓄交易按月统计
		customerCreditCardInfo: apiPath + 'http://21.32.95.248:8088/bhoserver/bhoApi/customerCreditCardInfo'	//查询指定客户信用卡信息
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
		'.profile .title-item@mouseover': 'moveTo',
		'.profile .profile-close@click': 'close'
	}) 
	return {
		init: function() {
			events.dispatch(this);
		},
		moveTo: function(event) {
			var index = parseInt($(this).index())-1;
			$(this).addClass('active').siblings('.active').removeClass('active');
			Page.mySwiper.swipeTo(index,200,false);
			/**
			last = event.timeStamp;
			var target = $(this).data('move');
			var $rightBox = $('.right-box');
			setTimeout(function(){
				if(last-event.timeStamp == 0){
					var $targetEl = $(target);
					$rightBox.animate({scrollTop:$targetEl.offset().top + $rightBox.scrollTop() - 9},1000);
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
			return {
				type: 'assetsMonthlyStat',
				payload : record
			}
		},
		customerCreditCardInfo: function(record){
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