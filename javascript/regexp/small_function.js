	var digitFn = {
		allDigit : function(v){
			// var reg = /[^0-9]/g;		//通过[]指定区间查找非数字来判断
			// var reg = new RegExp('[^0-9]');		//通过查找非数字来判断
			// var reg = /\D/g;		//通过元字符查找非数字来判断 ,这个值必须改变判断!z
			// var reg = /^[0-9]+$/;		//通过[]指定区间查找以数字开头和结尾来判断
			var reg = /^\d+$/;	//通过元字符查找必须以数字开头和结尾的至少一个
			var z = reg.test(v);
			if(z){
					alert('输入正确，您输入的值是：' + v);
				}else{
					alert('您输入的值必须都为数字！');
			}
		},
		fiveDigit : function(v){
			// var reg = /^\d{5}$/;
			var reg = new RegExp("^\\d{5}$");
			var z = reg.test(v);
			if(z){
					alert('输入正确，您输入的值是：' + v);
				}else{
					alert('您输入的值必须是5位数数字！');
			}
		},
		leastDigit : function(v){
			var reg = /^\d{6,}$/;
			var z = reg.test(v);
			if(z){
					alert('输入正确，您输入的值是：' + v);
				}else{
					alert('您输入的值必须是大于6位数的数字！');
			}
		},
		betweenDigit : function(v){
			var reg = /^\d{6,10}$/;
			var z = reg.test(v);
			if(z){
					alert('输入正确，您输入的值是：' + v);
				}else{
					alert('您输入的值必须是大于等于6位并且小于等于10位的数字！');
			}			
		},
		beforeDigit : function(v){
			// var reg = /^[0-9]/;	//通过^来检测输入的值的开头是否在[]给定的0-9数字区间
			// var reg = new RegExp('^[0-9]');
			// var reg = /^\d/;		//通过^来检测输入的值的开头是否在元字符\d(数字)区间
			var	reg = /^[^\D]/;	//通过[^]表示非指定的字符;\D表示非数字字符。两次非表示是
				var z = reg.test(v);
				if(z){
					alert('输入正确，您输入的值是：' + v);
				}else{
					alert('您输入的值必须以数字开头！');
				}
		},
		afterDigit : function(v){
			// var reg = /[0-9]$/;	//通过[]指定区间的形式并在其后加入$符表示以指定区间任意一个字符结尾
			// var reg = /\d$/;		//通过元字符\d,并在其后加入$符表示以任意一个数字结尾
			// var reg = /[0123456789]$/;	//通过[]指定给定的数的形式判断
			var reg = /[^\D]$/; //通过[^]表示非指定的字符;\D表示非数字字符。两次非表示是
			var z = reg.test(v);
			if(z){
				alert('输入正确，您输入的值是：' + v);
			}else{
				alert('您输入的值必须以数字结尾！');
			}
		},
		middleDigit : function(v){
			var reg = /^\D+\d+\D+$/;		//表示非数字字符开头的一个或多个后跟数字的一个或多个，再以非数字结尾的一个或多个
			var z = reg.test(v);
			if(z){
				alert('输入正确，您输入的值是：' + v);
			}else{
				alert('您输入的值必须在中间包含数字！');
			}
		},
		plusDigit : function(v){
			// var reg = /^\d+\.?\d+$/;
			// var reg = /^[0-9]+\.?[0-9]+$/;
			var reg = /^[^\D]+\.?[\d]+$/;
			var z = reg.test(v);
			if(z){
				alert('输入正确，您输入的值是：' + v);
			}else{
				alert('您必须输入正确的正数！');
			}
		},
		minusDigit : function(v){
			var reg = /^\-[0-9]+\.?\d+$/;
			var z = reg.test(v);
			if(z){
				alert('输入正确，您输入的值是：' + v);
			}else{
				alert('您必须输入正确的负数！');
			}
		},
		decimalDigit : function(v){
			var reg = /^([0]|[1-9]\d*)\.\d+$/g;
			// var reg = new RegExp("^([0]|[1-9]\\d+)\\.\\d+$","g");
			var z = reg.test(v);
			if(z){
				alert('输入正确，您输入的值是：' + v);
			}else{
				alert('您必须输入小数！');
			}
		},
		threeDecimalDigit : function(v){
			// var reg = /^\d+(\.\d{3})?$/;
			var reg = new RegExp("^\\d+\(\\.\\d\{3\}\)?$");
			var z = reg.test(v);
			if(z){
				alert('输入正确，您输入的值是：' + v);
			}else{
				alert('您必须输入带3位小数的数字！');
			}			
		},
		phoneDigit : function(v){
			// var reg = /^1[3|5|7|8|][0-9]{9}$/;	//方法一
			// var reg = /^1(3|5|7|8)\d{9}$/;		//方法二
			var reg = /^(134|132|131|155|182)[^\D]{8}/;
			var z = reg.test(v);
			if(z){
				alert('您输入的：' + v + '手机号正确！');
			}else{
				alert('您必须输入正确的手机号！');
			}
		},
		phone_86_Digit : function(v){
			// var reg = /^(\+86|86)?[0]?1[3|5|7|8][0-9]{9}$/;
			var reg = /^(\+86|86)?0?1[3578]\d{9}$/;
			var z = reg.test(v);
			if(z){
				alert('您输入的：' + v + '手机号正确！');
			}else{
				alert('您必须输入正确的手机号！');
			}
		},
		mobileDigit : function(v){
			// var reg = /^1(34|35|36|37|38|39|50|51|52|57|58|59|82|83|84|87|88)[0-9]{8}$/;		//匹配所有的移动号码
			// var reg = /^1(3[456789]|5[012789]|8[2478])[0-9]{8}$/;
			var reg = /^1(3[4-9]|5[0-27-9]|8[2-47-8])[0-9]{8}$/;
			var z = reg.test(v);
			if(z){
				alert('您输入的：' + v + '是移动号码！');
			}else{
				alert('请输入正确的移动手机号！');
			}
		},
		unicomDigit : function(v){
			// var reg = /^1(30|31|32|55|56|85|86|76|45)\d{8}$/;			//匹配所有的联通号码
			// var reg = /^1(3[012]|5[56]|8[56]|7[6]|4[5])[0-9]{8}$/;
			var reg = /^1(3[0-2]|5[56]|8[56]|76|45)\d{8}$/;
			var z = reg.test(v);
			if(z){
				alert('您输入的：' + v + '是联通号码！');
			}else{
				alert('请输入正确的联通手机号！');
			}
		},
		CDMADigit : function(v){
			// var reg = /^1(33|53|80|81|89|77)[^\D]{8}$/;		//匹配所有的电信号码
			var reg = /^1(33|53|8[019]|77)\d{8}$/;
			var z = reg.test(v);
			if(z){
				alert('您输入的：' + v + '是电信号码！');
			}else{
				alert('请输入正确的电信手机号！');
			}
		},
		phoneTest : function(v){
			var regPhone = /^1[3|4|5|7|8]\d{9}$/,	//是否为手机号正则
					regMobile = /(3[4-9]|5[0-27-9]|8[2-47-8]|78)/,	//移动号码
					regUnicom =  /(3[0-2]|5[56]|8[56]|76|45)/,	//联通号码
					regCDMA = /(33|53|8[019]|77)/,	//电信号码
					regMobile4g = /(78)/,
					regUnicom4g = /76/,
					regCDMA4g = /77/;
			if(regPhone.test(v)){
				var gv = v.slice(0,3);
				if(regMobile.test(gv)){
					alert(gv);
					if(regMobile4g.test(gv)){
						alert('土豪：您是移动4G用户！');
					}else{
						alert('您是移动用户！');
					}
				}else if(regUnicom.test(gv)){
					if(regUnicom4g.test(gv)){
						alert('土豪：您是联通4G用户！');
					}else{
						alert('您是联通用户！');
					}
				}else if(regCDMA.test(gv)){
					if(regCDMA4g.test(gv)){
						alert('土豪：您是电信4G用户！');
					}else{
						alert('您是电信用户！');
					}

				}
			}else{
				alert("请输入正确格式的手机号！");
			}
		},
		telDigit : function(v){
			var reg = /^\d{7,8}$/;
			var z = reg.test(v);
			if(z){
				alert('您输入的：' + v + '号码正确！');
			}else{
				alert('请输入正确的电话号！');
			}			
		},
		zoneTelDigit : function(v){
			var reg = /^\d{3,4}\-?\d{7,8}$/;
			var z = reg.test(v);
			if(z){
				alert('您输入的：' + v + '号码正确！');
			}else{
				alert('请输入正确格式的电话号！(01082313345或010-82313345)');
			}			
		},
		zoneTelExtDigit : function(v){
			var reg = /^\d{3,4}\-\d{7,8}\-\d{0,4}$/;
			var z = reg.test(v);
			if(z){
				alert('您输入的：' + v + '号码正确！');
			}else{
				alert('请输入正确格式的电话号！(010-82313345-801)');
			}			
		},
		phoneTelDigit : function(v){
			// var reg = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/
			var reg = /((^(\+86|86)?[0]?1[3578]\d{9})|(^\d{3,4}\-\d{7,8})|(^\d{3,4}\-\d{7,8})\-\d{1,4})$/;
			var z = reg.test(v);
			if(z){
				alert('您输入的：' + v + '号码正确！');
			}else{
				alert('请输入正确格式的电话号！');
			}			
		},
		PostcodeDigit : function(v){
			// var reg = /^\d{6}$/g;
			var reg = new RegExp("^\\d{6}$","g");
			var z = reg.test(v);
			if(z){
				alert('您输入的：' + v + '是正确的邮编！');
			}else{
				alert('请输入正确格式的邮政编码！');
			}
		},
		idCodeDigit : function(v){
			var reg = /^((11|12|13|14|15)|(21|22|23)|(31|32|33|34|35|36|37)|(41|42|43|44|45|46)|(50|51|52|53|54)|(61|62|63|64|65)|(81|82))\d{4}[12]\d{3}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[01])\d{3}[0-9xX]$/;
			var z = reg.test(v);
			if(z){
				alert('您输入的：' + v + '是正确的身份证号！');
			}else{
				alert('请输入正确格式的身份证号！');
			}
		},
		ipDigit : function(v){
			var reg = /^(([01]?\d\d?|2[0-4]\d|25[0-5])\.){3}([01]?\d\d?|2[0-4]\d|25[0-5])$/g;
			var z = reg.test(v);
			if(z){
				alert('您输入的：' + v + '是正确的ip地址！');
			}else{
				alert('请输入正确格式的ip地址！');
			}
		},
		allLetter : function(v){
			var reg = /^[a-zA-Z]+$/g;
			var z = reg.test(v);
			if(z){
				alert('您输入的：' + v + '值正确！');
			}else{
				alert('您只能输入字母！');
			}
		},
		noLetterNumber : function(v){
			// var reg = /^[^a-zA-Z0-9]+$/;
			var reg = /^\W+$/;
			var z = reg.test(v);
			if(z){
				alert('您输入的：' + v + '值正确！');
			}else{
				alert('您只能输入非字母和数字！');
			}			
		},
		userName_1 : function(v){
			var reg = /^[a-zA-Z]+[\w]+$/;
			var z = reg.test(v);
			if(z){
				alert('您输入的用户名：' + v + '正确！');
			}else{
				alert('用户名非数字开头的字母数字和下划线组成！');
			}		
		},
		Email : function(v){
			var reg = /^[\w-]+\@[\w-]+\.[a-zA-Z]+\.*[a-zA-Z]*$/;
			var z = reg.test(v);
			if(z){
				alert('您输入的用户名：' + v + '正确！');
			}else{
				alert('用户名非数字开头的字母数字和下划线组成！');
			}
		},
		trimLeft : function(v){
			var reg = /^\s*/;
			var z = v.replace(reg,"");
			alert("您输入的值是：|" + v);
			alert("截取后的值是：|" + z);
		},
		trimRight : function(v){
			var reg = /\s*$/;
			var z = v.replace(reg,"");
			alert("您输入的值是："+ v + "|");
			alert("截取后的值是："+ z + "|");
		},
		trimLR : function(v){
			var reg = /(^\s*)|(\s*$)/g;
			var z = v.replace(reg,"");
			alert("您输入的值是：|" + v + "|");
			alert("您输入的值是：|" + z + "|");
		}
	};
