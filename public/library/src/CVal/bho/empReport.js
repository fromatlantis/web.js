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
