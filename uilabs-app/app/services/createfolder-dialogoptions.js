import Ember from 'ember';
import createfolderMixin from '../mixins/createfolder';

export default Ember.Service.extend( createfolderMixin, {

    dialogObject: '',
    folderName: '',
    isError: null,
    errorMessage: '',
    dailogInstance: '',

    init(){

        this.set('folderName', 'Untitled Folder');
        this.set('isError', false);

        this.set('dialogObject', {
            title: 'Create Folder',
            width: 350,
            buttons: {
                "Create Folder": ()=>{
                    this.success();
                },
                "Cancel": ()=>{
                    this.createFolderFailure();
                }
            }
        });
    },
    success(){

        let validate = this.validateUserInput( this.get('folderName') );

        if( validate === 'empty' ){
            this.set('isError', true);
            this.set('errorMessage', 'Name cannot be an empty!');
        }
        else if( validate === 'gt_15_char' ){
            this.set('isError', true);
            this.set('errorMessage', 'Name should be less than 15 char!');
        }
        else{
            this.set('isError', false);
            this.createFolderSuccess();
        }
    }

});
