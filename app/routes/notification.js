import Ember from 'ember';

export default Ember.Route.extend({


  actions:{

    errorMsg:function (val) {
      this.get('controller').set('is_notify', true);

      if(val === "error"){
          this.set("errormode",Ember.computed({return Ember.Object.create({color:'red'})}));
      }
    }
}
});
