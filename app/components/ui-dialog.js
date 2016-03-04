import Ember from 'ember';

export default Ember.Component.extend({
    requiredService: null,
    classNames: ["dialog-container"],
    initialization: function(){
        let defaultOptions = {
            title: "Dialog",
            height: "auto",
            width: "auto",
            successLabel: "OK",
            cancelLabel: "Cancel",
            buttons: {}
        };

        this.set( "requiredService", Ember.inject.service(this.get("serviceName")) );

        const userPreferableOptions = this.get("requiredService.dialogObject");

        this.set( "dialogOptions", Ember.$.extend( defaultOptions, userPreferableOptions ) );

    }.on("didReceiveAttrs"),

    didInsertElement(){
        if( this.get("dialogOptions.height") ){
            this.$().height( this.get("dialogOptions.height") );
        }
        if( this.get("dialogOptions.width") ){
            this.$().width( this.get("dialogOptions.width") );
        }
    },
    actions: {
        success(){
            this.get("dialogOptions.buttons").success();
        },
        cancel(){
            this.get("dialogOptions.buttons").cancel();
        }
    }
});
