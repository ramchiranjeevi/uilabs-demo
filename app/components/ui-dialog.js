import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
      success(){
          this.sendAction("success");
      },
      cancel(){
          this.sendAction("cancel");
      }
    }
});
