import Ember from 'ember';
import TabSelectionMixin from '../../../mixins/tab-selection';
import { module, test } from 'qunit';

module('Unit | Mixin | tab selection');

// Replace this with your real tests.
test('it works', function(assert) {
  let TabSelectionObject = Ember.Object.extend(TabSelectionMixin);
  let subject = TabSelectionObject.create();
  assert.ok(subject);
});
