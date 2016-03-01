import Ember from 'ember';

export default Ember.Mixin.create({

  isActive: false,
  actions: {
    initialize: function(){
      var self = this;
      self.set('isActive', false);
    }
  }

});
