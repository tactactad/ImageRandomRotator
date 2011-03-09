;(function($) {
    var extendOpts = function(options) {
        return $.extend({}, $.fn.randomRotateImage.defaults, options);
    };

    var randomRotate = function(dom, opts) {
        var deg = Math.random() * 3 - 1.5;
        var s = 'rotate(' + deg + 'deg)';
        $(dom).css("transform", s).css("-webkit-transform", s).
            css("-moz-transform", s).css(opts);
    };

    $.fn.randomRotate = function(options) {
        var opts = extendOpts(options);
        return this.each(function() {
            randomRotate(this, opts);
        });
    };

    $.fn.randomRotateImage = function(options) {
        var opts = extendOpts(options);
        return this.each(function() {
            $.each($(this).find('img'), function() {
                randomRotate(this, opts);
            });
        });
    };

    $.fn.randomRotateImage.defaults = {
        "padding": "5px",
        "border": "1px solid #cccccc",
        "box-shadow": "2px 2px 10px 0px rgba(0, 0, 0, 0.2)",
        "-webkit-box-shadow": "2px 2px 10px 0px rgba(0, 0, 0, 0.2)",
        "-moz-box-shadow": "2px 2px 10px 0px rgba(0, 0, 0, 0.2)",
        "border-radius": "2px",
        "-moz-border-radius": "2px"
    };
})(jQuery);
