System.register(['angular2/core'], function(exports_1) {
    var core_1;
    var CONFIG, APP_CONFIG;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("CONFIG", CONFIG = {
                apiEndpoint: 'api.heroes.com',
                title: 'Dependency Injection'
            });
            exports_1("APP_CONFIG", APP_CONFIG = new core_1.OpaqueToken('app.config'));
        }
    }
});
//# sourceMappingURL=app-config.js.map