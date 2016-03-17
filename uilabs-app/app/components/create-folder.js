import Ember from 'ember';

export default Ember.Component.extend({
    requiredService: null,
    initialization: function(){
        this.set( "requiredService", Ember.inject.service( 'createfolder-dialogoptions' ) );
    }.on("init"),
    actions: {
        updateFolderName( node ){
            this.set("requiredService.folderName", node.$('input').val());
        }
    }
});
