import Ember from 'ember';

export default Ember.Component.extend({

  ddController: '',
  cfController: '',
  cfService: '',
  classNames: ['cust_flds'],

  didInsertElement(){
    var self = this;
    self.set('ddController', Ember.inject.controller('dropdown'));
    self.set('cfController', Ember.inject.controller('customfields'));
    self.set('cfService', Ember.inject.service('cf-service'));
    self.get('cfService').init();
  },

  actions:{

    addCF(){
      var self = this;
      self.get('cfService').addCF();
      self.set('cfController.field_header', self.get('cfService.field_header'));
      self.set('cfController.new_fields', self.get('cfService.new_fields'));
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
    self.set('cfController', '');
  }

});
