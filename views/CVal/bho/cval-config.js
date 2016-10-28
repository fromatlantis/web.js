/**
 * Created by czy on 2016/7/18.
 */
//CVal.extend = function() {
    // IE6、7、8不支持trim函数，进行扩展
    if (typeof String.prototype.trim !== 'function') {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }
//};

CVal.util = {
	/********设置cookie********/
	setCookie:function(cname,cvalue,exhours){
	    var d = new Date();
	    d.setTime(d.getTime()+(exhours*60*60*1000));
	    var expires = 'expires='+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + ";" + expires;
	},
	getCookie:function(cname){
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++){
	        var c = ca[i];
	        while(c.charAt(0)==' ') c = c.substring(1);
	        if(c.indexOf(name) != -1) return c.substring(name.length,c.length);
	    }
	    return "";
	},
	clearCookie:function(cname){
	    setCookie(cname,"",-1);
	},
	addDomEvent:function(dom,event,func){
		if(dom && dom.attachEvent){
			dom.attachEvent("on"+event,func);
		}else if(dom){
			dom.addEventListener(event,func);
		}
	}
};



/***********登录之前加载缓存**************/
CVal.beforeLogin = function(){
	var userId = $("#j_username").val();
	var posId = $("#j_position").find("option:selected").text();
	var orgId = $("#orgCode").val();
	if(userId){
		CVal.bho_http_get({
			url: CVal.path + "/beforelogin/loadDateClosed",
	        data: {
	        	userId:userId,
	        	posId:posId,
	        	orgId:orgId
	        },
	        success: function(data) {}
		});
	}
};



CVal.util.addDomEvent($("form#logForm #sub")[0],"click",CVal.beforeLogin);


/**
 * JsonP方式扩展
 */
CVal.bho_http_get = function(req) {
    // 添加时间戳参数，防止缓存
    $.extend(req.data, {
        _: new Date().getTime()
    });
    $.ajax({
        type:'POST',
        dataType: 'jsonp',
        jsonp: '_callback',
        url: req.url,
        data: req.data,
        success: req.success ? req.success : function(data) {},
        error: req.error ? req.error : function(data) {}
    });
};

/****************************************   内容相关    *******************************************************/
/*获取当前用户编号*/
CVal.getUserId = function(){
    if($('li#showUserBox').get(0))
        return $('li#showUserBox').html().toString().match(/用户编号: \d{11}/)[0].split(':')[1].trim();
    else
        return "";
};

/*获取当前用户名称*/
CVal.getUserName = function(){
    if($('li#showUserBox').get(0))
        return $('li#showUserBox').html().toString().match(/用户姓名: [\u4e00-\u9fa5]+\</)[0].split(':')[1].trim().slice(0,-1);
    else
        return "";
};
/*获取当前用户岗位ID*/
CVal.getPostId = function(){
    if($('li#showUserBox').get(0))
        return $('li#showUserBox').html().toString().match(/岗位编号: \w\d{2}/)[0].split(':')[1].trim();
    else
        return "";
};
/*获取当前用户岗位名称*/
CVal.getPostName = function(){
	if($('li#showUserBox').get(0))
		return $('li#showUserBox').html().toString().match(/岗位名称: [\u4e00-\u9fa5]+\</)[0].split(':')[1].trim().slice(0,-1);
	else 
		return "";
};
/*获取当前用户机构编号*/
CVal.getOrgId = function(){
    if($('li#showUserBox').get(0))
        return $('li#showUserBox').html().toString().match(/机构编号: \d{7}[A-Za-z0-9]/)[0].split(':')[1].trim();
    else
        return "";
};
/*获取当前用户机构名称*/
CVal.getOrgName = function(){
    if($('li#showUserBox').get(0))
        return $('li#showUserBox').html().toString().match(/机构名称: [\u4e00-\u9fa5]+\</)[0].split(':')[1].trim().slice(0,-1);
    else
        return "";
};
/*获取当前业务的贷种ID*/
CVal.getAppOpId = function(){
    return $('#tbLonApplication_appOpId').val() || $('#Application_appOpId').val() || " ";
};
/*获取当前业务ID*/
CVal.getLoanId = function(){
    return $("#tbLonApplication_loanId").val() || " ";
};
/*获取当前BizId*/
CVal.getBizId = function(){
    return $("#bizId").val() || " ";
};
/*获取申请金额*/
CVal.getLoanAmount = function(){
    return $("#tbLonLoanApplication_loanAmount").val() || 0;
};
/*获取额度申请金额*/
CVal.getLineAmount = function(){
	return $("#Lineapplication_lineAmount").val() || 0;
};


/****报错****/
window.onerror = function(sMessage,sUrl,sLine){
//	console.log("sMessage:"+sMessage+"; sUrl:"+sUrl+"; sLine:"+sLine);
	//alert("sMessage:"+sMessage+"; sUrl:"+sUrl+"; sLine:"+sLine);
};
