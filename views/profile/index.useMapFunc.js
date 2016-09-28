'use strict';
(function(){
	var root = this;
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
				var myChart = echarts.init(document.getElementById('slide-base'));
		        myChart.showLoading();
		        $.getJSON('/echart/graph.json', function (json) {
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
		                        data: json.nodes.map(function (node) {
		                            return {
		                                x: node.x,
		                                y: node.y,
		                                id: node.id,
		                                name: node.label,
		                                symbolSize: node.size,
		                                itemStyle: {
		                                    normal: {
		                                        color: node.color
		                                    }
		                                }
		                            };
		                        }),
		                        edges: json.edges.map(function (edge) {
		                            return {
		                                source: edge.sourceID,
		                                target: edge.targetID
		                            };
		                        }),
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
		        });
			},'echarts');//第三个参数是给这个模块命名，否则[name]是一个自动分配的id 
			/**
			function getMsgs() {
				return $.ajax({
					url: Page.Apis.msgs,
					type: 'GET',
					dataType: 'JSON',
					data: {}
				})
			}
			function firstRequest(callback){
				$.when(getMsgs()).done(function(data){
					callback(data.records);
				})
			}
			firstRequest(function(record){
				var store = Page.Store;
				store.dispatch(Page.Action.index(record));
				Page.Render.init();
			})
			**/
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
		var $profile = $('.profile');
		function index() {
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
			'.profile .title-item@mouseover': 'moveTo',
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
				last = event.timeStamp;
				var target = $(this).data('move');
				var $rightBox = $('.right-box');
				setTimeout(function(){
					if(last-event.timeStamp == 0){
						var $targetEl = $(target);
						$rightBox.animate({scrollTop:$targetEl.offset().top + $rightBox.scrollTop() - 9},1000);
					}
				},350);
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

	Page.init();

	/**
	var msgPlus = Page;
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
	  		exports = module.exports = msgPlus;
		}
		exports.msgPlus = msgPlus;
	} else {
		root.msgPlus = msgPlus;
	}
	if (typeof define === 'function' && (define.amd || define.cmd)) {
		define('msgPlus', [], function() {
	  		return msgPlus;
		});
	}
	**/
}.call(this));