import Ember from 'ember';

export default Ember.Route.extend({

  resetController: function( controller, isExiting ) {
    if ( isExiting ) {
      controller.set('field_header', '');
      controller.set('new_fields', '');
    }
  }

});
