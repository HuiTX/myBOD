(function($, vue) {
    var id = utils.getQueryString('id') || null;

    var vm = new Vue({
        el: '#directorList',
        data: {
            customerId:id,
            director: []
        },
        methods: {
            ckDirector: function(item) {
                var id = item.director_id;
                location.href = '/director/info?action=view&id=' + id;
            }
        }
    })

    $.ajax({
        url: '/director?role',
        type: 'get',
        data:{
            customer_id:id
        },
        success: function(result) {
            vm.director = result.items;
        }
    });


})(jQuery, Vue);
