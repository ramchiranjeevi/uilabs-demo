import Ember from 'ember';

export default Ember.Controller.extend({
    showUploadDialog: false,
    uploadService: null,
    actions: {
        enableUploadDialog( fileObjects ){
            if( !this.get("showUploadDialog") ){

                this.set("uploadService", Ember.inject.service("upload-dialogoptions"));

                const filesArray = [];
                var i = 0;

                for ( i; i < fileObjects.length; i++ ){
                    filesArray.push( fileObjects[i] );
                }
                console.log( filesArray );
                this.get("uploadService.filesList").addObjects(filesArray);
                this.toggleProperty("showUploadDialog");
                this.set("uploadService", "");
            }
        }
    }
});
