import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  old_name: computed.alias('renameList.res_name'),
  init() {
      this._super(...arguments);
      this.set('stashedFileName', this.get('old_name'));
    },


  didInsertElement: function () {
    this.$().focus();
  },

  keyDown: function (event) {
      var new_name = this.get('renameList.res_name');

      if(new_name.length < 1){
        alert('Name is Empty, Please Type Something');
        this.$(input).focus();
      }

      if ( event.keyCode === 13) {
          this.get('renameList').set('is_rename', false);
          this.send('updateName', new_name);
      }

      if ( event.keyCode === 27 ) {
        this.get('renameList').set('is_rename', false);
        this.get('renameList').set('res_name', this.get('stashedFileName'));
      }
  },

  focusOut:function (new_name) { // NOTE: when focusOut inputbox hide
        this.get('renameList').set('is_rename', false);
  },

  actions: {
    showName: function() { // NOTE: to change input box
      this.get('renameList').set('is_rename', true);
    },
    updateName: function(new_name){
        this.get('renameList').set('res_name', new_name);
        console.log('New Name Updated in Model')
    }
  }
});
