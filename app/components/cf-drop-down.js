import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'div',
  isActive: false,
  classNames: ['ui','selection','dropdown', 'cf-dd'],
  selected_value: 'Single line text',

  didInsertElement: function(){
    var self = this;
    self.get('_controller').set('selected_value', self.get('selected_value'));
  },

  click: function(){
    var self = this;
    self.set('isActive', !self.get('isActive'));
  },

  actions:{

    change: function( obj ){
      var self = this;
      self.set('selected_value', obj.value);
      self.get('_controller').set('selected_value', obj.value);
    }

  }

});
