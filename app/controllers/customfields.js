import Ember from 'ember';

export default Ember.Controller.extend({

  ddController: Ember.inject.controller('dropdown'),
  cfService: Ember.inject.service('cf-service'),

  selected_field: 'Single line text',
  
});
