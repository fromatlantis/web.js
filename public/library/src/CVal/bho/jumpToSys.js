/***********************************跳转三农*********************************/

var jumpObj = {
		
}	
/**
 * 参数配置
 */
jumpObj.authConfig = {
	basePath: CVal.getPath()&&CVal.getPath().replace('/bhoserver','')||'http://21.32.3.70',
	//module的配置没有使用，前台直接传参
	module:{
		'hbpost_inform_toBusDistribution':'/hbpost/inform/toBusDistribution.action',
		'psbcias_webpage':'/psbcias/webpage',
		'predict_cust_custmaintain':'/predict/cust/custmaintain.action'
	},
	//true：触发jump访问，false：刷新页面访问
	continuity:false
	
}
	
//定义公共变量，存放用户机构岗位等权限信息
jumpObj.authData = {};
/**
 * 登陆跳转系统
 */
jumpObj.jump_authmgr = function(){
	var ml_jump_authmgr = $('form.ml_jump_authmgr');
	ml_jump_authmgr.html('');
	ml_jump_authmgr.append('<input name="user_id" value="'+userId+'"/>');
	ml_jump_authmgr.append('<input name="password" value="'+password+'"/>');
	ml_jump_authmgr.submit();
	
}
/**
 * 登陆跳转系统后的回调
 * @returns
 */
jumpObj.authmgrOnload = function(){
	var i_authmgr = document.getElementById("i_authmgr");
	//ie浏览器onload方法
	if(i_authmgr.attachEvent){
		i_authmgr.detachEvent("onload", jumpObj.getAuthData);
		i_authmgr.attachEvent("onload", jumpObj.getAuthData);
	}else{
		//用不到，其他浏览器onload方法
		i_authmgr.onload = function(){
			jumpObj.getAuthData();
		}
	}
}
/**
 * 获取权限信息
 * @returns
 */
jumpObj.getAuthData = function(){
	CVal.bho_http_get({
		url:jumpObj.authConfig.basePath + '/authmgr/user/loginUnification.action',
		data:'user_id='+userId+'&password='+password,
		success:function(data)
		{
			jumpObj.authData = data;
			if(jumpObj.authData && jumpObj.authData.loginStatus == 'login'){
			}else{
//				alert('登陆authmgr系统失败！');
			}
		}
	})
}
/**
 * 请求authmgr，token方式登陆三农系统
 */
jumpObj.postalToken = function(systemId, module, params){
	CVal.bho_http_get({
		url: jumpObj.authConfig.basePath + '/authmgr/token/generate.action',
		data: {
			systemId:systemId,
			orgId:orgId,
			posId:posId
		},
		success: function(data){
			var mm = new RegExp('^[a-zA-Z]+_[a-zA-Z]+_[a-zA-Z]+');
			var isMatch = mm.test(module);
			var url = "";
			if(isMatch){
				//这里需要判断session是否失效，，，，如果失效从第一步调起
				url = data.tokenUrl+"?token="+data.token+"&module="+module+"&params="+JSON.stringify(params)+"&url=";
				url = url.replace('hbpostToken', module).replace('predictToken', module);
			}else{
				url = data.tokenUrl+"?token="+data.token+"&module=&url="+module+"&params=";
			}
			//跨浏览器跳转
			CVal.openExplorer(url);
		},
		error: function(data){
			jumpObj.jump_authmgr();
		}
	});
	
}

/**
 * main入口
 */
