import Ember from 'ember';
import CreatefolderMixin from '../../../mixins/createfolder';
import { module, test } from 'qunit';

module('Unit | Mixin | createfolder');

// Replace this with your real tests.
test('it works', function(assert) {
  let CreatefolderObject = Ember.Object.extend(CreatefolderMixin);
  let subject = CreatefolderObject.create();
  assert.ok(subject);
});
