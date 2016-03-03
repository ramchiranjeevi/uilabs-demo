import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    // MOREMENUS ACTION HANDLER
    showMoreMenus(){
      var _self = this;
      var isMoreMenu = _self.get('isMoreMenu');
      if(isMoreMenu)
      {
        _self.set('isMoreMenu', false);
      }
      else {
        _self.set('isMoreMenu', true);
        _self.set('isContextMenu', false);
      }
    },

    //CONTEXTMENUS ACTION HANDLER
    showContextMenus(){
      var _self = this;
      //  alert('pp');
      var isContextMenu = _self.get('isContextMenu');
      if(isContextMenu)
      {
        _self.set('isContextMenu', false);
      }
      else {
        _self.set('isContextMenu', true);
        _self.set('isMoreMenu', false);
      }
    },

    //HIDE CONTEXTMENUS ACTION HANDLER
    hideContextMenu(){
      var _self = this;
      var isContextMenu = _self.get('isContextMenu');
      if(isContextMenu)
      {
        _self.set('isContextMenu', false);
      }
    }
  }
});
