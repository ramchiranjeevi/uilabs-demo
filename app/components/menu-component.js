import Ember from 'ember';
import MenuMixin from '../mixins/menumixin';

export default Ember.Component.extend(MenuMixin,  {

  menuObj: [],
  subMenuObj : [],
  isShowSubMenu: false,

  //CLICK EVENT ACTION HANDLER

  click(event){
    var self = this;
    event.stopPropagation();
    var menuAction = self.get('menuItem.action');
    self.send(menuAction);
  },

  // MOUSEMOVE EVENT ACTION HANDLER

  mouseMove( event ){
    var self = this;
    event.stopPropagation();
    //  self.send('showSubMenu');
    // var subMenus = this.get('menuItem.children');
    // if(subMenus.length){
    //   self.set('subMenuObj', subMenus);
    //   self.set('isShowSubMenu', true);
    // }
    // else {
    //   self.set('subMenuObj', []);
    //   self.set('isShowSubMenu', false);
    // }
  },

  actions:{


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

    // readAction: function(){
    //   alert('Read');
    // },
    //
    // readWriteAction: function(){
    //   alert('Read Write');
    // },
    //
    // coOwnerAction: function(){
    //   alert('Co-Owner')
    // },

  }
});
