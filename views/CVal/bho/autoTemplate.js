/**
 * Created by zpf on 2016-7-29 17:26:11.
 * 调查报告模板录入
 */

CVal.bindAutoTemplate = function() {
	//绑定检测调查报告页面是否加载完成的事件
	$(document).on("click","form[action*='./JointLineSurvey/createSurveyJspForChoice_do.json'] button",CVal.waitingAllPanelBar);
	//绑定一键导入报告按钮
	$(document).on("click","input#inputTempBtn",CVal.startInputData);
};


//个贷2.0系统的表单验证方法
CVal.validateCallback = function(form){
	return validateCallback(form,navTabAjaxDone,'navTab','111-merch');
};

//等待id为all_panelBar的div加载完成。
CVal.waitingAllPanelBar = function(){
	console.log('waitingAllPanelBar-->');
	CVal.intv = window.setInterval("CVal.isPanelBarLoadFinsh()",500);
};


/*----------判断all_panelBar是否加载完成---------*/
CVal.isPanelBarLoadFinsh = function(){
    if($("div#all_panelBar").length){
    	window.clearInterval(CVal.intv);
    	console.log('clearInterval------->');
    	//添加导入按钮
    	if(!$("div.unitBox:visible .panelBar #inputTempBtn").length){
    		$('#all_panelBar').append("<input type='button' id='inputTempBtn' title='从调查报告模板系统导入调查报告数据' class='sysButton' value='一键导入报告' />");
    	}
    }
};


var data1 = eval("({'tbPubRptNewPettyBasic': {'Newpettybasic_businessProject': '经营项目内容','Newpettybasic_usingLoanDetail': '贷款详细用途内容','Newpettybasic_homeAdderss': '居住地址内容','Newpettybasic_remarks': '其他需要说明的情况内容……'}})");

//填充基本信息方法
CVal.inputBasicData = function(data){
	$.each(data.tbPubRptNewPettyBasic,function(i,obj){
		$("#"+i).val(obj);
	});
	
	console.log(CVal.validateCallback(document.forms['farmerCreate']));
	
	document.forms['farmerCreate'].submit();
};


CVal.startInputData = function(){
	CVal.inputBasicData(data1);
};
