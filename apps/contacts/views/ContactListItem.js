define(function(require, exports, module) {

	var ContactListItemTemplate = require('tpl!templates/contact_list_item.jst');

    // ContactListItem class - Item view
    return Backbone.Marionette.ItemView.extend({
        tagName: 'div',
        className: 'contact-card',
        template: ContactListItemTemplate
    });

});