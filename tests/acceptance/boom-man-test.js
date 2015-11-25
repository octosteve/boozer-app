import { test } from 'qunit';
import moduleForAcceptance from 'boozer-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | boom man');

test('visiting /boom-man', function(assert) {
  visit('/boom-man');

  andThen(function() {
    assert.equal(currentURL(), '/boom-man');
  });
});
