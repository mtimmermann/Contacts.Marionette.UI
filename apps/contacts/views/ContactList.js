define(function(require, exports, module) {

	var ContactListTemplate = require('tpl!templates/contact_list.jst'),
		//Contacts = require('collections/Contacts'),
		ContactListItemView = require('views/ContactListItem');

    // ContactList class - Composite view
    return Backbone.Marionette.CompositeView.extend({
    	tagName: 'ul',
    	className: 'thumbnails',
        template: ContactListTemplate,
        itemView: ContactListItemView,
        //collection: Contacts,
    });

});