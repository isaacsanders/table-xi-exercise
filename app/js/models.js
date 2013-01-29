(function(root) {
  root.Models = {
    Dish: Backbone.Model.extend({
      cost: function() {
        return Math.round(parseFloat(this.get('cost')) * 100) / 100;
      },

      initialize: function() {
        this.set('cost', this.cost());
        this.save();
      },

      validate: function() {
        return 0 < this.cost();
      }
    })
  };
})(window.TableXIExercise);
