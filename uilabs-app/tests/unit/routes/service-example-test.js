import { moduleFor, test } from 'ember-qunit';

moduleFor('route:service-example', 'Unit | Route | service example', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
