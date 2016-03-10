import Ember from 'ember';
import ModalManager from 'ui-lab/utils/modal-manager';

const { inject } = Ember;

export default Ember.Controller.extend({

  createFolderDialog: inject.service(),

	actions: {
		showAlert: function() {
			ModalManager.alert({
				closable: true,
				title: "Warning",
				message: "You don't have permission to do that."
			}).then(function() {
			});
		},

		showConfirm: function() {
			ModalManager.confirm({
        closable: true,
				title: "Confirm delete",
        ok: "Yes",
        cancel: "No",
				message: "Are you sure you want to delete this?"
			}).then(function() {
			}).catch(function() {
			});
		},

		showTemplateModal: function() {
			ModalManager.show('create-folder-dialog', {
				title: "Alert!!",
				ok: "Create"
			}, this.get('createFolderDialog')).then(function() {
			}).catch(function() {
			});
		}
	}
});
