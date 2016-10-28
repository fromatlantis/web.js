/**
 * Created by czy on 2016/7/18.
 * BHO插件主文件
 */

/*******************************    组件引入    ***********************************************/
/**
 * 执行针对个贷系统的操作
 * 目标：【个贷系统】
 */
var doEasyLoanAction = function(){
     //加载依赖
    Base.require(CVal.path + '/resources/static/js/bho/artdialog/ui-dialog.css');
    Base.require(CVal.path + '/resources/static/js/bho/artdialog/dialog.plug.min.js');
    Base.require(CVal.path + '/resources/static/js/bho/profile/profile.css');
    Base.require(CVal.path + '/resources/static/js/bho/msgPlus/msgPlus.css');
    Base.require(CVal.path + '/resources/static/js/common/sha/sha1.js');
    Base.require(CVal.path + '/resources/static/js/bho/haloPlugins/haloPlugins.css?_=' + (new Date()).getTime());

    //加载配置
    Base.require(CVal.path + '/resources/static/js/bho/cval-config.js?_=' + (new Date()).getTime());
    //加载客户和行业文件
    Base.require(CVal.path + '/resources/static/js/bho/customAndInd.js?_=' + (new Date()).getTime());
    //加载信贷员检查情况通报文件
    Base.require(CVal.path + '/resources/static/js/bho/empReport.js?_=' + (new Date()).getTime());
    //加载信贷员权限文件
    Base.require(CVal.path + '/resources/static/js/bho/empLevel.js');
    //加载微门户文件
    Base.require(CVal.path + '/resources/static/js/bho/haloPlugins/haloPlugins.js?_=' + (new Date()).getTime());
    //加密签名
    Base.require(CVal.path + '/resources/static/js/bho/bho-token.js');
    //加载自动录入调查报告模板文件(未启用)
    //Base.require(CVal.path + '/resources/static/js/bho/autoTemplate.js?_=' + (new Date()).getTime());
    //加载跳转
    Base.require(CVal.path + '/resources/static/js/bho/test.js?_=' + (new Date()).getTime());
    //加载权限文件
    Base.require(CVal.path + '/resources/static/js/bho/auth.js?_=' + (new Date()).getTime());
}

/**
 * 如果是个贷系统，则初始化
 */
//var windowUrl;(windowUrl = window.location.href) && windowUrl.indexOf("21.6.11.6/easyloan") != -1&&doEasyLoanAction();
doEasyLoanAction();

