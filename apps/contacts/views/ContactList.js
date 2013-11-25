define(function(require, exports, module) {

	var ContactListTemplate = require('tpl!templates/contact_list.jst'),
		//Contacts = require('collections/Contacts'),
		ContactListItemView = require('views/ContactListItem');

    // ContactList class - Composite view
    return Backbone.Marionette.CompositeView.extend({
        tagName: 'div',
        className: 'row',
        template: ContactListTemplate,
        itemView: ContactListItemView,
        //collection: Contacts,

        initialize: function(options) {
            options = options || {};
            if (!options.collection) {
                throw (new Error('ContactList View: collection option is required'));
            }
        }

    });

});