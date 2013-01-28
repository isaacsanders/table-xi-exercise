(function(root) {
  root.Views = {
    Menu: Backbone.View.extend({
      tagName: 'div',
      className: 'menu',

      template: JST['app/templates/menu.hb'],

      events: {
        "click #new-dish button" : "newDish",
        "click #delete-all" : "deleteAll",
        "change #desired-cost" : "render"
      },

      initialize: function() {
        this.listenTo(this.model, 'reset', this.render);
        this.listenTo(this.model, 'add', this.render);
      },

      render: function() {
        var desiredCost = this.$("#desired-cost").val();
        var data = {
          dishes: this.model.models.map(function(dish){ return dish.toJSON(); }),
          order: this.model.orderFor(desiredCost),
          desiredCost: desiredCost
        };
        var html = this.template(data);
        $(this.el).html(html);
        $('.menu').append(this.el);
      },

      newDish: function() {
        var name = this.$("#new-dish input[name=name]").val();
        var cost = this.$("#new-dish input[name=cost]").val();
        this.$("#new-dish input").val('');
        var dish = new TableXIExercise.Models.Dish({
          name: name,
          cost: cost
        });
        this.model.add([dish]);
        this.model.models.map(function(dish){ dish.save(); });
      },

      deleteAll: function() {
        this.model.models.map(function(dish){ dish.destroy(); });
        this.model.fetch();
      }
    })
  };
})(window.TableXIExercise);
