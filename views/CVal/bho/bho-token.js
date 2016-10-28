//生成加密签名：token跟userId拼接，在通过sha1算法加密，获得加密签名。
require('./sha1.js');
CVal.getSignature = function(){
	var arr = ['a','b','c','t','h','o','k','e','m','r','n','s'];
	var str = arr[1] + arr[4] + arr[5] + '_' + arr[3] + arr[5] + arr[6] + arr[7] + arr[10],
		sha1Str = CryptoJS.SHA1(str);
	return sha1Str;
};
