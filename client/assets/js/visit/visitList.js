(function($, vue) {
    // var id = utils.getQueryString('id') || null;

    var vm = new Vue({
        el: '#visitList',
        data: {
            // customerId:id,
            items: []
        }
    })

    $.ajax({
        url: '/visit/self',
        type: 'get',
        success: function(result) {
            vm.items = result.items;
        }
    });


})(jQuery, Vue);
