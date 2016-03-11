import Ember from 'ember';
import MenumixinsMixin from '../../../mixins/menumixins';
import { module, test } from 'qunit';

module('Unit | Mixin | menumixins');

// Replace this with your real tests.
test('it works', function(assert) {
  let MenumixinsObject = Ember.Object.extend(MenumixinsMixin);
  let subject = MenumixinsObject.create();
  assert.ok(subject);
});
