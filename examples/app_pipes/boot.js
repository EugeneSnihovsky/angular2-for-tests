System.register(['angular2/platform/browser', './code/base.component'], function(exports_1) {
    var browser_1, base_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (base_component_1_1) {
                base_component_1 = base_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(base_component_1.BaseComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map