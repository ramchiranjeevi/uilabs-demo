import Ember from 'ember';
import CustomDialog from '../utils/custom-dialog';

const { inject, Mixin } = Ember;

export default Mixin.create({
    createFolderService: inject.service('createfolder-dialogoptions'),

    validateUserInput( input ){
        if( !input ){
            return "empty";
        }
        else if( input.length > 15 ){
            return "gt_15_char";
        }
        else{
            return true;
        }
    },

    createFolderSuccess(){
        CustomDialog.hide( this.get('createFolderService.dailogInstance') );
        console.log("Created Successfully");
    },

    createFolderFailure(){
        // CustomDialog.hide( this.get('createFolderService.dailogInstance') );
        console.log("Cancelled Successfully");
    },

    actions: {
        showCreateFolderDialog(){
            this.get( 'createFolderService').init();
            this.set( 'createFolderService.dailogInstance',
                CustomDialog.show( 'create-folder', this.get('createFolderService.dialogObject'))
            );
        }
    }
});
