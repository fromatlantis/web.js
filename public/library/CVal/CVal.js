(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("$"));
	else if(typeof define === 'function' && define.amd)
		define("CVal", ["$"], factory);
	else if(typeof exports === 'object')
		exports["CVal"] = factory(require("$"));
	else
		root["CVal"] = factory(root["$"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpCVal"];
/******/ 	window["webpackJsonpCVal"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + ({"1":"slimscroll"}[chunkId]||chunkId) + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://21.32.3.162:80/bhoserver/resources/static/js/bho/CVal/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(CVal) {   //加载依赖
	//var CVal = {};
	__webpack_require__(3);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(8);
	//require('./bho/sha1.js');
	//require('./bho/haloPlugins/haloPlugins.css');

	//加载配置
	__webpack_require__(9);
	//加载客户和行业文件
	__webpack_require__(10);
	//加载信贷员检查情况通报文件
	__webpack_require__(11);
	//加载信贷员权限文件
	__webpack_require__(12);
	//加载微门户文件
	//require('./bho/haloPlugins/haloPlugins.js');
	//加密签名
	__webpack_require__(13);
	//加载自动录入调查报告模板文件(未启用)
	//Base.require(CVal.path + './bho/autoTemplate.js'));
	//加载跳转
	__webpack_require__(15);
	//加载权限文件
	__webpack_require__(16);

	var profile = __webpack_require__(17);
	var msgPlus = __webpack_require__(33);
	var modal = __webpack_require__(41);

	CVal.msgPlus = msgPlus;
	CVal.profile = profile;
	CVal.modal = modal;

	module.exports = CVal;


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var CVal = {};
	module.expors = CVal;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*! artDialog v6.0.5 | https://github.com/aui/artDialog */
	!function(){function a(b){var d=c[b],e="exports";return"object"==typeof d?d:(d[e]||(d[e]={},d[e]=d.call(d[e],a,d[e],d)||d[e]),d[e])}function b(a,b){c[a]=b}var c={};b("jquery",function(){return jQuery}),b("popup",function(a){function b(){this.destroyed=!1,this.__popup=c("<div />").css({display:"none",position:"absolute",outline:0}).attr("tabindex","-1").html(this.innerHTML).appendTo("body"),this.__backdrop=this.__mask=c("<div />").css({opacity:.75,background:"#000"}),this.node=this.__popup[0],this.backdrop=this.__backdrop[0],d++}var c=a("jquery"),d=0,e=!("minWidth"in c("html")[0].style),f=!e;return c.extend(b.prototype,{node:null,backdrop:null,fixed:!1,destroyed:!0,open:!1,returnValue:"",autofocus:!0,align:"bottom left",innerHTML:"",className:"ui-popup",show:function(a){if(this.destroyed)return this;var d=this.__popup,g=this.__backdrop;if(this.__activeElement=this.__getActive(),this.open=!0,this.follow=a||this.follow,!this.__ready){if(d.addClass(this.className).attr("role",this.modal?"alertdialog":"dialog").css("position",this.fixed?"fixed":"absolute"),e||c(window).on("resize",c.proxy(this.reset,this)),this.modal){var h={position:"fixed",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",userSelect:"none",zIndex:this.zIndex||b.zIndex};d.addClass(this.className+"-modal"),f||c.extend(h,{position:"absolute",width:c(window).width()+"px",height:c(document).height()+"px"}),g.css(h).attr({tabindex:"0"}).on("focus",c.proxy(this.focus,this)),this.__mask=g.clone(!0).attr("style","").insertAfter(d),g.addClass(this.className+"-backdrop").insertBefore(d),this.__ready=!0}d.html()||d.html(this.innerHTML)}return d.addClass(this.className+"-show").show(),g.show(),this.reset().focus(),this.__dispatchEvent("show"),this},showModal:function(){return this.modal=!0,this.show.apply(this,arguments)},close:function(a){return!this.destroyed&&this.open&&(void 0!==a&&(this.returnValue=a),this.__popup.hide().removeClass(this.className+"-show"),this.__backdrop.hide(),this.open=!1,this.blur(),this.__dispatchEvent("close")),this},remove:function(){if(this.destroyed)return this;this.__dispatchEvent("beforeremove"),b.current===this&&(b.current=null),this.__popup.remove(),this.__backdrop.remove(),this.__mask.remove(),e||c(window).off("resize",this.reset),this.__dispatchEvent("remove");for(var a in this)delete this[a];return this},reset:function(){var a=this.follow;return a?this.__follow(a):this.__center(),this.__dispatchEvent("reset"),this},focus:function(){var a=this.node,d=this.__popup,e=b.current,f=this.zIndex=b.zIndex++;if(e&&e!==this&&e.blur(!1),!c.contains(a,this.__getActive())){var g=d.find("[autofocus]")[0];!this._autofocus&&g?this._autofocus=!0:g=a,this.__focus(g)}return d.css("zIndex",f),b.current=this,d.addClass(this.className+"-focus"),this.__dispatchEvent("focus"),this},blur:function(){var a=this.__activeElement,b=arguments[0];return b!==!1&&this.__focus(a),this._autofocus=!1,this.__popup.removeClass(this.className+"-focus"),this.__dispatchEvent("blur"),this},addEventListener:function(a,b){return this.__getEventListener(a).push(b),this},removeEventListener:function(a,b){for(var c=this.__getEventListener(a),d=0;d<c.length;d++)b===c[d]&&c.splice(d--,1);return this},__getEventListener:function(a){var b=this.__listener;return b||(b=this.__listener={}),b[a]||(b[a]=[]),b[a]},__dispatchEvent:function(a){var b=this.__getEventListener(a);this["on"+a]&&this["on"+a]();for(var c=0;c<b.length;c++)b[c].call(this)},__focus:function(a){try{this.autofocus&&!/^iframe$/i.test(a.nodeName)&&a.focus()}catch(b){}},__getActive:function(){try{var a=document.activeElement,b=a.contentDocument,c=b&&b.activeElement||a;return c}catch(d){}},__center:function(){var a=this.__popup,b=c(window),d=c(document),e=this.fixed,f=e?0:d.scrollLeft(),g=e?0:d.scrollTop(),h=b.width(),i=b.height(),j=a.width(),k=a.height(),l=(h-j)/2+f,m=382*(i-k)/1e3+g,n=a[0].style;n.left=Math.max(parseInt(l),f)+"px",n.top=Math.max(parseInt(m),g)+"px"},__follow:function(a){var b=a.parentNode&&c(a),d=this.__popup;if(this.__followSkin&&d.removeClass(this.__followSkin),b){var e=b.offset();if(e.left*e.top<0)return this.__center()}var f=this,g=this.fixed,h=c(window),i=c(document),j=h.width(),k=h.height(),l=i.scrollLeft(),m=i.scrollTop(),n=d.width(),o=d.height(),p=b?b.outerWidth():0,q=b?b.outerHeight():0,r=this.__offset(a),s=r.left,t=r.top,u=g?s-l:s,v=g?t-m:t,w=g?0:l,x=g?0:m,y=w+j-n,z=x+k-o,A={},B=this.align.split(" "),C=this.className+"-",D={top:"bottom",bottom:"top",left:"right",right:"left"},E={top:"top",bottom:"top",left:"left",right:"left"},F=[{top:v-o,bottom:v+q,left:u-n,right:u+p},{top:v,bottom:v-o+q,left:u,right:u-n+p}],G={left:u+p/2-n/2,top:v+q/2-o/2},H={left:[w,y],top:[x,z]};c.each(B,function(a,b){F[a][b]>H[E[b]][1]&&(b=B[a]=D[b]),F[a][b]<H[E[b]][0]&&(B[a]=D[b])}),B[1]||(E[B[1]]="left"===E[B[0]]?"top":"left",F[1][B[1]]=G[E[B[1]]]),C+=B.join("-")+" "+this.className+"-follow",f.__followSkin=C,b&&d.addClass(C),A[E[B[0]]]=parseInt(F[0][B[0]]),A[E[B[1]]]=parseInt(F[1][B[1]]),d.css(A)},__offset:function(a){var b=a.parentNode,d=b?c(a).offset():{left:a.pageX,top:a.pageY};a=b?a:a.target;var e=a.ownerDocument,f=e.defaultView||e.parentWindow;if(f==window)return d;var g=f.frameElement,h=c(e),i=h.scrollLeft(),j=h.scrollTop(),k=c(g).offset(),l=k.left,m=k.top;return{left:d.left+l-i,top:d.top+m-j}}}),b.zIndex=1024,b.current=null,b}),b("dialog-config",{backdropBackground:"#000",backdropOpacity:.75,content:'<span class="ui-dialog-loading">Loading..</span>',title:"",statusbar:"",button:null,ok:null,cancel:null,okValue:"ok",cancelValue:"cancel",cancelDisplay:!0,width:"",height:"",padding:"",skin:"",quickClose:!1,cssUri:"../css/ui-dialog.css",innerHTML:'<div i="dialog" class="ui-dialog"><div class="ui-dialog-arrow-a"></div><div class="ui-dialog-arrow-b"></div><table class="ui-dialog-grid"><tr><td i="header" class="ui-dialog-header"><button i="close" class="ui-dialog-close">&#215;</button><div i="title" class="ui-dialog-title"></div></td></tr><tr><td i="body" class="ui-dialog-body"><div i="content" class="ui-dialog-content"></div></td></tr><tr><td i="footer" class="ui-dialog-footer"><div i="statusbar" class="ui-dialog-statusbar"></div><div i="button" class="ui-dialog-button"></div></td></tr><tr><td i="source" class="ui-dialog-source"><div>数据来源：三农业务风险分析系统</div></td></tr></table></div>'}),b("dialog",function(a){var b=a("jquery"),c=a("popup"),d=a("dialog-config"),e=d.cssUri;if(e){var f=a[a.toUrl?"toUrl":"resolve"];f&&(e=f(e),e='<link rel="stylesheet" href="'+e+'" />',b("base")[0]?b("base").before(e):b("head").append(e))}var g=0,h=new Date-0,i=!("minWidth"in b("html")[0].style),j="createTouch"in document&&!("onmousemove"in document)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),k=!i&&!j,l=function(a,c,d){var e=a=a||{};("string"==typeof a||1===a.nodeType)&&(a={content:a,fixed:!j}),a=b.extend(!0,{},l.defaults,a),a.original=e;var f=a.id=a.id||h+g,i=l.get(f);return i?i.focus():(k||(a.fixed=!1),a.quickClose&&(a.modal=!0,a.backdropOpacity=0),b.isArray(a.button)||(a.button=[]),void 0!==d&&(a.cancel=d),a.cancel&&a.button.push({id:"cancel",value:a.cancelValue,callback:a.cancel,display:a.cancelDisplay}),void 0!==c&&(a.ok=c),a.ok&&a.button.push({id:"ok",value:a.okValue,callback:a.ok,autofocus:!0}),l.list[f]=new l.create(a))},m=function(){};m.prototype=c.prototype;var n=l.prototype=new m;return l.create=function(a){var d=this;b.extend(this,new c);var e=(a.original,b(this.node).html(a.innerHTML)),f=b(this.backdrop);return this.options=a,this._popup=e,b.each(a,function(a,b){"function"==typeof d[a]?d[a](b):d[a]=b}),a.zIndex&&(c.zIndex=a.zIndex),e.attr({"aria-labelledby":this._$("title").attr("id","title:"+this.id).attr("id"),"aria-describedby":this._$("content").attr("id","content:"+this.id).attr("id")}),this._$("close").css("display",this.cancel===!1?"none":"").attr("title",this.cancelValue).on("click",function(a){d._trigger("cancel"),a.preventDefault()}),this._$("dialog").addClass(this.skin),this._$("body").css("padding",this.padding),a.quickClose&&f.on("onmousedown"in document?"mousedown":"click",function(){return d._trigger("cancel"),!1}),this.addEventListener("show",function(){f.css({opacity:0,background:a.backdropBackground}).animate({opacity:a.backdropOpacity},150)}),this._esc=function(a){var b=a.target,e=b.nodeName,f=/^input|textarea$/i,g=c.current===d,h=a.keyCode;!g||f.test(e)&&"button"!==b.type||27===h&&d._trigger("cancel")},b(document).on("keydown",this._esc),this.addEventListener("remove",function(){b(document).off("keydown",this._esc),delete l.list[this.id]}),g++,l.oncreate(this),this},l.create.prototype=n,b.extend(n,{content:function(a){var c=this._$("content");return"object"==typeof a?(a=b(a),c.empty("").append(a.show()),this.addEventListener("beforeremove",function(){b("body").append(a.hide())})):c.html(a),this.reset()},title:function(a){return this._$("title").text(a),this._$("header")[a?"show":"hide"](),this},width:function(a){return this._$("content").css("width",a),this.reset()},height:function(a){return this._$("content").css("height",a),this.reset()},button:function(a){a=a||[];var c=this,d="",e=0;return this.callbacks={},"string"==typeof a?(d=a,e++):b.each(a,function(a,f){var g=f.id=f.id||f.value,h="";c.callbacks[g]=f.callback,f.display===!1?h=' style="display:none"':e++,d+='<button type="button" i-id="'+g+'"'+h+(f.disabled?" disabled":"")+(f.autofocus?' autofocus class="ui-dialog-autofocus"':"")+">"+f.value+"</button>",c._$("button").on("click","[i-id="+g+"]",function(a){var d=b(this);d.attr("disabled")||c._trigger(g),a.preventDefault()})}),this._$("button").html(d),this._$("footer")[e?"show":"hide"](),this},statusbar:function(a){return this._$("statusbar").html(a)[a?"show":"hide"](),this},_$:function(a){return this._popup.find("[i="+a+"]")},_trigger:function(a){var b=this.callbacks[a];return"function"!=typeof b||b.call(this)!==!1?this.close().remove():this}}),l.oncreate=b.noop,l.getCurrent=function(){return c.current},l.get=function(a){return void 0===a?l.list:l.list[a]},l.list={},l.defaults=d,l}),b("drag",function(a){var b=a("jquery"),c=b(window),d=b(document),e="createTouch"in document,f=document.documentElement,g=!("minWidth"in f.style),h=!g&&"onlosecapture"in f,i="setCapture"in f,j={start:e?"touchstart":"mousedown",over:e?"touchmove":"mousemove",end:e?"touchend":"mouseup"},k=e?function(a){return a.touches||(a=a.originalEvent.touches.item(0)),a}:function(a){return a},l=function(){this.start=b.proxy(this.start,this),this.over=b.proxy(this.over,this),this.end=b.proxy(this.end,this),this.onstart=this.onover=this.onend=b.noop};return l.types=j,l.prototype={start:function(a){return a=this.startFix(a),d.on(j.over,this.over).on(j.end,this.end),this.onstart(a),!1},over:function(a){return a=this.overFix(a),this.onover(a),!1},end:function(a){return a=this.endFix(a),d.off(j.over,this.over).off(j.end,this.end),this.onend(a),!1},startFix:function(a){return a=k(a),this.target=b(a.target),this.selectstart=function(){return!1},d.on("selectstart",this.selectstart).on("dblclick",this.end),h?this.target.on("losecapture",this.end):c.on("blur",this.end),i&&this.target[0].setCapture(),a},overFix:function(a){return a=k(a)},endFix:function(a){return a=k(a),d.off("selectstart",this.selectstart).off("dblclick",this.end),h?this.target.off("losecapture",this.end):c.off("blur",this.end),i&&this.target[0].releaseCapture(),a}},l.create=function(a,e){var f,g,h,i,j=b(a),k=new l,m=l.types.start,n=function(){},o=a.className.replace(/^\s|\s.*/g,"")+"-drag-start",p={onstart:n,onover:n,onend:n,off:function(){j.off(m,k.start)}};return k.onstart=function(b){var e="fixed"===j.css("position"),k=d.scrollLeft(),l=d.scrollTop(),m=j.width(),n=j.height();f=0,g=0,h=e?c.width()-m+f:d.width()-m,i=e?c.height()-n+g:d.height()-n;var q=j.offset(),r=this.startLeft=e?q.left-k:q.left,s=this.startTop=e?q.top-l:q.top;this.clientX=b.clientX,this.clientY=b.clientY,j.addClass(o),p.onstart.call(a,b,r,s)},k.onover=function(b){var c=b.clientX-this.clientX+this.startLeft,d=b.clientY-this.clientY+this.startTop,e=j[0].style;c=Math.max(f,Math.min(h,c)),d=Math.max(g,Math.min(i,d)),e.left=c+"px",e.top=d+"px",p.onover.call(a,b,c,d)},k.onend=function(b){var c=j.position(),d=c.left,e=c.top;j.removeClass(o),p.onend.call(a,b,d,e)},k.off=function(){j.off(m,k.start)},e?k.start(e):j.on(m,k.start),p},l}),b("dialog-plus",function(a){var b=a("jquery"),c=a("dialog"),d=a("drag");return c.oncreate=function(a){var c,e=a.options,f=e.original,g=e.url,h=e.oniframeload;if(g&&(this.padding=e.padding=0,c=b("<iframe />"),c.attr({src:g,name:a.id,width:"100%",height:"100%",allowtransparency:"yes",frameborder:"no",scrolling:"no"}).on("load",function(){var b;try{b=c[0].contentWindow.frameElement}catch(d){}b&&(e.width||a.width(c.contents().width()),e.height||a.height(c.contents().height())),h&&h.call(a)}),a.addEventListener("beforeremove",function(){c.attr("src","about:blank").remove()},!1),a.content(c[0]),a.iframeNode=c[0]),!(f instanceof Object))for(var i=function(){a.close().remove()},j=0;j<frames.length;j++)try{if(f instanceof frames[j].Object){b(frames[j]).one("unload",i);break}}catch(k){}b(a.node).on(d.types.start,"[i=title]",function(b){a.follow||(a.focus(),d.create(a.node,b))})},c.get=function(a){if(a&&a.frameElement){var b,d=a.frameElement,e=c.list;for(var f in e)if(b=e[f],b.node.getElementsByTagName("iframe")[0]===d)return b}else if(a)return c.list[a]},c}),window.dialog=a("dialog-plus")}();

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(CVal, $) {/**
	 * Created by czy on 2016/7/18.
	 */
	//CVal.extend = function() {
	    // IE6、7、8不支持trim函数，进行扩展
	    if (typeof String.prototype.trim !== 'function') {
	        String.prototype.trim = function() {
	            return this.replace(/^\s+|\s+$/g, '');
	        };
	    }
	//};

	CVal.util = {
		/********设置cookie********/
		setCookie:function(cname,cvalue,exhours){
		    var d = new Date();
		    d.setTime(d.getTime()+(exhours*60*60*1000));
		    var expires = 'expires='+d.toUTCString();
		    document.cookie = cname + "=" + cvalue + ";" + expires;
		},
		getCookie:function(cname){
		    var name = cname + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0; i<ca.length; i++){
		        var c = ca[i];
		        while(c.charAt(0)==' ') c = c.substring(1);
		        if(c.indexOf(name) != -1) return c.substring(name.length,c.length);
		    }
		    return "";
		},
		clearCookie:function(cname){
		    setCookie(cname,"",-1);
		},
		addDomEvent:function(dom,event,func){
			if(dom && dom.attachEvent){
				dom.attachEvent("on"+event,func);
			}else if(dom){
				dom.addEventListener(event,func);
			}
		}
	};



	/***********登录之前加载缓存**************/
	CVal.beforeLogin = function(){
		var userId = $("#j_username").val();
		var posId = $("#j_position").find("option:selected").text();
		var orgId = $("#orgCode").val();
		if(userId){
			CVal.bho_http_get({
				url: CVal.path + "/beforelogin/loadDateClosed",
		        data: {
		        	userId:userId,
		        	posId:posId,
		        	orgId:orgId
		        },
		        success: function(data) {}
			});
		}
	};



	CVal.util.addDomEvent($("form#logForm #sub")[0],"click",CVal.beforeLogin);


	/**
	 * JsonP方式扩展
	 */
	CVal.bho_http_get = function(req) {
	    // 添加时间戳参数，防止缓存
	    $.extend(req.data, {
	        _: new Date().getTime()
	    });
	    $.ajax({
	        type:'POST',
	        dataType: 'jsonp',
	        jsonp: '_callback',
	        url: req.url,
	        data: req.data,
	        success: req.success ? req.success : function(data) {},
	        error: req.error ? req.error : function(data) {}
	    });
	};

	/****************************************   内容相关    *******************************************************/
	/*获取当前用户编号*/
	CVal.getUserId = function(){
	    if($('li#showUserBox').get(0))
	        return $('li#showUserBox').html().toString().match(/用户编号: \d{11}/)[0].split(':')[1].trim();
	    else
	        return "";
	};

	/*获取当前用户名称*/
	CVal.getUserName = function(){
	    if($('li#showUserBox').get(0))
	        return $('li#showUserBox').html().toString().match(/用户姓名: [\u4e00-\u9fa5]+\</)[0].split(':')[1].trim().slice(0,-1);
	    else
	        return "";
	};
	/*获取当前用户岗位ID*/
	CVal.getPostId = function(){
	    if($('li#showUserBox').get(0))
	        return $('li#showUserBox').html().toString().match(/岗位编号: \w\d{2}/)[0].split(':')[1].trim();
	    else
	        return "";
	};
	/*获取当前用户岗位名称*/
	CVal.getPostName = function(){
		if($('li#showUserBox').get(0))
			return $('li#showUserBox').html().toString().match(/岗位名称: [\u4e00-\u9fa5]+\</)[0].split(':')[1].trim().slice(0,-1);
		else 
			return "";
	};
	/*获取当前用户机构编号*/
	CVal.getOrgId = function(){
	    if($('li#showUserBox').get(0))
	        return $('li#showUserBox').html().toString().match(/机构编号: \d{7}[A-Za-z0-9]/)[0].split(':')[1].trim();
	    else
	        return "";
	};
	/*获取当前用户机构名称*/
	CVal.getOrgName = function(){
	    if($('li#showUserBox').get(0))
	        return $('li#showUserBox').html().toString().match(/机构名称: [\u4e00-\u9fa5]+\</)[0].split(':')[1].trim().slice(0,-1);
	    else
	        return "";
	};
	/*获取当前业务的贷种ID*/
	CVal.getAppOpId = function(){
	    return $('#tbLonApplication_appOpId').val() || $('#Application_appOpId').val() || " ";
	};
	/*获取当前业务ID*/
	CVal.getLoanId = function(){
	    return $("#tbLonApplication_loanId").val() || " ";
	};
	/*获取当前BizId*/
	CVal.getBizId = function(){
	    return $("#bizId").val() || " ";
	};
	/*获取申请金额*/
	CVal.getLoanAmount = function(){
	    return $("#tbLonLoanApplication_loanAmount").val() || 0;
	};
	/*获取额度申请金额*/
	CVal.getLineAmount = function(){
		return $("#Lineapplication_lineAmount").val() || 0;
	};


	/****报错****/
	window.onerror = function(sMessage,sUrl,sLine){
	//	console.log("sMessage:"+sMessage+"; sUrl:"+sUrl+"; sLine:"+sLine);
		//alert("sMessage:"+sMessage+"; sUrl:"+sUrl+"; sLine:"+sLine);
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(6)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, CVal) {/**
	 * Created by czy on 2016/7/18.
	 */
	/*************** 客户提示 BEGIN *******************/

	/**
	 * 绑定客户提示事件
	 */
	CVal.bindCustomer = function() {
	    // 新增客户 -> ；身份证号输入框失去焦点
	    $(document).on("blur",
	        // 个人客户，新增客户
			"form#Indvcustomer1[action='cus/Indvcustomer/save.do'] #tbCsmCustomer_certificateCode",
	//      "form#Indvcustomer1 #tbCsmCustomer_certificateCode", 
	        CVal.onCertificateCodeBlur
	    );

	    //贷款业务受理 -> 查找带回, "证件号码"失去焦点
	    $(document).on("blur",
	        // 个人客户，业务受理，查找
			"form#pagerForm[action='lon/Lonapplication/findIndvCustomer.do'] input[name='certificateCode']",
	        // 一级分行业务检查岗，公司客户，查询
	//		"form#pagerForm[action='cus/Corpcustomer/list.do'] input[name='certificateCode']",
	        // 通用查询表单
	//        "form#pagerForm input[name='certificateCode']", 
	        CVal.onCertificateCodeBlur
	    );

	    //贷款业务受理 -> 查找带回, "搜索"按钮
	    $(document).on("click",
			"form#pagerForm[action='lon/Lonapplication/findIndvCustomer.do'] button[type='submit']",
	      //"form#pagerForm button[type='submit']",
	        CVal.onFindIndvCustomerClick
	    );

	    //贷款业务受理 -> 查找带回, "选择"按钮
	    $(document).on("click",
	        "div#IndvCustomer_back_tpl a.btnSelect[title='查找带回']",
	        CVal.onIndvCustomerBackTpl
	    );

	    // 测试，监听登陆界面用户名输入框
	    //$(document).on("blur", "#j_username", CVal.onCertificateCodeBlur);

	    // 测试，三农登陆界面用户名输入框
	    //$(document).on("blur", "form#login_form #userId", CVal.onCertificateCodeBlur);
	};

	/**
	 * 弹出客户信息
	 */
	CVal.profileInit = function(idNo){
		 //暂时控制
		var isInit = true;
		//身份证号不能为空
		if(!idNo.trim()){
			isInit = false;
		}
		//方北路，鹿泉，宁晋，内丘，沽源，怀安，赤城，高庙北,滦平县支行
	    var orgArr = ['13012859','1399982Q','1399941Q','1399946Q','1399905Q','1399901Q','1399897Q','13000066','1399890Q'];
		if($.inArray(CVal.getOrgId(),orgArr) == -1){
			isInit = false;
		}
		//只给信贷员
		if(CVal.getPostName().indexOf("信贷员") == "-1"){
		    isInit = false;
		}
		
		if(CVal.getUserId() == "20121130850"){
			isInit = true;
		}
		
		if(isInit) {
			haloPlugins.profile.init({"certificateCode":idNo.trim()});
		}
		
	}

	/**
	 * 身份证号输入框blur事件
	 */
	CVal.onCertificateCodeBlur = function() {
	    var idNo = $(this).val() || '';
	    CVal.profileInit(idNo);
	    
	};

	/**
	 * 查询客户按钮点击
	 */
	CVal.onFindIndvCustomerClick = function() {
	    var idNo = $(this).closest('form').find('input[name="certificateCode"]').val() || '';
	    CVal.profileInit(idNo);
	};

	/**
	 * 贷款业务受理 -> 查找带回, "选择"按钮
	 */
	CVal.onIndvCustomerBackTpl = function() {
	    var idNo = $(this).closest('tr').find('td:eq(2)').text() || '';
	    CVal.profileInit(idNo);
	};

	/*************** 客户提示 END *******************/

	/*************** 行业提示 BEGIN *******************/

	/**
	 * 绑定客户提示事件
	 */
	CVal.bindIndustry = function() {
	    // 对选择行业带回时存放行业id的输入框监听
	    $(document).on("change", "#loanPurpose_id_1,#loanPurpose_id_2,#loanPurpose_id_3,#loanPurpose_id", CVal.onIndustryBackTpl);
	}

	/**
	 * 选择行业 -> 带回
	 */
	CVal.onIndustryBackTpl = function() {
	    var loanPurposeId = $('#loanPurpose_id').val();
	    var loanPurposeName = $('#loanPurpose_name').val();

	    CVal.findIndustryOverdue({
	        loanPurposeId: loanPurposeId,
	        loanPurposeName: loanPurposeName
	    });
	}

	CVal.findIndustryOverdue = function(param) {
		param.userId = CVal.getUserId();
		param.orgId = CVal.getOrgId();
		param.postionId = CVal.getPostId();
	    CVal.bho_http_get({
	        url: CVal.path + "/bhoApi/getIndustryOverdue.action",
	        data: param,
	        success: function(data) {
	            if(data && data.statusCode == '200') {
	                data.object.loanPurposeId = param.loanPurposeId;
	                data.object.loanPurposeName = param.loanPurposeName;
	                CVal.dialogIndustry(data.object);
	            }
	        }
	    });
	};

	/**
	 * 弹出行业信息模态提示框
	 */
	CVal.dialogIndustry = function(data) {
	    var _id = 'industryDial';
	    haloPlugins.modal.init({
			title:'行业信息',
			content:'当前所选行业【'+data.loanPurposeName+'】逾期率为：'+data.overdueRate+'%',
			width:'400px'
		});
	}

	/*************** 行业提示 END *******************/
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(1)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, CVal) {/**
	 * 信贷员通报流程
	 * create by zpf 2016-9-23 15:57:27
	 */

	/*************** 信贷员权限 START ***************/
	/*************** 绑定事件 ***********************/
	/**
	 * 绑定信贷员通报流程事件
	 */
	CVal.bindBulletin = function() {
	    //额度/贷款流程受理岗上报信贷员岗（待调查+1）
	    $(document).on("click","form[action*='bpm/WorkList/submit.do'] button", CVal.loanAccepted);
	    //额度/贷款流程 信贷员上报审批岗
	    $(document).on("click","form[action*='bpm/WorkList/submit.do'] button", CVal.loanApproval);
	    //审查审批岗通过
	    $(document).on("click","form[action*='bpm/WorkList/submit.do'] button", CVal.loanApprovalPass);
	    //贷款流程 信贷员点击“获取任务”按钮
	    $(document).on("click","input[name='checkIds']",CVal.bindLoanGetTask);
	    //贷款授信调查意见 保存事件
	    $(document).on("click","form[action*='lon/Lonsurveyopinion/save.do'] button",CVal.surveyOpinion);
	    //信贷员退回受理岗
	    $(document).on("click","form[action*='bpm/WorkList/submitBack.do'] button",CVal.oneduBackClick);
	    //审查岗退回信贷员岗
	    $(document).on("click","form[action*='bpm/WorkList/submitBack.do'] button",CVal.ExamineBackClick);
	    //填写损益表并提交保存
	    $(document).on("click","form#businessPettyLoan button:contains('保存损益表')",CVal.onsunyiSubmitClick);
	    //调查结论及建议
	    $(document).on("click","form[action*='survey/Verdictadvise/saveFarmer.do'] button",CVal.VerdictadviseApplyAmount);
	    //额度生成
	    $(document).on("click","form[action*='lin/line/Lineapplication/findLineAppListWait.do'] button:contains('搜索')",CVal.bindCreateCredit);
	    $(document).on("click","tbody#LineapplicationWait_tpl_template tr",CVal.bindCreateCredit);
	    //出账
	    $(document).on("click","form[action*='lon/Lontranpayoutaccount/payout.do'] button",CVal.loanPayout);
	    //取回任务（信贷员上报审批岗）
	    $(document).on("click","a[href*='bpm/WorkList/drawback.do'][title='任务取回']",CVal.drawback);
	    //获取贷款申请金额（在上报信贷员之前）
	    $(document).on("click","form[action*='lon/Lonapplication/save.do'] button[type='submit']",CVal.getLoanAmountBeforeSubmit);
	    $(document).on("click","tbody#WorkList_tpl_template tr",CVal.getBackAmount);
	    //填写损益表之前，点击调查报告Tab页的事件
	    $(document).on("click","li a#jointsurveymain_7:contains('调查报告')",CVal.getAmountBeforeSunyi);
	    $(document).on("click","li a#_tabs_7:contains('调查报告')",CVal.getAmountBeforeSunyi);
	};


	/**************** 信贷员通报流程 START******************/

	//获取客户信息
	/*CVal.getCusInfo = function(){
	 var cusId = $("#tbCsmCustomer_cusId").val() ? $("#tbCsmCustomer_cusId").val() : ($("#tbCsmIndvCustomer_cusId").val() ? $("#tbCsmIndvCustomer_cusId").val() : "");
	 var param = {cusKind:'2', cusId:cusId};
	 try{
	 var json = $.ajaxJson("lon/LonTabsFramework/customerTabs.do",param);
	 //     var json = $.ajaxJson("./customerTabs_do.json",param);
	 CVal.saveContext("getCusInfo","[cusId="+cusId+"]",json ? json.substring(0,1000) : " ");
	 } catch(e){
	 CVal.saveContext("getCusInfo","error",[cusId="+cusId+"]);
	 }
	 };*/

	//通过js原生的监听方法对获取按钮点击事件监听。
	CVal.bindLoanGetTask = function(){
	    var dom = $("a[title='获取任务'][href*='bpm/WorkList/takeWork.do']").get(0);
	    if(dom){
	        if(dom.attachEvent){
	            dom.detachEvent("onclick",CVal.loanGetTask);
	            dom.attachEvent("onclick",CVal.loanGetTask);
	        }else{
	            dom.removeEventListener("click",CVal.loanGetTask);
	            dom.addEventListener("click",CVal.loanGetTask);
	        }
	    }
	};
	//--1--额度/贷款流程 信贷员点击“获取任务”按钮
	CVal.loanGetTask = function(){
	    if(CVal.getPostName().indexOf("信贷员") != "-1"){
	        //判断勾选框是否被勾选
	        $.each($("#WorkList_tpl_template input[name='checkIds'][type='checkbox']"),function(i,checkbox){
	            if(checkbox.checked){
	                var param = $(checkbox).val().split("|");
	                var bizId = param[6];
	                var cusId = param[7];
	                var appOpType = param[8];
	                var workItemName = param[3];
	                var amount = $(checkbox).parents("td").siblings("td").eq(2).text().trim();
	                var cusName = $(checkbox).parents("td").siblings("td").eq(1).text().trim();
	                var actionType = workItemName && (workItemName.indexOf("信贷员岗贷款调查") != -1) ? 2 : (workItemName.indexOf("信贷员岗授信调查") != -1) ? 1 : 0;
	                
	                if(actionType){
	                    CVal.bulletinAction({
	                        lineId:" ",
	                        appOpId:appOpType,
	                        action:"1",
	                        actionType:actionType,
	                        amount:(amount ? amount : 0),
	                        bizId:bizId,
	                        cusId:cusId,
	                        cusName:cusName
	                    });
	                }
	            }
	        });
	    }
	};

	//获取贷款申请金额
	CVal.getLoanAmountBeforeSubmit = function(){
	    var amount = CVal.getLineAmount() || CVal.getLoanAmount() || 0;
	    var loanId = CVal.getLoanId();
	    //抓取贷款申请金额或者额度申请金额
	    var data = $(document).data("LoanAmountBeforeSubmit");
	    if(!data || data.loanId != loanId){
	        $(document).data("LoanAmountBeforeSubmit",{loanId:loanId, amount:amount});
	    }
	};

	//--2--额度/贷款流程 受理岗上报信贷员岗（待调查+1）
	CVal.loanAccepted = function(){
	    if(CVal.getPostName().indexOf("受理岗") != "-1"){
	        var step2_orgName = $("#step2_orgName").val();
	        if(step2_orgName && step2_orgName == "2"){  //必须是指派人员
	            var destWorkItemName = $("#tmp_destWorkItemName").text();
	            var lineId = getSession("lineId") || " ";
	            var appOpType = CVal.getAppOpId();
	            var amount = CVal.getLineAmount() || CVal.getLoanAmount() || 0;
	            var cusName = $("#tmp_customerName").text();
	            var toUser = $("#org1_orgName").val() || "";  //指派到的用户
	            var actionType = destWorkItemName && (destWorkItemName.indexOf("信贷员岗贷款调查") != -1) ? 2 : (destWorkItemName.indexOf("信贷员岗授信调查") != -1) ? 1 : 0;
	            
	            //获取destWorkItemName名称，保存。
	            CVal.saveContext("loanAccepted->destWorkItemName",CVal.getPostName()+":"+CVal.getUserId(),destWorkItemName);
	            
	            //抓取贷款申请金额或者额度申请金额
	            if(!amount || amount == 0){
	                var data = $(document).data("LoanAmountBeforeSubmit");
	                if(data && data.loanId == loanId){
	                    amount = data.amount;
	                }
	            }
	                  
	            if(actionType){
	                CVal.bulletinAction({
	                    userId:toUser && toUser.split("_")[0] || "",
	                    loanId:CVal.getLoanId(),
	                    lineId:lineId,
	                    appOpId:appOpType,
	                    action:"2",
	                    actionType:actionType,
	                    amount:amount,
	                    otherId1:CVal.getUserId(), //用户ID
	//                    SessionloanId:getSession("loanId") || " ",
	                    bizId:CVal.getBizId(),
	                    cusId:$("#tbLonLoanApplication_cusId").val() || $("#tbCsmCustomer_cusId").val() || $("#tbCsmIndvCustomer_cusId").val() || " ",
	                    cusName:cusName
	                });
	            }
	        }
	    }
	};

	//--3--出账操作
	CVal.loanPayout = function(){
	    try{
	    var appOpType = $("#tbLonApplication_appOpId").val() || " ";
	        var data = {duebillId:($("#tbLonLoanDuebill_duebillId").val() || " ")};
	        var json = $.ajaxJson("lon/Lontranpayoutaccount/show.do",data);
	        var loanId = json.tbLonLoanDuebill.loanId || " ";
	        var lineId = json.tbLonLoanDuebill.lineId || getSession("lineId") || " ";
	        var amount = json.tbLonLoanDuebill.duebillAmount || 0;
	        CVal.bulletinAction({
	            loanId:loanId,
	            lineId:lineId,
	            action:"3",
	            actionType:"2",
	            amount:amount,
	            appOpId:appOpType
	//            SessionloanId:getSession("loanId") || " "
	        });
	    } catch(e){
	        CVal.saveContext("loanPayout","error",CVal.getUserId());
	    }
	};

	//--4--信贷员 额度/贷款上报审查审批岗
	CVal.loanApproval = function(){
	    if(CVal.getPostName().indexOf("信贷员") != "-1"){
	        var destWorkItemName = $("#tmp_destWorkItemName").text();
	        if(destWorkItemName){//信贷员上报审批审批岗
	            if(destWorkItemName.indexOf("审批岗授信终审") != -1 || destWorkItemName.indexOf("审查岗授信审查") != -1  
	                    || destWorkItemName.indexOf("审批岗终审") != -1 || destWorkItemName.indexOf("审批岗签批终审") != -1
	                    || destWorkItemName.indexOf("审批岗授信审批") != -1){
	                CVal.bulletinAction({
	                    loanId:CVal.getLoanId(),
	                    lineId:getSession("lineId") || " ",
	                    action:"4",
	                    actionType:"1",
	                    amount:CVal.getLoanAmount() || CVal.getLineAmount() || 0,
	                    bizId:CVal.getBizId(),
	//                    SessionloanId:getSession("loanId") || " ",
	                    cusId:$("#tbLonLoanApplication_cusId").val() || $("#Lineapplication_cusId").val() || " "
	                });
	            }
	        }
	    }
	};

	//--5--审查审批岗退回信贷员操作
	CVal.ExamineBackClick = function() {
	    if(CVal.getPostName().indexOf("审查岗") != "-1" || CVal.getPostName().indexOf("审批岗") != "-1"){
	        if($("#backToPrevious").text().indexOf('退回前一步') != -1 ){
	            var lineId = getSession("lineId") || " ";
	            var actionType = ($("#step2_orgName").val() == "T0001_3") ? 1 : ($("#step2_orgName").val() == "T0001_2") ? 2 : 0;

	            if(actionType){
	                CVal.bulletinAction({
	                    lineId:lineId,
	                    action:"5",
	                    actionType:actionType,
	                    amount:0,
	                    bizId:CVal.getBizId()
	//                    SessionloanId:getSession("loanId") || " "
	                });
	            }
	        }
	    }
	};

	//--6--审查审批岗 通过
	CVal.loanApprovalPass = function(){
	    if(CVal.getPostName().indexOf("审查岗") != "-1" || CVal.getPostName().indexOf("审批岗") != "-1"){
	        var destWorkItemName = $("#tmp_destWorkItemName").text();
	    
	        if(destWorkItemName && destWorkItemName.indexOf("信贷员岗合同签署") != -1){//审批岗通过

	            CVal.bulletinAction({
	                loanId:CVal.getLoanId(),
	                bizId:CVal.getBizId(),
	                lineId:getSession("lineId") || " ",
	                action:"6",
	                actionType:"0",
	                amount:0,
	//                SessionloanId:getSession("loanId") || " ",
	                cusId:$("#tbLonLoanApplication_cusId").val() || $("#Lineapplication_cusId").val() || " "
	            });
	        }
	    }
	};

	//调查报告之前获取金额
	CVal.getAmountBeforeSunyi = function(){
	    var amount = CVal.getLineAmount() || CVal.getLoanAmount() || 0;
	    var loanId = $("#tbLonApplication_loanId").val() || " ";
	    var data = $(document).data("AmountBeforeSunyi");
	    if(!data || data.loanId != loanId){
	        $(document).data("AmountBeforeSunyi",{loanId:loanId, amount:amount});
	    }
	};

	//--7--调查报告 损益表保存事件
	CVal.onsunyiSubmitClick = function(){
	    try{
	        if(CVal.getPostName().indexOf("信贷员") != "-1"){
	            var appId = $("#tbPubRptProfitLossItem_appId").val() || " ";
	            var lineId = getSession("lineId") || " ";
	            var amount = CVal.getLineAmount() || CVal.getLoanAmount() || 0;
	            var cusId = $("#tbPubRptProfitLossItem_cusId").val() || " ";
	            var cusName = $("#tbPubRptSurvey_cusName").val() || " ";
	            var appOpType = $("#tbPubRptSurvey_appOpKind").val() || " ";
	            if(!amount || amount == 0){
	                var data = $(document).data("AmountBeforeSunyi");
	                if(data && data.loanId == loanId){
	                    amount = data.amount;
	                }
	            }
	            CVal.bulletinAction({
	                appId:appId,
	                lineId:lineId,
	                action:"7",
	                actionType:"1",
	                amount:amount,
	                cusId:cusId,
	                cusName:cusName,
	                appOpId:appOpType
	//                SessionloanId:getSession("loanId") || ""
	            });
	        }
	    }catch(e){
	        CVal.saveContext("onsunyiSubmitClick_error",CVal.getPostName()+":"+CVal.getUserId(),e.message);
	    }
	};

	//--8--调查结论及建议
	CVal.VerdictadviseApplyAmount = function(){
	    try{
	        if(CVal.getPostName().indexOf("信贷员") != "-1"){
	            var appId = $("#VerdictAdvise_appId").val();
	            var lineId = getSession("lineId") || " ";
	            var amount = $("#Verdictadvise_applyAmount").val() || 0;
	            var cusId = $("#VerdictAdvise_cusId").val() || " ";
	            var cusName = $("#tbPubRptSurvey_cusName").val() || " ";

	            CVal.bulletinAction({
	                appId:appId,
	                lineId:lineId,
	                action:"8",
	                actionType:"1",
	                amount:amount,
	                cusId:cusId,
	                cusName:cusName
	//                SessionloanId:getSession("loanId") || ""
	                
	            });
	        }
	    }catch(e){
	        CVal.saveContext("VerdictadviseApplyAmount_error",CVal.getPostName()+":"+CVal.getUserId(),e.message);
	    }
	};

	//通过js原生的监听方法对额度生成点击事件监听。
	CVal.bindCreateCredit = function(){
	    var dom = $("a[title='额度生效'][href*='lin/line/Line/create.do']").get(0);
	    if(dom){
	        try{
	            dom.detachEvent("onclick",CVal.createCredit);
	            dom.attachEvent("onclick",CVal.createCredit);
	        }catch(e){
	            dom.removeEventListener("click",CVal.createCredit);
	            dom.addEventListener("click",CVal.createCredit);
	        }
	    }
	};

	//--9--额度生成
	CVal.createCredit = function(){
	    if(CVal.getPostName().indexOf("信贷员") != "-1"){
	        var $tr = $("#LineapplicationWait_tpl_template tr.selected");
	        var lineId = $tr.find("td").eq(0).find("input").val();
	        var cusName = $tr.find("td").eq(1).text().trim();
	        var appOpId = $tr.find("td").eq(2).text().trim();
	        var amount = $tr.find("td").eq(3).text().trim();

	        CVal.bulletinAction({
	            lineId:lineId,
	            action:"9",
	            actionType:"1",
	            amount:(amount?amount:0),
	            appOpId:appOpId,
	            cusName:cusName
	        });
	    }
	};

	//--10--贷款授信调查意见 保存事件
	CVal.surveyOpinion = function(){
	    if(CVal.getPostName().indexOf("信贷员") != "-1"){
	        if($("#Lonsurveyopinion_loanAmount") && $("#Lonsurveyopinion_loanAmount").val()){
	            var loanId = $("#Lonsurveyopinion_loanId").val() || " ";
	            var lineId = getSession("lineId") || " ";
	            var amount = $("#Lonsurveyopinion_loanAmount").val() || 0;

	            CVal.bulletinAction({
	                loanId:loanId,
	                lineId:lineId,
	                action:"10",
	                actionType:"2",
	                amount:amount,
	//                SessionloanId:getSession("loanId") || " ",
	                cusId:$("#Lonsurveyopinion_cusId").val() || " "
	            });
	        }
	    }
	};

	//点击业务退回，保存申请金额。
	CVal.getBackAmount = function(){
	    //var $tr = $("tbody#WorkList_tpl_template tr.selected");
	    var $tr = $(this);
	    var loanId = $tr.attr("rel").split("|")[6];
	    var amount = $tr.find("td:eq(3)").text().trim();
	    var data = $(document).data("LoanAmountBeforeBack");
	    if(!data || data.loanId != loanId){
	        $(document).data("LoanAmountBeforeBack",{loanId:loanId, amount:amount});
	    }
	};

	//--11--信贷员退回操作
	CVal.oneduBackClick = function() {
	    if(CVal.getPostName().indexOf("信贷员") != "-1"){
	        if($("#backToPrevious").text().indexOf('退回前一步') != -1
	            && $("#step2_orgName").val() == "T0001_1"){
	            var lineId = getSession("lineId") || " ";
	            var data = $(document).data("LoanAmountBeforeBack");
	            var amount = 0;
	            if(data && data.loanId == loanId){
	                amount = data.amount;
	            }

	            CVal.bulletinAction({
	                bizIdN:CVal.getBizId(),
	                lineId:lineId,
	                action:"11",
	                actionType:"0",
	                amount:(amount ? amount : 0)
	//                SessionloanId:getSession("loanId") || " "
	            });
	        }
	    }
	};

	//--12--取回任务（信贷员上报审批岗）
	CVal.drawback = function(){
	    var $tr = $("#FinishedList_tpl_template tr.selected");
	    var relValue = $tr.attr("rel").split("|");
	    var bizId = relValue[6];
	    var cusId = relValue[7];
	    var bizType = relValue[8];
	    var amount = $tr.find("td").eq(4).text().trim();
	    var step = $tr.find("td").eq(7).text().trim();
	    var loanTypeName = $tr.find("td").eq(8).text().trim();
	    var actionType = (loanTypeName.indexOf("额度类业务") != -1) ? 2 : (loanTypeName.indexOf("贷款类业务") != -1) ? 1 : 0;
	    //判断是否信贷员上报审批
	    if(step.indexOf("审批岗授信终审") != -1 || step.indexOf("审查岗授信审查") != -1
	        || step.indexOf("审查岗审查") != -1 || step.indexOf("审批岗终审") != -1  ){       //TODO 待补充，可能有多种情况。
	        //判断业务种类
	        if(actionType){
	            CVal.bulletinAction({
	                loanId:bizId,
	                lineId:" ",
	                action:"12",
	                actionType:actionType,
	                amount:amount,
	                cusId:cusId,
	                bizIdN:bizId,
	                appOpId:bizType
	            });
	        }
	    }
	};

	//type:1:额度类，2:贷款类 ;
	//action:统计动作。 1:获取业务, 2:受理岗上报信贷员, 3:出账, 4:信贷员上报审批, 5:审批退回, 6:审批通过, 7:填写损益表, 8:调查结论及建议, 9:额度生成, 10:贷款授信调查意见, 11:信贷员退回受理岗
	//amount:1 或 -1
	CVal.bulletinAction = function(bean){
	    bean.userId = bean.userId || CVal.getUserId();
	    bean.orgId = CVal.getOrgId();
	    bean.postionId = CVal.getPostId();
	    CVal.bho_http_get({
	        url: CVal.path + "/bhoApi/bulletinAction.action",
	        data: bean,
	        success: function(data) {
	            if(data && data.statusCode == '200') {
	                //alert(data.msg);
	            }
	        }
	    });
	};

	/****************  信贷员通报流程 END******************/

	/*************** 保存信息 START *****************/

	CVal.saveContext = function(pageName,url,context){
	    CVal.bho_http_get({
	        url: CVal.path + "/bhoApi/saveContext.action",
	        data: {
	            pageName:pageName,
	            pageUrl:url,
	            pageContext:context
	        },
	        success: function(data) {
	            if(data && data.statusCode == '200') { }
	        }
	    });
	};
	/*************** 保存信息 END *****************/

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(1)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, CVal) {/**
	 * 信贷员权限模块  
	 * create by zpf 2016-7-18 17:22:26
	 */
	/*************** 信贷员权限 START *****************/

	/*----------调查报告点击事件----------*/
	CVal.bindTabs7 = function(){
	    $(document).on("click","#_tabs_7:contains(调查报告)",CVal.clickTab);
	};

	CVal.clickTab = function(){
	    var appOpId = CVal.getAppOpId();
	    if(CVal.checkAppOpId(appOpId) 									//检查贷种
	        && !$("button[type='submit']:contains('保存')").length 	//不是填写页面
	        && !$("input#Lineapplication_lineAmount").length) {		//不是额度页面
	        CVal.bindLoanAmount();
	        CVal.intv = window.setInterval("CVal.isLoadFinsh()",100);
	    }
	};

	/*--------------------*/
	CVal.bindLoanAmount = function() {
	    //如果切换用户或者业务
	    if (CVal.getUserId() != $(document).data("userId") || CVal.getLoanId() != $(document).data("loanId")) {
	        //如果存在loanAmount，则需要清空缓存,如果不存在loanAmount，继续执行。
	        if($(document).data("loanAmount")){
	            $(document).removeData("loanAmount");
	        }
	        CVal.userDataCache();
	    }
	};

	/*----------判断调查报告页面是否加载完成---------*/
	CVal.isLoadFinsh = function(){
	    if($("button[type='submit']:contains('确定')").length){
	        if($(document).data("userLevel")){
	            window.clearInterval(CVal.intv);
	        }
	        CVal.getUserPerAmount();
	    }
	};



	/*------通过等级判断放款额度------*/
	CVal.getUserPerAmount = function(){
	    var userLevel = $(document).data("userLevel");
	    var loanAmount = $(document).data("loanAmount");
	    if(!loanAmount){
	        CVal.getChangeButton(true,"未获取到该业务的申请金额,请重新尝试打开本页面。");
	    }else if(!userLevel){
	        //CVal.getChangeButton(true,"未获取到您的受理额度,请重新尝试打开本页面。");
	    }else{
	        switch(userLevel){
	            case 'LV0':
	                CVal.getChangeButton(true,"您当前的信贷员等级无权办理此业务。");
	                break;
	            case 'LV1':
	                CVal.getChangeButton(true,"您当前的信贷员等级无权办理此业务。");
	                break;
	            case 'LV2':
	                if(loanAmount > 100000){
	                    CVal.getChangeButton(true,"您无权办理此业务，您业务受理的最高额度为10万元。");
	                }else{
	                    CVal.getChangeButton(false);
	                }
	                ;break;
	            case 'LV3':
	                if(loanAmount > 200000){
	                    CVal.getChangeButton(true,"您无权办理此业务，您业务受理的最高额度为20万元。");
	                }else{
	                    CVal.getChangeButton(false);
	                }
	                ;break;
	            case 'LV4':
	                if(loanAmount > 400000){

	                    CVal.getChangeButton(true,"您无权办理此业务，您业务受理的最高额度为40万元。");
	                }else{
	                    CVal.getChangeButton(false);
	                }
	                ;break;
	            case 'LV5':
	                CVal.getChangeButton(false);
	                ;break;
	            default:
	                CVal.getChangeButton(false);
	        }
	    }
	};

	/*-------检查贷种---------*/
	CVal.checkAppOpId = function(appOpId) {
	    var appOpIds = ['A800','A801','A804','A807','A808','A809','A817','A827','A828','A82801','A82802','A82803','A82804','A82805','A82806','A82807','A829','A830','A831','A832','A83201'];
	    if ($.inArray(appOpId, appOpIds) > -1) {
	        return true;
	    } else {
	        return false;
	    }
	};

	/*-----修改调查报告页面的确定按钮状态 ----*/
	CVal.getChangeButton = function(flag, msg) {
	    var $btn = $("form[action='survey/Survey/createSurveyJspForChoice.do']").find("button");

	    var dialogFunc = function() {
	        var _id = 'surveyModifyBtnDial';
	        if(dialog.get(_id) != undefined) return;

	        var dlg = dialog({
	            title : '提示信息',
	            id: _id,
	            content : '<div style="width: 400px;font-size：14px;">' + msg + '</div>',
	            footer : '数据来源：',
	            cancelValue : '确定'
	        });
	        dlg.showModal();
	    };

	    $btn.parent('.buttonContent').off('.dialogFunc');
	    if (flag) {
	        $btn.attr({disabled : 'disabled'});
	        $btn.parent('.buttonContent').on('click.dialogFunc', dialogFunc);
	    } else {
	        $btn.removeAttr('disabled');
	    }
	};

	/*-----------缓存用户信息------------*/
	CVal.userDataCache = function(){
	    var userId = CVal.getUserId();
	    $(document).data("userId", userId);
	    $(document).data("appOpId", CVal.getAppOpId());
	    $(document).data("loanAmount", CVal.getLoanAmount());
	    $(document).data("loanId", CVal.getLoanId());
	    // 查询并缓存信贷员权限
	    CVal.getUserLevel(userId);
	};

	/*-------通过userId获取信贷员等级-----*/
	CVal.getUserLevel = function(userId){
	    CVal.bho_http_get({
	        url: CVal.path + "/bhoApi/getUserPermAmount.action",
	        data: {userId:userId},
	        success: function(data) {
	            if(data && data.statusCode == '200') {
	                $(document).data("userLevel",data.object.LVL_FINAL);
	            }
	        }
	    });
	};

	/*************** 信贷员权限 END *****************/

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(1)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(CVal) {//生成加密签名：token跟userId拼接，在通过sha1算法加密，获得加密签名。
	__webpack_require__(14);
	CVal.getSignature = function(){
		var arr = ['a','b','c','t','h','o','k','e','m','r','n','s'];
		var str = arr[1] + arr[4] + arr[5] + '_' + arr[3] + arr[5] + arr[6] + arr[7] + arr[10],
			sha1Str = CryptoJS.SHA1(str);
		return sha1Str;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	var CryptoJS=CryptoJS||function(e,m){var p={},j=p.lib={},l=function(){},f=j.Base={extend:function(a){l.prototype=this;var c=new l;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
	n=j.WordArray=f.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=m?c:4*a.length},toString:function(a){return(a||h).stringify(this)},concat:function(a){var c=this.words,q=a.words,d=this.sigBytes;a=a.sigBytes;this.clamp();if(d%4)for(var b=0;b<a;b++)c[d+b>>>2]|=(q[b>>>2]>>>24-8*(b%4)&255)<<24-8*((d+b)%4);else if(65535<q.length)for(b=0;b<a;b+=4)c[d+b>>>2]=q[b>>>2];else c.push.apply(c,q);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
	32-8*(c%4);a.length=e.ceil(c/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],b=0;b<a;b+=4)c.push(4294967296*e.random()|0);return new n.init(c,a)}}),b=p.enc={},h=b.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++){var f=c[d>>>2]>>>24-8*(d%4)&255;b.push((f>>>4).toString(16));b.push((f&15).toString(16))}return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d+=2)b[d>>>3]|=parseInt(a.substr(d,
	2),16)<<24-4*(d%8);return new n.init(b,c/2)}},g=b.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++)b.push(String.fromCharCode(c[d>>>2]>>>24-8*(d%4)&255));return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d++)b[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return new n.init(b,c)}},r=b.Utf8={stringify:function(a){try{return decodeURIComponent(escape(g.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return g.parse(unescape(encodeURIComponent(a)))}},
	k=j.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new n.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=r.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,b=c.words,d=c.sigBytes,f=this.blockSize,h=d/(4*f),h=a?e.ceil(h):e.max((h|0)-this._minBufferSize,0);a=h*f;d=e.min(4*a,d);if(a){for(var g=0;g<a;g+=f)this._doProcessBlock(b,g);g=b.splice(0,a);c.sigBytes-=d}return new n.init(g,d)},clone:function(){var a=f.clone.call(this);
	a._data=this._data.clone();return a},_minBufferSize:0});j.Hasher=k.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){k.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,b){return(new a.init(b)).finalize(c)}},_createHmacHelper:function(a){return function(b,f){return(new s.HMAC.init(a,
	f)).finalize(b)}}});var s=p.algo={};return p}(Math);
	(function(){var e=CryptoJS,m=e.lib,p=m.WordArray,j=m.Hasher,l=[],m=e.algo.SHA1=j.extend({_doReset:function(){this._hash=new p.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(f,n){for(var b=this._hash.words,h=b[0],g=b[1],e=b[2],k=b[3],j=b[4],a=0;80>a;a++){if(16>a)l[a]=f[n+a]|0;else{var c=l[a-3]^l[a-8]^l[a-14]^l[a-16];l[a]=c<<1|c>>>31}c=(h<<5|h>>>27)+j+l[a];c=20>a?c+((g&e|~g&k)+1518500249):40>a?c+((g^e^k)+1859775393):60>a?c+((g&e|g&k|e&k)-1894007588):c+((g^e^
	k)-899497514);j=k;k=e;e=g<<30|g>>>2;g=h;h=c}b[0]=b[0]+h|0;b[1]=b[1]+g|0;b[2]=b[2]+e|0;b[3]=b[3]+k|0;b[4]=b[4]+j|0},_doFinalize:function(){var f=this._data,e=f.words,b=8*this._nDataBytes,h=8*f.sigBytes;e[h>>>5]|=128<<24-h%32;e[(h+64>>>9<<4)+14]=Math.floor(b/4294967296);e[(h+64>>>9<<4)+15]=b;f.sigBytes=4*e.length;this._process();return this._hash},clone:function(){var e=j.clone.call(this);e._hash=this._hash.clone();return e}});e.SHA1=j._createHelper(m);e.HmacSHA1=j._createHmacHelper(m)})();


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, CVal) {	/**
		 * 参数配置
		 */
		var authConfig = {
			basePath:'http://21.32.95.155:8080',
			module:{
				'1':'/hbpost/empauth/index.action',
				'2':'/hbpost/inform/toBusDistribution.action',
				'3':'/hbpost/inform/toBusDistribution.action',
				'4':'/psbcias/webpage',
				'5':'/predict/cust/custmaintain.action'
			},
			//true：触发jump访问，false：刷新页面访问
			continuity:false
			
		}
		
		//定义公共变量，存放用户机构岗位等权限信息
		authData = {};
		/**
		 * 登陆跳转系统
		 */
		var jump_authmgr = function(){
			var ml_jump_authmgr = $('form.ml_jump_authmgr');
			ml_jump_authmgr.html('');
			ml_jump_authmgr.append('<input name="user_id" value="'+userId+'"/>');
			ml_jump_authmgr.append('<input name="password" value="'+password+'"/>');
			ml_jump_authmgr.submit();
			
		}
		/**
		 * 登陆跳转系统后的回调
		 * @returns
		 */
		var authmgrOnload = function(){
			var i_authmgr = document.getElementById("i_authmgr");
			//ie浏览器onload方法
			if(i_authmgr.attachEvent){
				i_authmgr.detachEvent("onload", getAuthData);
				i_authmgr.attachEvent("onload", getAuthData);
			}else{
				//用不到，其他浏览器onload方法
				i_authmgr.onload = function(){
					getAuthData();
				}
			}
		}
		/**
		 * 获取权限信息
		 * @returns
		 */
		var getAuthData = function(){
			CVal.bho_http_get({
				url:authConfig.basePath + '/authmgr/user/loginUnification.action',
				data:'user_id='+userId+'&password='+password,
				success:function(data)
				{
					authData = data;
					if(authData && authData.loginStatus == 'login'){
					}else{
						alert('登陆authmgr系统失败！');
					}
				}
			})
		}
		/**
		 * 请求authmgr，token方式登陆三农系统
		 */
		var postalToken = function(systemId, module, params){
			alert('这个方法什么时候执行。。。。');
			CVal.bho_http_get({
				url: authConfig.basePath + '/authmgr/token/generate.action',
				data: {
					systemId:systemId,
					orgId:CVal.getOrgId(),
					posId:CVal.getPostId()
				},
				success: function(data){
					//这里需要判断session是否失效，，，，如果失效从第一步调起
					var ml_jump = $('form.ml_jump');
					ml_jump.html('');
					ml_jump.attr('action',data.tokenUrl+"?token="+data.token);
					ml_jump.append('<input type="hidden" name="module" value="'+module+'"/>');
					ml_jump.append("<input type='hidden' name='params' value='"+JSON.stringify(params)+"'/>");
					ml_jump.submit();
				},
				error: function(data){
					alert('获取数据失败，请稍后重试！', 'error');
				}
			});
			
		}
		/**
		 * 登陆三农系统成功回调
		 */
		var postalOnload = function(){
			var i_postal = document.getElementById("i_postal");
			if(i_postal.attachEvent){
				i_postal.detachEvent('onload', openHtml);
				i_postal.attachEvent("onload", openHtml);
			}else{
				i_postal.onload = openHtml;
			}
		}
		/**
		 * 跳转页面
		 * @returns
		 */
		var openHtml = function(){
			if(authConfig.continuity){
				var new_window = window.open();
				new_window.location.href=authConfig.basePath + authConfig.module[module_curr] + '?module=' + module_curr + '&params=' + params_curr;
				
			}
		}
		
		/**
		 * main入口
		 */
		var jump = function(systemId, module, params){
			module_curr = module;
			params_curr = params;
			authConfig.continuity = true;
			//此处判断是否session失效
			checkSession(systemId, function(data){
				if(data && data.statusCode == '200'){
					alert('session未失效');
					openHtml();
					return;
				}else{
					alert('session失效了');
					//登陆authmgr系统，并获取权限信息authData
					jump_authmgr();
					
	//				var map = {
	//						'hbpost':checkPass(authData.hbpostOrgAndPos.orgList, authData.hbpostOrgAndPos.positionList, CVal.getOrgId(), CVal.getPostId()),
	//						'predict':checkPass(authData.predictOrgAndPos.orgList, authData.predictOrgAndPos.positionList, CVal.getOrgId(), CVal.getPostId()),
	//						'psbcias':checkPass(authData.psbciasOrgAndPos.orgList, authData.psbciasOrgAndPos.positionList, CVal.getOrgId(), CVal.getPostId())
	//				}
	//				if(map[systemId]){
						postalToken(systemId, module, params);
	//				}else{
	//					alert('您没有查看权限！', 'warming');
	//				}
				}
			});
			
		}
		/**
		 * 检查用户机构，岗位是否有权限访问各三农系统
		 */
		var checkPass = function(orgList, positionList, orgId, posId){
			var orgPass=false,posPass=false;
			$.each(orgList, function(i, o){
				if(o.orgId == orgId){
					orgPass = true;
					return;
				}
			});
			$.each(positionList, function(i, o){
				if(o.positionId == posId){
					posPass = true;
					return;
				}
			});
			if(orgPass && posPass){
				return true;
			}else{
				return false;
			}
			
			return true;
		}
		/**
		 * 注入dom
		 */
		var createJumpDom = function(){
			$('body').append('<form class="ml_jump_authmgr" target="authmgr" action="'+authConfig.basePath+'/authmgr/user/jumpLogin.action" method="post"> '+
							'</form>																										'+
							'<form class="ml_jump" target="postal" action="" method="post">                                                 '+
							'</form>                                                                                                        '+
							'<iframe id="i_authmgr" name="authmgr" style="position:absolute;display:;width:100%;height:500px;"></iframe>                                 '+
							'<iframe id="i_postal" name="postal" style="display:;width:100%;height:500px;"></iframe>');

		}
		/**
		 * 访问前，验证session是否失效
		 */
		var checkSession = function(systemId, callback){
			CVal.bho_http_get({
				
				url: systemId=='psbcias'?authConfig.basePath + '/' + systemId + '/checkSession':authConfig.basePath + '/'+systemId+'/user/checkSession.action',
				success: function(data){
					//这里需要判断session是否失效，，，，如果失效从第一步调起
					callback(data);
					
				},
				error: function(data){
					alert('获取数据失败，请稍后重试！', 'error');
				}
			});
		}
		

		/**
		 * 模拟触发登陆三农事件
		 */
		//参数
		var userId='20080150340',
			password=CVal.getSignature(userId),
			orgId=CVal.getOrgId()?'13000015':CVal.getOrgId(),
			posId=CVal.getPostId()==null?'B06':CVal.getPostId();
		//其他参数
		var module_curr='',params_curr={};
		//创建dom
		createJumpDom();
		//绑定onload事件
		authmgrOnload();
		postalOnload();
		//登陆authmgr系统，并获取权限信息authData
		jump_authmgr();
		$('#sannong').click(function(){
			jump("hbpost", "2", "{'a':'1', 'b':'2'}");
		});
		$('#hangye').click(function(){
			jump("psbcias", "4", "{'a':'1', 'b':'2'}");
		});
		$('#yuce').click(function(){
			jump("predict", "5", "{'id':'412203'}");
		});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(1)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(CVal) {/**
	 * Created by czy on 2016/7/18.
	 */
	/********************************************   权限控制   ******************************************************/
	var switchStatus = [];
	//CVal.signature = CVal.getSignature();

	CVal.bind = function() {
		
	    // 绑定调查报告Tab标签(信贷员权限)
	    if(!(switchStatus[2001] && switchStatus[2001] == '0')){
	        CVal.bindTabs7();
	    }
	    
	    //绑定信贷员通报流程事件
	    if(!(switchStatus[2002] && switchStatus[2002] == '0')){
	        CVal.bindBulletin();
	    }
	    
	    //绑定以客户为中心的提示
	    if(!(switchStatus[2003] && switchStatus[2003] == '0')){
	        CVal.bindCustomer();
	    }
	    
	    //绑定微门户初始化方法
	    if(!(switchStatus[2004] && switchStatus[2004] == '0')){
	    	CVal.initMsgPlus();
	    }
	    
	    //绑定以行业为中心的提示
	    if(!(switchStatus[2005] && switchStatus[2005] == '0')){
	        CVal.bindIndustry();
	    }
	    
	    //绑定调查报告模板录入模块
	    //CVal.bindAutoTemplate();
	    
	};

	//查询插件开关状态
	CVal.getPluginSwitch = function(){
	    CVal.bho_http_get({
	        url: CVal.path + "/bhoApi/pluginSwitch.action",
	        data: {
	            orgId:CVal.getOrgId() || "",
	            postionId:CVal.getPostId() || "",
	            userId:CVal.getUserId() || "",
	            orgName:CVal.getOrgName() || "",
	            postionName:CVal.getPostName() || "",
	            userName:CVal.getUserName() || ""
	        },
	        success: function(data) {
	            if(data && data.statusCode == '200') {
	                switchStatus = data.object;
	                // 绑定元素事件
	                if(!(switchStatus[1001] && switchStatus[1001] == '0')){
	                    CVal.bind();
	                }
	            }
	        }
	    });
	};


	/**初始化微门户组件*/
	CVal.initMsgPlus = function(){
		//暂时控制
	    var isInit = true;
		//方北路，鹿泉，宁晋，内丘，沽源，怀安，赤城，高庙北,滦平县支行
	    var orgArr = ['13012859','1399982Q','1399941Q','1399946Q','1399905Q','1399901Q','1399897Q','13000066','1399890Q'];
		/*if($.inArray(CVal.getOrgId(),orgArr) == -1){
			isInit = false;
		}*/

	    //只给信贷员
	    if(CVal.getPostName().indexOf("信贷员") == "-1"){
	        isInit = false;
	    }
	    
	    if (isInit) {
	    	haloPlugins.msgPlus.init();
	    }
	};


	/*****************************/
	/*CVal.checkUpdate = function(){
		CVal.bho_http_get({
	        url: CVal.path + "/bhoApi/needUpdate.action",
	        data: {},
	        success: function(data) {
	        	if(data && data.statusCode == '200') {
	        		alert(data.object);
	        	}
	        }
		});
	};

	CVal.checkUpdate();*/
	/****************************/


	//执行权限读取
	CVal.getPluginSwitch ();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(CVal, $) {'use strict';
	__webpack_require__(18);
	//require('./index2.css');
	var Store = __webpack_require__(24);
	var Events = __webpack_require__(25);

	//swiper轮播插件
	//require('swiper2Css');
	//var Swiper = require('swiper2');
	var Util = __webpack_require__(26);
	var util = new Util();

	var Page = {
		isFirstLoad:true,
		ajaxDataType: typeof CVal == "undefined" ? 'jsonp' : 'jsonp',
		init: function(options){
			var opts = options || {};
			function firstRequest(callback){
				var store = Page.Store;
				$.when(
					Page.APIS.getCustomerInfo(opts),
					Page.APIS.getAssetsMonthlyStat(opts),
					Page.APIS.getCustomerCreditCardInfo(opts)
				).done(function(data,monthlyStat,creditCardInfo){
					if(data[0].code == 1000 && monthlyStat[0].code == 1000 && creditCardInfo[0].code == 1000){
						var _data={},_data2=[],_data3=[];
						if(data[0].data){
							var _data = data[0].data;
							store.dispatch(Page.Action.index(_data));
						}
						if(monthlyStat[0].data){
							_data2 = monthlyStat[0].data;
							store.dispatch(Page.Action.assetsMonthlyStat(_data2));
						}
						if(creditCardInfo[0].data){
							_data3 = creditCardInfo[0].data;
							store.dispatch(Page.Action.customerCreditCardInfo(_data3));
						}
						if(!$.isEmptyObject(_data)){
							callback(store);
						}
					}
				});
			}
			if(Page.isFirstLoad){
				//程序一定要严谨，考虑全面
				firstRequest(function(store){
					$(document.body).append('<div class="profile"></div>');//一定要放在回调里，防止多次执行
					Page.Render.init();//不能放在外面，防止dom未加载的情况
				})
			}
		},
		destroy: function(){
			Page.Store.getInitialState();//初始化store，否则多次Init是会导致留有旧数据
			$('.profile').remove();
			Page.isFirstLoad = true;
		}
	}

	Page.APIS = (function(){
		var apiPath = typeof CVal == "undefined" ? 'http://21.32.95.248:8088/bhoserver' : CVal.path;
		var postData = {};
		if(typeof CVal != "undefined"){
			postData.userId = CVal.getUserId();
			postData.posId = CVal.getPostId();
			postData.orgId  = CVal.getOrgId();
		}
		var Apis = {
			customerInfo: apiPath + '/bhoApi/getCustomerInfoByIdNo',	//根据身份证号获取客户信息
			customerPosInfo: apiPath + '/bhoApi/customerPosInfo',//    查询指定客户POS信息
			assetsMonthlyStat: apiPath + '/bhoApi/getAssetsMonthlyStat',	//客户储蓄交易按月统计
			customerCreditCardInfo: apiPath + '/bhoApi/customerCreditCardInfo'	//查询指定客户信用卡信息
			//customerInfo: apiPath + 'http://21.32.95.196:8080/bhoserver/bhoApi/getCustomerInfoByIdNo',	//根据身份证号获取客户信息
			//customerPosInfo: apiPath + 'http://21.32.95.196:8080/bhoserver/bhoApi/customerPosInfo',//    查询指定客户POS信息
			//assetsMonthlyStat: apiPath + 'http://21.32.95.196:8080/bhoserver/bhoApi/getAssetsMonthlyStat',	//客户储蓄交易按月统计
			//customerCreditCardInfo: apiPath + 'http://21.32.95.196:8080/bhoserver/bhoApi/customerCreditCardInfo'	//查询指定客户信用卡信息
		}
		return {
			getCustomerInfo: function(opts) {
				postData.certificateCode = opts.certificateCode;
				return $.ajax({
					url: Apis.customerInfo,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
				 	jsonp: '_callback'
				})
			},
			getCustomerPosInfo: function(opts) {
				postData.certificateCode = opts.certificateCode;
				return $.ajax({
					url: Apis.customerPosInfo,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
				 	jsonp: '_callback'
				})
			},
			getAssetsMonthlyStat: function(opts) {
				postData.certificateCode = opts.certificateCode;
				return $.ajax({
					url: Apis.assetsMonthlyStat,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
				 	jsonp: '_callback'
				})
			},
			getCustomerCreditCardInfo: function(opts) {
				postData.certificateCode = opts.certificateCode;
				return $.ajax({
					url: Apis.customerCreditCardInfo,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
				 	jsonp: '_callback'
				})
			}
		}
	}());

	Page.UI = (function(){
		return {
			indexView: function() {
				return __webpack_require__(28);
				//return require('./tmpl/index2.jade');
			}
		}
	}());

	Page.Store = (function(){
		var store = new Store({
			database:{},
			customerPosInfo:{},
			assetsMonthlyStat:{},
			customerCreditCardInfo:{}
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
		function destroy(){
			$('.profile').remove();
		}
		return {
			init: function() {
				index();
			},
			destroy: function() {
				destroy();
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
			'.profile .title-item@click': 'moveTo',
			'.profile .profile-close@click': 'close'
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
				last = event.timeStamp == undefined ? new Date().getTime() : event.timeStamp;
				event.timeStamp = last;
				var index = $(this).index()-1;
				var $wrapper = $('.swiper-wrapper');
				var h = $('.swiper-slide').height();
				$(this).addClass('active').siblings('.active').removeClass('active');
				$wrapper.css({'margin-top':-index*h});
				/**
				setTimeout(function(){
					if(last-event.timeStamp == 0){
						//$wrapper.animate({marginTop:-index*h},500);
						$wrapper.css({'margin-top':-index*h});
					}
				},350);
				**/
			},
			close: function(event){
				Page.destroy();
			}
		}
	}());

	Page.Action = (function() {
		function sortMonthly(a,b){
			return a.tb_ml_cpv_assets_monthly_stat.summ_mon - b.tb_ml_cpv_assets_monthly_stat.summ_mon;
		}
		function sortCredit(a,b){
			return a.tb_ml_cpv_credit_monthly_trans_stat.summ_mon - b.tb_ml_cpv_credit_monthly_trans_stat.summ_mon;
		}
		return {
			index: function(record){
				var telArr = [];
				if(record.mobile_phone){
					telArr = record.mobile_phone.split(' ');
					record.telArr = telArr;
					if(telArr.length > 0 && telArr[0].length >= 11){
						for(var i = 0;i < telArr.length; i++){
							telArr[i] = telArr[i].replace(/\(/,' (来自');
							telArr[i] = telArr[i].replace(/\)/,' 系统)');
						}
						record.telFirst = telArr[0].substring(0,11);
					}
				}else{
					record.telArr = '';
				}
				return {
					type: 'database',
					payload : record
				}
			},
			customerPosInfo: function(record){
				return {
					type: 'customerPosInfo',
					payload : record
				}
			},
			assetsMonthlyStat: function(record){
				record = record.sort(sortMonthly);
				return {
					type: 'assetsMonthlyStat',
					payload : record
				}
			},
			customerCreditCardInfo: function(record){
				//console.log(record);
				record = record.sort(sortCredit);
				return {
					type: 'customerCreditCardInfo',
					payload : record
				}
			}
		}
	}());

	/**
	Page.init({
		certificateCode:'410185197009166013'
	});
	**/

	module.exports = Page;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(6)))

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	//var state = {};
	function Store(options) {
		var opts = options || {};
		this.state = this.initState = opts;
	}
	Store.prototype.getState = function() {
		if(typeof Object.freeze === 'function'){
			Object.freeze(this.state);//冻结对象不可修改
		}
		return this.state;
	}
	Store.prototype.dispatch = function (action) {
		if(action.hasOwnProperty('type') && action.hasOwnProperty('payload')){
			//console.log(action.type+'变化前：'+JSON.stringify(state[action.type]));
			var tempState = $.extend(true,{},this.state);
			tempState[action.type] = action.payload;
			this.state = tempState;
			//console.log(state);
			//console.log(action.type+'变化后：'+JSON.stringify(state[action.type]));
		}else{
			//console.log('action必须遵从标准结构，如：{"type":"user","payload":{"name":"vincent","age":"18"}}');
		}
	}
	Store.prototype.getInitialState = function() {
		this.state = this.initState;
		//console.log(state.customerCreditCardInfo);
		return this.state;
	}
	module.exports=Store;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	function Events(options) {
		var opts = options || {};
		this.events = opts;
	}
	Events.prototype.dispatch = function (eventsHandle) {
		var events = this.events;
		//var eventSplitter = /^(\w+)\s*(.*)$/;
		for(var key in events) {
			var method = events[key];
			//var match = key.match(eventSplitter);
			var el = key.split('@')[0],eventName = key.split('@')[1];
			//$(el).off(eventName).on(eventName,eventsHandle[method]);
			if(!!eventsHandle[method]){
				if($(el).length>0){
					$(el).off(eventName).on(eventName,eventsHandle[method]);
				}else{
					$(document).off(eventName,el).on(eventName,el,eventsHandle[method]);
				}
			}else{
				//console.log(method);
			}
		}
	}
	module.exports=Events;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var config=__webpack_require__(27);

	function Util(){
		this.version='1.0.0';
	}
	/**
	 * [formatDate description]
	 * //示例： 
		alert(new Date().Format("yyyy年MM月dd日")); 
		alert(new Date().Format("MM/dd/yyyy")); 
		alert(new Date().Format("yyyyMMdd")); 
		alert(new Date().Format("yyyy-MM-dd hh:mm:ss"));
	 */
	Util.prototype.formatDate=function(format,date){
		if(!date){
			date=new Date();
		}else{
			date=new Date(date);
		}
		var args = {
	       "M+": date.getMonth() + 1,
	       "d+": date.getDate(),
	       "h+": date.getHours(),
	       "m+": date.getMinutes(),
	       "s+": date.getSeconds(),
	       "q+": Math.floor((date.getMonth() + 3) / 3),  //quarter
	       "S": date.getMilliseconds()
	   };
	   if (/(y+)/.test(format))
	       format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	   for (var i in args) {
	       var n = args[i];
	       if (new RegExp("(" + i + ")").test(format))
	           format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
	   }
	   return format;
	}
	Util.prototype.getDateStr=function(count) { 
		var dd = new Date(); 
		dd.setDate(dd.getDate()+count);//获取count天后的日期 
		var y = dd.getFullYear(); 
		var m = dd.getMonth()+1;//获取当前月份的日期 
		var d = dd.getDate(); 
		return y+"-"+m+"-"+d; 
	} 
	Util.prototype.getDate=function(str){
		str = str.replace(/-/g,"/");
		return new Date(str );
	}
	Util.prototype.urlParam=function(key){
	 	return _urlParam(key);
	}
	//两个数组取差集
	Util.prototype.diffArr=function(target,array,key){
		var result=target.slice();
		for(var i=0;i<result.length;i++){
			for(var j=0;j<array.length;j++){
				if(result[i][key]===array[j][key]){
					result.splice(i,1);
					i--;
					break;
				}
			}
		}
		return result;
	}
	//手机号脱敏处理
	Util.prototype.concealMobile=function(mobile){
		var reg = /^(\d{3})\d{4}(\d{4})$/;
		return mobile.replace(reg,"$1****$2");
	}
	function _urlParam(key){
		var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
	 	var r = window.location.search.substr(1).match(reg);
	 	if(r!=null) return unescape(r[2]); return null;
	}

	Util.prototype.fixedEmpty = function(value,_default){
		if(value=='' || value==undefined || value==null||value == 'NULL'){
			return _default || '-';
		}else if(!isNaN(value)){
			value = parseInt(value) == value ? value : value.toFixed(2)
		}
		return value;
	}

	Util.prototype.formatMoney = function(_money,_digit){
		var tpMoney = '-';
		var digit = _digit || 2;
		if(undefined != _money){
			tpMoney = _money;			
		}
		tpMoney = new Number(tpMoney);
		if(isNaN(tpMoney)){
			return '-';
		}
		tpMoney = tpMoney.toFixed(digit);
		var re = /^(-?\d+)(\d{3})(\.?\d*)/;
		while(re.test(tpMoney)){
			tpMoney = tpMoney.replace(re,'$1,$2$3')	
		}
		return tpMoney + '元';
	}

	module.exports=Util;

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {
		"devPath": "views",
		"buildPath": "bin/assets",
		"libPath": "public/library",
		"publicPath": "/surveyRpt/",
		"staticPath": "public",
		"debug": true,
		"online": false,
		"hot": false,
		"testServer": {
			"sftp": {
				"host": "21.32.95.249",
				"remotePath": "/opt/www/exj_managerv2/wechat/v4.0",
				"user": "root",
				"pass": "aliyun123123Q"
			},
			"wx": {
				"appId": "wxda1ad46a30222ae2"
			}
		},
		"onServer": {
			"sftp": {
				"host": "21.32.95.249",
				"remotePath": "/surveyTemp/trunk/WebRoot/shorthand",
				"user": "niuzhiwei",
				"pass": "niuzhiwei"
			},
			"wx": {
				"appId": "wx9e60458de7e99750"
			}
		},
		"alias": {
			"zepto": "javascripts/lib/zepto.min.js",
			"jquery": "javascripts/lib/jquery-1.10.2.min.js",
			"Template": "javascripts/core/Template.js",
			"commonCss": "stylesheets/common.css",
			"Util": "javascripts/core/Util.js",
			"swiper2": "javascripts/lib/swiper2.x/swiper.min.js",
			"swiper2Css": "javascripts/lib/swiper2.x/swiper.css",
			"jquery.form": "javascripts/lib/jquery.form.js",
			"FetchApi": "javascripts/core/FetchApi.js",
			"downexcel": "javascripts/core/downexcel.js",
			"marquee": "javascripts/lib/marquee.js",
			"tags": "javascripts/lib/tags/tags.js",
			"Store": "javascripts/core/Store.js",
			"Events": "javascripts/core/Events.js",
			"echarts": "javascripts/lib/echarts.js",
			"slimscroll": "javascripts/lib/jquery.slimscroll.js",
			"moment": "javascripts/lib/moment.js",
			"CVal": "javascripts/core/CVal.js"
		}
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(moment) {var jade = __webpack_require__(30);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (Number, assetsMonthlyStat, customerCreditCardInfo, database, isNaN, moment, parseInt, undefined) {
	var util = { 
	fixedEmpty: function(value,_default){
	if(value=='' || value==undefined || value==null||value == 'NULL'){
	return _default || '-';
	}else if(!isNaN(value)){
	value = parseInt(value) == value ? value : value.toFixed(2)
	}
	return value;
	},
	formatMoney: function(_money,_digit) {
	var tpMoney = '-';
	var digit = _digit || 2;
	if(undefined != _money){
	tpMoney = _money;			
	}
	tpMoney = new Number(tpMoney);
	if(isNaN(tpMoney)){
	return '-';
	}
	tpMoney = tpMoney.toFixed(digit);
	var re = /^(-?\d+)(\d{3})(\.?\d*)/;
	while(re.test(tpMoney)){
	tpMoney = tpMoney.replace(re,'$1,$2$3')	
	}
	return tpMoney + '元';
	}
	}
	buf.push("<div class=\"profile-header\">客户综合信息 — " + (jade.escape((jade_interp = database.cus_name) == null ? '' : jade_interp)) + "<div class=\"header-fr\"><i class=\"iconfont profile-close\">&#xe639;</i></div></div><div class=\"left-box\"><div class=\"title-top\"><img" + (jade.attr("src", __webpack_require__(32), true, true)) + " class=\"user-icon\"><p class=\"text-title\">邮储河北省分行</p><p class=\"text-small\">信息科技部</p><p class=\"text-small\">三农金融部 </p></div><div class=\"title-item active\">概览</div><div data-move=\".base\" class=\"title-item\">基本信息</div><div class=\"title-item\">个贷指标</div><div class=\"title-item\">资产信息</div><div class=\"title-item\">信用卡</div><div class=\"title-item\">POS信息</div></div><div class=\"right-box\"><div class=\"swiper-container\"><div class=\"swiper-wrapper\"><div class=\"swiper-slide home-slide\"><div class=\"info-card\"><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>客户姓名：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.cus_name)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>证件号：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.certificate_code)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>移动电话：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.telFirst)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>是否本地户口：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.is_native_account)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>教育水平：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.educational_level)) == null ? '' : jade_interp)) + "</td></tr></table></div><div class=\"info-title\">客户基本信息</div></div><div class=\"info-card card-col2\"><div class=\"info-title\">个贷业务综合指标</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>已核销贷款笔数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.canceled_loan_cnt)) == null ? '' : jade_interp)) + "</td><td><span>在途贷款笔数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.curr_loan_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>已核销贷款金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.canceled_loan_amt)) == null ? '' : jade_interp)) + "</td><td><span>在途贷款金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.curr_loan_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>历史逾期次数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.overdue_times_his)) == null ? '' : jade_interp)) + "</td><td><span>在途贷款余额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.curr_loan_bal)) == null ? '' : jade_interp)) + "\t</td></tr><tr><td> <span>历史逾期本金：</span>" + (jade.escape((jade_interp = util.formatMoney(database.overdue_capital_his)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-card card-col2\"><div class=\"info-title\">POS信息</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>商户名称：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.mer_name)) == null ? '' : jade_interp)) + "</td></tr><tr><td><span>营业执照注册地址：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.bus_lic_reg_addr)) == null ? '' : jade_interp)) + "</td></tr><tr><td><span>商户法定代表人姓名：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.mer_legal_name)) == null ? '' : jade_interp)) + "</td></tr><tr><td><span>商户拥有的pos数量：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.pos_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td><span>近一年月均交易金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.total_amt_ly)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-card\"><div class=\"info-title\">资产信息</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>最早开户日期：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.cd_earliest_open_date)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>活期余额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.cdm_bal_sum)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>定期余额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.fix_bal_sum)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>年月均交易额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.avg_amt_yearly)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>年月均交易次数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.avg_cnt_yearly)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-card\"><div class=\"info-title\">理财信息</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>购买基金金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.fund_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>购买理财金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.financing_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>购买国债金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.national_debt_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td><span>购买保险金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.insurance_amt)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-card card-col2\"><div class=\"info-title\">信用卡信息</div><div class=\"info-detail\"><table class=\"info-table\"><tr><td> <span>信用卡数量：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.credist_card_cnt)) == null ? '' : jade_interp)) + "</td><td> <span>最早办理日期：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.earliest_open_date)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>信用卡账户数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.acct_num_cnt)) == null ? '' : jade_interp)) + "</td><td> <span>最晚注销日期：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.latest_close_date)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <span>最低授信额度：</span>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_min)) == null ? '' : jade_interp)) + "</td><td> <span>最高授信额度：</span>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_max)) == null ? '' : jade_interp)) + "</td></tr><tr><td colspan=\"2\"><span>近一年月均消费金额：</span>" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_consume)) == null ? '' : jade_interp)) + "</td></tr><tr><td colspan=\"2\"><span>近一年月均消费次数：</span>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_sum_consume)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div style=\"clear:both;\"></div></div><div id=\"slide-base\" class=\"swiper-slide detail-slide\"><div class=\"info-detail first-info\"><div class=\"detail-title\"><strong>" + (jade.escape((jade_interp = util.fixedEmpty(database.cus_name)) == null ? '' : jade_interp)) + "</strong></div><div class=\"detail-body\"><table class=\"info-table\"><tr><td> <b>移动电话：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.telArr[0])) == null ? '' : jade_interp)) + "");
	// iterate database.telArr
	;(function(){
	  var $$obj = database.telArr;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var item = $$obj[index];

	if(index > 0 && item != '')
	{
	buf.push("<p class=\"base-tel-arr\">" + (jade.escape((jade_interp = util.fixedEmpty(item)) == null ? '' : jade_interp)) + "</p>");
	}
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var item = $$obj[index];

	if(index > 0 && item != '')
	{
	buf.push("<p class=\"base-tel-arr\">" + (jade.escape((jade_interp = util.fixedEmpty(item)) == null ? '' : jade_interp)) + "</p>");
	}
	    }

	  }
	}).call(this);

	buf.push("</td></tr><tr> <td> <b>证件号码：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.certificate_code)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>是否本地户口：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.is_native_account)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>是否居住满一年：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.rsd_year_flag)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>教育水平：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.educational_level)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>月收入：</b>" + (jade.escape((jade_interp = util.formatMoney(database.monthly_profit)) == null ? '' : jade_interp)) + "</td></tr></table></div></div></div><div id=\"slide-composite\" class=\"swiper-slide detail-slide\"><div class=\"info-detail first-info\"><div class=\"detail-title\"><strong>个贷业务综合指标</strong></div><div class=\"detail-body\"><table class=\"info-table\">\t\t\t\t\t\t\t\t<tr><td><b>已拒贷贷款笔数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.rejected_loan_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>已拒贷贷款金额：</b>" + (jade.escape((jade_interp = util.formatMoney(database.rejected_loan_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>已核销贷款笔数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.canceled_loan_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>已核销贷款金额：</b>" + (jade.escape((jade_interp = util.formatMoney(database.canceled_loan_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>在途贷款笔数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.curr_loan_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>在途贷款金额：</b>" + (jade.escape((jade_interp = util.formatMoney(database.curr_loan_amt)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>在途贷款余额：</b>" + (jade.escape((jade_interp = util.formatMoney(database.curr_loan_bal)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>历史逾期次数： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.overdue_times_his)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>历史逾期本金：</b>" + (jade.escape((jade_interp = util.formatMoney(database.overdue_capital_his)) == null ? '' : jade_interp)) + "</td></tr></table></div></div></div><div class=\"swiper-slide detail-slide\"><div class=\"info-detail\"><div class=\"detail-title\"><strong>合计：" + (jade.escape((jade_interp = util.fixedEmpty(database.media_cnt)) == null ? '' : jade_interp)) + "</strong></div><div class=\"detail-body\"><table class=\"info-table\">\t\t\t\t\t\t\t\t<tr><td> <b>卡的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_card)) == null ? '' : jade_interp)) + "</td><td> <b>活期一本通数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_onebk_cdm)) == null ? '' : jade_interp)) + "</td><td> <b>定期一本通数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_onebk_fix)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>折的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_book)) == null ? '' : jade_interp)) + "</td><td> <b>活期折的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_book_cdm)) == null ? '' : jade_interp)) + "</td><td><b>定期折的数量： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_book_fix)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>单的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_bill)) == null ? '' : jade_interp)) + "</td><td> <b>外币定期单的数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_bill_foreign)) == null ? '' : jade_interp)) + "</td><td><b>未知类型： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_none)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-detail\"><div class=\"detail-title\"><strong>合计：" + (jade.escape((jade_interp = util.formatMoney(database.total_savings_amt)) == null ? '' : jade_interp)) + "</strong></div><div class=\"detail-body\"><table class=\"info-table\"><tr><td><b>活期余额：</b>" + (jade.escape((jade_interp = util.formatMoney(database.cdm_bal_sum)) == null ? '' : jade_interp)) + "</td><td><b>购买理财：</b>" + (jade.escape((jade_interp = util.formatMoney(database.financing_amt)) == null ? '' : jade_interp)) + "</td><td><b>购买基金：</b>" + (jade.escape((jade_interp = util.formatMoney(database.fund_amt)) == null ? '' : jade_interp)) + "\t\t\t\t\t\t\t\t</td></tr><tr><td><b>定期余额：</b>" + (jade.escape((jade_interp = util.formatMoney(database.fix_bal_sum)) == null ? '' : jade_interp)) + "</td><td><b>购买国债：</b>" + (jade.escape((jade_interp = util.formatMoney(database.national_debt_amt)) == null ? '' : jade_interp)) + "</td><td><b>购买保险：</b>" + (jade.escape((jade_interp = util.formatMoney(database.insurance_amt)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-detail\"><div class=\"detail-title\"><strong>近一年月均交易金额：" + (jade.escape((jade_interp = util.formatMoney(database.avg_amt_yearly)) == null ? '' : jade_interp)) + "</strong></div><div style=\"height:170px;\" class=\"detail-body detail-items\"><table class=\"info-table\">");
	if(assetsMonthlyStat){			
	{
	// iterate assetsMonthlyStat						
	;(function(){
	  var $$obj = assetsMonthlyStat						;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var assetStat = $$obj[index];

	if ((index%2==0))
	{
	buf.push("<tr><td><b>交易日期：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	else
	{
	buf.push("<tr class=\"even\"><td><b>交易日期：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var assetStat = $$obj[index];

	if ((index%2==0))
	{
	buf.push("<tr><td><b>交易日期：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	else
	{
	buf.push("<tr class=\"even\"><td><b>交易日期：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_assets_monthly_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_assets_monthly_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	    }

	  }
	}).call(this);

	}
	}
	buf.push("</table></div></div></div><div class=\"swiper-slide detail-slide\"><div class=\"info-detail first-info\"><table class=\"info-table\">\t\t\t\t\t\t\t\t<tr><td><b>信用卡数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.credist_card_cnt)) == null ? '' : jade_interp)) + "</td><td> <b>近一年月均消费次数： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_sum_consume)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>信用卡账户数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.acct_num_cnt)) == null ? '' : jade_interp)) + "</td><td><b>近一年月均取现金额： </b>" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_withdrawl)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>办理日期(最早)：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.earliest_open_date)) == null ? '' : jade_interp)) + "</td><td> <b>近一年月均取现次数： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_sum_withdrawl)) == null ? '' : jade_interp)) + "\t</td></tr><tr><td> <b>注销日期(最晚)：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.latest_close_date)) == null ? '' : jade_interp)) + "</td><td><b>近一年月均利息金额： </b>" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_interest)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>最低授信额度：</b>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_min)) == null ? '' : jade_interp)) + "</td><td> <b>近一年月均利息次数： </b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_sum_interest)) == null ? '' : jade_interp)) + "</td></tr><tr><td><b>最高授信额度：</b>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_max)) == null ? '' : jade_interp)) + "</td><td><b>近一年月均费用金额： </b>" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_fee)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>累计授信额度：</b>" + (jade.escape((jade_interp = util.formatMoney(database.credit_line_sum)) == null ? '' : jade_interp)) + "</td><td><b>近一年月均费用次数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.cnt_sum_fee)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>逾期天数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.overdue_days)) == null ? '' : jade_interp)) + "</td><td><b>逾期数：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.overdue_terms)) == null ? '' : jade_interp)) + "</td></tr></table></div><div class=\"info-detail\"><div class=\"detail-title\"><strong>近一年月均消费金额：" + (jade.escape((jade_interp = util.formatMoney(database.amt_sum_consume)) == null ? '' : jade_interp)) + "</strong></div><div style=\"height:188px;\" class=\"detail-body detail-items\">\t\t\t\t\t\t\t\t<table class=\"info-table\">");
	if(customerCreditCardInfo && customerCreditCardInfo){		
	{
	// iterate customerCreditCardInfo						
	;(function(){
	  var $$obj = customerCreditCardInfo						;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var assetStat = $$obj[index];

	if ((index%2==0))
	{
	buf.push("<tr><td><b>统计月份：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	else
	{
	buf.push("<tr class=\"even\"><td><b>统计月份：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var assetStat = $$obj[index];

	if ((index%2==0))
	{
	buf.push("<tr><td><b>统计月份：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	else
	{
	buf.push("<tr class=\"even\"><td><b>统计月份：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.summ_mon) ? "" : jade_interp)) + "</span></td><td> <b>交易金额：</b><span>" + (jade.escape((jade_interp = util.formatMoney(assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_amt)) == null ? '' : jade_interp)) + "</span></td><td> <b>交易次数：</b><span>" + (jade.escape(null == (jade_interp = assetStat.tb_ml_cpv_credit_monthly_trans_stat.trans_cnt) ? "" : jade_interp)) + "</span></td></tr>");
	}
	    }

	  }
	}).call(this);

	}
	}
	buf.push("</table></div></div></div><div class=\"swiper-slide detail-slide\"><div class=\"info-detail first-info\"><div class=\"detail-title\"><strong>商户名称：" + (jade.escape((jade_interp = util.fixedEmpty(database.mer_name)) == null ? '' : jade_interp)) + "</strong></div><div class=\"detail-body\"><table class=\"info-table\">\t\t\t\t\t\t\t\t<tr><td><b>商户法定代表人姓名：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.mer_legal_name)) == null ? '' : jade_interp)) + "</td></tr><tr><td> <b>商户拥有pos数量：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.pos_cnt)) == null ? '' : jade_interp)) + "</td></tr><tr><td colspan=\"2\"> <b>营业执照注册地址：</b>" + (jade.escape((jade_interp = util.fixedEmpty(database.bus_lic_reg_addr)) == null ? '' : jade_interp)) + "</td></tr></table></div></div><div class=\"info-detail\"><div class=\"detail-title\"><strong>近一年月均交易金额: " + (jade.escape((jade_interp = util.formatMoney(database.total_amt_ly)) == null ? '' : jade_interp)) + "</strong></div><div id=\"pos-monthly\" style=\"height:240px;\" class=\"detail-body detail-items\"><table class=\"info-table\">");
	for(var i=1;i<=12;i++){
	{
	var key = 'trans_amt_' + i;
	if(i%2==0)
	{
	buf.push("<tr><td> <b>统计月份：</b>" + (jade.escape((jade_interp = moment().subtract(i,'M').format('YYYY-MM')) == null ? '' : jade_interp)) + "</td><td><b>交易金额：</b>" + (jade.escape((jade_interp = util.formatMoney(database[key])) == null ? '' : jade_interp)) + "</td></tr>");
	}
	else
	{
	buf.push("<tr class=\"even\"><td> <b>统计月份：</b>" + (jade.escape((jade_interp = moment().subtract(i,'M').format('YYYY-MM')) == null ? '' : jade_interp)) + "</td><td><b>交易金额：</b>" + (jade.escape((jade_interp = util.formatMoney(database[key])) == null ? '' : jade_interp)) + "</td></tr>");
	}
	}
	}
	buf.push("</table></div></div></div></div></div></div><div style=\"clear:both;\"></div><div class=\"profile-footer\"></div>");}.call(this,"Number" in locals_for_with?locals_for_with.Number:typeof Number!=="undefined"?Number:undefined,"assetsMonthlyStat" in locals_for_with?locals_for_with.assetsMonthlyStat:typeof assetsMonthlyStat!=="undefined"?assetsMonthlyStat:undefined,"customerCreditCardInfo" in locals_for_with?locals_for_with.customerCreditCardInfo:typeof customerCreditCardInfo!=="undefined"?customerCreditCardInfo:undefined,"database" in locals_for_with?locals_for_with.database:typeof database!=="undefined"?database:undefined,"isNaN" in locals_for_with?locals_for_with.isNaN:typeof isNaN!=="undefined"?isNaN:undefined,"moment" in locals_for_with?locals_for_with.moment:typeof moment!=="undefined"?moment:undefined,"parseInt" in locals_for_with?locals_for_with.parseInt:typeof parseInt!=="undefined"?parseInt:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js
	// version : 2.1.0
	// author : Tim Wood
	// license : MIT
	// momentjs.com

	(function (undefined) {

	    /************************************
	        Constants
	    ************************************/

	    var moment,
	        VERSION = "2.1.0",
	        round = Math.round, i,
	        // internal storage for language config files
	        languages = {},

	        // check for nodeJS
	        hasModule = (typeof module !== 'undefined' && module.exports),

	        // ASP.NET json date format regex
	        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
	        aspNetTimeSpanJsonRegex = /(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,

	        // format tokens
	        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
	        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

	        // parsing token regexes
	        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
	        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
	        parseTokenThreeDigits = /\d{3}/, // 000 - 999
	        parseTokenFourDigits = /\d{1,4}/, // 0 - 9999
	        parseTokenSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
	        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
	        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, // +00:00 -00:00 +0000 -0000 or Z
	        parseTokenT = /T/i, // T (ISO seperator)
	        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

	        // preliminary iso regex
	        // 0000-00-00 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000
	        isoRegex = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
	        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

	        // iso time formats and regexes
	        isoTimes = [
	            ['HH:mm:ss.S', /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
	            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
	            ['HH:mm', /(T| )\d\d:\d\d/],
	            ['HH', /(T| )\d\d/]
	        ],

	        // timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
	        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

	        // getter and setter names
	        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
	        unitMillisecondFactors = {
	            'Milliseconds' : 1,
	            'Seconds' : 1e3,
	            'Minutes' : 6e4,
	            'Hours' : 36e5,
	            'Days' : 864e5,
	            'Months' : 2592e6,
	            'Years' : 31536e6
	        },

	        unitAliases = {
	            ms : 'millisecond',
	            s : 'second',
	            m : 'minute',
	            h : 'hour',
	            d : 'day',
	            w : 'week',
	            M : 'month',
	            y : 'year'
	        },

	        // format function strings
	        formatFunctions = {},

	        // tokens to ordinalize and pad
	        ordinalizeTokens = 'DDD w W M D d'.split(' '),
	        paddedTokens = 'M D H h m s w W'.split(' '),

	        formatTokenFunctions = {
	            M    : function () {
	                return this.month() + 1;
	            },
	            MMM  : function (format) {
	                return this.lang().monthsShort(this, format);
	            },
	            MMMM : function (format) {
	                return this.lang().months(this, format);
	            },
	            D    : function () {
	                return this.date();
	            },
	            DDD  : function () {
	                return this.dayOfYear();
	            },
	            d    : function () {
	                return this.day();
	            },
	            dd   : function (format) {
	                return this.lang().weekdaysMin(this, format);
	            },
	            ddd  : function (format) {
	                return this.lang().weekdaysShort(this, format);
	            },
	            dddd : function (format) {
	                return this.lang().weekdays(this, format);
	            },
	            w    : function () {
	                return this.week();
	            },
	            W    : function () {
	                return this.isoWeek();
	            },
	            YY   : function () {
	                return leftZeroFill(this.year() % 100, 2);
	            },
	            YYYY : function () {
	                return leftZeroFill(this.year(), 4);
	            },
	            YYYYY : function () {
	                return leftZeroFill(this.year(), 5);
	            },
	            gg   : function () {
	                return leftZeroFill(this.weekYear() % 100, 2);
	            },
	            gggg : function () {
	                return this.weekYear();
	            },
	            ggggg : function () {
	                return leftZeroFill(this.weekYear(), 5);
	            },
	            GG   : function () {
	                return leftZeroFill(this.isoWeekYear() % 100, 2);
	            },
	            GGGG : function () {
	                return this.isoWeekYear();
	            },
	            GGGGG : function () {
	                return leftZeroFill(this.isoWeekYear(), 5);
	            },
	            e : function () {
	                return this.weekday();
	            },
	            E : function () {
	                return this.isoWeekday();
	            },
	            a    : function () {
	                return this.lang().meridiem(this.hours(), this.minutes(), true);
	            },
	            A    : function () {
	                return this.lang().meridiem(this.hours(), this.minutes(), false);
	            },
	            H    : function () {
	                return this.hours();
	            },
	            h    : function () {
	                return this.hours() % 12 || 12;
	            },
	            m    : function () {
	                return this.minutes();
	            },
	            s    : function () {
	                return this.seconds();
	            },
	            S    : function () {
	                return ~~(this.milliseconds() / 100);
	            },
	            SS   : function () {
	                return leftZeroFill(~~(this.milliseconds() / 10), 2);
	            },
	            SSS  : function () {
	                return leftZeroFill(this.milliseconds(), 3);
	            },
	            Z    : function () {
	                var a = -this.zone(),
	                    b = "+";
	                if (a < 0) {
	                    a = -a;
	                    b = "-";
	                }
	                return b + leftZeroFill(~~(a / 60), 2) + ":" + leftZeroFill(~~a % 60, 2);
	            },
	            ZZ   : function () {
	                var a = -this.zone(),
	                    b = "+";
	                if (a < 0) {
	                    a = -a;
	                    b = "-";
	                }
	                return b + leftZeroFill(~~(10 * a / 6), 4);
	            },
	            z : function () {
	                return this.zoneAbbr();
	            },
	            zz : function () {
	                return this.zoneName();
	            },
	            X    : function () {
	                return this.unix();
	            }
	        };

	    function padToken(func, count) {
	        return function (a) {
	            return leftZeroFill(func.call(this, a), count);
	        };
	    }
	    function ordinalizeToken(func, period) {
	        return function (a) {
	            return this.lang().ordinal(func.call(this, a), period);
	        };
	    }

	    while (ordinalizeTokens.length) {
	        i = ordinalizeTokens.pop();
	        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
	    }
	    while (paddedTokens.length) {
	        i = paddedTokens.pop();
	        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
	    }
	    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


	    /************************************
	        Constructors
	    ************************************/

	    function Language() {

	    }

	    // Moment prototype object
	    function Moment(config) {
	        extend(this, config);
	    }

	    // Duration Constructor
	    function Duration(duration) {
	        var years = duration.years || duration.year || duration.y || 0,
	            months = duration.months || duration.month || duration.M || 0,
	            weeks = duration.weeks || duration.week || duration.w || 0,
	            days = duration.days || duration.day || duration.d || 0,
	            hours = duration.hours || duration.hour || duration.h || 0,
	            minutes = duration.minutes || duration.minute || duration.m || 0,
	            seconds = duration.seconds || duration.second || duration.s || 0,
	            milliseconds = duration.milliseconds || duration.millisecond || duration.ms || 0;

	        // store reference to input for deterministic cloning
	        this._input = duration;

	        // representation for dateAddRemove
	        this._milliseconds = milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 36e5; // 1000 * 60 * 60
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = days +
	            weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = months +
	            years * 12;

	        this._data = {};

	        this._bubble();
	    }


	    /************************************
	        Helpers
	    ************************************/


	    function extend(a, b) {
	        for (var i in b) {
	            if (b.hasOwnProperty(i)) {
	                a[i] = b[i];
	            }
	        }
	        return a;
	    }

	    function absRound(number) {
	        if (number < 0) {
	            return Math.ceil(number);
	        } else {
	            return Math.floor(number);
	        }
	    }

	    // left zero fill a number
	    // see http://jsperf.com/left-zero-filling for performance comparison
	    function leftZeroFill(number, targetLength) {
	        var output = number + '';
	        while (output.length < targetLength) {
	            output = '0' + output;
	        }
	        return output;
	    }

	    // helper function for _.addTime and _.subtractTime
	    function addOrSubtractDurationFromMoment(mom, duration, isAdding, ignoreUpdateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = duration._days,
	            months = duration._months,
	            minutes,
	            hours,
	            currentDate;

	        if (milliseconds) {
	            mom._d.setTime(+mom._d + milliseconds * isAdding);
	        }
	        // store the minutes and hours so we can restore them
	        if (days || months) {
	            minutes = mom.minute();
	            hours = mom.hour();
	        }
	        if (days) {
	            mom.date(mom.date() + days * isAdding);
	        }
	        if (months) {
	            mom.month(mom.month() + months * isAdding);
	        }
	        if (milliseconds && !ignoreUpdateOffset) {
	            moment.updateOffset(mom);
	        }
	        // restore the minutes and hours after possibly changing dst
	        if (days || months) {
	            mom.minute(minutes);
	            mom.hour(hours);
	        }
	    }

	    // check if is an array
	    function isArray(input) {
	        return Object.prototype.toString.call(input) === '[object Array]';
	    }

	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if (~~array1[i] !== ~~array2[i]) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }

	    function normalizeUnits(units) {
	        return units ? unitAliases[units] || units.toLowerCase().replace(/(.)s$/, '$1') : units;
	    }


	    /************************************
	        Languages
	    ************************************/


	    Language.prototype = {
	        set : function (config) {
	            var prop, i;
	            for (i in config) {
	                prop = config[i];
	                if (typeof prop === 'function') {
	                    this[i] = prop;
	                } else {
	                    this['_' + i] = prop;
	                }
	            }
	        },

	        _months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
	        months : function (m) {
	            return this._months[m.month()];
	        },

	        _monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
	        monthsShort : function (m) {
	            return this._monthsShort[m.month()];
	        },

	        monthsParse : function (monthName) {
	            var i, mom, regex;

	            if (!this._monthsParse) {
	                this._monthsParse = [];
	            }

	            for (i = 0; i < 12; i++) {
	                // make the regex if we don't have it already
	                if (!this._monthsParse[i]) {
	                    mom = moment([2000, i]);
	                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	                }
	                // test the regex
	                if (this._monthsParse[i].test(monthName)) {
	                    return i;
	                }
	            }
	        },

	        _weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
	        weekdays : function (m) {
	            return this._weekdays[m.day()];
	        },

	        _weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
	        weekdaysShort : function (m) {
	            return this._weekdaysShort[m.day()];
	        },

	        _weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
	        weekdaysMin : function (m) {
	            return this._weekdaysMin[m.day()];
	        },

	        weekdaysParse : function (weekdayName) {
	            var i, mom, regex;

	            if (!this._weekdaysParse) {
	                this._weekdaysParse = [];
	            }

	            for (i = 0; i < 7; i++) {
	                // make the regex if we don't have it already
	                if (!this._weekdaysParse[i]) {
	                    mom = moment([2000, 1]).day(i);
	                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	                }
	                // test the regex
	                if (this._weekdaysParse[i].test(weekdayName)) {
	                    return i;
	                }
	            }
	        },

	        _longDateFormat : {
	            LT : "h:mm A",
	            L : "MM/DD/YYYY",
	            LL : "MMMM D YYYY",
	            LLL : "MMMM D YYYY LT",
	            LLLL : "dddd, MMMM D YYYY LT"
	        },
	        longDateFormat : function (key) {
	            var output = this._longDateFormat[key];
	            if (!output && this._longDateFormat[key.toUpperCase()]) {
	                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
	                    return val.slice(1);
	                });
	                this._longDateFormat[key] = output;
	            }
	            return output;
	        },

	        isPM : function (input) {
	            return ((input + '').toLowerCase()[0] === 'p');
	        },

	        _meridiemParse : /[ap]\.?m?\.?/i,
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'pm' : 'PM';
	            } else {
	                return isLower ? 'am' : 'AM';
	            }
	        },

	        _calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        calendar : function (key, mom) {
	            var output = this._calendar[key];
	            return typeof output === 'function' ? output.apply(mom) : output;
	        },

	        _relativeTime : {
	            future : "in %s",
	            past : "%s ago",
	            s : "a few seconds",
	            m : "a minute",
	            mm : "%d minutes",
	            h : "an hour",
	            hh : "%d hours",
	            d : "a day",
	            dd : "%d days",
	            M : "a month",
	            MM : "%d months",
	            y : "a year",
	            yy : "%d years"
	        },
	        relativeTime : function (number, withoutSuffix, string, isFuture) {
	            var output = this._relativeTime[string];
	            return (typeof output === 'function') ?
	                output(number, withoutSuffix, string, isFuture) :
	                output.replace(/%d/i, number);
	        },
	        pastFuture : function (diff, output) {
	            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
	        },

	        ordinal : function (number) {
	            return this._ordinal.replace("%d", number);
	        },
	        _ordinal : "%d",

	        preparse : function (string) {
	            return string;
	        },

	        postformat : function (string) {
	            return string;
	        },

	        week : function (mom) {
	            return weekOfYear(mom, this._week.dow, this._week.doy).week;
	        },
	        _week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    };

	    // Loads a language definition into the `languages` cache.  The function
	    // takes a key and optionally values.  If not in the browser and no values
	    // are provided, it will load the language file module.  As a convenience,
	    // this function also returns the language values.
	    function loadLang(key, values) {
	        values.abbr = key;
	        if (!languages[key]) {
	            languages[key] = new Language();
	        }
	        languages[key].set(values);
	        return languages[key];
	    }

	    // Determines which language definition to use and returns it.
	    //
	    // With no parameters, it will return the global language.  If you
	    // pass in a language key, such as 'en', it will return the
	    // definition for 'en', so long as 'en' has already been loaded using
	    // moment.lang.
	    function getLangDefinition(key) {
	        if (!key) {
	            return moment.fn._lang;
	        }
	        if (!languages[key] && hasModule) {
	            try {
	                !(function webpackMissingModule() { var e = new Error("Cannot find module \"./lang\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
	            } catch (e) {
	                // call with no params to set to default
	                return moment.fn._lang;
	            }
	        }
	        return languages[key];
	    }


	    /************************************
	        Formatting
	    ************************************/


	    function removeFormattingTokens(input) {
	        if (input.match(/\[.*\]/)) {
	            return input.replace(/^\[|\]$/g, "");
	        }
	        return input.replace(/\\/g, "");
	    }

	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;

	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }

	        return function (mom) {
	            var output = "";
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }

	    // format date using native date object
	    function formatMoment(m, format) {
	        var i = 5;

	        function replaceLongDateFormatTokens(input) {
	            return m.lang().longDateFormat(input) || input;
	        }

	        while (i-- && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	        }

	        if (!formatFunctions[format]) {
	            formatFunctions[format] = makeFormatFunction(format);
	        }

	        return formatFunctions[format](m);
	    }


	    /************************************
	        Parsing
	    ************************************/


	    // get the regex to find the next token
	    function getParseRegexForToken(token, config) {
	        switch (token) {
	        case 'DDDD':
	            return parseTokenThreeDigits;
	        case 'YYYY':
	            return parseTokenFourDigits;
	        case 'YYYYY':
	            return parseTokenSixDigits;
	        case 'S':
	        case 'SS':
	        case 'SSS':
	        case 'DDD':
	            return parseTokenOneToThreeDigits;
	        case 'MMM':
	        case 'MMMM':
	        case 'dd':
	        case 'ddd':
	        case 'dddd':
	            return parseTokenWord;
	        case 'a':
	        case 'A':
	            return getLangDefinition(config._l)._meridiemParse;
	        case 'X':
	            return parseTokenTimestampMs;
	        case 'Z':
	        case 'ZZ':
	            return parseTokenTimezone;
	        case 'T':
	            return parseTokenT;
	        case 'MM':
	        case 'DD':
	        case 'YY':
	        case 'HH':
	        case 'hh':
	        case 'mm':
	        case 'ss':
	        case 'M':
	        case 'D':
	        case 'd':
	        case 'H':
	        case 'h':
	        case 'm':
	        case 's':
	            return parseTokenOneOrTwoDigits;
	        default :
	            return new RegExp(token.replace('\\', ''));
	        }
	    }

	    function timezoneMinutesFromString(string) {
	        var tzchunk = (parseTokenTimezone.exec(string) || [])[0],
	            parts = (tzchunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
	            minutes = +(parts[1] * 60) + ~~parts[2];

	        return parts[0] === '+' ? -minutes : minutes;
	    }

	    // function to convert string input to date
	    function addTimeToArrayFromToken(token, input, config) {
	        var a, datePartArray = config._a;

	        switch (token) {
	        // MONTH
	        case 'M' : // fall through to MM
	        case 'MM' :
	            datePartArray[1] = (input == null) ? 0 : ~~input - 1;
	            break;
	        case 'MMM' : // fall through to MMMM
	        case 'MMMM' :
	            a = getLangDefinition(config._l).monthsParse(input);
	            // if we didn't find a month name, mark the date as invalid.
	            if (a != null) {
	                datePartArray[1] = a;
	            } else {
	                config._isValid = false;
	            }
	            break;
	        // DAY OF MONTH
	        case 'D' : // fall through to DDDD
	        case 'DD' : // fall through to DDDD
	        case 'DDD' : // fall through to DDDD
	        case 'DDDD' :
	            if (input != null) {
	                datePartArray[2] = ~~input;
	            }
	            break;
	        // YEAR
	        case 'YY' :
	            datePartArray[0] = ~~input + (~~input > 68 ? 1900 : 2000);
	            break;
	        case 'YYYY' :
	        case 'YYYYY' :
	            datePartArray[0] = ~~input;
	            break;
	        // AM / PM
	        case 'a' : // fall through to A
	        case 'A' :
	            config._isPm = getLangDefinition(config._l).isPM(input);
	            break;
	        // 24 HOUR
	        case 'H' : // fall through to hh
	        case 'HH' : // fall through to hh
	        case 'h' : // fall through to hh
	        case 'hh' :
	            datePartArray[3] = ~~input;
	            break;
	        // MINUTE
	        case 'm' : // fall through to mm
	        case 'mm' :
	            datePartArray[4] = ~~input;
	            break;
	        // SECOND
	        case 's' : // fall through to ss
	        case 'ss' :
	            datePartArray[5] = ~~input;
	            break;
	        // MILLISECOND
	        case 'S' :
	        case 'SS' :
	        case 'SSS' :
	            datePartArray[6] = ~~ (('0.' + input) * 1000);
	            break;
	        // UNIX TIMESTAMP WITH MS
	        case 'X':
	            config._d = new Date(parseFloat(input) * 1000);
	            break;
	        // TIMEZONE
	        case 'Z' : // fall through to ZZ
	        case 'ZZ' :
	            config._useUTC = true;
	            config._tzm = timezoneMinutesFromString(input);
	            break;
	        }

	        // if the input is null, the date is not valid
	        if (input == null) {
	            config._isValid = false;
	        }
	    }

	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function dateFromArray(config) {
	        var i, date, input = [];

	        if (config._d) {
	            return;
	        }

	        for (i = 0; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }

	        // add the offsets to the time to be parsed so that we can have a clean array for checking isValid
	        input[3] += ~~((config._tzm || 0) / 60);
	        input[4] += ~~((config._tzm || 0) % 60);

	        date = new Date(0);

	        if (config._useUTC) {
	            date.setUTCFullYear(input[0], input[1], input[2]);
	            date.setUTCHours(input[3], input[4], input[5], input[6]);
	        } else {
	            date.setFullYear(input[0], input[1], input[2]);
	            date.setHours(input[3], input[4], input[5], input[6]);
	        }

	        config._d = date;
	    }

	    // date from string and format string
	    function makeDateFromStringAndFormat(config) {
	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var tokens = config._f.match(formattingTokens),
	            string = config._i,
	            i, parsedInput;

	        config._a = [];

	        for (i = 0; i < tokens.length; i++) {
	            parsedInput = (getParseRegexForToken(tokens[i], config).exec(string) || [])[0];
	            if (parsedInput) {
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	            }
	            // don't parse if its not a known token
	            if (formatTokenFunctions[tokens[i]]) {
	                addTimeToArrayFromToken(tokens[i], parsedInput, config);
	            }
	        }

	        // add remaining unparsed input to the string
	        if (string) {
	            config._il = string;
	        }

	        // handle am pm
	        if (config._isPm && config._a[3] < 12) {
	            config._a[3] += 12;
	        }
	        // if is 12 am, change hours to 0
	        if (config._isPm === false && config._a[3] === 12) {
	            config._a[3] = 0;
	        }
	        // return
	        dateFromArray(config);
	    }

	    // date from string and array of format strings
	    function makeDateFromStringAndArray(config) {
	        var tempConfig,
	            tempMoment,
	            bestMoment,

	            scoreToBeat = 99,
	            i,
	            currentScore;

	        for (i = 0; i < config._f.length; i++) {
	            tempConfig = extend({}, config);
	            tempConfig._f = config._f[i];
	            makeDateFromStringAndFormat(tempConfig);
	            tempMoment = new Moment(tempConfig);

	            currentScore = compareArrays(tempConfig._a, tempMoment.toArray());

	            // if there is any input that was not parsed
	            // add a penalty for that format
	            if (tempMoment._il) {
	                currentScore += tempMoment._il.length;
	            }

	            if (currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempMoment;
	            }
	        }

	        extend(config, bestMoment);
	    }

	    // date from iso format
	    function makeDateFromString(config) {
	        var i,
	            string = config._i,
	            match = isoRegex.exec(string);

	        if (match) {
	            // match[2] should be "T" or undefined
	            config._f = 'YYYY-MM-DD' + (match[2] || " ");
	            for (i = 0; i < 4; i++) {
	                if (isoTimes[i][1].exec(string)) {
	                    config._f += isoTimes[i][0];
	                    break;
	                }
	            }
	            if (parseTokenTimezone.exec(string)) {
	                config._f += " Z";
	            }
	            makeDateFromStringAndFormat(config);
	        } else {
	            config._d = new Date(string);
	        }
	    }

	    function makeDateFromInput(config) {
	        var input = config._i,
	            matched = aspNetJsonRegex.exec(input);

	        if (input === undefined) {
	            config._d = new Date();
	        } else if (matched) {
	            config._d = new Date(+matched[1]);
	        } else if (typeof input === 'string') {
	            makeDateFromString(config);
	        } else if (isArray(input)) {
	            config._a = input.slice(0);
	            dateFromArray(config);
	        } else {
	            config._d = input instanceof Date ? new Date(+input) : new Date(input);
	        }
	    }


	    /************************************
	        Relative Time
	    ************************************/


	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
	        return lang.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }

	    function relativeTime(milliseconds, withoutSuffix, lang) {
	        var seconds = round(Math.abs(milliseconds) / 1000),
	            minutes = round(seconds / 60),
	            hours = round(minutes / 60),
	            days = round(hours / 24),
	            years = round(days / 365),
	            args = seconds < 45 && ['s', seconds] ||
	                minutes === 1 && ['m'] ||
	                minutes < 45 && ['mm', minutes] ||
	                hours === 1 && ['h'] ||
	                hours < 22 && ['hh', hours] ||
	                days === 1 && ['d'] ||
	                days <= 25 && ['dd', days] ||
	                days <= 45 && ['M'] ||
	                days < 345 && ['MM', round(days / 30)] ||
	                years === 1 && ['y'] || ['yy', years];
	        args[2] = withoutSuffix;
	        args[3] = milliseconds > 0;
	        args[4] = lang;
	        return substituteTimeAgo.apply({}, args);
	    }


	    /************************************
	        Week of Year
	    ************************************/


	    // firstDayOfWeek       0 = sun, 6 = sat
	    //                      the day of the week that starts the week
	    //                      (usually sunday or monday)
	    // firstDayOfWeekOfYear 0 = sun, 6 = sat
	    //                      the first week is the week that contains the first
	    //                      of this day of the week
	    //                      (eg. ISO weeks use thursday (4))
	    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
	        var end = firstDayOfWeekOfYear - firstDayOfWeek,
	            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
	            adjustedMoment;


	        if (daysToDayOfWeek > end) {
	            daysToDayOfWeek -= 7;
	        }

	        if (daysToDayOfWeek < end - 7) {
	            daysToDayOfWeek += 7;
	        }

	        adjustedMoment = moment(mom).add('d', daysToDayOfWeek);
	        return {
	            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
	            year: adjustedMoment.year()
	        };
	    }


	    /************************************
	        Top Level Functions
	    ************************************/

	    function makeMoment(config) {
	        var input = config._i,
	            format = config._f;

	        if (input === null || input === '') {
	            return null;
	        }

	        if (typeof input === 'string') {
	            config._i = input = getLangDefinition().preparse(input);
	        }

	        if (moment.isMoment(input)) {
	            config = extend({}, input);
	            config._d = new Date(+input._d);
	        } else if (format) {
	            if (isArray(format)) {
	                makeDateFromStringAndArray(config);
	            } else {
	                makeDateFromStringAndFormat(config);
	            }
	        } else {
	            makeDateFromInput(config);
	        }

	        return new Moment(config);
	    }

	    moment = function (input, format, lang) {
	        return makeMoment({
	            _i : input,
	            _f : format,
	            _l : lang,
	            _isUTC : false
	        });
	    };

	    // creating with utc
	    moment.utc = function (input, format, lang) {
	        return makeMoment({
	            _useUTC : true,
	            _isUTC : true,
	            _l : lang,
	            _i : input,
	            _f : format
	        });
	    };

	    // creating with unix timestamp (in seconds)
	    moment.unix = function (input) {
	        return moment(input * 1000);
	    };

	    // duration
	    moment.duration = function (input, key) {
	        var isDuration = moment.isDuration(input),
	            isNumber = (typeof input === 'number'),
	            duration = (isDuration ? input._input : (isNumber ? {} : input)),
	            matched = aspNetTimeSpanJsonRegex.exec(input),
	            sign,
	            ret;

	        if (isNumber) {
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (matched) {
	            sign = (matched[1] === "-") ? -1 : 1;
	            duration = {
	                y: 0,
	                d: ~~matched[2] * sign,
	                h: ~~matched[3] * sign,
	                m: ~~matched[4] * sign,
	                s: ~~matched[5] * sign,
	                ms: ~~matched[6] * sign
	            };
	        }

	        ret = new Duration(duration);

	        if (isDuration && input.hasOwnProperty('_lang')) {
	            ret._lang = input._lang;
	        }

	        return ret;
	    };

	    // version number
	    moment.version = VERSION;

	    // default format
	    moment.defaultFormat = isoFormat;

	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    moment.updateOffset = function () {};

	    // This function will load languages and then set the global language.  If
	    // no arguments are passed in, it will simply return the current global
	    // language key.
	    moment.lang = function (key, values) {
	        if (!key) {
	            return moment.fn._lang._abbr;
	        }
	        if (values) {
	            loadLang(key, values);
	        } else if (!languages[key]) {
	            getLangDefinition(key);
	        }
	        moment.duration.fn._lang = moment.fn._lang = getLangDefinition(key);
	    };

	    // returns language data
	    moment.langData = function (key) {
	        if (key && key._lang && key._lang._abbr) {
	            key = key._lang._abbr;
	        }
	        return getLangDefinition(key);
	    };

	    // compare moment object
	    moment.isMoment = function (obj) {
	        return obj instanceof Moment;
	    };

	    // for typechecking Duration objects
	    moment.isDuration = function (obj) {
	        return obj instanceof Duration;
	    };


	    /************************************
	        Moment Prototype
	    ************************************/


	    moment.fn = Moment.prototype = {

	        clone : function () {
	            return moment(this);
	        },

	        valueOf : function () {
	            return +this._d + ((this._offset || 0) * 60000);
	        },

	        unix : function () {
	            return Math.floor(+this / 1000);
	        },

	        toString : function () {
	            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
	        },

	        toDate : function () {
	            return this._offset ? new Date(+this) : this._d;
	        },

	        toISOString : function () {
	            return formatMoment(moment(this).utc(), 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	        },

	        toArray : function () {
	            var m = this;
	            return [
	                m.year(),
	                m.month(),
	                m.date(),
	                m.hours(),
	                m.minutes(),
	                m.seconds(),
	                m.milliseconds()
	            ];
	        },

	        isValid : function () {
	            if (this._isValid == null) {
	                if (this._a) {
	                    this._isValid = !compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray());
	                } else {
	                    this._isValid = !isNaN(this._d.getTime());
	                }
	            }
	            return !!this._isValid;
	        },

	        utc : function () {
	            return this.zone(0);
	        },

	        local : function () {
	            this.zone(0);
	            this._isUTC = false;
	            return this;
	        },

	        format : function (inputString) {
	            var output = formatMoment(this, inputString || moment.defaultFormat);
	            return this.lang().postformat(output);
	        },

	        add : function (input, val) {
	            var dur;
	            // switch args to support add('s', 1) and add(1, 's')
	            if (typeof input === 'string') {
	                dur = moment.duration(+val, input);
	            } else {
	                dur = moment.duration(input, val);
	            }
	            addOrSubtractDurationFromMoment(this, dur, 1);
	            return this;
	        },

	        subtract : function (input, val) {
	            var dur;
	            // switch args to support subtract('s', 1) and subtract(1, 's')
	            if (typeof input === 'string') {
	                dur = moment.duration(+val, input);
	            } else {
	                dur = moment.duration(input, val);
	            }
	            addOrSubtractDurationFromMoment(this, dur, -1);
	            return this;
	        },

	        diff : function (input, units, asFloat) {
	            var that = this._isUTC ? moment(input).zone(this._offset || 0) : moment(input).local(),
	                zoneDiff = (this.zone() - that.zone()) * 6e4,
	                diff, output;

	            units = normalizeUnits(units);

	            if (units === 'year' || units === 'month') {
	                // average number of days in the months in the given dates
	                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
	                // difference in months
	                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
	                // adjust by taking difference in days, average number of days
	                // and dst in the given months.
	                output += ((this - moment(this).startOf('month')) -
	                        (that - moment(that).startOf('month'))) / diff;
	                // same as above but with zones, to negate all dst
	                output -= ((this.zone() - moment(this).startOf('month').zone()) -
	                        (that.zone() - moment(that).startOf('month').zone())) * 6e4 / diff;
	                if (units === 'year') {
	                    output = output / 12;
	                }
	            } else {
	                diff = (this - that);
	                output = units === 'second' ? diff / 1e3 : // 1000
	                    units === 'minute' ? diff / 6e4 : // 1000 * 60
	                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
	                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                    diff;
	            }
	            return asFloat ? output : absRound(output);
	        },

	        from : function (time, withoutSuffix) {
	            return moment.duration(this.diff(time)).lang(this.lang()._abbr).humanize(!withoutSuffix);
	        },

	        fromNow : function (withoutSuffix) {
	            return this.from(moment(), withoutSuffix);
	        },

	        calendar : function () {
	            var diff = this.diff(moment().startOf('day'), 'days', true),
	                format = diff < -6 ? 'sameElse' :
	                diff < -1 ? 'lastWeek' :
	                diff < 0 ? 'lastDay' :
	                diff < 1 ? 'sameDay' :
	                diff < 2 ? 'nextDay' :
	                diff < 7 ? 'nextWeek' : 'sameElse';
	            return this.format(this.lang().calendar(format, this));
	        },

	        isLeapYear : function () {
	            var year = this.year();
	            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	        },

	        isDST : function () {
	            return (this.zone() < this.clone().month(0).zone() ||
	                this.zone() < this.clone().month(5).zone());
	        },

	        day : function (input) {
	            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	            if (input != null) {
	                if (typeof input === 'string') {
	                    input = this.lang().weekdaysParse(input);
	                    if (typeof input !== 'number') {
	                        return this;
	                    }
	                }
	                return this.add({ d : input - day });
	            } else {
	                return day;
	            }
	        },

	        month : function (input) {
	            var utc = this._isUTC ? 'UTC' : '',
	                dayOfMonth,
	                daysInMonth;

	            if (input != null) {
	                if (typeof input === 'string') {
	                    input = this.lang().monthsParse(input);
	                    if (typeof input !== 'number') {
	                        return this;
	                    }
	                }

	                dayOfMonth = this.date();
	                this.date(1);
	                this._d['set' + utc + 'Month'](input);
	                this.date(Math.min(dayOfMonth, this.daysInMonth()));

	                moment.updateOffset(this);
	                return this;
	            } else {
	                return this._d['get' + utc + 'Month']();
	            }
	        },

	        startOf: function (units) {
	            units = normalizeUnits(units);
	            // the following switch intentionally omits break keywords
	            // to utilize falling through the cases.
	            switch (units) {
	            case 'year':
	                this.month(0);
	                /* falls through */
	            case 'month':
	                this.date(1);
	                /* falls through */
	            case 'week':
	            case 'day':
	                this.hours(0);
	                /* falls through */
	            case 'hour':
	                this.minutes(0);
	                /* falls through */
	            case 'minute':
	                this.seconds(0);
	                /* falls through */
	            case 'second':
	                this.milliseconds(0);
	                /* falls through */
	            }

	            // weeks are a special case
	            if (units === 'week') {
	                this.weekday(0);
	            }

	            return this;
	        },

	        endOf: function (units) {
	            return this.startOf(units).add(units, 1).subtract('ms', 1);
	        },

	        isAfter: function (input, units) {
	            units = typeof units !== 'undefined' ? units : 'millisecond';
	            return +this.clone().startOf(units) > +moment(input).startOf(units);
	        },

	        isBefore: function (input, units) {
	            units = typeof units !== 'undefined' ? units : 'millisecond';
	            return +this.clone().startOf(units) < +moment(input).startOf(units);
	        },

	        isSame: function (input, units) {
	            units = typeof units !== 'undefined' ? units : 'millisecond';
	            return +this.clone().startOf(units) === +moment(input).startOf(units);
	        },

	        min: function (other) {
	            other = moment.apply(null, arguments);
	            return other < this ? this : other;
	        },

	        max: function (other) {
	            other = moment.apply(null, arguments);
	            return other > this ? this : other;
	        },

	        zone : function (input) {
	            var offset = this._offset || 0;
	            if (input != null) {
	                if (typeof input === "string") {
	                    input = timezoneMinutesFromString(input);
	                }
	                if (Math.abs(input) < 16) {
	                    input = input * 60;
	                }
	                this._offset = input;
	                this._isUTC = true;
	                if (offset !== input) {
	                    addOrSubtractDurationFromMoment(this, moment.duration(offset - input, 'm'), 1, true);
	                }
	            } else {
	                return this._isUTC ? offset : this._d.getTimezoneOffset();
	            }
	            return this;
	        },

	        zoneAbbr : function () {
	            return this._isUTC ? "UTC" : "";
	        },

	        zoneName : function () {
	            return this._isUTC ? "Coordinated Universal Time" : "";
	        },

	        daysInMonth : function () {
	            return moment.utc([this.year(), this.month() + 1, 0]).date();
	        },

	        dayOfYear : function (input) {
	            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
	            return input == null ? dayOfYear : this.add("d", (input - dayOfYear));
	        },

	        weekYear : function (input) {
	            var year = weekOfYear(this, this.lang()._week.dow, this.lang()._week.doy).year;
	            return input == null ? year : this.add("y", (input - year));
	        },

	        isoWeekYear : function (input) {
	            var year = weekOfYear(this, 1, 4).year;
	            return input == null ? year : this.add("y", (input - year));
	        },

	        week : function (input) {
	            var week = this.lang().week(this);
	            return input == null ? week : this.add("d", (input - week) * 7);
	        },

	        isoWeek : function (input) {
	            var week = weekOfYear(this, 1, 4).week;
	            return input == null ? week : this.add("d", (input - week) * 7);
	        },

	        weekday : function (input) {
	            var weekday = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
	            return input == null ? weekday : this.add("d", input - weekday);
	        },

	        isoWeekday : function (input) {
	            // behaves the same as moment#day except
	            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	            // as a setter, sunday should belong to the previous week.
	            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
	        },

	        // If passed a language key, it will set the language for this
	        // instance.  Otherwise, it will return the language configuration
	        // variables for this instance.
	        lang : function (key) {
	            if (key === undefined) {
	                return this._lang;
	            } else {
	                this._lang = getLangDefinition(key);
	                return this;
	            }
	        }
	    };

	    // helper for adding shortcuts
	    function makeGetterAndSetter(name, key) {
	        moment.fn[name] = moment.fn[name + 's'] = function (input) {
	            var utc = this._isUTC ? 'UTC' : '';
	            if (input != null) {
	                this._d['set' + utc + key](input);
	                moment.updateOffset(this);
	                return this;
	            } else {
	                return this._d['get' + utc + key]();
	            }
	        };
	    }

	    // loop through and add shortcuts (Month, Date, Hours, Minutes, Seconds, Milliseconds)
	    for (i = 0; i < proxyGettersAndSetters.length; i ++) {
	        makeGetterAndSetter(proxyGettersAndSetters[i].toLowerCase().replace(/s$/, ''), proxyGettersAndSetters[i]);
	    }

	    // add shortcut for year (uses different syntax than the getter/setter 'year' == 'FullYear')
	    makeGetterAndSetter('year', 'FullYear');

	    // add plural methods
	    moment.fn.days = moment.fn.day;
	    moment.fn.months = moment.fn.month;
	    moment.fn.weeks = moment.fn.week;
	    moment.fn.isoWeeks = moment.fn.isoWeek;

	    // add aliased format methods
	    moment.fn.toJSON = moment.fn.toISOString;

	    /************************************
	        Duration Prototype
	    ************************************/


	    moment.duration.fn = Duration.prototype = {
	        _bubble : function () {
	            var milliseconds = this._milliseconds,
	                days = this._days,
	                months = this._months,
	                data = this._data,
	                seconds, minutes, hours, years;

	            // The following code bubbles up values, see the tests for
	            // examples of what that means.
	            data.milliseconds = milliseconds % 1000;

	            seconds = absRound(milliseconds / 1000);
	            data.seconds = seconds % 60;

	            minutes = absRound(seconds / 60);
	            data.minutes = minutes % 60;

	            hours = absRound(minutes / 60);
	            data.hours = hours % 24;

	            days += absRound(hours / 24);
	            data.days = days % 30;

	            months += absRound(days / 30);
	            data.months = months % 12;

	            years = absRound(months / 12);
	            data.years = years;
	        },

	        weeks : function () {
	            return absRound(this.days() / 7);
	        },

	        valueOf : function () {
	            return this._milliseconds +
	              this._days * 864e5 +
	              (this._months % 12) * 2592e6 +
	              ~~(this._months / 12) * 31536e6;
	        },

	        humanize : function (withSuffix) {
	            var difference = +this,
	                output = relativeTime(difference, !withSuffix, this.lang());

	            if (withSuffix) {
	                output = this.lang().pastFuture(difference, output);
	            }

	            return this.lang().postformat(output);
	        },

	        add : function (input, val) {
	            // supports only 2.0-style add(1, 's') or add(moment)
	            var dur = moment.duration(input, val);

	            this._milliseconds += dur._milliseconds;
	            this._days += dur._days;
	            this._months += dur._months;

	            this._bubble();

	            return this;
	        },

	        subtract : function (input, val) {
	            var dur = moment.duration(input, val);

	            this._milliseconds -= dur._milliseconds;
	            this._days -= dur._days;
	            this._months -= dur._months;

	            this._bubble();

	            return this;
	        },

	        get : function (units) {
	            units = normalizeUnits(units);
	            return this[units.toLowerCase() + 's']();
	        },

	        as : function (units) {
	            units = normalizeUnits(units);
	            return this['as' + units.charAt(0).toUpperCase() + units.slice(1) + 's']();
	        },

	        lang : moment.fn.lang
	    };

	    function makeDurationGetter(name) {
	        moment.duration.fn[name] = function () {
	            return this._data[name];
	        };
	    }

	    function makeDurationAsGetter(name, factor) {
	        moment.duration.fn['as' + name] = function () {
	            return +this / factor;
	        };
	    }

	    for (i in unitMillisecondFactors) {
	        if (unitMillisecondFactors.hasOwnProperty(i)) {
	            makeDurationAsGetter(i, unitMillisecondFactors[i]);
	            makeDurationGetter(i.toLowerCase());
	        }
	    }

	    makeDurationAsGetter('Weeks', 6048e5);
	    moment.duration.fn.asMonths = function () {
	        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12;
	    };


	    /************************************
	        Default Lang
	    ************************************/


	    // Set default language, other languages will inherit from English.
	    moment.lang('en', {
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~ (number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });


	    /************************************
	        Exposing Moment
	    ************************************/


	    // CommonJS module is defined
	    if (hasModule) {
	        module.exports = moment;
	    }
	    /*global ender:false */
	    if (typeof ender === 'undefined') {
	        // here, `this` means `window` in the browser, or `global` on the server
	        // add `moment` as a global object via a string identifier,
	        // for Closure Compiler "advanced" mode
	        this['moment'] = moment;
	    }
	    /*global define:false */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return moment;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	}).call(this);


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];

	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }

	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */

	function nulls(val) {
	  return val != null && val !== '';
	}

	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}

	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};


	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];

	  var keys = Object.keys(obj);

	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];

	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }

	  return buf.join('');
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var jade_encode_html_rules = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	var jade_match_html = /[&<>"]/g;

	function jade_encode_char(c) {
	  return jade_encode_html_rules[c] || c;
	}

	exports.escape = jade_escape;
	function jade_escape(html){
	  var result = String(html).replace(jade_match_html, jade_encode_char);
	  if (result === '' + html) return html;
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */

	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(31).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};

	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	}


