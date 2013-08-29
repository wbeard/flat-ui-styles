define(["dojo/_base/declare",
        "dojo/dom",
        "dojo/query",
        "./modal",
        "dojo/text!./templates/modal-confirm-dialog.htm"],
    function (declare,
              dom,
              query,
                Modal,
                template) {
        return declare(Modal, {
            constructor: function () {
                this.template = template;
            },
            fire: function () {
                this.inherited(arguments);
                this.confirmButtonNode = query(".back-panel .button-continue", dom.byId(this._id))[0];
            }
        });
    }
);