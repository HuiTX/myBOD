(function($, vue) {
    var id = utils.getQueryString('id');
    var name = decodeURI(utils.getQueryString('name'));
    
    if (id) {
        var url = '/customer?userId=' + id;
    } else {
        var url = '/customer/getBySelf';
        // var url = '/customer?userId=1';
        name = '我';
    };

    var vm = new Vue({
        el: '#customListPersonal',
        data: {
            colleaguenName: name,
            items: []
        }
    });


    $.ajax({
        url: url,
        type: 'get',
        success: function(result) {
            vm.items = result.items
        }
    });

})(jQuery, Vue);
