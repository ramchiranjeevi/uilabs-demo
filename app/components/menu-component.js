import Ember from 'ember';

export default Ember.Component.extend({

  menuObj: [],
  subMenuObj : [],
  isShowMenu : false,
  isShowSubMenu: false,

  // CONTEXTMENU EVENT ACTION HANDLER
  contextMenu(event){
    var self = this;
    event.preventDefault();
    event.stopPropagation();
    var menuObj = self.get('menuItem.menuItems');
    if(self.get("isShowMenu"))
    {
      self.set("isShowMenu", false);
      return;
    }
    self.set("menuObj", menuObj)
    this.send("showMenusAction", menuObj );
  },

  "actions": {
    showMenusAction(){
      //  console.log(menus);
      this.set("isShowMenu", true);
      //  console.log(menus.menuItemss);
    }
  }
});
