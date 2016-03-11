import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ["isActive", "listItem", "listHeader"], // No I18N
  attributeBindings: ["tabIndex"],
  tabIndex: -1,
  isActive: Ember.computed.alias('model.is_active'), // No I18N
  listItem: function(){
    return this.get('model.split') ? false : true; // No I18N
  }.property(),
  listHeader: Ember.computed.alias('model.split'), // No I18N

  // CLICK EVENT ACTION HANDLER
  click( event ){
    var _selectedModel = this.get("model");
    if( !_selectedModel.get("split") ){
      this.sendAction( "on-select", event, _selectedModel );
    }
  },

  // KEYDOWN EVENT ACTION HANDLER
  keyDown( event ){
    // DOWN ARROW
    if( event.keyCode === 40 ){
      this.sendAction( "arrow-key-action", event, "down", "list" );
    }
    // UP ARROW
    else if( event.keyCode === 38 ){
      this.sendAction( "arrow-key-action", event, "up", "list" );
    }

    else if( event.metaKey && event.keyCode === 65 || event.ctrlKey && event.keyCode === 65 ){
      this.sendAction( "on-select-all", event );
    }
  }
});
