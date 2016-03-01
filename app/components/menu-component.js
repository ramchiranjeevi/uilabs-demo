import Ember from 'ember';
import MenuMixin from '../mixins/menumixin';

export default Ember.Component.extend(MenuMixin, {

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
    var menuObj = self.get('menuItem');
    if(self.get("isShowMenu"))
    {
      self.set("isShowMenu", false);
      return;
    }
    self.set("menuObj", menuObj);
    this.send("showMenusAction", menuObj );
  },

  mouseMove( event ){
    var self = this;
    event.stopPropagation();
    var subMenus = this.get('menuItem.children');

  //  console.log(this.get('isShowSubMenu'));
    if(subMenus.length){
      self.set('subMenuObj', subMenus);
      self.set('isShowSubMenu', true);
    }
    else {
      self.set('subMenuObj', []);
      self.set('isShowSubMenu', false);
    }
  },

  "actions": {
    showMenusAction(){
      //  console.log(menus);
      this.set("isShowMenu", true);
      //  console.log(menus.menuItemss);
    }
  }
});
