import Ember from 'ember';

export default Ember.Component.extend({

    tagName: 'div',
    classNameBindings: ['ui'],
    // attributeBindings:['color'],

    didInsertElement:function () {
      console.log('in Notification-selector component');
    }



});
