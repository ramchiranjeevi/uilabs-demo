import Ember from 'ember';

export default Ember.Component.extend({

  ddController: '',
  cfService: '',
  classNames: ['cust_flds'],

  didInsertElement(){
    var self = this;
    self.set('ddController', Ember.inject.controller('dropdown'));
    self.set('cfService', Ember.inject.service('cf-service'));
    self.get('cfService').init();
  },

  actions:{

    addCF(){
      var self = this;
      self.get('cfService').addCF();
    },

    discard(){
      var self = this;
      self.get('cfService').discard();
    }

  },

  willDestroyElement(){
    var self = this;
    self.get('cfService').empty();
    self.set('cfService', '');
    self.set('ddController', '');
  }

});
