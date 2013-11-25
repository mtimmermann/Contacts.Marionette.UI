define(function(require, exports, module) {

	var ContactListLayout = require('tpl!templates/contact_list_layout.jst');

    return Backbone.Marionette.Layout.extend({

        template: ContactListLayout,

        regions: {
            paginatorTop: '#paginator-top',
            contactSearch: '#contact-search',
            contactList: BaseClasses.RegionFadeIn.extend({ el: '#contact-list' }),
            paginatorBottom: '#paginator-bottom'
        }
    });

});