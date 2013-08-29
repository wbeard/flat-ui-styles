define(["c8/uid"],
    function (uid) {

        return {
            fire: function (options) {
                this.options = $.extend(this.options, options);
                this._id = uid("modal");
                this.$id = "#" + this._id;
                $("body").append(this.structure());
                $(this.$id).fadeIn("fast");
                $(this.$id).children(".modal-window").slideDown("fast");
                $(this.$id).find('[data-function=close]').on("click", this.close.bind(this));
            },
            create: function (options) {

                this.options = $.extend(this.options, options);
                this._id = uid("modal");
                this.$id = "#" + this._id;
                return this.structure();
            },
            close: function () {
                $(this.$id).find('[data-function=close]').off("click");
                $(this.$id).fadeOut().remove();
            },
            options: {
                type: "message",
                header: "Howdy",
                body: "Things are looking good",
                button: "Alright, great!"
            },
            structure: function () {
                return '<div id="' + this._id + '" class="modal-bg modal-' + this.options.type + '"><div class="modal-window"><div class="modal-header"><h1>' + this.options.header + '</h1><i data-function="close" class="close"></i></div><div class="modal-body"><p>' + this.options.body + '</p></div><div class="modal-footer"><input type="button" data-function="close" class="button button-continue" value="' + this.options.button + '"></input></div></div></div>'
            }

        };

    });