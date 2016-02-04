(function($, vue) {
    var id = utils.getQueryString('id'),
        customerId = utils.getQueryString('c') || null,
        directorId = utils.getQueryString('d') || null;
    var jForm = $('#visitBeforeForm');

    var vm;


    var from = {
        status: {
            id:id
        },
        data: {
            customer_id: customerId,
            director_id: directorId,
            way: '',
            purpose: [],
            stage: '',
            state:'0',
            relation: ''
        }
    }

    if (id) {
        $.ajax({
            url: '/visit/' + id,
            type: 'get',
            success: function(result) {
                from.data = result;
                init(from);

                $('select[data-attr="director_id"]').children('option').text(vm.data.director);
                var isView = vm.data.state > 0;
                utils.selectInit(vm.data,isView);
            }
        });
    } else {
        init(from);
        utils.selectInit(vm.data,false);
    }
    function init(from) {
        vm = new Vue({
            el: '#visitBefore',
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
                url: '/visit/step/before',
                type: 'post',
                data: vm.data,
                success: function(_data) {
                    jForm.validator('cleanUp');
                    location = '/visit/before?id=' + _data.id;
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
