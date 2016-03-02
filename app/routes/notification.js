import Ember from 'ember';

export default Ember.Route.extend({

  actions:{
    notificationMsg:function () {
      alert('its working');
    this.get('controller').set('is_notify', true);
    console.log(this.get('is_notify'));
    }
  }

});
