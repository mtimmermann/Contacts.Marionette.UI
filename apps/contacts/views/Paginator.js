define(function(require, exports, module) {

	var PaginatorTemplate = require('tpl!templates/paginator.jst');

    // ItemView provides some default rendering logic
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
        	this.collection.previousPage({});
        	this.collection.getCollection();
        },

        next: function() {
        	this.collection.nextPage({});
        	//this.collection.goTo(this.collection.currentPage + 1);
        	this.collection.getCollection();
        },
/*
		<% _.each (pageSet, function (p) { %>
			<% if (currentPage == p) { %>
				<li class="active"><span><%= p %></span></li>
			<% } else { %>
				<li><a href="#" class="page"><%= p %></a></li>
			<% } %>
		<% }); %>
*/

    });

});