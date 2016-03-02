import Ember from 'ember';

export default Ember.Service.extend({

  selected_value: 'Single line text',
  yesOrNo: false,

  updateVal: function( obj ){
    var self = this;
    self.set('selected_value', obj.value);

    if ( obj.value === 'Yes/No' ){
      self.set('yesOrNo', true);
    }
  }

});
