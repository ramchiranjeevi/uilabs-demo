import Ember from 'ember';

export default Ember.Component.extend({
  eventBus: Ember.inject.service('event-bus'),
  actions: {
    siblingCall: function () {
      this.get('eventBus').publish('calledOnChildren');
    }
  }
});
