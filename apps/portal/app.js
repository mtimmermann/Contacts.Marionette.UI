/* global define */
/* global _ */
/* global Backbone */

define(function(require, exports, module) {
   
    var PortalRouter = require('router'),
        AppView = require('views/app');
        //UserModel = require('models/user');

    var app = {
        models: {},
        collections: {},
        views: {
            pocket: {}
        }
    };

    app.initialize = function(){

        // app.models.user = new UserModel();
        // app.models.user.deferred.done(function(response) {
            // if(!response.error) {

                app.customEvents = {};
                _.extend(app.customEvents, Backbone.Events);

                app.views.app_view = new AppView({'app': app});
                app.router = new PortalRouter({'app': app });
                
                Backbone.history.start();
            // }else{
            //     window.location.replace('/login');
            // }
        // }).fail(function(response){
        //     window.location.replace('/login');
        // });
    };

    return app;

});
