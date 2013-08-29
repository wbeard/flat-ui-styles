define(["dojo/dom",
        "dojo/router",
        "./stringOperations"],
    function (  dom,
                router,
                stringOps) {
       return function (evt) {
            var node;
            //Normalize event vs. domNode vs. string to var node
            if (!evt.target) {
                if(typeof evt === "string") {
                    node = dom.byId(evt);
                } else {
                    node = evt;
                }
            } else {
                evt.preventDefault();
                node = evt.target;
            }

            //Normalize node. If it doesn't have the data-href attribute go up the tree until you find one.
            if (!domAttr.get(node, "data-href")) {
                node = query(node).parents("[data-href]")[0];
            }

            //Begin hash operations
            var currentHash = location.hash,
                hrefInstructor = domAttr.get(node, "data-href"),
                navigateOperator = hrefInstructor.charAt(0),
                href = stringOps.minusFirstChar(href),
                absolutePath = "~",
                relativeAddToPath = "+",
                relativeRemoveFromPath = "-",
                newHash;

            if (navigateOperator === absolutePath) {
                newHash = href;
            }
            else if (navigateOperator === relativeAddToPath) {
                newHash = currentHash += href;
            }
            else if (navigateOperator === relativeRemoveFromPath) {
                newHash = currentHash.split(href)[0];
            }

            router.go(newHash);

        };
    }
);