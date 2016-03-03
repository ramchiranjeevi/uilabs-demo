import Ember from 'ember';

export default Ember.Component.extend(Ember.Evented,{
  eventBus: Ember.inject.service('event-bus'),
  actions: {
      callChildren: function() {
        this.get('eventBus').publish('parentCalling');
        this.get('eventBus').publish('calledOnChildren');
      }
    }
});
