; (function ($, window) {

    c8 = window.c8 || {};

    c8.alert = {
        fire: function (options) {
            this.options = $.extend(this.options, options);
            this._id = c8.uid("alert");
            this.$id = "#" + this._id;
            $(this.options.target).append(this.structure());
            $(this.$id).fadeIn("fast");
            $(this.$id).find('[data-function=close]').on("click", this.close.bind(this));

            return this;
        },
        create: function(options) {

            this.options = $.extend(this.options, options);
            this._id = c8.uid("alert");
            this.$id = "#" + this._id;

            return this.structure();
        },
        close: function() {
            $(this.$id).find('[data-function=close]').off("click");
            $(this.$id).fadeOut().remove();
        },
        options: {
            type: "error",
            body: "Good job!",
            target: "body"
        },
        structure: function () {
            return '<div id="' + this._id + '" class="alert alert-' + this.options.type + '"><i data-function="close" class="close"></i><div class="content"><p>' + this.options.body + '</p></div></div>' 
        }
    }

})(jQuery, window);