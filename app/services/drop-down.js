import Ember from 'ember';

export default Ember.Service.extend({

  yesOrNo: false,
  selected_obj:{},

  init: function(){
    var self = this;
    self.set('yesOrNo', false);
    self.set('selected_obj', {});
  },

  updateVal: function( obj ){
    var self = this,
    key = 'selected_obj.'+obj.key;
    self.set(key, obj.value);

    if ( obj.value === 'Yes/No' ){
      self.set('yesOrNo', true);
    }
  }

});
