define(function(require, exports, module) {

    var ContactSearchInputTemplate = require('tpl!templates/contact_search_input.jst'),
        Contacts = require('collections/Contacts');

    // ContactSearchInput View
    return Backbone.Marionette.ItemView.extend({

        template: ContactSearchInputTemplate,

        events: {
            'keyup [data-contact-search="input"]': 'search',
            'keypress [data-contact-search="input"]': 'onkeypress'
        },

        initialize: function(/*model,options*/) {
            this._searchResults = new Contacts();
        },

        render: function() {
            this.$el.html(ContactSearchInputTemplate());
            return this;
        },

        search: function (e) {
            //if (e.keyCode == 40) { // Down
            //    $('ul.dropdown-menu').find('a').first().focus();
            //} else if (e.keyCode == 38) { // Up
            //}
            /*
            var input = $(e.currentTarget);
            var key = input.val();
            if (key.length == 0) {
                this.searchResults.reset();
                $(this.el).find('.dropdown').removeClass('open');
                return;
            }
            this.searchResults.fetch({reset: true, data: {search: key}});
            //$(this.el).find('.dropdown').addClass('open');
            */
        },

        onkeypress: function (e) {
            if (e.keyCode === 13) { // enter key pressed
                //e.preventDefault();
                return false; // Prevent form submit
            }
        }

    });

});