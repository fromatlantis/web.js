webpackJsonpCVal([1],[
/* 0 */,
/* 1 */
/***/ function(module, exports) {

	/**
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
	    //只给信贷员
	    if(CVal.getPostName().indexOf("信贷员") == "-1" && CVal.getPostName().indexOf("信贷主管") == "-1" ){
	        isInit = false;
	    }
	    
	    if (isInit) {
	        if(CVal.getPostName().indexOf("信贷员") != "-1"){
	            haloPlugins.msgPlus.init();
	        }else if(CVal.getPostName().indexOf("信贷主管") != "-1"){
	            haloPlugins.msgPlus.init({
	                position:'ic'
	            });
	        }
	    }
	};



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*!\r\n * artDialog v6.0.0 \r\n * Date: 2013-12-13\r\n * (c) 2009-2013 TangBin, http://www.planeArt.cn\r\n *\r\n * This is licensed under the GNU LGPL, version 2.1 or later.\r\n * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html\r\n */\r\n.ui-dialog {\r\n    *zoom:1;\r\n    _float: left;\r\n    position: relative;\r\n    background-color: #EEE;\r\n    border: 0px solid #999;\r\n/*    border-radius: 6px;*/\r\n    outline: 0;\r\n    background-clip: padding-box;\r\n    font-family: Helvetica, arial, sans-serif;\r\n    font-size: 14px;\r\n    line-height: 1.428571429;\r\n    color: #333;\r\n    opacity: 0;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    -webkit-transition: -webkit-transform .15s ease-in-out, opacity .15s ease-in-out;\r\n    transition: transform .15s ease-in-out, opacity .15s ease-in-out;\r\n}\r\n.ui-popup-show .ui-dialog {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n}\r\n.ui-popup-focus .ui-dialog {\r\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\r\n}\r\n.ui-popup-modal .ui-dialog {\r\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 0 0 256px rgba(255, 255, 255, .3);\r\n}\r\n.ui-dialog-grid {\r\n    width: auto;\r\n    margin: 0;\r\n    border: 0 none;\r\n    border-collapse:collapse;\r\n    border-spacing: 0;\r\n    background: transparent;\r\n}\r\n.ui-dialog-header,\r\n.ui-dialog-body,\r\n.ui-dialog-footer {\r\n    padding: 0;\r\n    border: 0 none;\r\n    text-align: left;\r\n    background: transparent;\r\n}\r\n.ui-dialog-header {\r\n    white-space: nowrap;\r\n    border-bottom: 2px solid #5d9cec;\r\n/*    background: #0ccbee;*/\r\n    color: #5d9cec;\r\n}\r\n.ui-dialog-close {\r\n    position: relative;\r\n    _position: absolute;\r\n    float: right;\r\n    top: 13px;\r\n    right: 13px;\r\n    _height: 26px;\r\n    padding: 0 4px;\r\n    font-size: 21px;\r\n    font-weight: bold;\r\n    line-height: 1;\r\n    color: #000;\r\n    text-shadow: 0 1px 0 #FFF;\r\n    opacity: .2;\r\n    filter: alpha(opacity=20);\r\n    cursor: pointer;\r\n    background: transparent;\r\n    _background: #FFF;\r\n    border: 0;\r\n    -webkit-appearance: none;\r\n}\r\n.ui-dialog-close:hover,\r\n.ui-dialog-close:focus {\r\n    color: #000000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    outline: 0;\r\n    opacity: 0.5;\r\n    filter: alpha(opacity=50);\r\n}\r\n.ui-dialog-title {\r\n    margin: 0;\r\n    line-height: 1.428571429;\r\n    min-height: 16.428571429px;\r\n    padding: 15px;\r\n    overflow:hidden; \r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    font-weight: bold;\r\n    cursor: default;\r\n}\r\n.ui-dialog-body {\r\n    padding: 20px 25px;\r\n    text-align: center;\r\n}\r\n.ui-dialog-content {\r\n    display: inline-block;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    *zoom: 1;\r\n    *display: inline;\r\n    text-align: left;\r\n}\r\n.ui-dialog-footer {\r\n    padding: 0 20px 20px 20px;\r\n}\r\n.ui-dialog-statusbar {\r\n    float: left;\r\n    margin-right: 20px;\r\n    padding: 6px 0;\r\n    line-height: 1.428571429;\r\n    font-size: 14px;\r\n    color: #888;\r\n    white-space: nowrap;\r\n}\r\n.ui-dialog-statusbar label:hover {\r\n    color: #333;\r\n}\r\n.ui-dialog-statusbar input,\r\n.ui-dialog-statusbar .label {\r\n    vertical-align: middle;\r\n}\r\n.ui-dialog-button {\r\n    float: right;\r\n    white-space: nowrap;\r\n}\r\n.ui-dialog-footer button+button {\r\n    margin-bottom: 0;\r\n    margin-left: 5px;\r\n}\r\n.ui-dialog-footer button {\r\n    width:auto;\r\n    overflow:visible;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    _margin-left: 5px;\r\n    margin-bottom: 0;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    line-height: 1.428571429;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n    border-radius: 4px;\r\n    -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n       -o-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.ui-dialog-footer button:focus {\r\n  outline: thin dotted #333;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\n\r\n.ui-dialog-footer button:hover,\r\n.ui-dialog-footer button:focus {\r\n  color: #333333;\r\n  text-decoration: none;\r\n}\r\n\r\n.ui-dialog-footer button:active {\r\n  background-image: none;\r\n  outline: 0;\r\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\r\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\r\n}\r\n.ui-dialog-footer button[disabled] {\r\n  pointer-events: none;\r\n  cursor: not-allowed;\r\n  opacity: 0.65;\r\n  filter: alpha(opacity=65);\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n\r\n.ui-dialog-footer button {\r\n  color: #333333;\r\n  background-color: #ffffff;\r\n  border-color: #cccccc;\r\n}\r\n\r\n.ui-dialog-footer button:hover,\r\n.ui-dialog-footer button:focus,\r\n.ui-dialog-footer button:active {\r\n  color: #333333;\r\n  background-color: #ebebeb;\r\n  border-color: #adadad;\r\n}\r\n\r\n.ui-dialog-footer button:active{\r\n  background-image: none;\r\n}\r\n\r\n.ui-dialog-footer button[disabled],\r\n.ui-dialog-footer button[disabled]:hover,\r\n.ui-dialog-footer button[disabled]:focus,\r\n.ui-dialog-footer button[disabled]:active {\r\n  background-color: #ffffff;\r\n  border-color: #cccccc;\r\n}\r\n\r\n.ui-dialog-footer button.ui-dialog-autofocus {\r\n  color: #ffffff;\r\n  background-color: #428bca;\r\n  border-color: #357ebd;\r\n}\r\n\r\n.ui-dialog-footer button.ui-dialog-autofocus:hover,\r\n.ui-dialog-footer button.ui-dialog-autofocus:focus,\r\n.ui-dialog-footer button.ui-dialog-autofocus:active {\r\n  color: #ffffff;\r\n  background-color: #3276b1;\r\n  border-color: #285e8e;\r\n}\r\n\r\n.ui-dialog-footer button.ui-dialog-autofocus:active {\r\n  background-image: none;\r\n}\r\n\r\n.ui-dialog-source {\r\n\tpadding: 0 20px 10px 20px;\r\n}\r\n.ui-dialog-source div {\r\n\ttext-align: right;\r\n\tline-height: 1.2em;\r\n\tfont-size: 10px;\r\n\tcolor: #555;\r\n}\r\n\r\n.ui-popup-top-left .ui-dialog,\r\n.ui-popup-top .ui-dialog,\r\n.ui-popup-top-right .ui-dialog {\r\n    top: -8px;\r\n}\r\n.ui-popup-bottom-left .ui-dialog,\r\n.ui-popup-bottom .ui-dialog,\r\n.ui-popup-bottom-right .ui-dialog {\r\n    top: 8px;\r\n}\r\n.ui-popup-left-top .ui-dialog,\r\n.ui-popup-left .ui-dialog,\r\n.ui-popup-left-bottom .ui-dialog {\r\n    left: -8px;\r\n}\r\n.ui-popup-right-top .ui-dialog,\r\n.ui-popup-right .ui-dialog,\r\n.ui-popup-right-bottom .ui-dialog {\r\n    left: 8px;\r\n}\r\n.ui-dialog-arrow-a,\r\n.ui-dialog-arrow-b {\r\n    position: absolute;\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    overflow:hidden;\r\n    line-height:0;\r\n    font-size: 0;\r\n    _color:#FF3FFF;\r\n    _filter:chroma(color=#FF3FFF);\r\n}\r\n.ui-popup-top-left .ui-dialog-arrow-a,\r\n.ui-popup-top .ui-dialog-arrow-a,\r\n.ui-popup-top-right .ui-dialog-arrow-a {\r\n    bottom: -8px;\r\n    border-top:8px solid #7C7C7C;\r\n    border-bottom:0 none;\r\n    border-left:8px solid transparent;\r\n    border-right:8px solid transparent;\r\n}\r\n.ui-popup-top-left .ui-dialog-arrow-b,\r\n.ui-popup-top .ui-dialog-arrow-b,\r\n.ui-popup-top-right .ui-dialog-arrow-b {\r\n    bottom: -7px;\r\n    border-top:8px solid #fff;\r\n    border-bottom:0 none;\r\n    border-left:8px solid transparent;\r\n    border-right:8px solid transparent;\r\n}\r\n.ui-popup-top-left .ui-dialog-arrow-a,\r\n.ui-popup-top-left .ui-dialog-arrow-b  {\r\n    left: 15px;\r\n}\r\n.ui-popup-top .ui-dialog-arrow-a,\r\n.ui-popup-top .ui-dialog-arrow-b  {\r\n    left: 50%;\r\n    margin-left: -8px;\r\n}\r\n.ui-popup-top-right .ui-dialog-arrow-a,\r\n.ui-popup-top-right .ui-dialog-arrow-b {\r\n    right: 15px;\r\n}\r\n.ui-popup-bottom-left .ui-dialog-arrow-a,\r\n.ui-popup-bottom .ui-dialog-arrow-a,\r\n.ui-popup-bottom-right .ui-dialog-arrow-a {\r\n    top: -8px;\r\n    border-bottom:8px solid #7C7C7C;\r\n    border-top:0 none;\r\n    border-left:8px solid transparent;\r\n    border-right:8px solid transparent;\r\n}\r\n.ui-popup-bottom-left .ui-dialog-arrow-b,\r\n.ui-popup-bottom .ui-dialog-arrow-b,\r\n.ui-popup-bottom-right .ui-dialog-arrow-b {\r\n    top: -7px;\r\n    border-bottom:8px solid #fff;\r\n    border-top:0 none;\r\n    border-left:8px solid transparent;\r\n    border-right:8px solid transparent;\r\n}\r\n.ui-popup-bottom-left .ui-dialog-arrow-a,\r\n.ui-popup-bottom-left .ui-dialog-arrow-b {\r\n    left: 15px;\r\n}\r\n.ui-popup-bottom .ui-dialog-arrow-a,\r\n.ui-popup-bottom .ui-dialog-arrow-b {\r\n    margin-left: -8px;\r\n    left: 50%;\r\n}\r\n.ui-popup-bottom-right .ui-dialog-arrow-a,\r\n.ui-popup-bottom-right .ui-dialog-arrow-b {\r\n    right: 15px;\r\n}\r\n.ui-popup-left-top .ui-dialog-arrow-a,\r\n.ui-popup-left .ui-dialog-arrow-a,\r\n.ui-popup-left-bottom .ui-dialog-arrow-a {\r\n    right: -8px;\r\n    border-left:8px solid #7C7C7C;\r\n    border-right:0 none;\r\n    border-top:8px solid transparent;\r\n    border-bottom:8px solid transparent;\r\n}\r\n.ui-popup-left-top .ui-dialog-arrow-b,\r\n.ui-popup-left .ui-dialog-arrow-b,\r\n.ui-popup-left-bottom .ui-dialog-arrow-b {\r\n    right: -7px;\r\n    border-left:8px solid #fff;\r\n    border-right:0 none;\r\n    border-top:8px solid transparent;\r\n    border-bottom:8px solid transparent;\r\n}\r\n.ui-popup-left-top .ui-dialog-arrow-a,\r\n.ui-popup-left-top .ui-dialog-arrow-b {\r\n    top: 15px;\r\n}\r\n.ui-popup-left .ui-dialog-arrow-a,\r\n.ui-popup-left .ui-dialog-arrow-b {\r\n    margin-top: -8px;\r\n    top: 50%;\r\n}\r\n.ui-popup-left-bottom .ui-dialog-arrow-a,\r\n.ui-popup-left-bottom .ui-dialog-arrow-b {\r\n    bottom: 15px;\r\n}\r\n.ui-popup-right-top .ui-dialog-arrow-a,\r\n.ui-popup-right .ui-dialog-arrow-a,\r\n.ui-popup-right-bottom .ui-dialog-arrow-a {\r\n    left: -8px;\r\n    border-right:8px solid #7C7C7C;\r\n    border-left:0 none;\r\n    border-top:8px solid transparent;\r\n    border-bottom:8px solid transparent;\r\n}\r\n.ui-popup-right-top .ui-dialog-arrow-b,\r\n.ui-popup-right .ui-dialog-arrow-b,\r\n.ui-popup-right-bottom .ui-dialog-arrow-b {\r\n    left: -7px;\r\n    border-right:8px solid #fff;\r\n    border-left:0 none;\r\n    border-top:8px solid transparent;\r\n    border-bottom:8px solid transparent;\r\n}\r\n.ui-popup-right-top .ui-dialog-arrow-a,\r\n.ui-popup-right-top .ui-dialog-arrow-b {\r\n    top: 15px;\r\n}\r\n.ui-popup-right .ui-dialog-arrow-a,\r\n.ui-popup-right .ui-dialog-arrow-b {\r\n    margin-top: -8px;\r\n    top: 50%;\r\n}\r\n.ui-popup-right-bottom .ui-dialog-arrow-a,\r\n.ui-popup-right-bottom .ui-dialog-arrow-b {\r\n    bottom: 15px;\r\n}\r\n\r\n\r\n@-webkit-keyframes ui-dialog-loading {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n@keyframes ui-dialog-loading {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n.ui-dialog-loading {\r\n    vertical-align: middle;\r\n    position: relative;\r\n    display: block;\r\n    *zoom: 1;\r\n    *display: inline;\r\n    overflow: hidden;\r\n    width: 32px;\r\n    height: 32px;\r\n    top: 50%;\r\n    margin: -16px auto 0 auto;\r\n    font-size: 0;\r\n    text-indent: -999em;\r\n    color: #666;\r\n}\r\n.ui-dialog-loading {\r\n    width: 100%\\9;\r\n    text-indent: 0\\9;\r\n    line-height: 32px\\9;\r\n    text-align: center\\9;\r\n    font-size: 12px\\9;\r\n}\r\n\r\n.ui-dialog-loading::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 3px;\r\n    height: 3px;\r\n    margin: 14.5px 0 0 14.5px;\r\n    border-radius: 100%;\r\n    box-shadow: 0 -10px 0 1px #ccc, 10px 0px #ccc, 0 10px #ccc, -10px 0 #ccc, -7px -7px 0 0.5px #ccc, 7px -7px 0 1.5px #ccc, 7px 7px #ccc, -7px 7px #ccc;\r\n    -webkit-transform: rotate(360deg);\r\n    -webkit-animation: ui-dialog-loading 1.5s infinite linear;\r\n    transform: rotate(360deg);\r\n    animation: ui-dialog-loading 1.5s infinite linear;\r\n    display: none\\9;\r\n}\r\n\r\n.ui-dialog-content table {\r\n    width: 400px;\r\n    border: 0px solid rgb(221, 221, 221);\r\n    border-collapse: collapse;\r\n}\r\n\r\n.ui-dialog-content table tr,.ui-dialog-content table td {\r\n    border: 0px solid rgb(221, 221, 221);\r\n    border-collapse:collapse;\r\n}\r\n\r\n.ui-dialog-content table td {\r\n    padding: 10px 0 10px 0;\r\n}\r\n.ui-dialog-content table td.left {\r\n    padding: 0;\r\n    \r\n}\r\n\r\ninput.sysButton {\r\n\tcolor: #fff;\r\n\tbackground-color: #428bca;\r\n\tborder-color: #357ebd;\r\n\t/* display: inline-block; */\r\n\tpadding: 3px 7px 0px;\r\n\tfloat: right;\r\n\tmargin: 2px 26px;\r\n\tmargin-bottom: 0;\r\n\ttext-align: center;\r\n\twhite-space: nowrap;\r\n\tvertical-align: middle;\r\n\t-ms-touch-action: manipulation;\r\n\ttouch-action: manipulation;\r\n\tcursor: pointer;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tbackground-image: none;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius: 2px;\r\n}\r\n\r\n/* .floatTab{\r\n    z-index: 1000;\r\n    position: fixed;\r\n    top: 52px;\r\n    right: 0;\r\n}\r\n.floatTabBtn {\r\n    font-size: 30px;\r\n    cursor: pointer;\r\n}\r\n.floatTabBtn:hover {\r\n\tmargin-right:4px;\r\n\ttransition:margin-right 0.3s ease;\r\n\t-webkit-transition:margin-right 0.3s ease;\r\n\t-moz-transition:margin-right 0.3s ease;\r\n}\r\n.floatTabContext{\r\n\tdisplay:none;\r\n\t\r\n} */", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*! artDialog v6.0.5 | https://github.com/aui/artDialog */
	!function(){function a(b){var d=c[b],e="exports";return"object"==typeof d?d:(d[e]||(d[e]={},d[e]=d.call(d[e],a,d[e],d)||d[e]),d[e])}function b(a,b){c[a]=b}var c={};b("jquery",function(){return jQuery}),b("popup",function(a){function b(){this.destroyed=!1,this.__popup=c("<div />").css({display:"none",position:"absolute",outline:0}).attr("tabindex","-1").html(this.innerHTML).appendTo("body"),this.__backdrop=this.__mask=c("<div />").css({opacity:.75,background:"#000"}),this.node=this.__popup[0],this.backdrop=this.__backdrop[0],d++}var c=a("jquery"),d=0,e=!("minWidth"in c("html")[0].style),f=!e;return c.extend(b.prototype,{node:null,backdrop:null,fixed:!1,destroyed:!0,open:!1,returnValue:"",autofocus:!0,align:"bottom left",innerHTML:"",className:"ui-popup",show:function(a){if(this.destroyed)return this;var d=this.__popup,g=this.__backdrop;if(this.__activeElement=this.__getActive(),this.open=!0,this.follow=a||this.follow,!this.__ready){if(d.addClass(this.className).attr("role",this.modal?"alertdialog":"dialog").css("position",this.fixed?"fixed":"absolute"),e||c(window).on("resize",c.proxy(this.reset,this)),this.modal){var h={position:"fixed",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",userSelect:"none",zIndex:this.zIndex||b.zIndex};d.addClass(this.className+"-modal"),f||c.extend(h,{position:"absolute",width:c(window).width()+"px",height:c(document).height()+"px"}),g.css(h).attr({tabindex:"0"}).on("focus",c.proxy(this.focus,this)),this.__mask=g.clone(!0).attr("style","").insertAfter(d),g.addClass(this.className+"-backdrop").insertBefore(d),this.__ready=!0}d.html()||d.html(this.innerHTML)}return d.addClass(this.className+"-show").show(),g.show(),this.reset().focus(),this.__dispatchEvent("show"),this},showModal:function(){return this.modal=!0,this.show.apply(this,arguments)},close:function(a){return!this.destroyed&&this.open&&(void 0!==a&&(this.returnValue=a),this.__popup.hide().removeClass(this.className+"-show"),this.__backdrop.hide(),this.open=!1,this.blur(),this.__dispatchEvent("close")),this},remove:function(){if(this.destroyed)return this;this.__dispatchEvent("beforeremove"),b.current===this&&(b.current=null),this.__popup.remove(),this.__backdrop.remove(),this.__mask.remove(),e||c(window).off("resize",this.reset),this.__dispatchEvent("remove");for(var a in this)delete this[a];return this},reset:function(){var a=this.follow;return a?this.__follow(a):this.__center(),this.__dispatchEvent("reset"),this},focus:function(){var a=this.node,d=this.__popup,e=b.current,f=this.zIndex=b.zIndex++;if(e&&e!==this&&e.blur(!1),!c.contains(a,this.__getActive())){var g=d.find("[autofocus]")[0];!this._autofocus&&g?this._autofocus=!0:g=a,this.__focus(g)}return d.css("zIndex",f),b.current=this,d.addClass(this.className+"-focus"),this.__dispatchEvent("focus"),this},blur:function(){var a=this.__activeElement,b=arguments[0];return b!==!1&&this.__focus(a),this._autofocus=!1,this.__popup.removeClass(this.className+"-focus"),this.__dispatchEvent("blur"),this},addEventListener:function(a,b){return this.__getEventListener(a).push(b),this},removeEventListener:function(a,b){for(var c=this.__getEventListener(a),d=0;d<c.length;d++)b===c[d]&&c.splice(d--,1);return this},__getEventListener:function(a){var b=this.__listener;return b||(b=this.__listener={}),b[a]||(b[a]=[]),b[a]},__dispatchEvent:function(a){var b=this.__getEventListener(a);this["on"+a]&&this["on"+a]();for(var c=0;c<b.length;c++)b[c].call(this)},__focus:function(a){try{this.autofocus&&!/^iframe$/i.test(a.nodeName)&&a.focus()}catch(b){}},__getActive:function(){try{var a=document.activeElement,b=a.contentDocument,c=b&&b.activeElement||a;return c}catch(d){}},__center:function(){var a=this.__popup,b=c(window),d=c(document),e=this.fixed,f=e?0:d.scrollLeft(),g=e?0:d.scrollTop(),h=b.width(),i=b.height(),j=a.width(),k=a.height(),l=(h-j)/2+f,m=382*(i-k)/1e3+g,n=a[0].style;n.left=Math.max(parseInt(l),f)+"px",n.top=Math.max(parseInt(m),g)+"px"},__follow:function(a){var b=a.parentNode&&c(a),d=this.__popup;if(this.__followSkin&&d.removeClass(this.__followSkin),b){var e=b.offset();if(e.left*e.top<0)return this.__center()}var f=this,g=this.fixed,h=c(window),i=c(document),j=h.width(),k=h.height(),l=i.scrollLeft(),m=i.scrollTop(),n=d.width(),o=d.height(),p=b?b.outerWidth():0,q=b?b.outerHeight():0,r=this.__offset(a),s=r.left,t=r.top,u=g?s-l:s,v=g?t-m:t,w=g?0:l,x=g?0:m,y=w+j-n,z=x+k-o,A={},B=this.align.split(" "),C=this.className+"-",D={top:"bottom",bottom:"top",left:"right",right:"left"},E={top:"top",bottom:"top",left:"left",right:"left"},F=[{top:v-o,bottom:v+q,left:u-n,right:u+p},{top:v,bottom:v-o+q,left:u,right:u-n+p}],G={left:u+p/2-n/2,top:v+q/2-o/2},H={left:[w,y],top:[x,z]};c.each(B,function(a,b){F[a][b]>H[E[b]][1]&&(b=B[a]=D[b]),F[a][b]<H[E[b]][0]&&(B[a]=D[b])}),B[1]||(E[B[1]]="left"===E[B[0]]?"top":"left",F[1][B[1]]=G[E[B[1]]]),C+=B.join("-")+" "+this.className+"-follow",f.__followSkin=C,b&&d.addClass(C),A[E[B[0]]]=parseInt(F[0][B[0]]),A[E[B[1]]]=parseInt(F[1][B[1]]),d.css(A)},__offset:function(a){var b=a.parentNode,d=b?c(a).offset():{left:a.pageX,top:a.pageY};a=b?a:a.target;var e=a.ownerDocument,f=e.defaultView||e.parentWindow;if(f==window)return d;var g=f.frameElement,h=c(e),i=h.scrollLeft(),j=h.scrollTop(),k=c(g).offset(),l=k.left,m=k.top;return{left:d.left+l-i,top:d.top+m-j}}}),b.zIndex=1024,b.current=null,b}),b("dialog-config",{backdropBackground:"#000",backdropOpacity:.75,content:'<span class="ui-dialog-loading">Loading..</span>',title:"",statusbar:"",button:null,ok:null,cancel:null,okValue:"ok",cancelValue:"cancel",cancelDisplay:!0,width:"",height:"",padding:"",skin:"",quickClose:!1,cssUri:"../css/ui-dialog.css",innerHTML:'<div i="dialog" class="ui-dialog"><div class="ui-dialog-arrow-a"></div><div class="ui-dialog-arrow-b"></div><table class="ui-dialog-grid"><tr><td i="header" class="ui-dialog-header"><button i="close" class="ui-dialog-close">&#215;</button><div i="title" class="ui-dialog-title"></div></td></tr><tr><td i="body" class="ui-dialog-body"><div i="content" class="ui-dialog-content"></div></td></tr><tr><td i="footer" class="ui-dialog-footer"><div i="statusbar" class="ui-dialog-statusbar"></div><div i="button" class="ui-dialog-button"></div></td></tr><tr><td i="source" class="ui-dialog-source"><div>数据来源：三农业务风险分析系统</div></td></tr></table></div>'}),b("dialog",function(a){var b=a("jquery"),c=a("popup"),d=a("dialog-config"),e=d.cssUri;if(e){var f=a[a.toUrl?"toUrl":"resolve"];f&&(e=f(e),e='<link rel="stylesheet" href="'+e+'" />',b("base")[0]?b("base").before(e):b("head").append(e))}var g=0,h=new Date-0,i=!("minWidth"in b("html")[0].style),j="createTouch"in document&&!("onmousemove"in document)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),k=!i&&!j,l=function(a,c,d){var e=a=a||{};("string"==typeof a||1===a.nodeType)&&(a={content:a,fixed:!j}),a=b.extend(!0,{},l.defaults,a),a.original=e;var f=a.id=a.id||h+g,i=l.get(f);return i?i.focus():(k||(a.fixed=!1),a.quickClose&&(a.modal=!0,a.backdropOpacity=0),b.isArray(a.button)||(a.button=[]),void 0!==d&&(a.cancel=d),a.cancel&&a.button.push({id:"cancel",value:a.cancelValue,callback:a.cancel,display:a.cancelDisplay}),void 0!==c&&(a.ok=c),a.ok&&a.button.push({id:"ok",value:a.okValue,callback:a.ok,autofocus:!0}),l.list[f]=new l.create(a))},m=function(){};m.prototype=c.prototype;var n=l.prototype=new m;return l.create=function(a){var d=this;b.extend(this,new c);var e=(a.original,b(this.node).html(a.innerHTML)),f=b(this.backdrop);return this.options=a,this._popup=e,b.each(a,function(a,b){"function"==typeof d[a]?d[a](b):d[a]=b}),a.zIndex&&(c.zIndex=a.zIndex),e.attr({"aria-labelledby":this._$("title").attr("id","title:"+this.id).attr("id"),"aria-describedby":this._$("content").attr("id","content:"+this.id).attr("id")}),this._$("close").css("display",this.cancel===!1?"none":"").attr("title",this.cancelValue).on("click",function(a){d._trigger("cancel"),a.preventDefault()}),this._$("dialog").addClass(this.skin),this._$("body").css("padding",this.padding),a.quickClose&&f.on("onmousedown"in document?"mousedown":"click",function(){return d._trigger("cancel"),!1}),this.addEventListener("show",function(){f.css({opacity:0,background:a.backdropBackground}).animate({opacity:a.backdropOpacity},150)}),this._esc=function(a){var b=a.target,e=b.nodeName,f=/^input|textarea$/i,g=c.current===d,h=a.keyCode;!g||f.test(e)&&"button"!==b.type||27===h&&d._trigger("cancel")},b(document).on("keydown",this._esc),this.addEventListener("remove",function(){b(document).off("keydown",this._esc),delete l.list[this.id]}),g++,l.oncreate(this),this},l.create.prototype=n,b.extend(n,{content:function(a){var c=this._$("content");return"object"==typeof a?(a=b(a),c.empty("").append(a.show()),this.addEventListener("beforeremove",function(){b("body").append(a.hide())})):c.html(a),this.reset()},title:function(a){return this._$("title").text(a),this._$("header")[a?"show":"hide"](),this},width:function(a){return this._$("content").css("width",a),this.reset()},height:function(a){return this._$("content").css("height",a),this.reset()},button:function(a){a=a||[];var c=this,d="",e=0;return this.callbacks={},"string"==typeof a?(d=a,e++):b.each(a,function(a,f){var g=f.id=f.id||f.value,h="";c.callbacks[g]=f.callback,f.display===!1?h=' style="display:none"':e++,d+='<button type="button" i-id="'+g+'"'+h+(f.disabled?" disabled":"")+(f.autofocus?' autofocus class="ui-dialog-autofocus"':"")+">"+f.value+"</button>",c._$("button").on("click","[i-id="+g+"]",function(a){var d=b(this);d.attr("disabled")||c._trigger(g),a.preventDefault()})}),this._$("button").html(d),this._$("footer")[e?"show":"hide"](),this},statusbar:function(a){return this._$("statusbar").html(a)[a?"show":"hide"](),this},_$:function(a){return this._popup.find("[i="+a+"]")},_trigger:function(a){var b=this.callbacks[a];return"function"!=typeof b||b.call(this)!==!1?this.close().remove():this}}),l.oncreate=b.noop,l.getCurrent=function(){return c.current},l.get=function(a){return void 0===a?l.list:l.list[a]},l.list={},l.defaults=d,l}),b("drag",function(a){var b=a("jquery"),c=b(window),d=b(document),e="createTouch"in document,f=document.documentElement,g=!("minWidth"in f.style),h=!g&&"onlosecapture"in f,i="setCapture"in f,j={start:e?"touchstart":"mousedown",over:e?"touchmove":"mousemove",end:e?"touchend":"mouseup"},k=e?function(a){return a.touches||(a=a.originalEvent.touches.item(0)),a}:function(a){return a},l=function(){this.start=b.proxy(this.start,this),this.over=b.proxy(this.over,this),this.end=b.proxy(this.end,this),this.onstart=this.onover=this.onend=b.noop};return l.types=j,l.prototype={start:function(a){return a=this.startFix(a),d.on(j.over,this.over).on(j.end,this.end),this.onstart(a),!1},over:function(a){return a=this.overFix(a),this.onover(a),!1},end:function(a){return a=this.endFix(a),d.off(j.over,this.over).off(j.end,this.end),this.onend(a),!1},startFix:function(a){return a=k(a),this.target=b(a.target),this.selectstart=function(){return!1},d.on("selectstart",this.selectstart).on("dblclick",this.end),h?this.target.on("losecapture",this.end):c.on("blur",this.end),i&&this.target[0].setCapture(),a},overFix:function(a){return a=k(a)},endFix:function(a){return a=k(a),d.off("selectstart",this.selectstart).off("dblclick",this.end),h?this.target.off("losecapture",this.end):c.off("blur",this.end),i&&this.target[0].releaseCapture(),a}},l.create=function(a,e){var f,g,h,i,j=b(a),k=new l,m=l.types.start,n=function(){},o=a.className.replace(/^\s|\s.*/g,"")+"-drag-start",p={onstart:n,onover:n,onend:n,off:function(){j.off(m,k.start)}};return k.onstart=function(b){var e="fixed"===j.css("position"),k=d.scrollLeft(),l=d.scrollTop(),m=j.width(),n=j.height();f=0,g=0,h=e?c.width()-m+f:d.width()-m,i=e?c.height()-n+g:d.height()-n;var q=j.offset(),r=this.startLeft=e?q.left-k:q.left,s=this.startTop=e?q.top-l:q.top;this.clientX=b.clientX,this.clientY=b.clientY,j.addClass(o),p.onstart.call(a,b,r,s)},k.onover=function(b){var c=b.clientX-this.clientX+this.startLeft,d=b.clientY-this.clientY+this.startTop,e=j[0].style;c=Math.max(f,Math.min(h,c)),d=Math.max(g,Math.min(i,d)),e.left=c+"px",e.top=d+"px",p.onover.call(a,b,c,d)},k.onend=function(b){var c=j.position(),d=c.left,e=c.top;j.removeClass(o),p.onend.call(a,b,d,e)},k.off=function(){j.off(m,k.start)},e?k.start(e):j.on(m,k.start),p},l}),b("dialog-plus",function(a){var b=a("jquery"),c=a("dialog"),d=a("drag");return c.oncreate=function(a){var c,e=a.options,f=e.original,g=e.url,h=e.oniframeload;if(g&&(this.padding=e.padding=0,c=b("<iframe />"),c.attr({src:g,name:a.id,width:"100%",height:"100%",allowtransparency:"yes",frameborder:"no",scrolling:"no"}).on("load",function(){var b;try{b=c[0].contentWindow.frameElement}catch(d){}b&&(e.width||a.width(c.contents().width()),e.height||a.height(c.contents().height())),h&&h.call(a)}),a.addEventListener("beforeremove",function(){c.attr("src","about:blank").remove()},!1),a.content(c[0]),a.iframeNode=c[0]),!(f instanceof Object))for(var i=function(){a.close().remove()},j=0;j<frames.length;j++)try{if(f instanceof frames[j].Object){b(frames[j]).one("unload",i);break}}catch(k){}b(a.node).on(d.types.start,"[i=title]",function(b){a.follow||(a.focus(),d.create(a.node,b))})},c.get=function(a){if(a&&a.frameElement){var b,d=a.frameElement,e=c.list;for(var f in e)if(b=e[f],b.node.getElementsByTagName("iframe")[0]===d)return b}else if(a)return c.list[a]},c}),window.dialog=a("dialog-plus")}();


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
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


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
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
	//      "form#pagerForm[action='cus/Corpcustomer/list.do'] input[name='certificateCode']",
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
	        var regExp = /^(\d{17})([0-9]|X|x)$/gi;
	        var isIdNo = regExp.test(idNo.trim());
	        if(!isIdNo){
	            isInit = false;
	        }
	    }
	    //只给信贷员
	    if(CVal.getPostName().indexOf("信贷员") == "-1"){
	        isInit = false;
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

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
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
	            var loanId = CVal.getLoanId();
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
	                    loanId:loanId,
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
	                if(data && data.loanId == appId){
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
	            var bizId = CVal.getBizId();
	            var amount = 0;
	            if(data && data.loanId == bizId){
	                amount = data.amount;
	            }

	            CVal.bulletinAction({
	                bizId:bizId,
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
	                bizId:bizId,
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


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	//生成加密签名：token跟userId拼接，在通过sha1算法加密，获得加密签名。
	var SHA1 = __webpack_require__(10);
	CVal.getSignature = function(userId){
		var arr = ['a','b','c','t','h','o','k','e','m','r','n','s'];
		var str = arr[1] + arr[4] + arr[5] + '_' + arr[3] + arr[5] + arr[6] + arr[7] + arr[10],
			sha1Str = SHA1(userId+str);
		return sha1Str;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	;(function (root, factory) {
		if (true) {
			// CommonJS
			module.exports = exports = factory(__webpack_require__(11));
		}
		else if (typeof define === "function" && define.amd) {
			// AMD
			define(["./core"], factory);
		}
		else {
			// Global (browser)
			factory(root.CryptoJS);
		}
	}(this, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var Hasher = C_lib.Hasher;
		    var C_algo = C.algo;

		    // Reusable object
		    var W = [];

		    /**
		     * SHA-1 hash algorithm.
		     */
		    var SHA1 = C_algo.SHA1 = Hasher.extend({
		        _doReset: function () {
		            this._hash = new WordArray.init([
		                0x67452301, 0xefcdab89,
		                0x98badcfe, 0x10325476,
		                0xc3d2e1f0
		            ]);
		        },

		        _doProcessBlock: function (M, offset) {
		            // Shortcut
		            var H = this._hash.words;

		            // Working variables
		            var a = H[0];
		            var b = H[1];
		            var c = H[2];
		            var d = H[3];
		            var e = H[4];

		            // Computation
		            for (var i = 0; i < 80; i++) {
		                if (i < 16) {
		                    W[i] = M[offset + i] | 0;
		                } else {
		                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
		                    W[i] = (n << 1) | (n >>> 31);
		                }

		                var t = ((a << 5) | (a >>> 27)) + e + W[i];
		                if (i < 20) {
		                    t += ((b & c) | (~b & d)) + 0x5a827999;
		                } else if (i < 40) {
		                    t += (b ^ c ^ d) + 0x6ed9eba1;
		                } else if (i < 60) {
		                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
		                } else /* if (i < 80) */ {
		                    t += (b ^ c ^ d) - 0x359d3e2a;
		                }

		                e = d;
		                d = c;
		                c = (b << 30) | (b >>> 2);
		                b = a;
		                a = t;
		            }

		            // Intermediate hash value
		            H[0] = (H[0] + a) | 0;
		            H[1] = (H[1] + b) | 0;
		            H[2] = (H[2] + c) | 0;
		            H[3] = (H[3] + d) | 0;
		            H[4] = (H[4] + e) | 0;
		        },

		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;

		            var nBitsTotal = this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;

		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
		            data.sigBytes = dataWords.length * 4;

		            // Hash final blocks
		            this._process();

		            // Return final computed hash
		            return this._hash;
		        },

		        clone: function () {
		            var clone = Hasher.clone.call(this);
		            clone._hash = this._hash.clone();

		            return clone;
		        }
		    });

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.SHA1('message');
		     *     var hash = CryptoJS.SHA1(wordArray);
		     */
		    C.SHA1 = Hasher._createHelper(SHA1);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacSHA1(message, key);
		     */
		    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
		}());


		return CryptoJS.SHA1;

	}));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	;(function (root, factory) {
		if (true) {
			// CommonJS
			module.exports = exports = factory();
		}
		else if (typeof define === "function" && define.amd) {
			// AMD
			define([], factory);
		}
		else {
			// Global (browser)
			root.CryptoJS = factory();
		}
	}(this, function () {

		/**
		 * CryptoJS core components.
		 */
		var CryptoJS = CryptoJS || (function (Math, undefined) {
		    /*
		     * Local polyfil of Object.create
		     */
		    var create = Object.create || (function () {
		        function F() {};

		        return function (obj) {
		            var subtype;

		            F.prototype = obj;

		            subtype = new F();

		            F.prototype = null;

		            return subtype;
		        };
		    }())

		    /**
		     * CryptoJS namespace.
		     */
		    var C = {};

		    /**
		     * Library namespace.
		     */
		    var C_lib = C.lib = {};

		    /**
		     * Base object for prototypal inheritance.
		     */
		    var Base = C_lib.Base = (function () {


		        return {
		            /**
		             * Creates a new object that inherits from this object.
		             *
		             * @param {Object} overrides Properties to copy into the new object.
		             *
		             * @return {Object} The new object.
		             *
		             * @static
		             *
		             * @example
		             *
		             *     var MyType = CryptoJS.lib.Base.extend({
		             *         field: 'value',
		             *
		             *         method: function () {
		             *         }
		             *     });
		             */
		            extend: function (overrides) {
		                // Spawn
		                var subtype = create(this);

		                // Augment
		                if (overrides) {
		                    subtype.mixIn(overrides);
		                }

		                // Create default initializer
		                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
		                    subtype.init = function () {
		                        subtype.$super.init.apply(this, arguments);
		                    };
		                }

		                // Initializer's prototype is the subtype object
		                subtype.init.prototype = subtype;

		                // Reference supertype
		                subtype.$super = this;

		                return subtype;
		            },

		            /**
		             * Extends this object and runs the init method.
		             * Arguments to create() will be passed to init().
		             *
		             * @return {Object} The new object.
		             *
		             * @static
		             *
		             * @example
		             *
		             *     var instance = MyType.create();
		             */
		            create: function () {
		                var instance = this.extend();
		                instance.init.apply(instance, arguments);

		                return instance;
		            },

		            /**
		             * Initializes a newly created object.
		             * Override this method to add some logic when your objects are created.
		             *
		             * @example
		             *
		             *     var MyType = CryptoJS.lib.Base.extend({
		             *         init: function () {
		             *             // ...
		             *         }
		             *     });
		             */
		            init: function () {
		            },

		            /**
		             * Copies properties into this object.
		             *
		             * @param {Object} properties The properties to mix in.
		             *
		             * @example
		             *
		             *     MyType.mixIn({
		             *         field: 'value'
		             *     });
		             */
		            mixIn: function (properties) {
		                for (var propertyName in properties) {
		                    if (properties.hasOwnProperty(propertyName)) {
		                        this[propertyName] = properties[propertyName];
		                    }
		                }

		                // IE won't copy toString using the loop above
		                if (properties.hasOwnProperty('toString')) {
		                    this.toString = properties.toString;
		                }
		            },

		            /**
		             * Creates a copy of this object.
		             *
		             * @return {Object} The clone.
		             *
		             * @example
		             *
		             *     var clone = instance.clone();
		             */
		            clone: function () {
		                return this.init.prototype.extend(this);
		            }
		        };
		    }());

		    /**
		     * An array of 32-bit words.
		     *
		     * @property {Array} words The array of 32-bit words.
		     * @property {number} sigBytes The number of significant bytes in this word array.
		     */
		    var WordArray = C_lib.WordArray = Base.extend({
		        /**
		         * Initializes a newly created word array.
		         *
		         * @param {Array} words (Optional) An array of 32-bit words.
		         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.lib.WordArray.create();
		         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
		         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
		         */
		        init: function (words, sigBytes) {
		            words = this.words = words || [];

		            if (sigBytes != undefined) {
		                this.sigBytes = sigBytes;
		            } else {
		                this.sigBytes = words.length * 4;
		            }
		        },

		        /**
		         * Converts this word array to a string.
		         *
		         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
		         *
		         * @return {string} The stringified word array.
		         *
		         * @example
		         *
		         *     var string = wordArray + '';
		         *     var string = wordArray.toString();
		         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
		         */
		        toString: function (encoder) {
		            return (encoder || Hex).stringify(this);
		        },

		        /**
		         * Concatenates a word array to this word array.
		         *
		         * @param {WordArray} wordArray The word array to append.
		         *
		         * @return {WordArray} This word array.
		         *
		         * @example
		         *
		         *     wordArray1.concat(wordArray2);
		         */
		        concat: function (wordArray) {
		            // Shortcuts
		            var thisWords = this.words;
		            var thatWords = wordArray.words;
		            var thisSigBytes = this.sigBytes;
		            var thatSigBytes = wordArray.sigBytes;

		            // Clamp excess bits
		            this.clamp();

		            // Concat
		            if (thisSigBytes % 4) {
		                // Copy one byte at a time
		                for (var i = 0; i < thatSigBytes; i++) {
		                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
		                }
		            } else {
		                // Copy one word at a time
		                for (var i = 0; i < thatSigBytes; i += 4) {
		                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
		                }
		            }
		            this.sigBytes += thatSigBytes;

		            // Chainable
		            return this;
		        },

		        /**
		         * Removes insignificant bits.
		         *
		         * @example
		         *
		         *     wordArray.clamp();
		         */
		        clamp: function () {
		            // Shortcuts
		            var words = this.words;
		            var sigBytes = this.sigBytes;

		            // Clamp
		            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
		            words.length = Math.ceil(sigBytes / 4);
		        },

		        /**
		         * Creates a copy of this word array.
		         *
		         * @return {WordArray} The clone.
		         *
		         * @example
		         *
		         *     var clone = wordArray.clone();
		         */
		        clone: function () {
		            var clone = Base.clone.call(this);
		            clone.words = this.words.slice(0);

		            return clone;
		        },

		        /**
		         * Creates a word array filled with random bytes.
		         *
		         * @param {number} nBytes The number of random bytes to generate.
		         *
		         * @return {WordArray} The random word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.lib.WordArray.random(16);
		         */
		        random: function (nBytes) {
		            var words = [];

		            var r = (function (m_w) {
		                var m_w = m_w;
		                var m_z = 0x3ade68b1;
		                var mask = 0xffffffff;

		                return function () {
		                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
		                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
		                    var result = ((m_z << 0x10) + m_w) & mask;
		                    result /= 0x100000000;
		                    result += 0.5;
		                    return result * (Math.random() > .5 ? 1 : -1);
		                }
		            });

		            for (var i = 0, rcache; i < nBytes; i += 4) {
		                var _r = r((rcache || Math.random()) * 0x100000000);

		                rcache = _r() * 0x3ade67b7;
		                words.push((_r() * 0x100000000) | 0);
		            }

		            return new WordArray.init(words, nBytes);
		        }
		    });

		    /**
		     * Encoder namespace.
		     */
		    var C_enc = C.enc = {};

		    /**
		     * Hex encoding strategy.
		     */
		    var Hex = C_enc.Hex = {
		        /**
		         * Converts a word array to a hex string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The hex string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;

		            // Convert
		            var hexChars = [];
		            for (var i = 0; i < sigBytes; i++) {
		                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                hexChars.push((bite >>> 4).toString(16));
		                hexChars.push((bite & 0x0f).toString(16));
		            }

		            return hexChars.join('');
		        },

		        /**
		         * Converts a hex string to a word array.
		         *
		         * @param {string} hexStr The hex string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
		         */
		        parse: function (hexStr) {
		            // Shortcut
		            var hexStrLength = hexStr.length;

		            // Convert
		            var words = [];
		            for (var i = 0; i < hexStrLength; i += 2) {
		                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
		            }

		            return new WordArray.init(words, hexStrLength / 2);
		        }
		    };

		    /**
		     * Latin1 encoding strategy.
		     */
		    var Latin1 = C_enc.Latin1 = {
		        /**
		         * Converts a word array to a Latin1 string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The Latin1 string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;

		            // Convert
		            var latin1Chars = [];
		            for (var i = 0; i < sigBytes; i++) {
		                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                latin1Chars.push(String.fromCharCode(bite));
		            }

		            return latin1Chars.join('');
		        },

		        /**
		         * Converts a Latin1 string to a word array.
		         *
		         * @param {string} latin1Str The Latin1 string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
		         */
		        parse: function (latin1Str) {
		            // Shortcut
		            var latin1StrLength = latin1Str.length;

		            // Convert
		            var words = [];
		            for (var i = 0; i < latin1StrLength; i++) {
		                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
		            }

		            return new WordArray.init(words, latin1StrLength);
		        }
		    };

		    /**
		     * UTF-8 encoding strategy.
		     */
		    var Utf8 = C_enc.Utf8 = {
		        /**
		         * Converts a word array to a UTF-8 string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The UTF-8 string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            try {
		                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
		            } catch (e) {
		                throw new Error('Malformed UTF-8 data');
		            }
		        },

		        /**
		         * Converts a UTF-8 string to a word array.
		         *
		         * @param {string} utf8Str The UTF-8 string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
		         */
		        parse: function (utf8Str) {
		            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
		        }
		    };

		    /**
		     * Abstract buffered block algorithm template.
		     *
		     * The property blockSize must be implemented in a concrete subtype.
		     *
		     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
		     */
		    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
		        /**
		         * Resets this block algorithm's data buffer to its initial state.
		         *
		         * @example
		         *
		         *     bufferedBlockAlgorithm.reset();
		         */
		        reset: function () {
		            // Initial values
		            this._data = new WordArray.init();
		            this._nDataBytes = 0;
		        },

		        /**
		         * Adds new data to this block algorithm's buffer.
		         *
		         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
		         *
		         * @example
		         *
		         *     bufferedBlockAlgorithm._append('data');
		         *     bufferedBlockAlgorithm._append(wordArray);
		         */
		        _append: function (data) {
		            // Convert string to WordArray, else assume WordArray already
		            if (typeof data == 'string') {
		                data = Utf8.parse(data);
		            }

		            // Append
		            this._data.concat(data);
		            this._nDataBytes += data.sigBytes;
		        },

		        /**
		         * Processes available data blocks.
		         *
		         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
		         *
		         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
		         *
		         * @return {WordArray} The processed data.
		         *
		         * @example
		         *
		         *     var processedData = bufferedBlockAlgorithm._process();
		         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
		         */
		        _process: function (doFlush) {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;
		            var dataSigBytes = data.sigBytes;
		            var blockSize = this.blockSize;
		            var blockSizeBytes = blockSize * 4;

		            // Count blocks ready
		            var nBlocksReady = dataSigBytes / blockSizeBytes;
		            if (doFlush) {
		                // Round up to include partial blocks
		                nBlocksReady = Math.ceil(nBlocksReady);
		            } else {
		                // Round down to include only full blocks,
		                // less the number of blocks that must remain in the buffer
		                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
		            }

		            // Count words ready
		            var nWordsReady = nBlocksReady * blockSize;

		            // Count bytes ready
		            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

		            // Process blocks
		            if (nWordsReady) {
		                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
		                    // Perform concrete-algorithm logic
		                    this._doProcessBlock(dataWords, offset);
		                }

		                // Remove processed words
		                var processedWords = dataWords.splice(0, nWordsReady);
		                data.sigBytes -= nBytesReady;
		            }

		            // Return processed words
		            return new WordArray.init(processedWords, nBytesReady);
		        },

		        /**
		         * Creates a copy of this object.
		         *
		         * @return {Object} The clone.
		         *
		         * @example
		         *
		         *     var clone = bufferedBlockAlgorithm.clone();
		         */
		        clone: function () {
		            var clone = Base.clone.call(this);
		            clone._data = this._data.clone();

		            return clone;
		        },

		        _minBufferSize: 0
		    });

		    /**
		     * Abstract hasher template.
		     *
		     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
		     */
		    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
		        /**
		         * Configuration options.
		         */
		        cfg: Base.extend(),

		        /**
		         * Initializes a newly created hasher.
		         *
		         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
		         *
		         * @example
		         *
		         *     var hasher = CryptoJS.algo.SHA256.create();
		         */
		        init: function (cfg) {
		            // Apply config defaults
		            this.cfg = this.cfg.extend(cfg);

		            // Set initial values
		            this.reset();
		        },

		        /**
		         * Resets this hasher to its initial state.
		         *
		         * @example
		         *
		         *     hasher.reset();
		         */
		        reset: function () {
		            // Reset data buffer
		            BufferedBlockAlgorithm.reset.call(this);

		            // Perform concrete-hasher logic
		            this._doReset();
		        },

		        /**
		         * Updates this hasher with a message.
		         *
		         * @param {WordArray|string} messageUpdate The message to append.
		         *
		         * @return {Hasher} This hasher.
		         *
		         * @example
		         *
		         *     hasher.update('message');
		         *     hasher.update(wordArray);
		         */
		        update: function (messageUpdate) {
		            // Append
		            this._append(messageUpdate);

		            // Update the hash
		            this._process();

		            // Chainable
		            return this;
		        },

		        /**
		         * Finalizes the hash computation.
		         * Note that the finalize operation is effectively a destructive, read-once operation.
		         *
		         * @param {WordArray|string} messageUpdate (Optional) A final message update.
		         *
		         * @return {WordArray} The hash.
		         *
		         * @example
		         *
		         *     var hash = hasher.finalize();
		         *     var hash = hasher.finalize('message');
		         *     var hash = hasher.finalize(wordArray);
		         */
		        finalize: function (messageUpdate) {
		            // Final message update
		            if (messageUpdate) {
		                this._append(messageUpdate);
		            }

		            // Perform concrete-hasher logic
		            var hash = this._doFinalize();

		            return hash;
		        },

		        blockSize: 512/32,

		        /**
		         * Creates a shortcut function to a hasher's object interface.
		         *
		         * @param {Hasher} hasher The hasher to create a helper for.
		         *
		         * @return {Function} The shortcut function.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
		         */
		        _createHelper: function (hasher) {
		            return function (message, cfg) {
		                return new hasher.init(cfg).finalize(message);
		            };
		        },

		        /**
		         * Creates a shortcut function to the HMAC's object interface.
		         *
		         * @param {Hasher} hasher The hasher to use in this HMAC helper.
		         *
		         * @return {Function} The shortcut function.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
		         */
		        _createHmacHelper: function (hasher) {
		            return function (message, key) {
		                return new C_algo.HMAC.init(hasher, key).finalize(message);
		            };
		        }
		    });

		    /**
		     * Algorithm namespace.
		     */
		    var C_algo = C.algo = {};

		    return C;
		}(Math));


		return CryptoJS;

	}));

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Created by czy on 2016/11/2.
	 */
	/**
	 *Cookie
	 */
	function cookie(name) {

	  var cookieArray = document.cookie.split("; "); //得到分割的cookie名值对

	  for (var i = 0; i < cookieArray.length; i++) {

	    var arr = cookieArray[i].split("=");       //将名和值分开

	    if (arr[0] == name)return decodeURI(arr[1]); //如果是指定的cookie，则返回它的值

	  }

	  return "";

	}


	function delCookie(name)//删除cookie
	{

	  document.cookie = name + "=;expires=" + (new Date(0)).toGMTString();

	}


	function getCookie(objName) {//获取指定名称的cookie的值

	  var arrStr = document.cookie.split("; ");

	  for (var i = 0; i < arrStr.length; i++) {

	    var temp = arrStr[i].split("=");

	    if (temp[0] == objName) return unescape(temp[1]);

	  }

	}


	function addCookie(objName, objValue, objHours) {      //添加cookie

	  var str = objName + "=" + encodeURI(objValue);

	  if (objHours > 0) {                               //为时不设定过期时间，浏览器关闭时cookie自动消失

	    var date = new Date();

	    var ms = objHours * 3600 * 1000;

	    date.setTime(date.getTime() + ms);

	    str += "; expires=" + date.toGMTString();

	  }

	  document.cookie = str;

	}


	function SetCookie(name, value)//两个参数，一个是cookie的名子，一个是值
	{

	  var Days = 30; //此 cookie 将被保存 30 天

	  var exp = new Date();    //new Date("December 31, 9998");

	  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);

	  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();

	}

	function getCookie(name)//取cookies函数
	{

	  var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));

	  if (arr != null) return unescape(arr[2]);
	  return null;


	}

	function delCookie(name)//删除cookie
	{

	  var exp = new Date();

	  exp.setTime(exp.getTime() - 1);

	  var cval = getCookie(name);

	  if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();

	}

	/**
	 * runApp
	 */
	/**
	 * add replaceAll function to String
	 **/
	String.prototype.replaceAll = function (s1, s2) {
	  return this.replace(new RegExp(s1, "gm"), s2);
	};
	/**
	 * 默认浏览器路径
	 * @type {{chrome: string, firefox: string}}
	 */
	var defaultPath = {
	  chrome: "C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe",
	  firefox: "C:\\Program Files\\Mozilla Firefox\\firefox.exe"
	};
	/**
	 * 检测默认路径是否存在
	 * 结果为空则不存在，否则则为真实路径
	 */
	var checkDefault = function(){
	  for(var k in defaultPath){
	    var _path = defaultPath[k];
	    var fileFlag = checkFile(_path);
	    if (fileFlag == null) {
	      return _path;
	    }else if(fileFlag == -1){
	      return null;
	    }
	  }
	};
	var getExplorerPath = function (uriStr) {
	  var explorerpath = getCookie('explorer_path');
	  if (explorerpath == null || explorerpath == '') {
	    /**
	     * 从默认目录检测是否存在
	     */
	    var _path = checkDefault();
	    if(_path){
	      addCookie('explorer_path', _path, 24 * 365);
	      return _path;
	    }
	    explorerpath = prompt("请设置Chrome或火狐浏览器路径:", "C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe");
	    if (explorerpath == null) {
	      //失败,用户自行打开
	      prompt('设置失败,请手工打开Chrome或火狐浏览器并将如下地址粘贴到地址栏', uriStr);
	      //跳出
	      return null;
	    } else {
	      if (explorerpath.indexOf('.exe') != explorerpath.length - 4) explorerpath += '.exe';
	      addCookie('explorer_path', explorerpath, 24 * 365);
	    }
	  }
	  return explorerpath;
	}


	/**
	 * check file exist or not
	 * all external exe activex operation will run this function first,
	 * exist will return null,or return error message;
	 **/
	var checkFile = function (path) {
	  var fileShell;
	  try {
	    fileShell = new ActiveXObject("Scripting.FileSystemObject");
	  } catch (e) {
	    return -1;
	  }
	  try {
	    fileShell.GetFile(path);
	    return null;
	  } catch (e) {
	    return e.name + ": " + e.message;
	  }
	}
	function winClose() {
	  window.top.opener = null;
	  window.close();
	}

	/**
	 * run exe program
	 * path: exe file path eg:c:\\windows\\system32\\cmd.exe
	 * fileParam: startup extra params ,optional
	 **/
	var runFile = function (path, fileParam) {
	  if (path == null) return;
	  var fileFlag = checkFile(path);
	  if (fileFlag == null) {
	    //run
	    var runpath = "file:///" + path.replaceAll(" ", "%20");
	    if (fileParam != null) runpath += " " + fileParam;
	    var objShell = new ActiveXObject("wscript.shell");
	    try {
	      objShell.Run(runpath);
	//      winClose();
	    } catch (e) {
	      //ask if reset path
	      path = prompt('浏览器路径[' + path + ']无效,请重新填写并刷新页面', path);
	      if (path == null) return;
	      else {
	        addCookie('explorer_path', path, 24 * 365);
	      }
	    }
	  } else if (fileFlag == -1) {
	    alert('请启用ActiveX');
	  } else {
	    //error
	    alert(fileFlag);
	    path = prompt(fileFlag + ',请重新填写浏览器路径并刷新页面', path);
	    if (path == null) return;
	    else {
	      addCookie('explorer_path', path, 24 * 365);
	    }
	  }
	};
	/**
	 * 通过浏览器打开地址
	 * @param url
	 */
	CVal.openExplorer = function(url){
	  runFile(getExplorerPath(url),url);
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	/***********************************跳转三农*********************************/

	var jumpObj = {
			
	}	
	/**
	 * 参数配置
	 */
	jumpObj.authConfig = {
		basePath: CVal.path&&CVal.path.replace('/bhoserver','')||'http://21.32.95.155:8080',
		module:{
			'hbpostToken_inform_toBusDistribution':'/hbpost/inform/toBusDistribution.action',
			'psbciasToken_webpage':'/psbcias/webpage',
			'predictToken_cust_custmaintain':'/predict/cust/custmaintain.action'
		},
		//true：触发jump访问，false：刷新页面访问
		continuity:false
		
	}
		
	//定义公共变量，存放用户机构岗位等权限信息
	jumpObj.authData = {};
	/**
	 * 登陆跳转系统
	 */
	jumpObj.jump_authmgr = function(){
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
	jumpObj.authmgrOnload = function(){
		var i_authmgr = document.getElementById("i_authmgr");
		//ie浏览器onload方法
		if(i_authmgr.attachEvent){
			i_authmgr.detachEvent("onload", jumpObj.getAuthData);
			i_authmgr.attachEvent("onload", jumpObj.getAuthData);
		}else{
			//用不到，其他浏览器onload方法
			i_authmgr.onload = function(){
				jumpObj.getAuthData();
			}
		}
	}
	/**
	 * 获取权限信息
	 * @returns
	 */
	jumpObj.getAuthData = function(){
		CVal.bho_http_get({
			url:jumpObj.authConfig.basePath + '/authmgr/user/loginUnification.action',
			data:'user_id='+userId+'&password='+password,
			success:function(data)
			{
				jumpObj.authData = data;
				if(jumpObj.authData && jumpObj.authData.loginStatus == 'login'){
				}else{
	//				alert('登陆authmgr系统失败！');
				}
			}
		})
	}
	/**
	 * 请求authmgr，token方式登陆三农系统
	 */
	jumpObj.postalToken = function(systemId, module, params){
		CVal.bho_http_get({
			url: jumpObj.authConfig.basePath + '/authmgr/token/generate.action',
			data: {
				systemId:systemId,
				orgId:orgId,
				posId:posId
			},
			success: function(data){
				var mm = new RegExp('^[a-zA-Z]+_[a-zA-Z]+_[a-zA-Z]+');
				var isMatch = mm.test(module);
				var url = "";
				if(isMatch){
					//这里需要判断session是否失效，，，，如果失效从第一步调起
					url = data.tokenUrl+"?token="+data.token+"&module="+module+"&params="+JSON.stringify(params)+"&url=";
					url = url.replace('hbpostToken', module).replace('predictToken', module);
				}else{
					url = data.tokenUrl+"?token="+data.token+"&module=&url="+module+"&params=";
				}
				//跨浏览器跳转
				CVal.openExplorer(url);
			},
			error: function(data){
				jumpObj.jump_authmgr();
			}
		});
		
	}
	/**
	 * 登陆三农系统成功回调
	 */
	jumpObj.postalOnload = function(){
		var i_postal = document.getElementById("i_postal");
		if(i_postal.attachEvent){
			i_postal.detachEvent('onload', jumpObj.openHtml);
			i_postal.attachEvent("onload", jumpObj.openHtml);
		}else{
			i_postal.onload = jumpObj.openHtml;
		}
	}
	/**
	 * 跳转页面
	 * @returns
	 */
	jumpObj.openHtml = function(){
		if(jumpObj.authConfig.continuity){
	//		var new_window = window.open();
	//		new_window.location.href=jumpObj.authConfig.basePath + jumpObj.authConfig.module[module_curr] + '?module=' + module_curr + '&params=' + params_curr;
			//跨浏览器打开页面
			CVal.openExplorer(jumpObj.authConfig.basePath + jumpObj.authConfig.module[module_curr] + '?module=' + module_curr + '&params=' + params_curr);
		}
	}

	/**
	 * main入口
	 */
	jumpObj.jump = function(systemId, module, params){
		module_curr = module;
		params_curr = params;
		jumpObj.authConfig.continuity = true;
		//此处判断是否session失效
		jumpObj.checkSession('authmgr', function(data){
			if(data && data.statusCode == '200'){
				jumpObj.postalToken(systemId, module, params);
			}else{
				//登陆authmgr系统，并获取权限信息authData
				jumpObj.jump_authmgr();
				setTimeout(function(){
					//这里如果authmgr系统session失效了，必须刷新用户页面。
					var map = {
							'hbpost':jumpObj.checkPass(jumpObj.authData.hbpostOrgAndPos.orgList, jumpObj.authData.hbpostOrgAndPos.positionList, orgId, posId),
							'predict':jumpObj.checkPass(jumpObj.authData.predictOrgAndPos.orgList, jumpObj.authData.predictOrgAndPos.positionList, orgId, posId),
							'psbcias':jumpObj.checkPass(jumpObj.authData.psbciasOrgAndPos.orgList, jumpObj.authData.psbciasOrgAndPos.positionList, orgId, posId)
					}
					if(map[systemId]){
						jumpObj.postalToken(systemId, module, params);
					}else{
						alert('您没有权限！');
					}
					
				},500);
			}
		});
	};

	/**
	 * 检查用户机构，岗位是否有权限访问各三农系统
	 */
	jumpObj.checkPass = function(orgList, positionList, orgId, posId){
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
	jumpObj.createJumpDom = function(){
		$('body').append('<form class="ml_jump_authmgr" target="authmgr" action="'+jumpObj.authConfig.basePath+'/authmgr/user/jumpLogin.action" method="post"> '+
						'</form>																										'+
						'<form class="ml_jump" target="postal" action="" method="post">                                                 '+
						'</form>                                                                                                        '+
						'<iframe id="i_authmgr" name="authmgr" style="position:absolute;display:none;width:100%;height:500px;"></iframe>                                 '+
						'<iframe id="i_postal" name="postal" style="display:none;width:100%;height:500px;"></iframe>');

	}
	/**
	 * 访问前，验证session是否失效
	 */
	jumpObj.checkSession = function(systemId, callback){
		CVal.bho_http_get({
			url: systemId=='psbcias'?jumpObj.authConfig.basePath + '/' + systemId + '/checkSession':jumpObj.authConfig.basePath + '/'+systemId+'/user/checkSession.action',
			success: function(data){
				//这里需要判断session是否失效，，，，如果失效从第一步调起
				callback(data);
			},
			data:{'userId': userId},
			error: function(data){
			}
		});
	}
	CVal.jump = jumpObj.jump;

	/**
	 * 模拟触发登陆三农事件
	 */
	//参数
	var userId=CVal.getUserId()||'20080150340',
		password=CVal.getSignature(userId),
		orgId=CVal.getOrgId()==''?'13000015':CVal.getOrgId(),
		posId=CVal.getPostId()==''?'B06':CVal.getPostId();
	//其他参数
	var module_curr='',params_curr={};
	//创建dom
	jumpObj.createJumpDom();
	//绑定onload事件
	jumpObj.authmgrOnload();
	//jumpObj.postalOnload();
	//登陆authmgr系统，并获取权限信息authData
	jumpObj.jump_authmgr();
	/*
	$('#sannong').click(function(){
		CVal.jump("hbpost", "hbpostToken_inform_toBusDistribution", JSON.stringify({'a':'1','b':'2','tab':'0'}));
	});
	$('#hangye').click(function(){
		CVal.jump("psbcias", "/webpage?id=434989", JSON.stringify({'id':'412203'}));
	});
	$('#yuce').click(function(){
		CVal.jump("predict", "predictToken_cust_custmaintain", JSON.stringify({'id':'412203'}));
	});
	*/






/***/ }
]);