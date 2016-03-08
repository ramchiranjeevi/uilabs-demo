import Ember from 'ember';

export default Ember.Component.extend({
  ddObj: Ember.inject.service('drop-down'),
  cfService: Ember.inject.service('cf-service'),

  value:'',
  classNames: ['ui', 'input', 'fluid'],

  keyUp: function(){
    console.log(this.get('value'));
  }
});
