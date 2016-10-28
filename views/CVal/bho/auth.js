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