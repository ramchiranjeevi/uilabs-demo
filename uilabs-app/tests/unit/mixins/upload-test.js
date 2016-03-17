import Ember from 'ember';
import UploadMixin from '../../../mixins/upload';
import { module, test } from 'qunit';

module('Unit | Mixin | upload');

// Replace this with your real tests.
test('it works', function(assert) {
  let UploadObject = Ember.Object.extend(UploadMixin);
  let subject = UploadObject.create();
  assert.ok(subject);
});
