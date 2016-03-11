import Ember from 'ember';

export default Ember.Service.extend({
    dialogObject: {},
    filesList: [],
    init(){
        var _this = this;

        //  Dialog Option settings
        _this.set("dialogObject", {
            title: "Upload File",
            successLabel: "Start Upload",
            width: 550,
            buttons: {
                success(){
                    console.log( "succeeded!" );
                },
                cancel(){
                    console.log( "cancelled!" );
                }
            }
        });
    }
});
