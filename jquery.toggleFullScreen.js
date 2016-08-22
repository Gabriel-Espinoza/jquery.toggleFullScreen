(function ($) {
    $.fn.toggleFullScreen = function(cssOptions, callback) {
        
        var settings = $.extend({
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "fixed",
            display: "block",
            zindex: 999999,
            backgroundcolor: "white",
            class: null
        }, cssOptions );

        if(typeof this.data("toggleFullScreen-isFullScreen") === "undefined")
            this.data("toggleFullScreen-isFullScreen", false);
        var isFullScreen = this.data("toggleFullScreen-isFullScreen");

        if (isFullScreen) 
        {
            var parentObject = this.data("toggleFullScreen-currentParent");
            this.appendTo(parentObject);

            if(settings.class) {
                this.removeClass(settings.class);
            }
            else {
                var originalCssStyle = this.data("toggleFullScreen-currentCssStyle");
                setCss(this, originalCssStyle);
            }
        } 
        else 
        {
            var parentObject = this.parent();
            this.data("toggleFullScreen-currentParent", parentObject);
            this.appendTo("body");

            if(settings.class) {
                this.addClass(settings.class);
            }
            else {
                var originalCssStyle = getCurrentCss(this);
                this.data("toggleFullScreen-currentCssStyle", originalCssStyle);
                setCss(this, settings);
            }
        }

        this.data("toggleFullScreen-isFullScreen", !isFullScreen);
        if ($.isFunction(callback))
            callback(this, !isFullScreen);
        
        return this;
    };

   function setCss(domElement, rulesToApply) {
        domElement.css("width", rulesToApply.width)
            .css("height", rulesToApply.height)
            .css("top", rulesToApply.top)
            .css("left", rulesToApply.left)
            .css("position", rulesToApply.position)
            .css("display", rulesToApply.display)
            .css("background-color", rulesToApply.backgroundcolor)
            .css("z-index", rulesToApply.zindex);
   }

   function getCurrentCss(domElement) {
        var originalCssStyle = {
            width: domElement.css("width"),
            height: domElement.css("height"),
            top: domElement.css("top"),
            left: domElement.css("left"),
            position: domElement.css("position"),
            display: domElement.css("display"),
            backgroundcolor: domElement.css("background-color"),
            zindex: domElement.css("zindex"),
        }
        return originalCssStyle;
   }

}(jQuery));