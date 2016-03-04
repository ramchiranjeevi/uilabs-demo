import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'textarea',
  attributeBindings: ['placeholder'],
  placeholder: 'Description'

});
