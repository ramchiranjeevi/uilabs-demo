import Ember from 'ember';
import MenuMixin from '../mixins/menumixin';

export default Ember.Component.extend(MenuMixin, {

  menuObj: [],
  subMenuObj : [],
  isShowSubMenu: false,

  // MOUSEMOVE EVENT ACTION HANDLER

  mouseMove( event ){
    var self = this;
    event.stopPropagation();
    var subMenus = this.get('menuItem.children');
    if(subMenus.length){
      self.set('subMenuObj', subMenus);
      self.set('isShowSubMenu', true);
    }
    else {
      self.set('subMenuObj', []);
      self.set('isShowSubMenu', false);
    }
  },
});
