/* global define */
/* global Backbone */
/* global app */

define(function(require, exports, module) {
    // var Collections01 = require('collections/collections01'),
    //     Collections02 = require('collections/collections02');

    var App = Backbone.View.extend({
        initialize:  function(options){
            options = options || {};

            if(options.app){
                this.app = options.app;
            }else{
                throw(new Error('no app'));
            }

            // this.app.collections.collections01 = new Collections01();
            // this.app.collections.collections02 = new Collections02();
        }
       
    });

    return App;
});
