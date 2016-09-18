(function($) {
    $.fn.goTo = function() {
        $('.content').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);