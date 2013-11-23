define(function(require, exports, module) {

	var App = require('App'),
		HeaderView = require('views/Header'),
		ContactListLayout = require('views/ContactListLayout'),
		ContactListView = require('views/ContactList'),
        ContactDetailsView = require('views/ContactDetails'),
        ContactEditView = require('views/ContactEdit'),
		PaginatorView = require('views/Paginator'),
		Contacts = require('collections/Contacts'),
        Contact = require('models/Contact'),
		AboutView = require('views/About');

    return Backbone.Marionette.Controller.extend({

        initialize: function (options) {
        	this._headerView = new HeaderView();
            App.headerRegion.show(this._headerView);
        },

        // AppRouter appRoutes

        index: function () {
        	this._headerView.setActiveLink('index');

            this._initContactCollection();

        	//$.when.apply([contactsCollection.deferred]).done(function () {
            //$.when.apply([contactsCollection.deferred.promise()]).done(function () {
            $.when(App.collections.contacts.deferred.promise()).done(function () {
        		var contactListLayout = new ContactListLayout();
        		App.mainRegion.show(contactListLayout);

                // Show Contact List region
                contactListLayout.contactList.show(
					new ContactListView({'collection': App.collections.contacts}));

                // Show pagination regions
                contactListLayout.paginatorTop.show(
                    new PaginatorView(App.collections.contacts));
                contactListLayout.paginatorBottom.show(
                    new PaginatorView(App.collections.contacts));
        	});
        },

        contactDetails: function(contactID) {
            this._headerView.setActiveLink('none');
            if (!App.collections.contacts) {
                this._initContactCollection();
            }
            $.when(App.collections.contacts.deferred.promise()).done(function () {
                var contact = _.findWhere(App.collections.contacts.models, {'id': contactID});
                if (contact) {
                    App.mainRegion.show(new ContactDetailsView({'model': contact}));
                } else {
                    // TODO: Not Found view
                }
            });
        },

        contactEdit: function(contactID) {
            this._headerView.setActiveLink('none');
            var contact = new Contact({'id': contactID});
            var deferred = contact.fetch();
            $.when(deferred.promise()).done(function () {
                App.mainRegion.show(new ContactEditView({model: contact}));
            }).fail(function(jqXHR/*, textStatus, errorThrown*/) {
                if (jqXHR.status == 404) {
                    // TODO: 404 - Bootstrap alert message or view
                } else {
                    // TODO: General server - Bootstrap alert message or view
                } 
            });
        },

        contactAdd: function() {
            this._headerView.setActiveLink('add');
            var contact = new Contact();
            App.mainRegion.show(new ContactEditView({model: contact}));
        },

        about: function() {
        	this._headerView.setActiveLink('about');
        	App.mainRegion.show(new AboutView());
        },

        _initContactCollection: function() {
            App.collections.contacts = new Contacts();
            App.collections.contacts.getCollection();
        }
    });

});