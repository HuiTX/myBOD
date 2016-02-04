(function($, vue) {
    $.ajax({
        url: '/customer/findChildren',
        type: 'get',
        data: {
            path: '1-',
            size: 5
        },
        success: function(result) {
            // console.log(result);
            init(result);

        }
    });

    function init(result) {
        new Vue({
            el: '#customList',
            data: {
                items: result.items,
                users: result.user
            },
            methods: {
                ckColleague: function(item) {
                    var id = item.id;
                    var name = escape(item.name);
                    location.href = '/customer/personal?id=' + id + '&name=' +name;
                }
            }
        })
    }

})(jQuery, Vue);
