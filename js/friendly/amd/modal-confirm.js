define(["dojo/_base/declare",
        "./modal",
        "dojo/text!./templates/modal-confirm.htm"],
    function (declare,
                Modal,
                template) {
        return declare(Modal, {
            constructor: function () {
                this.template = template;
            }
        });
    }
);