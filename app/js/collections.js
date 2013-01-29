(function(root) {
  root.Collections = {
    Menu: Backbone.Collection.extend({
      model: root.Models.Dish,
      localStorage: new Backbone.LocalStorage("tablexiexercise-collections-menu"),
      orderFor: function(cost, dishes) {
        cost = Math.round(cost * 100) / 100;

        var getCost = function(dish){
          return dish.cost();
        };

        var lowerThan = function(cost) {
          return function(dish) { return getCost(dish) <= cost; };
        };

        var dishesBelow = function(dishes) {
          return function (cost) { return dishes.filter(lowerThan(cost)); };
        }(this.models);

        var addToQueue = function(dish) {
          var order = _([dish]).flatten();
          queue.push(order, order.map(getCost));
        };

        var add = function(a, b) {
          return a + b;
        };

        var getAttrs = function(dish) {
          return dish.attributes;
        };

        dishes = dishes ? _(dishes) : _(dishesBelow(cost));

        if (cost <= 0 || dishes.isEmpty()) {
          return [];
        }

        var queue = new PriorityQueue({low: true});

        dishes.forEach(addToQueue);

        var concat = function(a) {
          return function(b){ return a.concat(b); };
        };

        while (!queue.empty()) {
          var current = queue.pop();
          var currentCost = Math.round(current.map(getCost).reduce(add, 0.0) * 100) / 100.0;
          if (currentCost === cost) {
            return current.map(getAttrs);
          } else if (currentCost < cost) {
            var dishesNotInCurrent = dishes.difference(current);
            var newCombinations = dishesNotInCurrent.map(concat(current));
            newCombinations.forEach(addToQueue);
          }
        }

        return [];
      }
    })
  };
})(window.TableXIExercise);
