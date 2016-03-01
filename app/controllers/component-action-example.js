import Ember from 'ember';

export default Ember.Controller.extend({
    object: Ember.Object.create({
        textOne: "",
        statusMessageOne: "Invalid Input",
        statusClassOne: "error",
        textTwo: "",
        statusMessageTwo: "Invalid Input",
        statusClassTwo: "error"
    }),
    actions: {
        success(){
            if( this.get("object.textOne") ){
                this.set("object.statusClassOne", "success");
                this.set("object.statusMessageOne", "Valid Input");
            }
            else{
                this.set("object.statusClassOne", "error");
                this.set("object.statusMessageOne", "Invalid Input");
            }
            if( this.get("object.textTwo") ){
                this.set("object.statusClassTwo", "success");
                this.set("object.statusMessageTwo", "Valid Input");
            }
            else{
                this.set("object.statusClassTwo", "error");
                this.set("object.statusMessageTwo", "Invalid Input");
            }
        },
        cancel(){
            alert( "cancel" )
        }
    }
});
