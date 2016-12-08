
var windowUrl = window.location.href;
//if(windowUrl.indexOf("21.6.11.6/easyloan") != -1){
	require.ensure('./bho/auth.js',function(){
		//加载配置
		require('./bho/cval-config.js');
		//加载客户和行业文件
		require('./bho/customAndInd.js');
		//加载信贷员检查情况通报文件
		require('./bho/empReport.js');
		//加载信贷员权限文件
		require('./bho/empLevel.js');
		//加密签名
		require('./bho/bho-token.js');
		//加载跳转
		require('./bho/runAppForIE.js');
		require('./bho/jumpToSys.js');
		//加载权限文件
		require('./bho/auth.js');
	  	Base.require(CVal.path + '/resources/static/js/bho/haloPlugins/haloPlugins.css?_=' + (new Date()).getTime());
  	  	Base.require(CVal.path + '/resources/static/js/bho/haloPlugins/haloPlugins.js?_=' + (new Date()).getTime(),function(){	
			//执行权限读取
			CVal.getPluginSwitch ();
  	  	});
	},'CVal');
//}
module.exports = CVal;

