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
require('pagination');
//静态数据
//var list = require('./data/list.json');

var Page = {
	params: {
	},
	pager: {
		pageNo: 1,
		pageSize: 20
	},
	init: function(){
		function firstRequest(callback){
			
			/**
			$.when(
				Page.APIS.getList(),
				Page.APIS.getSearchResult(),
				Page.APIS.getCase(),
				Page.APIS.getLevel()
			).done(function(list,result,case_data,level){
				var store = Page.Store;
				Page.pager.totalCount = Math.ceil(result[0].totalCount/Page.pager.pageSize);
				store.dispatch(Page.Action.list(list[0]));
				store.dispatch(Page.Action.result(result[0]));
				store.dispatch(Page.Action.case(case_data[0].obj));
				store.dispatch(Page.Action.level(level[0].listObj));

				callback();
			})
			**/
			
			var list = require('./data/list.json');
			var result = require('./data/search.json');
			var case_data = require('./data/case.json');
			var level = require('./data/level.json');
			var store = Page.Store;
			store.dispatch(Page.Action.list(list));
			store.dispatch(Page.Action.result(result));
			store.dispatch(Page.Action.case(case_data.obj));
			store.dispatch(Page.Action.level(level.listObj));
			callback();
			
		}
		firstRequest(function(){
			Page.Render.init();
		})
	}
}
Page.APIS = (function(){
	var ROOT = '/tuning/services/sjz/gongan'
	var Apis = {
		list: ROOT + '/cheat/case/gxdw/list',	//
		search: ROOT + '/cheat/case/search',
		case: ROOT + '/cheat/case/case_type',
		level: ROOT + '/cheat/case/jqjb/list'
	}
	return {
		getList: function(opts) {
			return $.ajax({
				url: Apis.list,
				type: 'GET',
				dataType: 'json'
			})
		},
		getSearchResult: function(postData) {
			if(!postData){
				postData = {};
				postData.pageNo = Page.pager.pageNo;
				postData.pageSize = Page.pager.pageSize;
			}
			return $.ajax({
				url: Apis.search,
				type: 'GET',
				dataType: 'json',
				data: postData
			})
		},
		getCase: function(){
			return $.ajax({
				url: Apis.case,
				type: 'GET',
				dataType: 'json'
			})
		},
		getLevel: function(){
			return $.ajax({
				url: Apis.level,
				type: 'GET',
				dataType: 'json'
			})
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
	function index() {
		var $search = $('.fraud-search-container');
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
     		//autoUpdateInput:false,
	        applyClass: 'btn-primary',
	        clearClass: 'btn-primary'
		},function(start, end, label) {
	       //TODO
	       //alert(label);
            if($(event.target).hasClass('applyBtn')){
                Page.params.beginDate = start.format('YYYY-MM-DD');
                Page.params.endDate = end.format('YYYY-MM-DD');
            }
	    }).on('clear.daterangepicker', function(){
	        $(this).val('');
	    });
	    $('#alarm-time').val('');
		// render pages
		var pager = Page.pager;
        var pagesData = {
            num_edge_entries: 2,
            num_display_entries: 4,
            callback: function(pageIndex){
				pager.pageNo = pageIndex + 1;
				//console.log(pager.pageNo);
				Page.Render.ajaxResult();
	        },
            items_per_page: 1,
            link_to: 'javascript:;',
            current_page: (pager.pageNo - 1),
            prev_text: '<i></i>',
            next_text: '<i></i>'
        };
        $('.data-page .pages',$search).pagination(Page.pager.totalCount,pagesData);
        $("[data-toggle='tooltip']").tooltip();
		Page.HandleEvents.init();
	}
    function result() {
    	var $search = $('.fraud-search-container');
    	var template = Page.UI.resultView();
		//console.log(Page.Store.getState());
		var html = template(Page.Store.getState());
		$('.search-result tbody',$search).html(html);
    }
    function ajaxResult() {
    	var $search = $('.fraud-search-container');
		var postData = {
			bjsjBegin: Page.params.beginDate,
			bjsjEnd: Page.params.endDate,
			location: $('.alarm-address').val(),
			sjdbh: $('.alarm-id').val(),
			bjrxm: $('.alarm-name').val(),
			bjrdh: $('.alarm-tel').val(),
			bjxq: $('.alarm-des').val(),
			clqk: $('.alarm-deals').val(),
			keyword: '',
			pageNo: Page.pager.pageNo,
			pageSize: Page.pager.pageSize
		}
		var jqjb = $('.alarm-level option:selected').val(),
			gxdw = $('.alarm-unit option:selected').val(),
			jqlx = $('.alarm-type option:selected').val();
		if(jqjb != '-1'){
			postData.jqjb = jqjb;
		}
		if(gxdw != '-1'){
			postData.gxdw = gxdw;
		}
		if(jqlx != '-1'){
			postData.jqlx = jqlx;
		}
		console.log(postData);
		/**
		var result = require('./data/search.json');
		Page.Store.dispatch(Page.Action.result(result));
		Page.Render.result();
		**/
		$.when(
			Page.APIS.getSearchResult(postData)
		).done(function(result){
			if(result.statusCode == 200){
				Page.Store.dispatch(Page.Action.result(result));
				Page.Render.result();
				if($('.pages').html()==''){
					var pager = Page.pager;
					var pagesData = {
						num_edge_entries: 2,
						num_display_entries: 4,
						callback: function(pageIndex){
							pager.pageNo = pageIndex + 1;
							//console.log(pager.pageNo);
							Page.Render.ajaxResult();
						},
						items_per_page: 1,
						link_to: 'javascript:;',
						current_page: (pager.pageNo - 1),
						prev_text: '<i></i>',
						next_text: '<i></i>'
					};
					var totalNumber = Math.ceil(result.totalCount/Page.pager.pageSize);
					$('.data-page .pages',$search).pagination(totalNumber,pagesData);
				}
			}else{
				$('.search-result tbody',$search).html('<tr><td colspan="9">暂无数据。</td></tr>');
			}
		})
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
		},
		ajaxResult: function() {
			ajaxResult();
		}
	}
}());

Page.HandleEvents = (function(){
	$('.fraud-search-container').on('click','.deal-btn',function(){
		var caseID = $(this).data('id');
		sessionStorage.setItem("caseID",caseID);
		window.location.assign(encodeURI("../fanZhaPian/cbevent3.html"));
	})
	var events = new Events({
		'.fraud-search-container .conditions-footer > button@click': 'showResult'
	}) 
	return {
		init: function() {
			events.dispatch(this);
		},
		showResult: function() {
			$('.pages').html('');
			Page.pager.pageNo = 1;
			Page.Render.ajaxResult();
		},
		goApp: function() {
			window.location.href='/core.html#!scopa/app'
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
				var resultItem = {
					root : {
						id : root.id,
						name : root.name
					},
					nodes : []
				}
				data.forEach(function(item){
					if(item.pid != "" && root.id == item.pid) {
						var node = {
							id : item.id,
							name : item.name
						};
						resultItem.nodes.push(node);
					}
				})
				result.push(resultItem);
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
