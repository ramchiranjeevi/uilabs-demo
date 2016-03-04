import Ember from 'ember';
//import MenuMixin from '../mixins/menumixin';

export default Ember.Controller.extend({
  isMoreMenu: false,
  isContextMenu: false,

  actions: {

    // MOREMENUS ACTION HANDLER
    showMoreMenus(){
      var self = this;
      var isMoreMenu = self.get('isMoreMenu');
      if(isMoreMenu)
      {
        self.set('isMoreMenu', false);
      }
      else {
        self.set('isMoreMenu', true);
        self.set('isContextMenu', false);
      }
    },

    //CONTEXTMENUS ACTION HANDLER
    showContextMenus(){
      var self = this;
      //  alert('pp');
      var isContextMenu = self.get('isContextMenu');
      if(isContextMenu)
      {
        self.set('isContextMenu', false);
      }
      else {
        self.set('isContextMenu', true);
        self.set('isMoreMenu', false);
      }
    },

    //HIDE CONTEXTMENUS ACTION HANDLER
    hideContextMenu(){
      var self = this;
      var isContextMenu = self.get('isContextMenu');
      if(isContextMenu)
      {
        self.set('isContextMenu', false);
      }
    }
  }
});
