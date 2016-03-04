import Ember from 'ember';

export default Ember.Route.extend({


  actions:{

    errorMsg:function (notify_type) {
      this.get('controller').set('is_notify', true);
      console.log(notify_type);
      if(notify_type === "error"){
           this.get('controller').set('errormode', 'red');
           console.log(this.get('controller'));
      }
      if(notify_type === "warning"){
           this.get('controller').set('errormode', 'orange');
           console.log(this.get('controller').set('errormode', 'orange'));
      }

      if(notify_type === "regular"){
           this.get('controller').set('errormode', 'teal');
           console.log(this.get('controller').set('errormode', 'teal'));
      }

      if(notify_type === "success"){
           this.get('controller').set('errormode', 'green');
           console.log(this.get('controller').set('errormode', 'green'));
      }

    }
}
});