jumpObj.jump = function(systemId, module, params){
	var flag = checkInfo();
	if(!flag) return;
	module_curr = module;
	params_curr = params;
	jumpObj.authConfig.continuity = true;
	//此处判断是否session失效
	jumpObj.checkSession('authmgr', function(data){
		if(data && data.statusCode == '200'){
			jumpObj.postalToken(systemId, module, params);
		}else{
			//登陆authmgr系统，并获取权限信息authData
			jumpObj.jump_authmgr();
			setTimeout(function(){
				//这里如果authmgr系统session失效了，必须刷新用户页面。
				var map = {
						'hbpost':jumpObj.checkPass(jumpObj.authData.hbpostOrgAndPos.orgList, jumpObj.authData.hbpostOrgAndPos.positionList, orgId, posId),
						'predict':jumpObj.checkPass(jumpObj.authData.predictOrgAndPos.orgList, jumpObj.authData.predictOrgAndPos.positionList, orgId, posId),
						'psbcias':jumpObj.checkPass(jumpObj.authData.psbciasOrgAndPos.orgList, jumpObj.authData.psbciasOrgAndPos.positionList, orgId, posId)
				}
				if(map[systemId]){
					jumpObj.postalToken(systemId, module, params);
				}else{
					alert('您没有权限！');
				}
				
			},500);
		}
	});
};

/**
 * 检查用户机构，岗位是否有权限访问各三农系统
 */
jumpObj.checkPass = function(orgList, positionList, orgId, posId){
	var orgPass=false,posPass=false;
	$.each(orgList, function(i, o){
		if(o.orgId == orgId){
			orgPass = true;
			return;
		}
	});
	$.each(positionList, function(i, o){
		if(o.positionId == posId){
			posPass = true;
			return;
		}
	});
	if(orgPass && posPass){
		return true;
	}else{
		return false;
	}
	return true;
}
/**
 * 注入dom
 */
jumpObj.createJumpDom = function(){
	$('body').append('<form class="ml_jump_authmgr" target="authmgr" action="'+jumpObj.authConfig.basePath+'/authmgr/user/jumpLogin.action" method="post" style="display:none;"> '+
					'</form>																										'+
					'<iframe id="i_authmgr" name="authmgr" style="position:absolute;display:none;width:0;height:0;"></iframe>');

}
/**
 * 访问前，验证session是否失效
 */
jumpObj.checkSession = function(systemId, callback){
	CVal.bho_http_get({
		url: systemId=='psbcias'?jumpObj.authConfig.basePath + '/' + systemId + '/checkSession':jumpObj.authConfig.basePath + '/'+systemId+'/user/checkSession.action',
		success: function(data){
			//这里需要判断session是否失效，，，，如果失效从第一步调起
			callback(data);
		},
		data:{'userId': userId},
		error: function(data){
		}
	});
}
CVal.jump = jumpObj.jump;

/**
 * 检查用户信息和登录状态
 */
function checkInfo(){
	if(userId == '' || orgId == '' || posId == ''||password == ''){
	    userId=CVal.getUserId()||'',
		password=CVal.getSignature(userId).toString(),
		orgId=CVal.getOrgId()==''?'':CVal.getOrgId(),
		posId=CVal.getPostId()==''?'':CVal.getPostId();
	}
	
	if(jumpObj.authData.loginStatus == 'login'){
		return true;
	}else if(userId){
		//登陆authmgr系统，并获取权限信息authData
		jumpObj.jump_authmgr();
	}
	return false;
};
/**
 * 模拟触发登陆三农事件
 */
//参数
var userId=CVal.getUserId()||'',
	password=CVal.getSignature(userId).toString()||'',
	orgId=CVal.getOrgId()==''?'':CVal.getOrgId(),
	posId=CVal.getPostId()==''?'':CVal.getPostId();
//其他参数
var module_curr='',params_curr={};
//创建dom
jumpObj.createJumpDom();
//绑定onload事件
jumpObj.authmgrOnload();
/*
$('#sannong').click(function(){
	CVal.jump("hbpost", "hbpostToken_inform_toBusDistribution", JSON.stringify({'a':'1','b':'2','tab':'0'}));
});
$('#hangye').click(function(){
	CVal.jump("psbcias", "/webpage?id=434989", JSON.stringify({'id':'412203'}));
});
$('#yuce').click(function(){
	CVal.jump("predict", "predictToken_cust_custmaintain", JSON.stringify({'id':'412203'}));
});
*/




