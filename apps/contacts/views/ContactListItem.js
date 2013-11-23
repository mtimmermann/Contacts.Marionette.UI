define(function(require, exports, module) {

	var ContactListItemTemplate = require('tpl!templates/contact_list_item.jst');

    return Backbone.Marionette.ItemView.extend({
    	tagName: 'li',
    	className: 'span3',
        template: ContactListItemTemplate
    });

});