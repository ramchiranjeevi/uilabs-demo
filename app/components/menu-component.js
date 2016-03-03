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
    var subMenus = this.get('menuItem.children');
    var isSubMenu = this.get('menuItem.isSubMenu');
    self.set('subMenuObj', subMenus);
    var $ = Ember.$;
    var submenudiv = $("#submenudiv");
    var isShowSubMenu = self.get("isShowSubMenu");
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
