'use strict';
/**
注意立即执行函数内方法外的变量非最新实时值，比例获取dom，如果dom是在Js内添加的，那么$(dom)永远为空，因此需要放在立即执行行数内的方法内
**/
//console.time('time');
//console.profile();
require('./index.css');
require('select2');
var Store = require('Store');
var Events = require('Events');
require('datapicker');
//静态数据
//var list = require('./data/list.json');

var Page = {
	params: {
	},
	pager: {
		pageNo: 1,
		pageSize: 5
	},
	init: function(){
		function firstRequest(callback){
			$.when(
				Page.APIS.getList(),
				Page.APIS.getSearchResult()
			).done(function(list,result){
				var store = Page.Store;
				//store.dispatch(Page.Action.list(list[0].data));
				//store.dispatch(Page.Action.result(result[0].data));
				
				var list = require('./data/list.json');
				var result = require('./data/search.json');
				var case_data = require('./data/case.json');
				var level = require('./data/level.json');

				store.dispatch(Page.Action.list(list));
				store.dispatch(Page.Action.result(result));
				store.dispatch(Page.Action.case(case_data.obj));
				store.dispatch(Page.Action.level(level.listObj));

				callback();
			})
		}
		firstRequest(function(){
			Page.Render.init();
		})
	}
}
Page.APIS = (function(){
	var Apis = {
		list: '/cheat/case/gxdw/list',	//
		search: '/cheat/case/search'//
	}
	return {
		getList: function(opts) {
			/**联调接口
			return $.ajax({
				url: Apis.list,
				type: 'GET',
				dataType: 'json',
				data: postData
			})
			**/
		},
		getSearchResult: function(postData) {
			/**联调接口
			return $.ajax({
				url: Apis.search,
				type: 'GET',
				dataType: 'json',
				data: postData
			})
			**/
		}
	}
}());
Page.UI = (function(){
	return {
		indexView: function() {
			return require('./tmpl/index.jade');
		},
		resultView: function() {
			return require('./tmpl/result.jade');
		}
	}
}());

Page.Store = (function(){
	var store = new Store({
	});
	return store;
}());

Page.Render = (function(){
	var $search = $('.fraud-search-container');
	function index() {
		var template = Page.UI.indexView();
		//console.log(Page.Store.getState());
		var html = template(Page.Store.getState());
		$search.html(html);
		/**
		 * 下拉选择插件
		 */
		$('select',$search).select2();

		/**
		 * 报警时间选择插件
		 */
	    var locale = {
	        format: 'YYYY-MM-DD',
	        separator: ' 至 ',
	        applyLabel: '确定',
	        cancelLabel: '取消',
	        fromLabel: 'From',
	        toLabel: 'To',
	        customRangeLabel: 'Custom',
	        daysOfWeek: ['日', '一', '二', '三', '四', '五','六'],
	        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	        firstDay: 1
	     };
		$('#alarm-time',$search).daterangepicker({
			locale: locale,
     		autoUpdateInput:false,
	        applyClass: 'btn-primary',
	        clearClass: 'btn-primary'
		},function(start, end, label, action) {
	       //TODO
            if($(event.target).hasClass('applyBtn')){
                Page.params.beginDate = start.format('YYYY-MM-DD');
                Page.params.endDate = end.format('YYYY-MM-DD');
            }
	    }).on('clear.daterangepicker', function(){
	        $(this).val('');
	    });

		Page.HandleEvents.init();
	}
	function pager(data){
		var pageParams = Page.pager;
        var pagesCount = Math.ceil(data.total / pageParams.pageSize);
        var pagesCountData = {
            totalCount: data.total,
            //totalCount:10,
            pagesCount: pagesCount
        };
        // render pages
        var pagesData = {
            num_edge_entries: 2,
            num_display_entries: 4,
            callback: function(pageIndex){
            	pageParams.pageNo = pageIndex + 1;
            	$('.current-page').text(pageParams.pageNo);
            	//render
            	
	        },
            items_per_page: 1,
            link_to: 'javascript:;',
            current_page: (pageParams.pageNo-1),
            prev_text: '<i></i>',
            next_text: '<i></i>'
        };
        $('.data-page .pages',$search).pagination(pagesCount,pagesData);
    }
    function result() {
    	var template = Page.UI.resultView();
		//console.log(Page.Store.getState());
		var html = template(Page.Store.getState());
		$('.search-result tbody',$search).html(html);
    }
	return {
		init: function() {
			index();
		},
		pager: function() {
			pager();
		},
		result: function() {
			result();
		}
	}
}());

Page.HandleEvents = (function(){
	var events = new Events({
		'.fraud-search-container .conditions-footer > button@click': 'showResult',
	}) 
	return {
		init: function() {
			events.dispatch(this);
		},
		showResult: function() {
			var postData = {
				bjsjBegin: Page.params.beginDate,
				bjsjEnd: Page.params.endDate,
				location: $('.alarm-address').val(),
				jqjb: $('.alarm-level option:selected').val(),
				gxdw: $('.alarm-unit option:selected').val(),
				jqlx: $('.alarm-type option:selected').val(),
				sjdbh: $('.alarm-id').val(),
				bjrxm: $('.alarm-name').val(),
				bjrdh: $('.alarm-tel').val(),
				bjxq: $('.alarm-des').val(),
				clqk: $('.alarm-deals').val(),
				keyword: '',
				pageNo: Page.pager.pageNo,
				pageSize: Page.pager.pageSize
			}
			console.log(postData);
			var result = require('./data/search.json');
			Page.Store.dispatch(Page.Action.result(result));
			Page.Render.result();
		}
	}
}());

Page.Action = (function() {
	return {
		list: function(record){
			var data = record.listObj;
			var result = [];
			var roots = [];
			data.forEach(function(item){
				if(item.pid == ""){
					var rootItem = {
						id : item.id,
						name : item.name
					}
					roots.push(rootItem);
				}
			})
			roots.forEach(function(root){
				data.forEach(function(item){
					if(item.pid != "" && root.id == item.pid) {
						var resultItem = {
							root : {
								id : item.pid,
								name : root.name
							},
							nodes : []
						}
						var node = {
							id : item.id,
							name : item.name
						};
						resultItem.nodes.push(node);
						result.push(resultItem);
					}
				})
			})
			//console.log(result);
			return {
				type: 'list',
				payload : result
			}
		},
		result: function(record) {
			return {
				type:'result',
				payload:record
			}
		},
		case: function(record) {
			return {
				type:'case_data',
				payload:record
			}
		},
		level: function(record) {
			return {
				type:'level',
				payload:record
			}
		}
	}
}());

//Page.init();
//console.timeEnd('time');

module.exports = Page;
