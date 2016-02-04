(function($, vue) {
    var id = utils.getQueryString('id') || null;

    var vm = new Vue({
        el: '#customInfo',
        data: {
            basic: {},
            director: [],
            isDirector: true
        },
        methods: {
            ckDirector: function(item) {
                var id = item.director_id;
                location.href = '/director/info?action=view&id=' + id;
            }
        }
    })

    $.ajax({
        // url: '/customer/' + id,
        url: '/customer/joinDict?stage&price&budget&customer_id=' + id,
        type: 'get',
        success: function(result) {
            // console.log(result);
            vm.basic = result.items;
        }
    });

    $.ajax({
        url: '/director?role',
        type: 'get',
        data:{
            customer_id:id,
            size:2
        },
        success: function(result) {
            vm.director = result.items;
            if (!result.items.length) {
                vm.isDirector = false;
                // console.log(vm.isDirector)
            };
        }
    });


})(jQuery, Vue);
