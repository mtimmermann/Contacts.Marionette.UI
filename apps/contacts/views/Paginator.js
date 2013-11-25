define(function(require, exports, module) {

	var PaginatorTemplate = require('tpl!templates/paginator.jst');

    // Paginator View
    return Backbone.Marionette.ItemView.extend({

        template: PaginatorTemplate,

        events: {
        	'click [data-paginator-link="prev"]': 'prev',
        	'click [data-paginator-link="next"]': 'next'
        },

        initialize: function(model /*,options*/) {
        	this.collection = model;
        	//this.collection.listenTo(this.collection, 'change', this.render);
        	this.collection.listenTo(this.collection, 'reset', this.render);
        },

        render: function() {

            var paginationViewModel = {
                currentPage: this.collection.currentPage,
                totalPages: this.collection.totalPages
            };

        	this.$el.html(PaginatorTemplate(paginationViewModel));
        	return this;
        },

        prev: function() {
            App.Notifications.trigger('Paginator.onPrePage', null);
        	this.collection.previousPage({});
        	this.collection.getCollection();
            return false; // Prevent href="#"
        },

        next: function() {
            App.Notifications.trigger('Paginator.onPrePage', null);
        	this.collection.nextPage({});
        	//this.collection.goTo(this.collection.currentPage + 1);
        	this.collection.getCollection();
            return false; // Prefent href="#"
        }

    });

});