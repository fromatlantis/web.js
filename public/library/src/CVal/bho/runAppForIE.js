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
* 帮助按钮
*/
CVal.getHelpDom = function(){
  haloPlugins.modal.destroy();
  var str = require('./help/help.jade')(),arrLen = arguments.length,arr = [],$dom;
  switch (arrLen){
	  case 0:break;
	  case 1:if(typeof arguments[0] == 'string') arr = arguments[0].split(',');
	  default: for(var i=0;i<arrLen;i++){arr.push(arguments[i])};
  }
  
  if(arr.length == 0) $dom = $(str);
  else {
	$dom = $(str).find('.question-item:not(.'+arr.join(',.')+')').hide().end();  
  }
  //$dom.css({width: 600,margin: '10px auto',position:'absolute',left:0,right:0,top:100,zIndex:9999});
  haloPlugins.modal.init({width: 600,height:500,title:'帮助',content:$dom});
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
	  //展示帮助
	  CVal.getHelpDom('Q2','Q3');
      if (path == null) return;
      else {
        addCookie('explorer_path', path, 24 * 365);
      }
    }
  } else if (fileFlag == -1) {
    alert('请启用ActiveX');
	//展示帮助
	CVal.getHelpDom('Q1')
  } else {
    //error
    alert(fileFlag);
	//展示帮助
	CVal.getHelpDom('Q1','Q2','Q3');
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