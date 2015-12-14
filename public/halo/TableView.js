'use strict';
define(function(require,exports,module){
	var View=require('./View');
	var dataTable=require('./plugins/datatables/jquery.dataTables.min.js');
	var TableHelper=require('./TableHelper');
 	var TemplateFromUrl=require('./TemplateFromUrl');

	function TableView(options){
		View.apply(this, arguments);
		var opts=options||{};
		this.tmplName=opts.tmplName;
		this.tmplData=opts.tmplData;
		this.holder=opts.holder;
		_init.call(this);
	}

	TableView.prototype=Object.create(View.prototype);
	TableView.prototype.constructor=TableView;

	function _init(){
		var _tmpl=new TemplateFromUrl({
			tmplName:this.tmplName,
			tmplData:this.tmplData
		})
		this.content=_tmpl.getHtml();
		this.render(function(){
			var tableHelper=new TableHelper();
		})
	}

	TableView.prototype.redraw=function(opts){
		var records=opts.records;
		var _tmpl=new TemplateFromUrl({
			tmplName:this.tmplName,
			tmplData:records
		})
		this.content=_tmpl.getHtml();
		this.render(function(){
			var tableHelper=new TableHelper();
		})
	}
	module.exports=TableView;
})