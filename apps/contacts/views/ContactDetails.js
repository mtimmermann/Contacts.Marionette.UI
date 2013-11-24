define(function(require, exports, module) {

    var ContactDetailsTemplate = require('tpl!templates/contact_details.jst');

    // ContactDetails class - Item view
    return Backbone.Marionette.ItemView.extend({

        template: ContactDetailsTemplate,

        events: {
            'click [data-contact-details="edit"]': 'edit'
        },

        initialize: function(options) {
            options = options || {};
            if (!options.model) {
                throw (new Error('ContactDetails View: model option is required'));
            }
        },

        edit: function() {
            App.appRouter.navigate('#contacts/edit/'+ this.model.get('id'), true);
        }
    });

});