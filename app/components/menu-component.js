import Ember from 'ember';

export default Ember.Component.extend({

  subMenuObj : [],
  isShowSubMenu: false,

  mouseMove( event ){
    var self = this;
    event.stopPropagation();
    var subMenus = self.get('menuItem.children');
    self.set('subMenuObj', subMenus);
    var isShow = self.get('isShowSubMenu');
    if(subMenus.length){
      self.set('isShowSubMenu', true);
    }
    else {
      self.set('isShowSubMenu', true);
    }
  }
});
