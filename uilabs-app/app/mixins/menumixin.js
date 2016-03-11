import Ember from 'ember';

export default Ember.Mixin.create({

  actions: {

    //ACTIONS HANDLER FOR MENUS

    createfolderAction: function(){
      alert('Create New Folder');
    },

    openAction: function(){
      alert('Open');
    },

    shareAction: function(){
      alert('Share');
    },

    cutAction: function(){
      alert('Cut an Item');
    },

    copyAction: function(){
      alert('Copy an Item');
    },

    pasteAction: function(){
      alert('Paste an Item');
    },

    renameAction: function(){
      alert('Rename document');
    },

    duplicateAction: function(){
      alert('Duplicate an Item');
    },

    downloadAction: function(){
      alert('Download an Item');
    },

    readAction: function(){
      alert('Read Only');
    },

    readWriteAction: function(){
      alert('Read Write');
    },

    coOwnerAction: function(){
      alert('Co-Owner');
    },
  }

});
