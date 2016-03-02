import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    // COMMON TRIGGERING CONTEXTMENU ACTION HANDLER
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
