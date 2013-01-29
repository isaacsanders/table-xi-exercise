this["JST"] = this["JST"] || {};

this["JST"]["app/templates/menu.hb"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = {};
  stack1 = helpers['with'].call(depth0, depth0, {hash:stack1,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n        <tr>\n          <td>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n          <td>";
  foundHelper = helpers.cost;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cost; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n        </tr>\n      ";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <input type=\"text\" class=\"input-large\" id=\"desired-cost\" placeholder=\"Desired Cost\" value=\"";
  foundHelper = helpers.desiredCost;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.desiredCost; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n  ";
  return buffer;}

function program6(depth0,data) {
  
  
  return "\n    <input type=\"text\" class=\"input-large\" id=\"desired-cost\" placeholder=\"Desired Cost\">\n  ";}

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  stack1 = depth0.dishes;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program9(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Cost ($)</th>\n          </tr>\n        </thead>\n        <tbody>\n          ";
  stack1 = depth0.dishes;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <tr>\n            <strong>\n              <td>Total</td>\n              <td>";
  foundHelper = helpers.sum;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sum; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n            </strong>\n          </tr>\n        </tbody>\n      </table>\n    ";
  return buffer;}
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = {};
  stack1 = helpers['with'].call(depth0, depth0, {hash:stack1,inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;}
function program11(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n              <tr>\n                <td>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n                <td>";
  foundHelper = helpers.cost;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cost; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n              </tr>\n            ";
  return buffer;}

  buffer += "<div class=\"span8\">\n<h1>Menu</h1>\n<p>Add some dishes to the menu and give a desired price to find out what exactly you get!</p>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Cost ($)</th>\n    </tr>\n  </thead>\n  <tbody>\n    ";
  stack1 = depth0.dishes;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </tbody>\n</table>\n\n<form class=\"form-inline\" name=\"new-dish\" id=\"new-dish\">\n  <input type=\"text\" class=\"input-small\" name=\"name\" placeholder=\"Name\">\n  <input type=\"text\" class=\"input-small\" name=\"cost\" placeholder=\"Cost\">\n  <button type=button class=\"btn btn-primary\">New Dish</button>\n</form>\n\n<button class=\"btn btn-danger\" id=\"delete-all\">Destroy All</button>\n</div>\n<div class=\"span4\">\n  <h1>Order</h1>\n  ";
  stack1 = depth0.desiredCost;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = depth0.order;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;});