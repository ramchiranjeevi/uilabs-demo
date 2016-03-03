import Ember from 'ember';

export default Ember.Component.extend({

    tagName: 'div',
    classNameBindings: ["ui"],

    didInsertElement:function() {
        console.log('its come');
    }

});
