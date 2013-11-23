define(function(require, exports, module) {

    var ContactSearchInputTemplate = require('tpl!templates/contact_search_input.jst');

    // ContactSearchInput View
    return Backbone.Marionette.ItemView.extend({

        template: ContactSearchInputTemplate,

        //events: {},

        //initialize: function(/*model,options*/) { },

        render: function() {
            this.$el.html(ContactSearchInputTemplate());
            return this;
        }

    });

});