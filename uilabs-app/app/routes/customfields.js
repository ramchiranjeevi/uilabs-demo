import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function( controller ) {
    controller.set('ddController', Ember.inject.controller('dropdown'));
    controller.set('cfService', Ember.inject.service('cf-service'));
    controller.get('cfService').init();
  },

  resetController: function( controller, isExiting ) {
    if ( isExiting ) {
      controller.get('cfService').empty();
      controller.set('cfService', '');
      controller.set('ddController', '');
    }
  }

});
