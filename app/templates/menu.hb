<div class="span8">
<h1>Menu</h1>
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Cost ($)</th>
    </tr>
  </thead>
  <tbody>
    {{#each dishes}}
      {{#with this}}
        <tr>
          <td>{{ name }}</td>
          <td>{{ cost }}</td>
        </tr>
      {{/with}}
    {{/each}}
  </tbody>
</table>

<form class="form-inline" name="new-dish" id="new-dish">
  <input type="text" class="input-small" name="name" placeholder="Name">
  <input type="text" class="input-small" name="cost" placeholder="Cost">
  <button type=button class="btn btn-primary">New Dish</button>
</form>

<button class="btn btn-danger" id="delete-all">Destroy All</button>
</div>
<div class="span4">
  <h1>Order</h1>
  <input type="text" class="input-large" id="desired-cost" placeholder="Desired Cost" value="{{ desiredCost }}">

  {{#with order }}
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Cost ($)</th>
        </tr>
      </thead>
      <tbody>
        {{#each dishes}}
          {{#with this}}
            <tr>
              <td>{{ name }}</td>
              <td>{{ cost }}</td>
            </tr>
          {{/with}}
        {{/each}}
        <tr>
          <strong>
            <td>Total</td>
            <td>{{ sum }}</td>
          </strong>
        </tr>
      </tbody>
    </table>
  {{/with}}
</div>
