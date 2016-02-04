var utils = function() {
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };

    function selectInit(data,isView) {
        $('.multipleSelect').each(function(index, item) {
            return (function(item) {
                $(item).mobiscroll().select({
                    theme: 'mobiscroll',
                    display: 'bottom',
                    placeholder: '请选择',
                    minWidth: 200,
                    disabled:isView,
                    onInit: (function(item) {
                        var attr = $(item).attr('data-attr'),
                            i = data[attr];
                        $(item).val(i);
                    })(item),
                    onSelect: (function(item) {
                        return function(text, inst) {
                            var attr = $(item).attr('data-attr');
                            data[attr] = inst.getVal();

                            $(item).parent().find('input.mbsc-control').css({
                                color: '#333'
                            })
                        }
                    })(item)
                });
                //请选择时变灰
                var itemInput = $(item).parent().find('input.mbsc-control');
                selectInputColor(itemInput);

            })(item);
        });
    }

    function selectInputColor(input) {
        if ($(input).val() == '请选择') {
            $(input).css({
                color: '#aaa'
            });
        }
    }

    return {
        getQueryString: getQueryString,
        selectInit: selectInit,
        // selectInputColor:selectInputColor
    };
}();


(function($) {
    // rewrite jquery ajax

    var _ajax = $.ajax;

    var ajax = $.ajax = function(options) {

        var deferred = $.Deferred();

        // not use cache
        options.data = options.data || {};

        // url
        options.url = '/api' + options.url;

        // change data format
        if (options.type && (options.type.toLowerCase() === 'post' || options.type.toLowerCase() === 'put')) {
            if (options.contentType === false) {} else {
                options.data = typeof options.data != 'string' ? JSON.stringify(options.data) : options.data;
            }
        } else {
            // random params
            // options.data.r = Math.random();
        }

        // set content type
        if (options.contentType === false) {} else if (!options.contentType) {
            options.contentType = 'application/json; charset=UTF-8';
        }

        // copy
        var _options = $.extend(true, {}, options),
            _success = $.isFunction(_options.success) ? _options.success : $.noop,
            _error = $.isFunction(_options.error) ? _options.error : $.noop;

        // rewrite success
        _options.success = function(msg, status, xhr) {
            msg = tryParseJSON(msg) || msg;
            // success
            _success.call(this, msg, status, xhr);
            // deferred handle
            deferred.resolve(msg, status, xhr);
        };
        _options.error = function(xhr, status, msg) {
            var result = tryParseJSON(xhr.responseText);

            //TODO: ajax global error handler

            _error.call(this, xhr, status, msg);
            // deferred handle
            deferred.reject(xhr, status, msg);
        };
        return $.extend(_ajax(_options), deferred.promise());
    };

    function tryParseJSON(data) {
        try {
            return JSON.parse(data);
        } catch (e) {
            return false;
        }
    }
})(jQuery);
