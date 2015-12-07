'use strict';
define(function(require,exports,module){
	var validator = require('validator');
	var View = require('View');
	var TemplateFromUrl=require('TemplateFromUrl');

	function FormView(options){
		var opts=options||{};
		this.tmplName=opts.tmplName;
		this.tmplData=opts.tmplData;
		this.holder=opts.holder;
		//this.callback=callback;
		//_init.call(this);
	}

	FormView.prototype=Object.create(View.prototype);
	FormView.prototype.constructor=FormView;

	FormView.prototype.generate=function(callback){
		var _tmpl=new TemplateFromUrl({
			tmplName:this.tmplName,
			tmplData:this.tmplData
		})
		this.content=_tmpl.getHtml();
		this.render(function(){
			if(callback)
				callback();
		})
	}
	module.exports=FormView;
	
})