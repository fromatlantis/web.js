'use strict';
define(function(require,exports,module){
	var Promise=require('promise').polyfill();
	function Store(options,callback){
		var opts=options||{};
		this.urlApi=opts.urlApi;
		this.fetchParams=opts.fetchParams||{};
		this.records={};
		this.callback=callback;
		_init.call(this);
	}
	function _init(){
		var me=this;
		var result = fetch(this.urlApi,this.fetchParams);
	    result.then(function(response) {
			return response.json()
		}).then(function(json) {
			console.log('parsed json', json);
			me.records=json;
			if(me.callback)
				me.callback();
		}).catch(function(ex) {
			console.log('parsing failed', ex)
		})
	}
	module.exports=Store;
})