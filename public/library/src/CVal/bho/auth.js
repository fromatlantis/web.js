/**
 * Created by czy on 2016/7/18.
 */
/********************************************   权限控制   ******************************************************/
var switchStatus = [];
//CVal.signature = CVal.getSignature();

CVal.bind = function() {
    
    // 绑定调查报告Tab标签(信贷员权限)
    if($.inArray('2100',switchStatus) > -1){
        CVal.bindTabs7();
    }
    
    //绑定信贷员通报流程事件
    if($.inArray('2200',switchStatus) > -1){
        CVal.bindBulletin();
    }
    
    //绑定以客户为中心的提示
    if($.inArray('2300',switchStatus) > -1){
        CVal.bindCustomer();
    }
    
    //绑定以行业为中心的提示
    if($.inArray('2400',switchStatus) > -1){
        CVal.bindIndustry();
    }
    
    //绑定微门户初始化方法
    if($.inArray('2500',switchStatus) > -1){
        CVal.initMsgPlus();
    }
    
    //绑定调查报告模板录入模块
    //CVal.bindAutoTemplate();
    
};

//查询插件开关状态
CVal.getPluginSwitch = function(){
    CVal.bho_http_get({
        url: CVal.path + "/bhoApi/getPluginSwitch.action",
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
                if($.inArray('2000',switchStatus) > -1){
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

