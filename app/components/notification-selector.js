import Ember from 'ember';

export default Ember.Component.extend({

    tagName: 'div',

    didInsertElement:function() {
        console.log('its come');
    }

});
