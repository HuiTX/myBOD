(function($, vue) {
    var id = utils.getQueryString('id') || null;
    var jForm = $('#visitAfterForm');

    var vm;

    var from = {
        status: {
            id: id
        },
        data: {
            way: '',
            purpose: [],
            stage: '',
            state:'',
            relation: ''
        }
    }

    $.ajax({
        url: '/visit/' + id,
        type: 'get',
        success: function(result) {
            // $.extend(true, from.data, result);
            from.data = result;
            init(from);
            var isView = result.state == '2';
            utils.selectInit(vm.data,isView);
        }
    });

    function init(from) {
        vm = new Vue({
            el: '#visitAfter',
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
                url: '/visit/step/after',
                type: 'post',
                data: vm.data,
                success: function(_data) {
                    jForm.validator('cleanUp');
                    location = '/visit/after?id=' + id;
                }
            });
        });
    }

    jForm.validator({
        fields: {
            // name: {
            //     rule: 'required;',
            //     msgStyle: 'position: absolute;top: 28px;left: -6px;'
            // }
        }
    });

})(jQuery, Vue);
