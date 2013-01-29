(function() {

  describe("orderFor", function() {
    it("returns 1 dollar worth of dishes, if that is what you want", function() {
      var menu, pop, water;
      menu = new TableXIExercise.Collections.Menu();
      water = {
        name: "water",
        cost: 2
      };
      pop = {
        name: "pop",
        cost: 1
      };
      menu.add([water, pop]);
      return expect(menu.orderFor(1)).toContain(pop);
    });
    it("returns 5 dollar worth of dishes, if that is what you want", function() {
      var menu, pop, water;
      menu = new TableXIExercise.Collections.Menu();
      water = {
        name: "water",
        cost: 2
      };
      pop = {
        name: "pop",
        cost: 3
      };
      menu.add([water, pop]);
      expect(menu.orderFor(5)).toContain(water);
      return expect(menu.orderFor(5)).toContain(pop);
    });
    return it("return a fractional answer", function() {
      var lemonade, menu, pop, water;
      menu = new TableXIExercise.Collections.Menu();
      water = {
        name: "water",
        cost: 2.34
      };
      pop = {
        name: "pop",
        cost: 3.45
      };
      menu.add([water, pop]);
      expect(menu.orderFor(5.79)).toContain(water);
      expect(menu.orderFor(5.79)).toContain(pop);
      menu = new TableXIExercise.Collections.Menu();
      water = {
        name: "water",
        cost: 1.23
      };
      pop = {
        name: "pop",
        cost: 2.34
      };
      lemonade = {
        name: "lemonade",
        cost: 3.45
      };
      menu.add([water, pop, lemonade]);
      expect(menu.orderFor(7.02)).toContain(water);
      expect(menu.orderFor(7.02)).toContain(pop);
      expect(menu.orderFor(7.02)).toContain(lemonade);
      menu = new TableXIExercise.Collections.Menu();
      water = {
        name: "water",
        cost: 12.34
      };
      pop = {
        name: "pop",
        cost: 34.56
      };
      menu.add([water, pop]);
      expect(menu.orderFor(46.9)).toContain(water);
      return expect(menu.orderFor(46.9)).toContain(pop);
    });
  });

}).call(this);
