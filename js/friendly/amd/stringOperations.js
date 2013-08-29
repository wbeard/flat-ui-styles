define(function () {
    return {
        rest: function (str, optionalStringArgs) {
		    //normalize string args
		    if (typeof str === "string") {
		        var index = optionalStringArgs.index;
		        if (!optionalStringArgs.index) {
		            index = str.indexOf(optionalStringArgs.sliceChar);
		        }
		        return str.slice(index);
		    } else {
		        throw new Error("Must be a string");
		    }
		},

		minusFirstChar: function (str) {
		    return _rest(str, {
		        index: 1
		    });
		}
    };
});