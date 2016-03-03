import Ember from 'ember';

export default Ember.Route.extend({

  actions:{
    initCF: function(){
      var self = this,
      controller = self.get('controller');
      controller.toggleProperty('inject_service');
    }
  }

});
