/* global define */
/* global Backbone */
/* global $ */

define(function(require, exports, module) {

    //var LoginModel = require('models/Login');
    var PortalIndexTemplate = require('tpl!templates/portal_index.jst');

    var PortalIndex = Backbone.View.extend({

        el: '#container',

        //events: { },

        initialize: function () {
            //this.model = new LoginModel();            
            //Backbone.Validation.bind(this);
        },

        render: function() {
            this.$el.html(PortalIndexTemplate());
            return this;
        }

    });

    return PortalIndex;
});