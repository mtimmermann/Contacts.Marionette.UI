/* global define */
/* global $ */
/* global _ */
/* global Backbone */
/* global app */

define(function(require, exports, module) {

    var PortalIndexView = require('views/PortalIndex');

	var Router = Backbone.Router.extend({
	    routes: {
            '': 'index'
	    },

	    initialize: function (options) {
            options = options || {};
            this.app = options.app;
	    },

	    index: function () {

            if (!app.views.portalIndex) {
                app.views.portalIndex = new PortalIndexView();
            }
            app.views.portalIndex.render();
	    }

	});

	return Router;
});


