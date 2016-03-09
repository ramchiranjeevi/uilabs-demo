import Ember from 'ember';

export default Ember.Component.extend({

  ddObj: Ember.inject.service('drop-down'),
  cfService: Ember.inject.service('cf-service'),

  tagName: 'div',
  def_value: '',
  classNames: ['ui','selection','dropdown', 'fluid'],

  didInsertElement(){
    Ember.$('.ui.dropdown').dropdown();
  },

  actions:{

    change: function( obj ){
      var self = this;
      self.set('def_value', obj.value);
      self.get('ddObj').updateVal( obj );
      self.get('cfService').updateCfObj( obj );
    }

  },

  willDestroyElement: function(){
    var self = this;
    self.get('ddObj').init();
  }

});
