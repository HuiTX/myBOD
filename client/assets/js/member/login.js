'use strict';

$(function() {
    var jForm = $('#login-form');
    new Vue({
        el: '#login',
        data: {
            username: '',
            password: ''
        },
        methods: {
            formSubmit: function() {
                Submit(this)
            }
        }
    });

    jForm.validator({
        fields: {
            username: {
                rule: 'required;',
                msgStyle: 'position: absolute;top: 33px;left: 0;'
            },
            password: {
                rule: 'required;',
                msgStyle: 'position: absolute;top: 33px;left: 0;'
            }
        }
    });

    function Submit(self) {
        jForm.isValid(function(v) {
            if (v) {
                $.ajax({
                    type: 'POST',
                    url: '/login',
                    data: {
                        username: self.username,
                        password: self.password
                    },
                    success: function(data) {
                        location.href = '/';
                    },
                    error: function(data) {
                        var msg = $.parseJSON(data.responseText).message;
                        alert(msg);
                    }
                });
            } else {
                // alert('请改正错误信息！');
            }
        });
    }

});
