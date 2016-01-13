'use strict';

$(function(){
	var jForm = $('#login-form');

	jForm.validator({
		fields:{
			username: {
	            rule: 'required; remote[get: /isExist-user];',
	            msgStyle: 'position: absolute;top: 33px;left: 0;'
	        },
			password: {
				rule: 'required;',
	            msgStyle: 'position: absolute;top: 33px;left: 0;'
			}
		}
	});

});
