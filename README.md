Contacts.Marionette
====================

Following the structure of 
https://github.com/BoilerplateMVC/Marionette-Require-Boilerplate.git




## Getting started ##

Install [Node.js](http://nodejs.org/) if you want
to use the commands in the following sections.

## Updating dependencies ##

Third party packages may update independently from this main repo, so it's a
good idea to update after fetching.

``` bash
# Install global dependencies.
npm i -gq grunt-cli bower

# Optionally install coveralls (integration is baked in with Travis CI).
npm i -gq coveralls

# Install NPM dependencies.
npm i -q

# Install Bower dependencies.
bower i -s
```

## Build process ##

The build process consists of numerous Grunt plugin tasks that work together
to optimize your application.

``` bash
# To run the build process, run the default Grunt task.
grunt

# Run a build and test the now optimized assets.
grunt default server:release
```
