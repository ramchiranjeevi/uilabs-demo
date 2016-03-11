import Ember from 'ember';

export default Ember.Component.extend({
  ddObj: Ember.inject.service('drop-down'),
  cfService: Ember.inject.service('cf-service'),

  classNames: ['ui', 'input', 'fluid'],
  value: '',

  keyUp( e ){
    var self = this;
    self.set('model.value', e.target.value);
  }


});
