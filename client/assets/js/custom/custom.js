(function($, vue) {
    $.ajax({
        url: '/custom/get?userid=1',
        type: 'get',
        success: function() {

        }
    });

    new Vue({
        el: '#custom',
        data: {
            userid: '222'
        }
    })


})(jQuery, Vue);
