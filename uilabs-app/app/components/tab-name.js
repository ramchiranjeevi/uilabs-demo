import Ember from 'ember';

export default Ember.Component.extend({

  click(){
    var self = this;
    self.attrs.onClick();
  }

});
