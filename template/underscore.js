this["JST"] = this["JST"] || {};

this["JST"]["app/templates/homepage.us"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<!DOCTYPE html>\n<html>\n  <head>\n    <title>'+
( pkg.name )+
'</title>\n\n    <link rel="stylesheet" type="text/css" href="'+
( css )+
'" media="all" />\n  </head>\n  <body>\n    <div class="navbar navbar-fixed-top navbar-inverse clearfix">\n      <div class="navbar-inner">\n        <div class="container">\n          <a class="brand" href="#">'+
( pkg.name )+
'</a>\n        </div>\n      </div>\n    </div>\n\n    <br>\n    <br>\n\n    <div class="container">\n      <div class="row">\n        <div class="menu">\n        </div>\n      </div>\n    </div>\n    <script type="text/javascript" src="'+
( js )+
'"></script>\n    <script type="text/javascript">\n      var menu = new TableXIExercise.Collections.Menu();\n      var menuView = new TableXIExercise.Views.Menu({ model: menu });\n      menu.fetch();\n      menuView.render();\n    </script>\n  </body>\n</html>\n';
}
return __p;
};