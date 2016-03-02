import Ember from 'ember';

export default Ember.Service.extend({

  selected_value: 'Single line text',

  updateVal: function( obj ){
    var self = this;
    self.set('selected_value', obj.value);
  }
});
