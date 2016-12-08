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