/***/ },
/* 31 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/yc_logo.png?bd5e375e";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(CVal, $) {'use strict';
	//console.time('time');
	//console.profile();
	__webpack_require__(34);
	__webpack_require__(35);
	var Store = __webpack_require__(24);
	var Events = __webpack_require__(25);

	var Page = {
		isFirstLoad:true,
		push: 0,
		ajaxDataType: typeof CVal == "undefined" ? 'jsonp' : 'jsonp',
		init: function(){
			if(Page.isFirstLoad){
				$(document.body).append('<div class="msg-plus"></div>');
				Page.HandleEvents.init();
				Page.isFirstLoad = false;
			}
			var store = Page.Store;
			store.dispatch(Page.Action.index());
			Page.Render.init();
			$('.content-tabs').trigger('change.tabs',0); 
			function firstRequest(callback){
				//$(document.body).append('<div class="msg-plus"></div>');
				$.when(
					Page.APIS.getMsgs(),
					Page.APIS.getClosedSum()
				).done(function(data,sum){
					//data[0].data.sum = sum[0].data[0];//注意：如果是多个接口，返回值是一个ajax对象，数据要用data[0]获取，否则报错；如果是一个接口则直接data获取
					//callback(data[0].data);
					if(data[0].code == 1000 && sum[0].code==1000){
						data[0].data.sum = sum[0].data;//注意返回值是一个ajax对象，数据要用data[0]获取，否则报错
						Page.Store.dispatch(Page.Action.tab1(data[0].data));
						callback();
					}
				})
			}
			firstRequest(function(){
				Page.Render.init();
				$('.content-tabs').trigger('change.tabs',0); 
				/**
				require.ensure('slimscroll',function(){
					require('slimscroll');
					 $('.msg-content>.content.active').slimScroll({
	                    position: "right",
	                    height: '500px',
	                    distance: '3px',
	                    railVisible: false,
	                    size: '5px',                    
	                    color: '#999',                    
	                    railOpacity: '0.5',
	                    railColor: '#eee'
	                });
				},'slimscroll');//第三个参数是给这个模块命名，否则[name]是一个自动分配的id
				**/
			})
		}
	}

	Page.APIS = (function(){
		var apiPath = typeof CVal == "undefined" ? 'http://21.32.95.248:8088/bhoserver' : CVal.path;
		var postData = {};
		if(typeof CVal != "undefined"){
			postData.userId = CVal.getUserId();
			postData.posId = CVal.getPostId();
			postData.orgId  = CVal.getOrgId();
		}
		else{
			postData.userId = "20091206140";
			postData.posId ="E02";
			postData.orgId  ="13011576";
		}
		var Apis = {
			msgs: apiPath + '/portals/getDataClosed',                                           //已经结清
			msgs2: apiPath + '/portals/getCloseDataSoon',                                       //即将结清
			msgs3: apiPath + '/portals/getLoanRemindListByUserId',                              //查询指定信贷员贷后需检查业务
			news: apiPath + '/portals/indNewsList',                                             //行业新闻推荐 20081802220
			closedSum: apiPath + '/portals/getDataClosedSum',                                   //已结清统计
			closeDataSoonSum: apiPath + '/portals/getCloseDataSoonSum',                         //即将结清统计
			dealShowData: apiPath + '/portals/dealShowData',                                    //处理是否续贷及显示
			loanRemindAlteraction: apiPath + '/portals/loanRemindAlteraction',                  //贷后提醒详细修改
			loanRemindStat: apiPath + '/portals/loanRemindStat',                  				//贷后提醒详细修改
			bulletinInfo: apiPath + '/portals/getBulletinInformDetail'                          //查询信贷员业务通报明细 20081802220
		}
		return {
			getMsgs: function() {
				return $.ajax({
					url: Apis.msgs,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
				 	jsonp: '_callback'
				})
			},
			getMsgs2: function() {
				return $.ajax({
					url: Apis.msgs2,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			getMsgs3: function() {
				return $.ajax({
					url: Apis.msgs3,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			getNews: function() {
				return $.ajax({
					url: Apis.news,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			getClosedSum: function() {
				return $.ajax({
					url: Apis.closedSum,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			getCloseDataSoonSum: function() {
				return $.ajax({
					url: Apis.closeDataSoonSum,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			dealShowData: function(loanId,isLoaning,isShow) {
				postData.loanId=loanId;
				postData.isLoaning=isLoaning;
				postData.isShow=isShow;
				return $.ajax({
					url: Apis.dealShowData,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			loanRemindAlteraction: function(rmdId,alterType) {
				postData.rmdId=rmdId;
				postData.alterType=alterType;
				return $.ajax({
					url: Apis.loanRemindAlteraction,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			loanRemindStat: function() {
				return $.ajax({
					url: Apis.loanRemindStat,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			},
			bulletinInfo: function() {
				return $.ajax({
					url: Apis.bulletinInfo,
					type: 'GET',
					dataType: Page.ajaxDataType,
					data: postData,
					jsonp: '_callback'
				})
			}
		}
	}());

	Page.UI = (function(){
		return {
			indexView: function() {
				return __webpack_require__(36);
			},
			detailView: function() {
				return __webpack_require__(38);
			},
			newsView: function() {
				return __webpack_require__(39);
			}
		}
	}());

	Page.Store = (function(){
		var store = new Store();
		return store;
	}());

	Page.Render = (function(){
		//var $msgPlus = $('.msg-plus'); //注意本函数为立即执行函数，如果在此定义dom还未渲染，所以此时获取不到dom，因此必须在调用方法内获取dom
		function index() {
			var $msgPlus = $('.msg-plus');
			var template = Page.UI.indexView();
			var html = template(Page.Store.getState());
			$msgPlus.html(html);
		}
		function detail() {
			var $msgPlus = $('.msg-plus');
			var template = Page.UI.detailView();
			var html = template(Page.Store.getState());
			$msgPlus.html(html);
		}
		function news() {
			var $msgPlus = $('.msg-plus');
			var template = Page.UI.newsView();
			var html = template(Page.Store.getState());
			$msgPlus.html(html);
			__webpack_require__.e/* nsure */(1, function(){/* WEBPACK VAR INJECTION */(function($) {
				__webpack_require__(40);
				 $('.adPops-content').slimScroll({
		            position: "right",
		            height: '325px',
		            distance: '2px',
		            railVisible: true,
		            size: '5px',                    
		            color: '#999',                    
		            railOpacity: '0.5',
		            railColor: '#eee'
		        });
			
	/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))});//第三个参数是给这个模块命名，否则[name]是一个自动分配的id
		}
		return {
			init: function() {
				index();
			},
			news: function() {
				news();
			},
			detail: function() {
				detail();
			} 
		}
	}());

	Page.HandleEvents = (function(){
		function push(type){
			var $msgPlus = $('.msg-plus'),
				$msgContent = $('.msg-content'),
				$msgTabs = $('.msg-tabs'),
				$icon = $('.showhide').find('i');
			if(type=='right'){
				$msgPlus.animate({right:-322},function(){
					$msgTabs.animate({'margin-left':-322});
					Page.push=1;
					$icon.html('&#xe636;');
					$icon.next('span').text('展开');
				})
			}else if(type=='left'){
				$msgPlus.animate({right:0});
				$msgTabs.animate({'margin-left':0});
				Page.push=0;
				$icon.html('&#xe635;');
				$icon.next('span').text('收起');
			}
		}	
		$(document).on('click','.close-icon',function(){
			Page.Render.init();
		})
		var events = new Events({
			'.news@click': 'showNews',
			'.news-card@click': 'gotoNew',
			'.content-item .item-title@click': 'showItemMore',
			'.item-deal .no-more@click': 'noMore',
			'.item-deal .can-next@click': 'showFlag',
			'.showhide@click': 'foldBox',
			'.home@click': 'showIndex',
			'.content-tabs td@click': 'changeMsgTabs',
			'.content-tabs@change.tabs':'changeTabs',//自定义事件
			'.text-ellipsis@mouseover':'showTips',
			'.text-ellipsis@mouseout':'hideTips'
		})
		return {
			init: function() {
				events.dispatch(this);
			},
			/**
			showNews: function() {
				$.when(Page.APIS.getNews()).done(function(data){
					Page.Store.dispatch(Page.Action.news(data.data));
					Page.Render.news();
					if(Page.push==1){
						push('left');
					}
				})
			},
			**/
			gotoNew: function() {
				if(typeof jump == 'function') {
					var industryId = $(this).data('id');
					jump('psbcias','3','{industryId:'+industryId+'}');
				}
			},
			showItemMore: function() {
				var $itme = $(this).parent('.content-item');
				var $more = $itme.find('.item-more');
				if($more.is(':visible')) {
					$more.hide('fast');
				}else {
					$more.show('fast');
				}		
			},
			noMore: function() {
				var r = confirm('确认后将不再展示');
				if(r == true) {
					var loanId = $(this).data('loanid');
					var rmdId = $(this).data('rmdid');
					var dealFlag = 0;//是否有续贷意愿
					var $item = $(this).parents('.content-item');
					var $flag = $(this).parents('.content-item').find('.flag-icon');
					if($flag.is(':visible')){
						dealFlag = 1;
					}
					if(!!loanId){
						$.when(Page.APIS.dealShowData(loanId,dealFlag,0)).done(function(data){
							$item.hide();
						})
					}else if(!!rmdId){
						$.when(Page.APIS.loanRemindAlteraction(rmdId,'notips')).done(function(data){
							$item.hide();
						})
					}
				}
			},
			showFlag: function() {
				var loanId = $(this).data('loanid');
				var rmdId = $(this).data('rmdid');
				var $flag = $(this).parents('.content-item').find('.flag-icon');
				$(this).addClass('disable');
				$(this).attr('disabled',true);
				if(!!loanId){
					$.when(Page.APIS.dealShowData(loanId,1,1)).done(function(data){
						$flag.show('fast');
					})
				}else if(!!rmdId){
					$.when(Page.APIS.loanRemindAlteraction(rmdId,'inspected')).done(function(data){
						$flag.show('fast');
					})
				}
			},
			foldBox: function() {
				if(Page.push==0){
					push('right');
				}else if(Page.push==1){
					push('left');
				}
			},
			showIndex: function() {
				if(Page.push==1){
					push('left');
				}
			},
			changeMsgTabs: function() {
				var tabIndex = $(this).data('tab-index');
				var state = Page.Store.getState();
				if(!$(this).hasClass('active')){
					if(tabIndex==2 && !state.tab3) {
						$.when(
							Page.APIS.getMsgs3(),
							Page.APIS.loanRemindStat()
						).done(function(data,sum){
							if(data[0].code == 1000 && sum[0].code == 1000){
								data[0].data.sum = sum[0].data;
								Page.Store.dispatch(Page.Action.tab3(data[0].data));
								Page.Render.init();
								//$('.content-tabs').trigger('change.tabs',2); 
								Page.HandleEvents.changeTabs('change.tabs',2);
							}
						})
					}else if(tabIndex==1 && !state.tab2) {
						$.when(
							Page.APIS.getMsgs2(),
							Page.APIS.getCloseDataSoonSum()
						).done(function(data,sum){
							if(data[0].code == 1000 && sum[0].code == 1000){
								data[0].data.sum = sum[0].data;//注意返回值是一个ajax对象，数据要用data[0]获取，否则报错
								Page.Store.dispatch(Page.Action.tab2(data[0].data));
								Page.Render.init();
								Page.HandleEvents.changeTabs('change.tabs',1);
							}
						})
					}
					else if(tabIndex==3 && !state.tab4) {
						$.when(Page.APIS.bulletinInfo()).done(function(data){
							if(data.code == 1000){
								Page.Store.dispatch(Page.Action.tab4(data.data));
								Page.Render.init();
								Page.HandleEvents.changeTabs('change.tabs',3);
							}
						})
					}
				}
				Page.HandleEvents.changeTabs('change.tabs',tabIndex);
			},
			changeTabs: function(e,index) {
				var tabIndex = index;
				$('.content-tabs td[data-tab-index='+index+']').addClass('active').siblings('.active').removeClass('active');
				$('ul.content[data-tab-index='+index+']').addClass('active').siblings('.active').removeClass('active');
			},
			showTips:function(e){
				var $tips = $(this).next('.text-tooltip');
				$tips.show();
			},
			hideTips:function(e){
				var $tips = $(this).next('.text-tooltip');
				$tips.hide();
			}
		}
	}());

	Page.Action = (function() {
		return {
			index: function(){
				var tabs=['已经结清','即将结清','贷后助手','业务通报'];
				return {
					type: 'tabs',
					payload : tabs
				}
			},
			tab1: function(record){
				return {
					type: 'tab1',
					payload : {
						content:record
					}
				}
			},
			tab2: function(record){
				return {
					type: 'tab2',
					payload : {
						content:record
					}
				}
			},//即将结清tab页
			tab3: function(record){
				return {
					type: 'tab3',
					payload : {
						content:record
					}
				}
			},//贷后助手tab页
			tab4:function(record){
				return {
					type: 'tab4',
					payload : {
						content:record
					}
				}
			},//业务通报tab页
			news: function(record) {
				
				for(var i=0;i<record.length;i++){
					//var content = '<div>' + record[i].content +'</div>';
					record[i].content = record[i].content.replace(/<[^>]+>/g,'').replace(/\s+/g,'').substring(0,100)
					//console.log(record[i].content);
				}
				
				return {
					type:'news',
					payload:record
				}
			},
			detail: function(record) {
				return {
					type:'detail',
					payload:record
				}
			}
		}
	}());

	//Page.init();

	module.exports=Page;//pack-lib打包类库使用
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(6)))

/***/ },
/* 34 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(30);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (tab1, tab2, tab3, tab4, tabs, undefined) {
	buf.push("<div class=\"msg-content\"><div class=\"serach-chip\">个贷助手</div><table class=\"content-tabs\"><tr>");
	// iterate tabs
	;(function(){
	  var $$obj = tabs;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var item = $$obj[index];

	if(index==0)
	{
	buf.push("<td" + (jade.attr("data-tab-index", '' + (index) + '', true, true)) + " class=\"active\">" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</td>");
	}
	else
	{
	buf.push("<td" + (jade.attr("data-tab-index", '' + (index) + '', true, true)) + ">" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</td>");
	}
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var item = $$obj[index];

	if(index==0)
	{
	buf.push("<td" + (jade.attr("data-tab-index", '' + (index) + '', true, true)) + " class=\"active\">" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</td>");
	}
	else
	{
	buf.push("<td" + (jade.attr("data-tab-index", '' + (index) + '', true, true)) + ">" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</td>");
	}
	    }

	  }
	}).call(this);

	buf.push("</tr></table><ul data-tab-index='0' class=\"content\">");
	if(tab1)
	{
	if(tab1.content.sum)
	{
	buf.push("<div class=\"content-tips\">已经结清<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab1.content.sum.COUNTS) ? "" : jade_interp)) + "</span>笔，共<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab1.content.sum.AMOUNTALL/10000) ? "" : jade_interp)) + "</span>万元</div>");
	}
	if(tab1.content.length > 0)
	{
	// iterate tab1.content
	;(function(){
	  var $$obj = tab1.content;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var value = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = (index+1)+'.') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.CUS_NAME) ? "" : jade_interp)) + "</span><span class=\"end-day\">已经结清<span class=\"day-num\">" + (jade.escape(null == (jade_interp = value.DAYS) ? "" : jade_interp)) + "</span>天</span>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon show\">&#xe63d;</i>");
	}
	}else{
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon\">&#xe63d;</i>");
	}
	}
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(37), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " disabled=\"disabled\" class=\"can-next disable\">有续贷意愿</button>");
	}
	}else{
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"can-next\">有续贷意愿</button>");
	}
	}
	buf.push("</div></li>");
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var value = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = (index+1)+'.') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.CUS_NAME) ? "" : jade_interp)) + "</span><span class=\"end-day\">已经结清<span class=\"day-num\">" + (jade.escape(null == (jade_interp = value.DAYS) ? "" : jade_interp)) + "</span>天</span>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon show\">&#xe63d;</i>");
	}
	}else{
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon\">&#xe63d;</i>");
	}
	}
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(37), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " disabled=\"disabled\" class=\"can-next disable\">有续贷意愿</button>");
	}
	}else{
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"can-next\">有续贷意愿</button>");
	}
	}
	buf.push("</div></li>");
	    }

	  }
	}).call(this);

	}
	else
	{
	buf.push("<p class=\"none-data\">暂无数据。\t</p>");
	}
	}
	buf.push("</ul><ul data-tab-index='1' class=\"content\">");
	if(tab2){
	{
	if(tab2.content.sum)
	{
	buf.push("<div class=\"content-tips\">即将结清<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab2.content.sum.COUNTS) ? "" : jade_interp)) + "</span>笔，共<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab2.content.sum.AMOUNTALL/10000) ? "" : jade_interp)) + "</span>万元</div>");
	}
	if(tab2.content.length > 0)
	{
	// iterate tab2.content
	;(function(){
	  var $$obj = tab2.content;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var value = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = (index+1)+'.') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.CUS_NAME) ? "" : jade_interp)) + "</span><span class=\"end-day\">距结清还有<span class=\"day-num\">" + (jade.escape(null == (jade_interp = value.DAYS) ? "" : jade_interp)) + "</span>天</span>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon show\">&#xe63d;</i>");
	}
	}else{
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon\">&#xe63d;</i>");
	}
	}
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(37), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " disabled=\"disabled\" class=\"can-next disable\">有续贷意愿</button>");
	}
	}else{
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"can-next\">有续贷意愿</button>");
	}
	}
	buf.push("</div></li>");
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var value = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = (index+1)+'.') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.CUS_NAME) ? "" : jade_interp)) + "</span><span class=\"end-day\">距结清还有<span class=\"day-num\">" + (jade.escape(null == (jade_interp = value.DAYS) ? "" : jade_interp)) + "</span>天</span>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon show\">&#xe63d;</i>");
	}
	}else{
	{
	buf.push("<i title=\"有续贷意愿\" class=\"iconfont flag-icon\">&#xe63d;</i>");
	}
	}
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = value.APP_OP_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.MOBILE_PHONE) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(37), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.INDUSTRY_NAME) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.DUEBILL_AMOUNT/10000) ? "" : jade_interp)) + "万</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"no-more\">不再显示</button>");
	if(value.IS_LOANING=='1'){
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " disabled=\"disabled\" class=\"can-next disable\">有续贷意愿</button>");
	}
	}else{
	{
	buf.push("<button" + (jade.attr("data-loanid", '' + (value.LOAN_ID) + '', true, true)) + " class=\"can-next\">有续贷意愿</button>");
	}
	}
	buf.push("</div></li>");
	    }

	  }
	}).call(this);

	}
	else
	{
	buf.push("<p class=\"none-data\">暂无数据。</p>");
	}
	}
	}
	buf.push("</ul><ul data-tab-index='2' class=\"content\">");
	if(tab3){
	{
	if(tab3.content.sum)
	{
	buf.push("<div class=\"content-tips\">总共检查<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab3.content.sum.CUSCOUNT) ? "" : jade_interp)) + "</span>人，贷后检查总额<span class=\"red-num\">" + (jade.escape(null == (jade_interp = tab3.content.sum.AMOUNTSUM/10000) ? "" : jade_interp)) + "</span>万元</div>");
	}
	// iterate tab3.content
	;(function(){
	  var $$obj = tab3.content;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var value = $$obj[index];

	if(value.checkFlag!='2'){
	{
	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = (index+1)+'.') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.cusName) ? "" : jade_interp)) + "</span><span class=\"end-date\">" + (jade.escape((jade_interp = value.dueBillBeginDate) == null ? '' : jade_interp)) + "~" + (jade.escape((jade_interp = value.dueBillEndDate) == null ? '' : jade_interp)) + "</span>");
	if(value.checkFlag=='1'){
	{
	buf.push("<i title=\"已调查\" class=\"iconfont flag-icon show\">&#xe63d;</i>");
	}
	}else{
	{
	buf.push("<i title=\"已调查\" class=\"iconfont flag-icon\">&#xe63d;</i>");
	}
	}
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td>");
	if(value.remindType==1){
	{
	buf.push("<span>贷后首期检查</span>");
	}
	}else if(value.remindType==2){
	{
	buf.push("<span>贷后常规检查</span>");
	}
	}else{
	{
	buf.push("<span>贷后特别检查</span>");
	}
	}
	buf.push("<span>" + (jade.escape(null == (jade_interp = value.dueBillAmount/10000) ? "" : jade_interp)) + "万</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("data-lng", '' + (value.busLng) + '', true, true)) + (jade.attr("data-lat", '' + (value.busLat) + '', true, true)) + (jade.attr("src", __webpack_require__(37), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.appOpName) ? "" : jade_interp)) + "</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " class=\"no-more\">不再显示</button>");
	if(value.checkFlag=='1'){
	{
	buf.push("<button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " disabled=\"disabled\" class=\"can-next disable\">已调查</button>");
	}
	}else{
	{
	buf.push("<button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " class=\"can-next\">已调查</button>");
	}
	}
	buf.push("</div></li>");
	}
	}
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var value = $$obj[index];

	if(value.checkFlag!='2'){
	{
	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = (index+1)+'.') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = value.cusName) ? "" : jade_interp)) + "</span><span class=\"end-date\">" + (jade.escape((jade_interp = value.dueBillBeginDate) == null ? '' : jade_interp)) + "~" + (jade.escape((jade_interp = value.dueBillEndDate) == null ? '' : jade_interp)) + "</span>");
	if(value.checkFlag=='1'){
	{
	buf.push("<i title=\"已调查\" class=\"iconfont flag-icon show\">&#xe63d;</i>");
	}
	}else{
	{
	buf.push("<i title=\"已调查\" class=\"iconfont flag-icon\">&#xe63d;</i>");
	}
	}
	buf.push("</div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td>");
	if(value.remindType==1){
	{
	buf.push("<span>贷后首期检查</span>");
	}
	}else if(value.remindType==2){
	{
	buf.push("<span>贷后常规检查</span>");
	}
	}else{
	{
	buf.push("<span>贷后特别检查</span>");
	}
	}
	buf.push("<span>" + (jade.escape(null == (jade_interp = value.dueBillAmount/10000) ? "" : jade_interp)) + "万</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("data-lng", '' + (value.busLng) + '', true, true)) + (jade.attr("data-lat", '' + (value.busLat) + '', true, true)) + (jade.attr("src", __webpack_require__(37), true, true)) + " class=\"map-icon\"></td></tr><tr><td><span>" + (jade.escape(null == (jade_interp = value.appOpName) ? "" : jade_interp)) + "</span></td></tr></table></div><div class=\"item-deal\"><button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " class=\"no-more\">不再显示</button>");
	if(value.checkFlag=='1'){
	{
	buf.push("<button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " disabled=\"disabled\" class=\"can-next disable\">已调查</button>");
	}
	}else{
	{
	buf.push("<button" + (jade.attr("data-rmdid", '' + (value.rmdId) + '', true, true)) + " class=\"can-next\">已调查</button>");
	}
	}
	buf.push("</div></li>");
	}
	}
	    }

	  }
	}).call(this);

	}
	}
	buf.push("</ul><ul data-tab-index='3' class=\"content\">");
	if(tab4 && tab4.content.length > 0)
	{
	// iterate tab4.content
	;(function(){
	  var $$obj = tab4.content;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var item = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = index+1) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = item.customerName) ? "" : jade_interp)) + "</span><span class=\"end-day\">" + (jade.escape(null == (jade_interp = item.informSurvey) ? "" : jade_interp)) + "</span></div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = item.actionStatus) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = item.mobilePhone) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(37), true, true)) + (jade.attr("title", '' + (item.registeredAddress) + '', true, true)) + " class=\"map-icon\"></td></tr><tr><td colspan=\"2\"><span>" + (jade.escape(null == (jade_interp = item.workCorpType) ? "" : jade_interp)) + "</span></td></tr><tr><td colspan=\"2\"><p class=\"text-ellipsis\"><b>通报详情：</b><span>" + (jade.escape(null == (jade_interp = item.researchDetail) ? "" : jade_interp)) + "</span></p><p class=\"text-tooltip\"><span>" + (jade.escape(null == (jade_interp = item.researchDetail) ? "" : jade_interp)) + "</span></p></td></tr></table></div></li>");
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var item = $$obj[index];

	buf.push("<li class=\"content-item\"><div class=\"item-title\"><span class=\"item-no\">" + (jade.escape(null == (jade_interp = index+1) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = item.customerName) ? "" : jade_interp)) + "</span><span class=\"end-day\">" + (jade.escape(null == (jade_interp = item.informSurvey) ? "" : jade_interp)) + "</span></div><div class=\"item-more\"><table class=\"item-more-table\"><tr><td><span>" + (jade.escape(null == (jade_interp = item.actionStatus) ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = item.mobilePhone) ? "" : jade_interp)) + "</span></td><td rowspan=\"2\" class=\"address-map\"><img" + (jade.attr("src", __webpack_require__(37), true, true)) + (jade.attr("title", '' + (item.registeredAddress) + '', true, true)) + " class=\"map-icon\"></td></tr><tr><td colspan=\"2\"><span>" + (jade.escape(null == (jade_interp = item.workCorpType) ? "" : jade_interp)) + "</span></td></tr><tr><td colspan=\"2\"><p class=\"text-ellipsis\"><b>通报详情：</b><span>" + (jade.escape(null == (jade_interp = item.researchDetail) ? "" : jade_interp)) + "</span></p><p class=\"text-tooltip\"><span>" + (jade.escape(null == (jade_interp = item.researchDetail) ? "" : jade_interp)) + "</span></p></td></tr></table></div></li>");
	    }

	  }
	}).call(this);

	}
	else
	{
	buf.push("<p class=\"none-data\">暂无数据。</p>");
	}
	buf.push("</ul></div><div class=\"msg-tabs\"><table><tr><td class=\"home active\"> <i class=\"iconfont\">&#xe60f;</i><span>消息</span></td><td class=\"news\"> <i class=\"iconfont\">&#xe634;</i><span>新闻</span></td><td class=\"showhide\"> <i class=\"iconfont\">&#xe635;</i><span>收起</span></td></tr></table></div>");}.call(this,"tab1" in locals_for_with?locals_for_with.tab1:typeof tab1!=="undefined"?tab1:undefined,"tab2" in locals_for_with?locals_for_with.tab2:typeof tab2!=="undefined"?tab2:undefined,"tab3" in locals_for_with?locals_for_with.tab3:typeof tab3!=="undefined"?tab3:undefined,"tab4" in locals_for_with?locals_for_with.tab4:typeof tab4!=="undefined"?tab4:undefined,"tabs" in locals_for_with?locals_for_with.tabs:typeof tabs!=="undefined"?tabs:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/map-icon.png?a74aeb53";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(30);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (detail) {
	buf.push("<div class=\"theme-blue adPops-container\"><div class=\"adPops-title\"><div class=\"back-home\"><span>返回</span></div></div><div class=\"adPops-content\"><div class=\"content-chip\">" + (null == (jade_interp = detail.content) ? "" : jade_interp) + "</div></div></div>");}.call(this,"detail" in locals_for_with?locals_for_with.detail:typeof detail!=="undefined"?detail:undefined));;return buf.join("");
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(moment) {var jade = __webpack_require__(30);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (moment, news, undefined) {
	buf.push("<div class=\"theme-blue adPops-container\"><div class=\"adPops-title\"><div class=\"back-home\"><img" + (jade.attr("src", __webpack_require__(32), true, true)) + " class=\"yc-logo\">行业新闻<i class=\"iconfont close-icon\">&#xe639;</i></div></div><div class=\"adPops-content\"><div class=\"content-box\">");
	if(news){
	{
	// iterate news
	;(function(){
	  var $$obj = news;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var item = $$obj[index];

	buf.push("<div" + (jade.attr("data-id", '' + (item.industryId) + '', true, true)) + " class=\"news-card\"><div class=\"news-title\">" + (jade.escape(null == (jade_interp = item.newsTitle) ? "" : jade_interp)) + "</div><div class=\"news-summary\">" + (jade.escape(null == (jade_interp = item.content) ? "" : jade_interp)) + "···</div><div class=\"news-footer\"><span class=\"news-source\">" + (jade.escape(null == (jade_interp = item.siteName) ? "" : jade_interp)) + "</span><span class=\"news-time\">" + (jade.escape(null == (jade_interp = moment(item.timestamp, 'YYYYMMDDHHmmss').format('YYYY-MM-DD HH:mm:ss')) ? "" : jade_interp)) + "</span><div class=\"news-tags\"><span>" + (jade.escape(null == (jade_interp = item.industryName) ? "" : jade_interp)) + "</span></div></div></div>");
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var item = $$obj[index];

	buf.push("<div" + (jade.attr("data-id", '' + (item.industryId) + '', true, true)) + " class=\"news-card\"><div class=\"news-title\">" + (jade.escape(null == (jade_interp = item.newsTitle) ? "" : jade_interp)) + "</div><div class=\"news-summary\">" + (jade.escape(null == (jade_interp = item.content) ? "" : jade_interp)) + "···</div><div class=\"news-footer\"><span class=\"news-source\">" + (jade.escape(null == (jade_interp = item.siteName) ? "" : jade_interp)) + "</span><span class=\"news-time\">" + (jade.escape(null == (jade_interp = moment(item.timestamp, 'YYYYMMDDHHmmss').format('YYYY-MM-DD HH:mm:ss')) ? "" : jade_interp)) + "</span><div class=\"news-tags\"><span>" + (jade.escape(null == (jade_interp = item.industryName) ? "" : jade_interp)) + "</span></div></div></div>");
	    }

	  }
	}).call(this);

	}
	}
	buf.push("</div></div></div>");}.call(this,"moment" in locals_for_with?locals_for_with.moment:typeof moment!=="undefined"?moment:undefined,"news" in locals_for_with?locals_for_with.news:typeof news!=="undefined"?news:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ },
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, CVal) {'use strict';
	/**
	注意立即执行函数内方法外的变量非最新实时值，比例获取dom，如果dom是在Js内添加的，那么$(dom)永远为空，因此需要放在立即执行行数内的方法内
	**/
	//console.time('time');
	//console.profile();
	__webpack_require__(42);
	var Store = __webpack_require__(24);
	var Events = __webpack_require__(25);
	var Page = {
		isFirstLoad:true,
		init: function(options){
			//console.log(state.msgs);
			function firstRequest(callback){
				$.when(
					Page.APIS.getIndustryNormInfo(options)
				).done(function(data){
					callback(data);
				})
			}
			firstRequest(function(record){
				//console.log(record);
				if(record.code == 1000 && record.data){
					if(record.data.nonp_loan_lvl !='unknown' && record.data.nonp_loan_lvl < 3){
						var store = Page.Store;
						options.title = '行业：' + record.data.industry_name;
						store.dispatch(Page.Action.index(options));
						store.dispatch(Page.Action.industry(record.data));
						Page.Render.init(options);
					}else{
						Page.destroy();
					}
				}
			})
			
		},
		destroy: function() {
			Page.Store.getInitialState();//初始化store，否则多次Init是会导致留有旧数据
			Page.isFirstLoad = true;
			$('.__modal').remove();
		}
	}

	Page.APIS = (function(){
		var apiPath = typeof CVal == "undefined" ? 'http://21.32.95.248:8088/bhoserver' : CVal.path;
		var postData = {};
		if(typeof CVal != "undefined"){
			postData.userId = CVal.getUserId();
			postData.posId = CVal.getPostId();
			postData.orgId  = CVal.getOrgId();
		}
		var Apis = {
			industryNormInfo: apiPath + '/bhoApi/industryNormInfo'
		}
		return {
			getIndustryNormInfo: function(options) {
				postData.cityId = options.cityId;
				postData.industryId = options.industryId;
				return $.ajax({
					url: Apis.industryNormInfo,
					type: 'GET',
					dataType: 'jsonp',
					data: postData,
				 	jsonp: '_callback'
				})
			}
		}
	}());

	Page.UI = (function(){
		return {
			indexView: function() {
				return __webpack_require__(43);
			},
			industry: function() {
				return __webpack_require__(44);
			}
		}
	}());

	Page.Store = (function(){
		var store = new Store();
		return store;
	}());

	Page.Render = (function(){
		function index(options) {
			var $modal = $('<div class="__modal"></div>');
			var width = options.width || 450;
			$modal.width(width);
			var template = Page.UI.indexView();
			var html = template(Page.Store.getState());
			$modal.html(html);
			if(Page.isFirstLoad){
				$(document.body).append($modal);
				//console.log($modal.height());
				$modal.css({'margin-left':-$modal.width()/2});
				Page.isFirstLoad=false;
			}
			var industry = Page.UI.industry();
			//console.log(Page.Store.getState());
			var industryHtml = industry(Page.Store.getState());
			$('.__modal-body').html(industryHtml);
			Page.HandleEvents.init();
		}
		return {
			init: function(options) {
				index(options);
			}
		}
	}());

	Page.HandleEvents = (function(){
		var events = new Events({
			'.__modal-footer button@click': 'destroy',
			'.__modal-close@click': 'destroy',
			'.lvl-tips@mouseover': 'showTips',
			'.lvl-tips@mouseout': 'hideTips'
		}) 
		return {
			init: function() {
				events.dispatch(this);
			},
			destroy: function() {
				Page.destroy();
			},
			showTips: function(){
				$('.tips-info').show();
			},
			hideTips: function(){
				$('.tips-info').hide();
			}
		}
	}());

	Page.Action = (function() {
		return {
			index: function(record){
				var tabs=[],content=[];
				return {
					type: 'opts',
					payload: record
				}
			},
			industry: function(record) {
				return {
					type: 'record',
					payload: record
				}
			}
		}
	}());

	//console.timeEnd('time');
	//console.log(Page);

	module.exports = Page;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(1)))

/***/ },
/* 42 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(30);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (opts) {
	buf.push("<div class=\"__modal-header\">" + (jade.escape(null == (jade_interp = opts.title) ? "" : jade_interp)) + "<i class=\"iconfont __modal-close\">&#xe639;</i></div><div class=\"__modal-body\">" + (null == (jade_interp = opts.content) ? "" : jade_interp) + "</div><div class=\"__modal-footer\"><button class=\"btn btn-default\">关闭</button></div>");}.call(this,"opts" in locals_for_with?locals_for_with.opts:typeof opts!=="undefined"?opts:undefined));;return buf.join("");
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(30);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (Number, isNaN, parseInt, record) {
	var util = { 
	fixedEmpty: function(value,_default){
	if(value=='' || value==undefined || value==null||value == 'NULL'){
	return _default || '-';
	}else if(!isNaN(value)){
	value = parseInt(value) == value ? value : value.toFixed(2)
	}
	return value;
	},
	formatMoney: function(_money,_digit) {
	var tpMoney = '-';
	var digit = _digit || 2;
	if(undefined != _money){
	tpMoney = _money;			
	}
	tpMoney = new Number(tpMoney);
	if(isNaN(tpMoney)){
	return '-';
	}
	tpMoney = tpMoney.toFixed(digit);
	var re = /^(-?\d+)(\d{3})(\.?\d*)/;
	while(re.test(tpMoney)){
	tpMoney = tpMoney.replace(re,'$1,$2$3')	
	}
	return tpMoney;
	}
	}
	buf.push("<table class=\"industyr-info\"><tr><td colspan=\"2\"><b>市行名称：</b>" + (jade.escape(null == (jade_interp = util.fixedEmpty(record.city_name)) ? "" : jade_interp)) + "</td></tr><tr><td><b>贷款总笔数：</b>" + (jade.escape(null == (jade_interp = util.fixedEmpty(record.loan_cnt)) ? "" : jade_interp)) + "</td><td><b>贷款总金额：</b>" + (jade.escape((jade_interp = util.formatMoney(record.loan_amt/10000)) == null ? '' : jade_interp)) + " 万元</td></tr><tr><td><b>在途贷款笔数：</b>" + (jade.escape(null == (jade_interp = util.fixedEmpty(record.loan_cnt_curr)) ? "" : jade_interp)) + "</td><td><b>在途贷款金额：</b>" + (jade.escape((jade_interp = util.formatMoney(record.loan_amt_curr/10000)) == null ? '' : jade_interp)) + " 万元</td></tr><tr><td><b>在途贷款余额：</b>" + (jade.escape((jade_interp = util.formatMoney(record.loan_bal_curr/10000)) == null ? '' : jade_interp)) + " 万元</td><td><b>不良贷款笔数：</b>" + (jade.escape(null == (jade_interp = util.fixedEmpty(record.nonp_loan_cnt)) ? "" : jade_interp)) + "</td></tr><tr><td><b>不良贷款余额：</b>" + (jade.escape((jade_interp = util.formatMoney(record.nonp_loan_bal/10000)) == null ? '' : jade_interp)) + " 万元</td><td><b>不良率：</b>" + (jade.escape((jade_interp = util.formatMoney(record.nonp_loan_bal_rate*100)) == null ? '' : jade_interp)) + " %</td></tr><tr><td colspan=\"2\" class=\"nonp-lvl\"><b>优良等级：</b>");
	if(record.nonp_loan_lvl == 'unknown'){
	{
	buf.push("<" + (util.fixedEmpty(record.nonp_loan_lvl)) + "></" + (util.fixedEmpty(record.nonp_loan_lvl)) + ">");
	}
	}else{
	{
	var star = record.nonp_loan_lvl;
	var unstar = 5-star;
	for(var i = 0;i< star;i++){
	{
	buf.push("<i class=\"iconfont __star\">&#xe63c;</i>");
	}
	}
	for(var i = 0;i< unstar;i++){
	{
	buf.push("<i class=\"iconfont __unstar\">&#xe63c;</i>");
	}
	}
	}
	}
	buf.push("<div class=\"tips-holder\"><i class=\"iconfont lvl-tips\">&#xe621;</i><div class=\"tips-info\"><li>5颗星对应不良率区间[0,0.5%]</li><li>4颗星对应不良率区间(0.5%,2%]</li><li>3颗星对应不良率区间(2%,3%]</li><li>2颗星对应不良率区间(3%,5%]</li><li>1颗星对应不良率区间(5%,1]</li><li>'unknown'代表数据异常，无法判断星级</li></div></div></td></tr></table>");}.call(this,"Number" in locals_for_with?locals_for_with.Number:typeof Number!=="undefined"?Number:undefined,"isNaN" in locals_for_with?locals_for_with.isNaN:typeof isNaN!=="undefined"?isNaN:undefined,"parseInt" in locals_for_with?locals_for_with.parseInt:typeof parseInt!=="undefined"?parseInt:undefined,"record" in locals_for_with?locals_for_with.record:typeof record!=="undefined"?record:undefined));;return buf.join("");
	}

/***/ }
/******/ ])
});
;