import Ember from 'ember';

export default Ember.Component.extend({

  menuObj: [],
  subMenuObj : [],
  isShowSubMenu: false,

  //CLICK EVENT ACTION HANDLER

  click(event){
    var self = this;
    event.stopPropagation();
    var menuAction = self.get('menuItem.action');
    if(menuAction !== "")
    {
      self.send(menuAction);
    }
  },

  // MOUSEMOVE EVENT ACTION HANDLER

  mouseMove( event ){
    var self = this;
    event.stopPropagation();
    var subMenus = self.get('menuItem.children'),
    isSubMenu = self.get('menuItem.isSubMenu');
    self.set('subMenuObj', subMenus);
    var $ = Ember.$;
    var submenudiv = $("#submenudiv");
    if(subMenus.length)
    {
      self.set('isShowSubMenu', true);
      submenudiv.css({'position': 'absolute', 'display': 'block'});
    }
    else {
      self.set('isShowSubMenu', false);
      submenudiv.css({'display': 'none'});
      if(isSubMenu)
      {
        self.set('isShowSubMenu', true);
        submenudiv.css({'position': 'absolute', 'display': 'block'});
      }
    }
  },

  actions:{

    //ACTIONS HANDLER FOR MENUS

    createfolderAction: function(){
      console.log('Create New Folder');
    },

    openAction: function(){
      console.log('Open');
    },

    shareAction: function(){
      console.log('Share');
    },

    cutAction: function(){
      console.log('Cut an Item');
    },

    copyAction: function(){
      console.log('Copy an Item');
    },

    pasteAction: function(){
      console.log('Paste an Item');
    },

    renameAction: function(){
      console.log('Rename document');
    },

    duplicateAction: function(){
      console.log('Duplicate an Item');
    },

    downloadAction: function(){
      console.log('Download an Item');
    },

    readAction: function(){
      console.log('Read Only');
    },

    readWriteAction: function(){
      console.log('Read Write');
    },

    coOwnerAction: function(){
      console.log('Co-Owner');
    },

  }
});
