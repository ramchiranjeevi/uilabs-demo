import Ember from 'ember';

export default Ember.Component.extend({


  ddObj: '',
  cfService: '',
  tagName: 'div',
  def_value: '',
  classNames: ['ui','selection','dropdown', 'fluid'],

  didInsertElement(){
    var self = this;
    Ember.$('.ui.dropdown').dropdown();
    self.set('ddObj', Ember.inject.service('drop-down'));
    self.set('cfService', Ember.inject.service('cf-service'));
  },

  actions:{

    change: function( obj ){
      var self = this;
      self.set('def_value', obj.value);
      self.get('ddObj').updateVal( obj );
      self.get('cfService').updateCfObj( obj );
    }

  }

});
