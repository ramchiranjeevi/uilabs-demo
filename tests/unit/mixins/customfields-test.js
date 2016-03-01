import Ember from 'ember';
import CustomfieldsMixin from '../../../mixins/customfields';
import { module, test } from 'qunit';

module('Unit | Mixin | customfields');

// Replace this with your real tests.
test('it works', function(assert) {
  let CustomfieldsObject = Ember.Object.extend(CustomfieldsMixin);
  let subject = CustomfieldsObject.create();
  assert.ok(subject);
});
