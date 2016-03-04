import Ember from 'ember';
import MenuMixin from '../mixins/menumixin';

export default Ember.Component.extend( MenuMixin, {

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
    event.stopPropagation();
    var self = this,
    controller = self._controller,
    $ = Ember.$,
    targetParentEle = event.target.parentElement,
    parentDiv = targetParentEle.parentNode.id,
    subMenus = self.get('menuItem.children'),
    isSubMenu = self.get('menuItem.isSubMenu'),
    isMoreMenu = controller.get('isMoreMenu'),
    isContextMenu = controller.get('isContextMenu'),
    submenudiv = $("#submenudiv");
    self.set('subMenuObj', subMenus);
    if(subMenus.length)
    {
      self.set('isShowSubMenu', true);
      submenudiv.css({'display': 'block'});
      if(isMoreMenu || isContextMenu)
      {
          if(parentDiv === "basicmenudiv")
          {
            controller.set('isMoreMenu', false);
            controller.set('isContextMenu', false);
          }
      }
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
});
