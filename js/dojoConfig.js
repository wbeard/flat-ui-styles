// Dojo configuration
// dojoConfig global must be declared before grabbing dojo.js
dojoConfig = {
    baseUrl: "/fiat/",
    parseOnLoad: false,
    isDebug: false,
    packages: [
        {
            name: "c8",
            location: "js/friendly/amd"
        }
	]
}