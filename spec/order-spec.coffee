describe "orderFor", ->
  it "returns 1 dollar worth of dishes, if that is what you want", ->
    menu = new TableXIExercise.Collections.Menu()
    water = { name: "water", cost: "2" }
    pop = { name: "pop", cost: "1" }
    menu.add([water, pop])

    expect(menu.orderFor(1).dishes.toString()).toContain(pop.toString())

  it "returns 5 dollar worth of dishes, if that is what you want", ->
    menu = new TableXIExercise.Collections.Menu()
    water = { name: "water", cost: "2" }
    pop = { name: "pop", cost: "3" }
    menu.add([water, pop])

    expect(menu.orderFor(5).dishes.toString()).toContain(water.toString())
    expect(menu.orderFor(5).dishes.toString()).toContain(pop.toString())
