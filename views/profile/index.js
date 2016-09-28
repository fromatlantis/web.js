'use strict';
require('./index.css');
//require('./index2.css');
var Store = require('Store');
var Events = require('Events');

//swiper轮播插件
require('swiper2Css');
var Swiper = require('swiper2');

var Page = {
	Apis: {
		msgs: '/apis/msgs.json',
		detail: '/apis/msgDetail.json'
	},
	init: function(){
		$(document.body).append('<div class="profile"></div>');
		Page.Render.init();
		Page.mySwiper = new Swiper('.swiper-container',{
			mode:'vertical',
			mousewheelControl:true,
			onSlideChangeStart:function() {
				var index = Page.mySwiper.activeIndex;
				$('.title-item:eq('+index+')').addClass('active').siblings('.active').removeClass('active');
			}
		});
		require.ensure('echarts',function(){
			var echarts = require('echarts');
			var baseChart = echarts.init(document.getElementById('slide-base'));
			var compositeChart = echarts.init(document.getElementById('slide-composite'));
			var scatterChart = echarts.init(document.getElementById('slide-correlation'));
			var financeChart = echarts.init(document.getElementById('slide-finance'));
	        //myChart.showLoading();
	        $.getJSON('/echart/graph.json', function (json) {
	        	Page.DrawGraph(json,baseChart);
	        });
          	$.getJSON('/echart/graph2.json', function (json) {
	        	Page.DrawGraph(json,compositeChart);
	        });
	        Page.DrawScatter(scatterChart,echarts);
	        Page.DrawPie(financeChart);
		},'echarts');//第三个参数是给这个模块命名，否则[name]是一个自动分配的id 
	}
}

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
	function index() {
		var $profile = $('.profile');
		var template = Page.UI.indexView();
		//console.log(state.msgs);
		var html = template(Page.Store.getState());
		$profile.html(html);
		Page.HandleEvents.init();
	}
	return {
		init: function() {
			index();
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
		'.profile .title-item@mouseover': 'moveTo'
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
		}
	}
}());

Page.Action = (function() {
	return {
		index: function(record){
			return {
				type: 'msgs',
				payload : {
					tabs:tabs,
					content:content
				}
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

Page.DrawScatter = function(myChart,echarts){
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

Page.DrawPie = function(myChart) {
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
    			{value:310,name:'购买基金'},
    			{value:234,name:'购买理财'},
    			{value:135,name:'购买国债'},
    			{value:1200,name:'购买保险'}
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

//Page.init();

module.exports = Page;