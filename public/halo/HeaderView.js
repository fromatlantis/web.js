'use strict';
define(function(require,exports,module){
	var View=require('./View');
	var TemplateFromUrl=require('./TemplateFromUrl');
	function HeaderView(options){
		var opts=options||{};
		this.tmplName=opts.tmplName;
		this.tmplData=opts.tmplData||{};
		this.holder=opts.holder;
		_init.call(this);
	}
	HeaderView.prototype=Object.create(View.prototype);
	HeaderView.prototype.constructor=HeaderView;

	function _init(){
		var _tmpl=new TemplateFromUrl({
			tmplName:this.tmplName,
			tmplData:this.tmplData
		})
		this.content=_tmpl.getHtml();
		this.render(function(){
			//var tableHelper=new TableHelper();
		})
	}
	module.exports=HeaderView;
})