Contacts.Marionette.UI
======================

A simple example of using Backbone.Marionette to maintain a list of contacts.
This site implements paging using the Backbone.Paginator (which extends a collection),
and using Backbone Marionette Layouts, Regions, Composite views, and Item Views.
Searching contacts, editing, and adding is also included.

This site follows some of some of the structure laid out at:
https://github.com/BoilerplateMVC/Marionette-Require-Boilerplate.git


## Prerequisites ##
[Node.js](http://nodejs.org/) must be installed in order to build this site.

To run this site, the [Contacts.Marionette.App](https://github.com/mtimmermann/Contacts.Marionette.App) must first be setup and running ([see the README for that project](https://github.com/mtimmermann/Contacts.Marionette.App)). I am also using NGINX to serve up the static content
of this site, and handle proxy passes to the [Contacts.Marionette.App](https://github.com/mtimmermann/Contacts.Marionette.App) NodeJS app, the configuration can be found there.


## Updating dependencies ##
Using node package manager:

npm install


## Build ##
grunt

optionally run "grunt watch" if you want rebuilds when files are modified, deleted, added.
