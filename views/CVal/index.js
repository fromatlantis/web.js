   //加载依赖
//var CVal = {};
require('./bho/artdialog/ui-dialog.css');
require('./bho/artdialog/dialog.plug.min.js');
require('./bho/profile/profile.css');
require('./bho/msgPlus/msgPlus.css');
//require('./bho/sha1.js');
//require('./bho/haloPlugins/haloPlugins.css');

//加载配置
require('./bho/cval-config.js');
//加载客户和行业文件
require('./bho/customAndInd.js');
//加载信贷员检查情况通报文件
require('./bho/empReport.js');
//加载信贷员权限文件
require('./bho/empLevel.js');
//加载微门户文件
//require('./bho/haloPlugins/haloPlugins.js');
//加密签名
require('./bho/bho-token.js');
//加载自动录入调查报告模板文件(未启用)
//Base.require(CVal.path + './bho/autoTemplate.js'));
//加载跳转
require('./bho/test.js');
//加载权限文件
require('./bho/auth.js');

var profile = require('../profile/index.js');
var msgPlus = require('../msgPlus/index.js');
var modal = require('../modal/index.js');

CVal.msgPlus = msgPlus;
CVal.profile = profile;
CVal.modal = modal;

module.exports = CVal;

