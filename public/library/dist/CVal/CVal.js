(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CVal", [], factory);
	else if(typeof exports === 'object')
		exports["CVal"] = factory();
	else
		root["CVal"] = factory();
})(this, function() {
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

/******/ 			script.src = __webpack_require__.p + "" + ({"1":"CVal"}[chunkId]||chunkId) + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://21.32.95.248:8088/bhoserver/resources/static/js/bho/CVal/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var windowUrl = window.location.href;
	//CVal.path = 'http://21.32.95.196:8080/bhoserver'; // 本地测试
	//CVal.path = 'http://21.32.95.248:8088/bhoserver'; // 测试环境
	//CVal.path = 'http://21.32.3.70:80/bhoserver'; // 生产环境
	//if(windowUrl.indexOf("21.6.11.6/easyloan") != -1){
		__webpack_require__.e/* nsure */(1, function(){
			//加载依赖
			__webpack_require__(2);
			__webpack_require__(4);
			//require('./bho/runAppForIE.js');
			//加载配置
			__webpack_require__(5);
			//加载客户和行业文件
			__webpack_require__(6);
			//加载信贷员检查情况通报文件
			__webpack_require__(7);
			//加载信贷员权限文件
			__webpack_require__(8);
			//加密签名
			__webpack_require__(9);
			//加载自动录入调查报告模板文件(未启用)
			//Base.require(CVal.path + './bho/autoTemplate.js'));
			//加载跳转
			__webpack_require__(12);
			__webpack_require__(13);
			//加载权限文件
			__webpack_require__(1);
		  	Base.require(CVal.path + '/resources/static/js/bho/haloPlugins/haloPlugins.css?_=' + (new Date()).getTime());
	  	  	Base.require(CVal.path + '/resources/static/js/bho/haloPlugins/haloPlugins.js?_=' + (new Date()).getTime(),function(){	
				//执行权限读取
				CVal.getPluginSwitch ();
	  	  	});
		});
	//}
	module.exports = CVal;



/***/ }
/******/ ])
});
;