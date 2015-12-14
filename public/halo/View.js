define(function(require,exports,module){
	function View(options){
		var opts=options||{};
		this.content=opts.content;
		this.holder=opts.holder;
	}
	View.prototype.render=function(callback){
		//var holder=opts.holder;
		//alert('2');
		var holderEl=document.querySelector(this.holder);
		holderEl.innerHTML=this.content;
		if(callback)
			callback();
	}
	module.exports=View;
})