	/**
	 * 参数配置
	 */
	var authConfig = {
		basePath:'http://21.32.95.155:8080',
		module:{
			'1':'/hbpost/empauth/index.action',
			'2':'/hbpost/inform/toBusDistribution.action',
			'3':'/hbpost/inform/toBusDistribution.action',
			'4':'/psbcias/webpage',
			'5':'/predict/cust/custmaintain.action'
		},
		//true：触发jump访问，false：刷新页面访问
		continuity:false
		
	}
	
	//定义公共变量，存放用户机构岗位等权限信息
	authData = {};
	/**
	 * 登陆跳转系统
	 */
	var jump_authmgr = function(){
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
	var authmgrOnload = function(){
		var i_authmgr = document.getElementById("i_authmgr");
		//ie浏览器onload方法
		if(i_authmgr.attachEvent){
			i_authmgr.detachEvent("onload", getAuthData);
			i_authmgr.attachEvent("onload", getAuthData);
		}else{
			//用不到，其他浏览器onload方法
			i_authmgr.onload = function(){
				getAuthData();
			}
		}
	}
	/**
	 * 获取权限信息
	 * @returns
	 */
	var getAuthData = function(){
		CVal.bho_http_get({
			url:authConfig.basePath + '/authmgr/user/loginUnification.action',
			data:'user_id='+userId+'&password='+password,
			success:function(data)
			{
				authData = data;
				if(authData && authData.loginStatus == 'login'){
				}else{
					alert('登陆authmgr系统失败！');
				}
			}
		})
	}
	/**
	 * 请求authmgr，token方式登陆三农系统
	 */
	var postalToken = function(systemId, module, params){
		alert('这个方法什么时候执行。。。。');
		CVal.bho_http_get({
			url: authConfig.basePath + '/authmgr/token/generate.action',
			data: {
				systemId:systemId,
				orgId:CVal.getOrgId(),
				posId:CVal.getPostId()
			},
			success: function(data){
				//这里需要判断session是否失效，，，，如果失效从第一步调起
				var ml_jump = $('form.ml_jump');
				ml_jump.html('');
				ml_jump.attr('action',data.tokenUrl+"?token="+data.token);
				ml_jump.append('<input type="hidden" name="module" value="'+module+'"/>');
				ml_jump.append("<input type='hidden' name='params' value='"+JSON.stringify(params)+"'/>");
				ml_jump.submit();
			},
			error: function(data){
				alert('获取数据失败，请稍后重试！', 'error');
			}
		});
		
	}
	/**
	 * 登陆三农系统成功回调
	 */
	var postalOnload = function(){
		var i_postal = document.getElementById("i_postal");
		if(i_postal.attachEvent){
			i_postal.detachEvent('onload', openHtml);
			i_postal.attachEvent("onload", openHtml);
		}else{
			i_postal.onload = openHtml;
		}
	}
	/**
	 * 跳转页面
	 * @returns
	 */
	var openHtml = function(){
		if(authConfig.continuity){
			var new_window = window.open();
			new_window.location.href=authConfig.basePath + authConfig.module[module_curr] + '?module=' + module_curr + '&params=' + params_curr;
			
		}
	}
	
	/**
	 * main入口
	 */
	var jump = function(systemId, module, params){
		module_curr = module;
		params_curr = params;
		authConfig.continuity = true;
		//此处判断是否session失效
		checkSession(systemId, function(data){
			if(data && data.statusCode == '200'){
				alert('session未失效');
				openHtml();
				return;
			}else{
				alert('session失效了');
				//登陆authmgr系统，并获取权限信息authData
				jump_authmgr();
				
//				var map = {
//						'hbpost':checkPass(authData.hbpostOrgAndPos.orgList, authData.hbpostOrgAndPos.positionList, CVal.getOrgId(), CVal.getPostId()),
//						'predict':checkPass(authData.predictOrgAndPos.orgList, authData.predictOrgAndPos.positionList, CVal.getOrgId(), CVal.getPostId()),
//						'psbcias':checkPass(authData.psbciasOrgAndPos.orgList, authData.psbciasOrgAndPos.positionList, CVal.getOrgId(), CVal.getPostId())
//				}
//				if(map[systemId]){
					postalToken(systemId, module, params);
//				}else{
//					alert('您没有查看权限！', 'warming');
//				}
			}
		});
		
	}
	/**
	 * 检查用户机构，岗位是否有权限访问各三农系统
	 */
	var checkPass = function(orgList, positionList, orgId, posId){
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
	var createJumpDom = function(){
		$('body').append('<form class="ml_jump_authmgr" target="authmgr" action="'+authConfig.basePath+'/authmgr/user/jumpLogin.action" method="post"> '+
						'</form>																										'+
						'<form class="ml_jump" target="postal" action="" method="post">                                                 '+
						'</form>                                                                                                        '+
						'<iframe id="i_authmgr" name="authmgr" style="position:absolute;display:;width:100%;height:500px;"></iframe>                                 '+
						'<iframe id="i_postal" name="postal" style="display:;width:100%;height:500px;"></iframe>');

	}
	/**
	 * 访问前，验证session是否失效
	 */
	var checkSession = function(systemId, callback){
		CVal.bho_http_get({
			
			url: systemId=='psbcias'?authConfig.basePath + '/' + systemId + '/checkSession':authConfig.basePath + '/'+systemId+'/user/checkSession.action',
			success: function(data){
				//这里需要判断session是否失效，，，，如果失效从第一步调起
				callback(data);
				
			},
			error: function(data){
				alert('获取数据失败，请稍后重试！', 'error');
			}
		});
	}
	

	/**
	 * 模拟触发登陆三农事件
	 */
	//参数
	var userId='20080150340',
		password=CVal.getSignature(userId),
		orgId=CVal.getOrgId()?'13000015':CVal.getOrgId(),
		posId=CVal.getPostId()==null?'B06':CVal.getPostId();
	//其他参数
	var module_curr='',params_curr={};
	//创建dom
	createJumpDom();
	//绑定onload事件
	authmgrOnload();
	postalOnload();
	//登陆authmgr系统，并获取权限信息authData
	jump_authmgr();
	$('#sannong').click(function(){
		jump("hbpost", "2", "{'a':'1', 'b':'2'}");
	});
	$('#hangye').click(function(){
		jump("psbcias", "4", "{'a':'1', 'b':'2'}");
	});
	$('#yuce').click(function(){
		jump("predict", "5", "{'id':'412203'}");
	});
