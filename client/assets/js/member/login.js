'use strict';

$(function(){
	var jForm = $('#login-form');

	// jForm.validator({
	// 	fields:{
	// 		username: {
	//             rule: 'required; remote[get: /isExist-user];',
	//             msgStyle: 'position: absolute;top: 33px;left: 0;'
	//         },
	// 		password: {
	// 			rule: 'required;',
	//             msgStyle: 'position: absolute;top: 33px;left: 0;'
	// 		}
	// 	}
	// });

	new Vue({
	  	el: '#app',
	  	data: {
		    username: '',
		    password: ''
		},
	  	methods: {
	  		formSubmit: function(){
	  			console.log(this.username);
				//Submit(this)
	  		}
	  	}
	});

	// function Submit (self){
	//     jForm.isValid(function(v) {
 //            if(v){
 //                $.ajax({
 //                    type: 'POST',
 //                    url: '/login',
 //                    data: {
 //                        username: self.username,
 //                        password: self.password
 //                    },
 //                    success: function(data) {
 //                        if(data.ok){
 //                            alert(data.ok);
 //                            location.href = '/';
 //                        }else{
 //                            $('[name=password]').next().children('.msg-wrap').removeClass('n-ok')
 //                            .addClass('n-error').find('.n-msg').text(data.error);
 //                        }
 //                    },
 //                    error: function() {
 //                        alert('服务器连接失败');
 //                    }
 //                });
 //            }else{
 //                //alert('请改正错误信息！');
 //            }
 //        });
	// }

});
