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
//		"form#pagerForm[action='cus/Corpcustomer/list.do'] input[name='certificateCode']",
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
		isInit = false;
	}
	//方北路，鹿泉，宁晋，内丘，沽源，怀安，赤城，高庙北,滦平县支行
    var orgArr = ['13012859','1399982Q','1399941Q','1399946Q','1399905Q','1399901Q','1399897Q','13000066','1399890Q'];
	if($.inArray(CVal.getOrgId(),orgArr) == -1){
		isInit = false;
	}
	//只给信贷员
	if(CVal.getPostName().indexOf("信贷员") == "-1"){
	    isInit = false;
	}
	
	if(CVal.getUserId() == "20121130850"){
		isInit = true;
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