define(function(require, exports, module) {

    var SearchInputTemplate = require('tpl!templates/contacts_search/search_input.jst'),
        Contacts = require('collections/Contacts'),
        SearchResultsView = require('views/contacts_search/SearchResults');

    // SearchInput View
    return Backbone.Marionette.ItemView.extend({

        //template: ContactSearchInputTemplate,

        events: {
            'keyup [data-contact-search="input"]': 'search',
            'keypress [data-contact-search="input"]': 'onkeypress'
        },

        initialize: function(/*model,options*/) {
            this.searchResults = new Contacts();

            this.searchResultsView = new SearchResultsView({ 'collection': this.searchResults });

            //this.listenTo(this.model, 'reset', this.update);
            //this.model = this.searchResults;
            this.listenTo(this.searchResults, 'reset', this.update);
            //this.listenTo(this.model, 'reset', this.update);
        },

        update: function (/*model, collection, options*/) {
            if (this.searchResults.length > 0)
                $(this.el).find('.dropdown').addClass('open');
            else
                $(this.el).find('.dropdown').removeClass('open');
        },

        render: function() {
            this.$el.html(SearchInputTemplate());
            this.renderSearchResults();
            return this;
        },

        renderSearchResults: function() {
            $(this.el).find('form.navbar-search').append(
                this.searchResultsView.render().el);
        },

        search: function (e) {
            //if (e.keyCode == 40) { // Down
            //    $('ul.dropdown-menu').find('a').first().focus();
            //} else if (e.keyCode == 38) { // Up
            //}
            var input = $(e.currentTarget);
            var key = input.val();
            if (key.length == 0) {
                this.searchResults.reset();
                $(this.el).find('.dropdown').removeClass('open');
                return;
            }
            //this._searchResults.fetch({reset: true, data: {search: key}});
            this.searchResults.fetch({reset: true, data: 'search='+ key});
            //$(this.el).find('.dropdown').addClass('open');
        },

        onkeypress: function (e) {
            if (e.keyCode === 13) { // enter key pressed
                //e.preventDefault();
                return false; // Prevent form submit
            }
        }

    });

});