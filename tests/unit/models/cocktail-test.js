import { moduleForModel, test } from 'ember-qunit';

moduleForModel('cocktail', 'Unit | Model | cocktail', {
  // Specify the other units that are required for this test.
  needs: ['model:ingredient']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
