
// define(function(require, exports, module) {

// 	var BaseApp = require('BaseApp');
// 	BaseApp.List = {};
// 	BaseApp.List.Controller = require('controllers/List');

// 	BaseApp.module("ContactsApp", function(ContactsApp, BaseApp, Backbone, Marionette, $, _) {

// 		ContactsApp.Router = Marionette.AppRouter.extend({
// 			appRoutes: {
// 				"contacts(/filter/criterion::criterion)": "listContacts",
// 				"contacts/:id": "showContact",
// 				"contacts/:id/edit": "editContact"
// 			}
// 		});

// 		var API = {
// 			listContacts: function(criterion) {
// 				ContactsApp.List.Controller.listContacts(criterion);
// 				BaseApp.execute("set:active:header", "contacts");
// 			},

// 			showContact: function(id) {
// 				ContactsApp.Show.Controller.showContact(id);
// 				BaseApp.execute("set:active:header", "contacts");
// 			},

// 			editContact: function(id) {
// 				ContactsApp.Edit.Controller.editContact(id);
// 				BaseApp.execute("set:active:header", "contacts");
// 			}
// 		};


// 		BaseApp.on("contacts:list", function() {
// 			BaseApp.navigate("contacts");
// 			API.listContacts();
// 		});

// 		BaseApp.on("contacts:filter", function(criterion) {
// 			if(criterion) {
// 				BaseApp.navigate("contacts/filter/criterion:" + criterion);
// 			} else {
// 				BaseApp.navigate("contacts");
// 			}
// 		});

// 		BaseApp.on("contact:show", function(id) {
// 			BaseApp.navigate("contacts/" + id);
// 			API.showContact(id);
// 		});

// 		BaseApp.on("contact:edit", function(id) {
// 			BaseApp.navigate("contacts/" + id + "/edit");
// 			API.editContact(id);
// 		});

// 		BaseApp.addInitializer(function() {
// 			new ContactsApp.Router({
// 				controller: API
// 			});
// 		});

// 	});


// 	//var Router = Backbone.Router.extend({});

// 	//return Router;
// 	return BaseApp; // BaseApp is complete AppContacts
// });