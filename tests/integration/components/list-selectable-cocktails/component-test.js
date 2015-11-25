import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('list-selectable-cocktails', 'Integration | Component | list selectable cocktails', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{list-selectable-cocktails}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#list-selectable-cocktails}}
      template block text
    {{/list-selectable-cocktails}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
