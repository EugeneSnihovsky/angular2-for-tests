System.register(['angular2/platform/browser', './app.component', 'angular2/core', './app-config'], function(exports_1) {
    var browser_1, app_component_1, core_1, app_config_1, app_config_2;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
                app_config_2 = app_config_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [core_1.provide(app_config_2.APP_CONFIG, { useValue: app_config_1.CONFIG })]);
        }
    }
});
//# sourceMappingURL=boot.js.map