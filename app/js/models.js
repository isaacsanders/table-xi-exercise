(function(root) {
  root.Models = {
    Dish: Backbone.Model.extend({
      initialize: function() {
        this.set('cost', parseFloat(this.get('cost')));
      },

      validate: function() {
        return 0 < parseFloat(this.get('cost'));
      }
    })
  };
})(window.TableXIExercise);
