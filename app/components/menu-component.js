import Ember from 'ember';

export default Ember.Component.extend({

  menuObj: [],
  subMenuObj : [],
  isShowMenu : false,
  isShowSubMenu: false,

  //CLICK EVENT ACTION HANDLER
  click(event){
    var self = this;
    if(self.get("isShowMenu"))
    {
      self.set("isShowMenu", false);
      return;
    }
  },

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
    self.set("menuObj", menuObj);
    this.send("showMenusAction", menuObj );
  },

  //MOUSEMOVE EVENT ACTION HANDLER
  // mouseMove( event ){
  //   var self = this;
  //   event.stopPropagation();
  //   var subMenus = self.get('menuItem.children');
  //   self.set('subMenuObj', subMenus);
  //   //var isShow = self.get('isShowSubMenu');
  //   if(subMenus.length){
  //     self.set('isShowSubMenu', true);
  //   }
  //   else {
  //     self.set('isShowSubMenu', false);
  //   }
  // },

  "actions": {
    showMenusAction(){
      //  console.log(menus);
      this.set("isShowMenu", true);
      //  console.log(menus.menuItemss);
    }
  }
});
