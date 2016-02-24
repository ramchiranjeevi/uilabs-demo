import Ember from 'ember';
import ModalManager from 'ui-lab/utils/modal-manager';

export default Ember.Controller.extend({

  simple: Ember.inject.controller("simple-modal-template"),

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
			ModalManager.show('simple-modal-template', {
				title: "Alert!!",
				ok: "Create"
			}).then(function() {
			}).catch(function() {
			});
		}
	}
});
