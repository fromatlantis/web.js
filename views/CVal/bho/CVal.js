/**
 * Created by czy on 2016/7/18.
 * bho插件引导文件，用于加载Base.js以及其他js插件和配置文件
 */
/***************************************    加载Base    *************************************************/
/**
 * 初始化CVal对象
 */
var cvalInit = function(){
    window.CVal = {};
    /**
     * 服务端地址
     */
    //CVal.path = 'http://21.32.95.196:8080/bhoserver'; // 本地测试
    CVal.path = 'http://21.32.95.248:8088/bhoserver'; // 测试环境
   	//CVal.path = 'http://21.32.3.70:80/bhoserver'; // 生产环境
}
//CVal对象初始化
cvalInit();
//加载组件
var _load = function(url) {var dom = document.createElement('script'); dom.src = url; dom.async = true; document.getElementsByTagName('head')[0].appendChild(dom);};
_load(CVal.path + '/resources/static/js/common/logm/Base.js?require=http://21.32.95.248:8200/bho/logm.js,' + CVal.path + '/resources/static/js/bho/main.js&app=bho&_=' + (new Date()).getTime());