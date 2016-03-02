import Ember from 'ember';

export default Ember.Component.extend({

  ddObj: Ember.inject.service('drop-down'),

  tagName: 'div',
  isActive: false,
  classNames: ['ui','selection','dropdown', 'cf-dd'],

  click: function(){
    var self = this;
    self.set('isActive', !self.get('isActive'));
  },

  actions:{

    change: function( obj ){
      var self = this;
      self.get('ddObj').updateVal(obj);
    }

  }

});
