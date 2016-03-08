import Ember from 'ember';
import commonActionsMixin from '../mixins/commonactions';

export default Ember.Service.extend( commonActionsMixin, {
    dialogObject: {},
    folderName: "Untitled Folder",
    isError: false,
    errorMessage: "",
    init(){
        var _this = this;

        _this.set("dialogObject", {
            title: "Create Folder", successLabel: "Create Folder", width: 350,
            buttons: {
                success(){
                    var validate = _this.get("actions").validateUserInput( _this.get("folderName") );
                    if( validate === "empty" ){
                        _this.set("isError", true);
                        _this.set("errorMessage", "Name cannot be an empty!");
                    }
                    else if( validate === "gt_15_char" ){
                        _this.set("isError", true);
                        _this.set("errorMessage", "Name should be less than 15 char!");
                    }
                    else{
                        _this.set("isError", false);
                        _this.get("actions").createFolderSuccess();
                    }
                },
                cancel(){
                    _this.get("actions").createFolderFailure();
                }
            }
        });
    }
});
