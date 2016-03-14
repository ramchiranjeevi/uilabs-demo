import Ember from 'ember';

export default Ember.Component.extend({
    tagName: "li",
    iconClass: "",
    isRadioType: false,
    didInsertElement(){
        if( !this.get("folderItem.treeOpened") ){
            this.send("closeSubFolder");
        }
    },
    doubleClick( event ){
        event.stopPropagation();
        var new_folder_name = prompt("Enter your new folder Name", "Untitled Folder"),
            targetFolder = this.get( "folderItem" );

        if (new_folder_name != null) {
            if( !targetFolder.get("hasSubfolder") ){
                this.get( "folderItem" ).set("hasSubfolder", true);
            }
            this.send("openSubFolder");
            this.get( "folderItem" ).get("children").pushObject( Ember.Object.create({
                "label": new_folder_name,
                "id": "folder",
                "treeOpened": false,
                "hasSubfolder": false,
                "children":[]
            }));
        }
    },
    mouseUp( event ){
        event.stopPropagation();
        if( event.target.className.indexOf("subfolder-icon") === -1 ){
            this.sendAction("on-active", this.get("folderItem"));
        }
    },
    actions: {
        toggleSubFolder(){
            if( this.get( "folderItem.treeOpened" ) ){
                this.send("closeSubFolder");
            }
            else{
                this.send("openSubFolder");
            }
        },
        openSubFolder(){
            this.get( "folderItem" ).set("treeOpened", true);
            this.$().find("ul").removeClass("hide").addClass("show");
        },
        closeSubFolder(){
            this.get( "folderItem" ).set("treeOpened", false);
            this.$().find("ul").removeClass("show").addClass("hide");
        }
    }
});
