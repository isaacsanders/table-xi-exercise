/* Exports an object that defines
 *  all of the paths & globs that the project
 *  is concerned with.
 *
 * The "configure" task will require this file and
 *  then re-initialize the grunt config such that
 *  directives like <config:files.js.app> will work
 *  regardless of the point you're at in the build
 *  lifecycle.
 *
 * You can find the parent object in: node_modules/lineman/config/files.js
 */

module.exports = require('lineman').config.extend('files', {
  //Override file patterns here
  js: {
    vendor: [
      "vendor/js/jquery.js",
      "vendor/js/underscore.js",
      "vendor/js/backbone.js",
      "vendor/js/backbone.localStorage.js",
      "vendor/js/bootstrap.js",
      "vendor/js/handlebars.js",
      "vendor/js/**/*.js"
    ],
    app: [
      "app/js/namespace.js",
      "app/js/models.js",
      "app/js/collections.js",
      "app/js/views.js",
      "app/js/routers.js",
      "app/js/start.js",
      "app/js/**/*.js"
    ],
    specHelpers: "spec/helpers/**/*.js",
    spec: "spec/**/*.js"
  },
  css: {
    vendor: [
      "vendor/css/bootstrap.css",
      "vendor/css/**/*.css",
      "vendor/css/bootstrap-responsive.css"
    ]
  },
  img: {
    vendor: [
      "vendor/img/glyphicons-halflings-white.png",
      "vendor/img/glyphicons-halflings.png"
    ]
  }
});
