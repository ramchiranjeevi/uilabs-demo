import Ember from 'ember';

const { inject, $ } = Ember;

export default Ember.Component.extend({
    requiredService: null,
    classNames: ["dialog-container"],

    initialization: function(){
        this.set("requiredService", inject.service( this.get("serviceName") ));

        const userPreferableOptions = this.get("requiredService.dialogObject");
        const defaultOptions = {
                title: "Dialog",
                height: "auto",
                width: "auto",
                successLabel: "OK",
                cancelLabel: "Cancel",
                buttons: {}
            };
        this.set( "dialogOptions", $.extend( defaultOptions, userPreferableOptions ) );
    }.on("didReceiveAttrs"),

    didInsertElement(){
        var height = this.get("dialogOptions.height"),
            width = this.get("dialogOptions.width");

        this.$().height( height ).width( width );
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
