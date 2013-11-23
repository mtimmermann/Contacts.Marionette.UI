/* global define */

define(function(require, exports, module) {

    var _ = require('underscore'),
       Backbone = require('backbone'),
       PortalApp = require('app'),
       Plugins = require('plugins');

    $(function(){
        window.app = PortalApp;
        window.app.initialize();
    });
});
