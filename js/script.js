// Load external svg file for using as inline svg
(function($) {
    $.fn.LoadSvg = function (url){
        $.get(url, function(data) {
            $('body').append(new XMLSerializer().serializeToString(data.documentElement));
        });
    }
})(jQuery);
