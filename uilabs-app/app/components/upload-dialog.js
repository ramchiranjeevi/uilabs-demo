import Ember from 'ember';
import uploadMixin from '../mixins/upload';

export default Ember.Component.extend( uploadMixin, {
    isShowFolderList: false,
    initialization: function(){
        // Dynamic service injection handled here...
        // this.set( "requiredService", Ember.inject.service( "upload-dialogoptions" ));
    }.on("didReceiveAttrs"),

    didInsertElement(){
        Ember.$('.ui.dropdown').dropdown({
            onChange: function(text, value, selectedItem) {
                console.log( text, value, selectedItem );
            }
        });
    },
    actions: {
        showFoldersView(){
            this.toggleProperty("isShowFolderList");
        },
        selectFolder( selectedFolder ){
            Ember.$('.ui.dropdown').dropdown("set text", selectedFolder.get("label"));
        }
    }
});
