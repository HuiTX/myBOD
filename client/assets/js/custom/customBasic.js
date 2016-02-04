(function($, vue) {
    var id = utils.getQueryString('id') || null,
        action = utils.getQueryString('action') || 'insert';

    var jForm = $('#customBasicForm');

    var vm;


    var from = {
        status: {
            action: action,
            isView: (action == 'view'),
            isViewAll: true
        },
        data: {
            address: '',
            budget: '',
            compete: '',
            employees: '',
            income: '',
            industry: '',
            keyBusiness: '',
            name: '',
            phone: '',
            portrait: '',
            price: '',
            procurement: '',
            stage: '',
            tags: '',
            origin:''
        }
    }

    if (id) {
        $.ajax({
            url: '/customer/' + id,
            type: 'get',
            success: function(result) {
                // $.extend(true, from.data, result);
                from.data = result;
                init(from);
                utils.selectInit(vm.data,from.status.isView);
            }
        });
    } else {
        init(from);
        utils.selectInit(vm.data,from.status.isView);
    }

    switch (action) {
        case 'insert':
            var url = '/customer';
            break;
        case 'update':
            var url = '/customer/update';
            break;
        case 'view':
            from.status.isViewAll = false;
            break;
        default:
            break;
    }


    function init(from) {
        vm = new Vue({
            el: '#customBasic',
            data: from,
            methods: {
                ckSave: function() {
                    save();
                },
                ckViewAll: function() {
                    from.status.isViewAll = !from.status.isViewAll;
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
                    jForm.validator('cleanUp');

                    if (action == 'insert') {
                        var href = '/customer/info?id=';
                    } else {
                        var href = '?action=view&id=';
                    };
                    location = href + _data.id;
                }
            });
        });
    }


    jForm.validator({
        fields: {
            name: {
                rule: 'required;',
                msgStyle: 'position: absolute;top: 8px;right: 75px;'
            },
            stage: {
                rule: 'required;',
                msgStyle: 'position: absolute;top: 8px;right: 75px;'
            }
        }
    });

    // function selectInit() {
    //     $('.multipleSelect').each(function(index, item) {
    //         return (function(item) {
    //             $(item).mobiscroll().select({
    //                 theme: 'mobiscroll',
    //                 display: 'bottom',
    //                 minWidth: 200,
    //                 onInit: (function(item) {
    //                     var attr = $(item).attr('data-attr'),
    //                         i = vm.data[attr];
    //                     $(item).val(i);
    //                 })(item),
    //                 onSelect: (function(item) {
    //                     return function(text, inst) {
    //                         // $(item).val(inst.getVal())
    //                         var attr = $(item).attr('data-attr');
    //                         vm.data[attr] = inst.getVal();
    //                     }
    //                 })(item)
    //             });
    //         })(item);
    //     });
    // }

})(jQuery, Vue);
