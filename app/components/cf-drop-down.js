import Ember from 'ember';

export default Ember.Component.extend({

  ddObj: Ember.inject.service('drop-down'),

  tagName: 'div',
  def_value: '',
  classNames: ['ui','selection','dropdown', 'cf-dd'],
  classNameBindings: ['active'],
  active: false,

  click: function(){
    var self = this;
    self.toggleProperty('active');
  },

  actions:{

    change: function( obj ){
      var self = this;
      self.set('def_value', obj.value);
      self.get('ddObj').updateVal(obj);
    }

  },
  
  willDestroyElement: function(){
    var self = this;
    self.get('ddObj').init();
  }

});
