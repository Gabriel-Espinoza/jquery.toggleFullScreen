(function ($) {
    $.fn.toggleFullScreen = function(options, callback) {
        
        var settings = $.extend({
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "fixed",
            display: "block",
            zindex: 999999
        }, options );

        var changedToFullScreen = false;

        if(this.data("toggleFullScreen-isFullScreen") === false) {
            
        }
        

        if (this.hasClass(className)) {
            var parentObject = this.data("toggleFullScreen-currentParent");
            this.appendTo(parentObject);
            this.removeClass(className);
        } else {
            var parentObject = this.parent();
            this.data("toggleFullScreen-currentParent", parentObject);
            this.appendTo("body");
            this.addClass(className);
        }

         if ($.isFunction(callback))
                callback(this, this, changedToFullScreen);
        
        return this;
    };

    // $.fn.toggleFullScreenActivator = function()
    // {
    //     var settings = $.extend({
    //         target_div: this.attr("data-toggleFullScreen-div")
    //     }, options );
    // }

}(jQuery));



// $(document).ready(function () {

//     $(this).toggleFullScreen(caca);

//     $(document).find("[data-toggleFullScreen='true']").click(function () {
//         $(this).toggleFullScreen(caca);
//     });

// });

// function caca(a,b,c) {
//     alert(a);
// }