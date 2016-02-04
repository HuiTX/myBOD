(function($, vue) {
    var id = utils.getQueryString('id') || null,
        customerId = utils.getQueryString('c') || null,
        action = utils.getQueryString('action') || 'insert';

    var jForm = $('#directorInfoForm');

    var vm;


    var from = {
        status: {
            action: action,
            isView: (action == 'view')
        },
        data: {
            customer_id: customerId,
            name: '',
            phone: '',
            relation: '',
            requirement: '',
            role: ''
        }
    }

    if (id) {
        $.ajax({
            url: '/director/' + id,
            type: 'get',
            success: function(result) {
                from.data = result;
                init(from);
                utils.selectInit(vm.data,vm.status.isView);
            }
        });
    } else {
        init(from);
        utils.selectInit(vm.data,vm.status.isView);
    }

    switch (action) {
        case 'insert':
            var url = '/director';
            break;
        case 'update':
            var url = '/director/update';
            break;
        default:
            break;
    }


    function init(from) {
        vm = new Vue({
            el: '#directorInfo',
            data: from,
            methods: {
                ckSave: function() {
                    save();
                }
            }
        })
    }

    var save = function() {
        jForm.isValid(function(v) {
            if (!v) {
                return;
            };
            $.ajax({
                url: url,
                type: 'post',
                data: vm.data,
                success: function(_data) {
                    // console.log(_data)
                    jForm.validator('cleanUp');
                    location = '?action=view&id=' + _data.id;
                }
            });
        });
    }


    jForm.validator({
        fields: {
            name: {
                rule: 'required;',
                msgStyle: 'position: absolute;top: 7px;right: 75px;'
            }
        }
    });

})(jQuery, Vue);

// (function($, vue) {
//     var id = utils.getQueryString('id') || null,
//         action = utils.getQueryString('action') || 'insert';

//     var jForm = $('#directorInfoForm');

//     var from = {
//         status: {
//             action: action,
//             isVeiw: (action != 'view')
//         },
//         data: {
//             name: '',
//             phone: '',
//             relation: '',
//             requirement: '',
//             role: ''
//         }
//     }

//     if (id) {
//         $.ajax({
//             url: '/customer/' + id,
//             type: 'get',
//             success: function(result) {
//                 // $.extend(true, from.data, result);
//                 from.data = result;
//                 init(from);
//                 utils.selectInit(vm.data);
//             }
//         });
//     } else {
//         init(from);
//         utils.selectInit(vm.data);
//     }

//     // var vm = new Vue({
//     //     el: '#directorInfo',
//     //     data: {
//     //         form:
//     //     }
//     // })

//     switch (action) {
//         case 'insert':
//             var url = '/customer';
//             break;
//         case 'update':
//             var url = '/customer/update';
//             break;
//         default:
//             break;
//     }

//     $.ajax({
//         url: '/director/' + id,
//         type: 'get',
//         success: function(result) {
//             vm.data = result;
//             utils.selectInit(vm.data);
//         }
//     });


//     function init(from) {
//         vm = new Vue({
//             el: '#customBasic',
//             data: from,
//             methods: {
//                 ckSave: function() {
//                     save();
//                 }
//             }
//         })
//     }

// })(jQuery, Vue);
