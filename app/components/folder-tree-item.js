import Ember from 'ember';

export default Ember.Component.extend({
    doubleClick( event ){
        event.stopPropagation();
        var new_folder_name = prompt("Enter your new folder Name", "Untitled Folder");
        if (new_folder_name != null) {
            this.get( "folderItem" ).set("subfolder", true);
            this.get( "folderItem" ).set("is_opened", true);
            this.get( "folderItem" ).get("children").pushObject( Ember.Object.create({
                "res_name": new_folder_name,
                "res_id": "copy",
                "subfolder": false,
                "is_opened": false,
                "children":[]
            }));
        }
    },
    "actions": {
        openSubFolder(){
            this.get( "folderItem" ).toggleProperty("is_opened");
        }
    }
});
