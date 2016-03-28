import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({

  isEditing: false,
  editedName: null,
  error: null,

  saveDisabled: computed.empty('editedName'),

  actions: {
    onSave() {
      this.attrs.save(this.get('editedName')).then(() => {
        console.log('3');
        this.set('isEditing', false);
        console.log('inside success(then)');
        this.set('error', null);
      }).catch(error => {
        this.set('error', error);
      });
    },

    onEdit() {
      this.set('editedName', this.get('name'));
      this.set('isEditing', true);
    },

    onCancel() {
      this.set('isEditing', false);
    }
  }

});
