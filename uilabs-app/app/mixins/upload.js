import Ember from 'ember';
import CustomDialog from '../utils/custom-dialog';

const { inject } = Ember;

export default Ember.Mixin.create({
    uploadService: inject.service("upload-dialogoptions"),
    actions: {
        showUploadDialog(){
			let dialogObject = CustomDialog.show( 'upload-dialog', this.get('uploadService.dialogObject'));
			this.set( 'uploadService.dailogInstance', dialogObject );
		}
    }
});
