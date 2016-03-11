import Ember from 'ember';

export default Ember.Component.extend({
    requiredService: null,
    initialization: function(){
        this.set( "requiredService", Ember.inject.service( this.get("serviceName") ) );
    }.on("didReceiveAttrs"),
    createWS(){
      var model = {
        fn: 'Un ws'
      }
      ModelDoalgo.create('compname', 'servicename', model, dialogOptions);
    }
});