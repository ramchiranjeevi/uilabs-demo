import Ember from 'ember';
import CustomDialog from '../utils/custom-dialog';
import commonActionsMixin from '../mixins/commonactions';

const { Controller, inject } = Ember;

export default Controller.extend(commonActionsMixin, {
	serviceObject: '',
	actions: {
		showCreateFolderDialog(){
			this.set('serviceObject', inject.service('createfolder-dialogoptions'));
			let dialogObject = CustomDialog.show( 'create-folder', this.get('serviceObject.dialogObject'));
			this.set( 'serviceObject.dailogInstance', dialogObject );
			this.set('serviceObject', '');
		},
		showUploadDialog(){
			this.set('serviceObject', inject.service('upload-dialogoptions'));
			let dialogObject = CustomDialog.show( 'upload-dialog', this.get('serviceObject.dialogObject'));
			this.set( 'serviceObject.dailogInstance', dialogObject );
			this.set('serviceObject', '');
		}
	}
});
