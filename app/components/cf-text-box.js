import Ember from 'ember';

export default Ember.Component.extend({
  ddObj: Ember.inject.service('drop-down'),
  cfService: Ember.inject.service('cf-service'),

  classNames: ['ui', 'input'],
});
