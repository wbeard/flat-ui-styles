require(function () {

    var Class = function (parent) {

        var klass = function () {
            this.init.apply(this, arguments);
        };

        if (parent) {
            var subclass = function () { };
            subclass.prototype = parent.prototype;
            klass.prototype = new subclass;
        }

        klass.prototype.int = function () {
        };

        klass.fn = klass.prototype;
        klass.fn.parent = klass;
        klass._super = klass.__proto__;

        klass.extend = function (obj) {

            var extended = obj.extended;

            for (var i in obj) {
                klass[i] = obj[i];
            }

            if (extended) {
                extended(klass);
            }

        };

        klass.include = function (obj) {
            var included = obj.included;
            for (var i in obj) {
                klass.fn[i] = obj[i];
            }
            if (included) {
                included(klass);
            }
        };

        klass.proxy = function (func, thisObject) {
            return (function () {
                return func.apply(thisObject, arguments);
            });
        };

        klass.fn.proxy = klass.proxy;

        return klass;

    };

    return Class;

});