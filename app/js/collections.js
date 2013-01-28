(function(root) {
  root.Collections = {
    Menu: Backbone.Collection.extend({
      model: root.Models.Dish,
      localStorage: new Backbone.LocalStorage("tablexiexercise-collections-menu"),
      orderFor: function(cost) {
        var that = this;
        var availableDishes = this.models.filter(function(dish) {
          return dish.get('cost') <= cost;
        });

        var dishes = availableDishes.reduce(function(dishes, dish) {
          var currentCost = dishes.reduce(that.costSum, 0.0);
          var remainder = cost - parseFloat(dish.get('cost'));

          if (remainder >= 0.0) {
            dishes = that.orderFor(remainder).dishes;
            dishes.push(dish.toJSON());
          }

          if (remainder === dishes.reduce(that.costSum, 0.0)) {
            return dishes;
          } else {
          }
        }, []);

        return {
          dishes: dishes,
          sum: _.reduce(dishes, that.costSum, 0.0)
        };
      },

      costSum: function(cost, dish) {
        return cost + parseFloat(dish.cost);
      }
    })
  };
})(window.TableXIExercise);
