import Ember from 'ember';
import ModalManager from 'ui-lab/utils/modal-manager';


export default Ember.Controller.extend({

actions: {
  showAlert: function() {
    ModalManager.alert({
      closable: true,
      title: "Warning",
      message: "You don't have permission to do that."
    }).then(function() {
      console.log("OK Clicked");
    });
  },
  showConfirm: function() {
    ModalManager.confirm({
      title: "Confirm delete",
      message: "Are you sure you want to delete this?"
    }).then(function() {
      console.log("OK Clicked");
    }).catch(function() {
      console.log("Cancel Clicked");
    });
  },

  showPrompt: function() {
    ModalManager.prompt({
      title: "Enter your name",
      placeholder: 'Name?',
      value: "Semantic",
      message: "Please enter your name for further procession?"
    }).then(function(value) {
      console.log("OK Clicked", value);
    }).catch(function() {
      console.log("Cancel Clicked");
    });
  },

  showTemplateModal: function() {
    ModalManager.show('simple-modal-template', {
      title: "Alert!!",
      ok: "Go on"
    });
  },

  showTemplateModalWithCustomFooter: function() {
    ModalManager.show('simple-modal-template-with-footer', {
      closable: true,
      title: "Alert!!",
      ok: "Go on"
    });
  },

  showTemplateModalWithManualHide: function() {
    ModalManager.show('simple-modal-template-with-manual-hide', {
      closeOnDone: false,
      title: "template with hide option",
      ok: "Done"
    });
  }
}

});
