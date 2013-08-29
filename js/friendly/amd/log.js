/**
 * log is a tool that is sensitive to debug mode and checks if console is available (for IE compatibility).
 * @module c8/log
 * @param {string} message - The message to pass to the console.
 */
define(
    function () {
        return function () {
            if (!dojoConfig.isDebug) return;
            if (typeof console == "undefined") return;

            var args = Array.prototype.slice.call(arguments, 0);

            console.log.apply(console, args);
        }
    }
);