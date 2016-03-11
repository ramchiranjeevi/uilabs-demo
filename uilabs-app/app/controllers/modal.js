import Ember from 'ember';
import CustomDialog from '../utils/custom-dialog';
import commonActionsMixin from '../mixins/commonactions';

const { Controller, inject } = Ember;

export default Controller.extend(commonActionsMixin, {
	serviceObject: '',
	actions: {
		showDialog(){
			this.set('serviceObject', inject.service('createfolder-dialogoptions'));
			let dialogObject = CustomDialog.show( 'create-folder', this.get('serviceObject.dialogObject'));
			this.set( 'serviceObject.dailogInstance', dialogObject );
			this.set('serviceObject', '');
		}
	}
});
