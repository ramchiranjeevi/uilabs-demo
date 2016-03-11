import Ember from 'ember';

export default Ember.Component.extend({
    requiredService: null,
    filesCount: 0,
    initialization: function(){
        // Dynamic service injection handled here...
        this.set( "requiredService", Ember.inject.service( this.get("serviceName") ));

        // Initial files count updated here...
        this.send( "_updateFileCount", this.get("requiredService.filesList").length );
    }.on("didReceiveAttrs"),

    labelOfFileCount: Ember.computed('filesCount', function() {
        // How many files selected label will be updated here...
        return this.get("filesCount") > 1 ? "Files selected" : "File selected";
    }),
    actions: {
        addFiles( fileObjects ){

            var filesArray = [], i;

            for (i = 0; i < fileObjects.length; i++) {
                filesArray.push(fileObjects[i]);
            }
            // Updating newly added files in service's files Array...
            this.get("requiredService.filesList").unshiftObjects( filesArray );

            // Final files count updated here...
            this.send( "_updateFileCount", this.get("requiredService.filesList").length );
        },
        removeFile( fileObject ){
            // Removing file from the service's files Array...
            this.get("requiredService.filesList").removeObject( fileObject );

            // Final files count updated here...
            this.send( "_updateFileCount", this.get("requiredService.filesList").length );
        },
        _updateFileCount( count ){
            this.set("filesCount", count);
        }
    }
});
