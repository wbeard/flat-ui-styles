define(["dojo/_base/declare",
        "dojo/_base/lang",
        "c8/uid",
        "dojo/query",
        "dojo/dom",
        "dojo/dom-construct",
        "dojo/dom-style",
        "dojo/on",
        "dijit/focus",
        "dojo/_base/fx",
        "dojo/string",
        "dojo/text!./templates/modal_new.html"],
    function (declare, lang, uid, query, dom, domConstruct, domStyle, on, focusUtil, fx, string, template) {

        return declare(null, {

            type: "message",
            header: "Howdy",
            body: "Things are looking good",
            button: "Alright, great!",
            cancelButton: false,

            constructor: function (options) {

                this.options = lang.mixin(this, options);
                this._id = uid("modal");
                this.template = template;

                return this;
            },

            fire: function () {
                domConstruct.place(this.structure(), query("body")[0]);
                this.domElem = dom.byId(this._id);
                this.buttonNode = this.button = query("input[type='button']", dom.byId(this._id))[0];
                this.loaders = query(".loader", dom.byId(this._id));

                this.registerEvents();

                //focus
                focusUtil.focus(query('input[data-function=close]', this.domElem)[0]);

            },

            registerEvents: function () {
                //click close
                on.once(query('[data-function=close]', this.domElem), "click", lang.hitch(this, this.close));

                //esc to close
                on.once(this.domElem, "keydown", lang.hitch(this, function (evt) {
                    var charC = (evt.which) ? evt.which : evt.keyCode;

                    if (charC === 27) {
                        this.close();
                    }
                }));
            },

            startLoad: function () {
                this.loaders.forEach(function (node) {
                    domStyle.set(node, "display", "block");
                });

            },

            stopLoad: function () {
                this.loaders.forEach(function (node) {
                    domStyle.set(node, "display", "none");
                });
            },

            create: function (options) {
                this.options = lang.mixin(this.options, options);
                this._id = uid("modal");
                return this.structure();
            },

            close: function () {
                //Hitch function to object, loses scope in callback
                onEndBound = lang.hitch(this, function () {
                    domConstruct.destroy(this._id)
                });

                fx.fadeOut({
                    node: this._id,
                    duration: 100,
                    onEnd: onEndBound
                }).play();

            },

            structure: function () {
                return string.substitute(this.template, this);
            }

        });

    });