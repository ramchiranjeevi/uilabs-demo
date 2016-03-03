import Ember from 'ember';

export default Ember.Component.extend({
  eventBus: Ember.inject.service('event-bus'),
  tagName: 'span',
  init(){
    this._super();
  },
  _initMethod: Ember.on('init', function(){
   this.get('eventBus').subscribe('calledOnChildren', this, 'onLastChildrenCalling');
 }),
  onLastChildrenCalling: function(){
    alert('I\'m Last Child');
  },
  _goingFromHere: Ember.on('willDestroyElement', function(){
    this.get('eventBus').unsubscribe('calledOnChildren');
  })
});
