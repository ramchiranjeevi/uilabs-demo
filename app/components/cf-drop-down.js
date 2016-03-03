import Ember from 'ember';

export default Ember.Component.extend({

  ddObj: Ember.inject.service('drop-down'),

  tagName: 'div',
  def_value: '',
  isActive: false,
  classNames: ['ui','selection','dropdown', 'cf-dd'],
  classNameBindings: ['active'],
  active: false,

  click: function(){
    var self = this;
    self.toggleProperty('isActive');
    self.toggleProperty('active');
  },

  actions:{

    change: function( obj ){
      var self = this;
      self.set('def_value', obj.value);
      self.get('ddObj').updateVal(obj);
    }

  }

});
