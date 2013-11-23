define(function(require, exports, module) {

	var AboutTemplate = require('tpl!templates/about.jst');

    // ItemView provides some default rendering logic
    return Backbone.Marionette.ItemView.extend({
        template: AboutTemplate
    });

});