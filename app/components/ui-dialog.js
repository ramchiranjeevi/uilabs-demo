import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ["dialog-container"],
    dialogObject: {},
    refObject: Ember.Object.create({}),

    didInsertElement(){
        if( this.get("dialogObject.height") ){
            this.$().height( this.get("dialogObject.height") )
        }
        if( this.get("dialogObject.width") ){
            this.$().width( this.get("dialogObject.width") )
        }
    },

    actions: {
      success(){
          this.sendAction("dialogObject.buttons.success");
      },
      cancel(){
          this.sendAction("dialogObject.buttons.cancel");
      }
    }
});
