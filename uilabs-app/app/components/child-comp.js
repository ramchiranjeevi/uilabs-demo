import Ember from 'ember';

export default Ember.Component.extend({
  eventBus: Ember.inject.service('event-bus'),
  _initialize: Ember.on('init', function(){
   this.get('eventBus').subscribe('parentCalling', this, 'onParentCalling');
 }),

 onParentCalling: function() {
   alert("I\'m Child " + this.get('person.name'));
 },

 _leavingBack: Ember.on('willDestroyElement', function(){
   this.get('eventBus').unsubscribe('parentCalling');
 })
});
