define(function(require, exports, module) {

	var ContactListLayout = require('tpl!templates/contact_list_layout.jst');

    return Backbone.Marionette.Layout.extend({

        template: ContactListLayout,

        regions: {
            paginatorTop: "#paginator-top",
            contactList: "#contact-list",
            paginatorBottom: '#paginator-bottom'
        }
    });

});