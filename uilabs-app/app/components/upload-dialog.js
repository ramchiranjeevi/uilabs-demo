import Ember from 'ember';
import UploadMixin from '../mixins/upload';

export default Ember.Component.extend( UploadMixin, {
    isShowFolderList: false,

    didInsertElement(){
        Ember.$('.ui.dropdown').dropdown({
            onChange: (index, value, selectedItem) => {
                this.send("selectFolder", this.get("recentFolders")[index]);
            }
        });
    },
    actions: {
        showFoldersView(){
            this.toggleProperty("isShowFolderList");
        },
        selectFolder( selectedObject ){
            Ember.$('.ui.dropdown').dropdown("set text", selectedObject.get("label"));
            this.set("selectedFolder", selectedObject);
        }
    }
});
