/**
 * @author vincent.nzw
 * @description can also use node-fs fetch..
 */
'use strict';
define(function(require,exports,module){
	var underscore=require('underscore');
	/**
	_.templateSettings = {
	  interpolate: /\{\{(.+?)\}\}/g
	};
	**/
	function TemplateFromUrl(options){
		var opts=options||{};
		this.tmpl_name=opts.tmplName;
		this.tmpl_data=opts.tmplData;
	}
	TemplateFromUrl.prototype.getHtml=function() {
		var tmpl_name=this.tmpl_name,tmpl_data=this.tmpl_data;
		var tmpl_string;
	    if ( ! this.tmpl_cache ) { 
	        this.tmpl_cache = {};
	    }
	    if ( ! this.tmpl_cache[tmpl_name] ) {
	        var tmpl_dir = 'templates';
	        var tmpl_url = tmpl_dir + '/' + tmpl_name + '.html';
	        $.ajax({
	            url: tmpl_url,
	            method: 'GET',
	            async: false,
	            success: function(data) {
	                tmpl_string = data;
	            }
	        });
	        this.tmpl_cache[tmpl_name] = _.template(tmpl_string);
	    }
	    return this.tmpl_cache[tmpl_name](tmpl_data);
	}
	module.exports=TemplateFromUrl;
})