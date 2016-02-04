(function($, vue) {
    var customerId = utils.getQueryString('c') || null,
        directorId = utils.getQueryString('d') || null;

    var vm = new Vue({
        el: '#visitListPersonal',
        data: {
            customer_id:customerId,
            items: []
        }
    })

    $.ajax({
        url: '/visit',
        type: 'get',
        data:{
            customer_id:customerId,
            director_id:directorId
        },
        success: function(result) {
            vm.items = result.items;
        }
    });


})(jQuery, Vue);
