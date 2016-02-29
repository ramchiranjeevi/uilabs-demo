import Ember from 'ember';

export default Ember.Component.extend({


  didInsertElement: function () {
    this.$().focus();
  },

  keyDown: function (event) {

    var new_name = this.get('renameList.res_name');


    if(new_name.length < 1){
      alert('Name is Empty, Please Type Something');
      // console.log(t('label.ok'));
      this.$().focus();
    }

      if ( event.keyCode === 13) {
          this.get('renameList').set('is_rename', false);
          this.get('renameList').set('res_name', new_name);
          console.log(this.get('renameList'));
      }

      if ( event.keyCode === 27 ) {
        // this.get('renameList').set('res_name', old_name);
        this.get('renameList').set('is_rename', false);
      }


  },

  focusOut:function (new_name) { // NOTE: when focusOut inputbox hide
      // console.log("Foucus Out");
      this.get('renameList').set('is_rename', false);

  },

  actions: {
    showName: function(name) { // NOTE: to change input box
      this.get('renameList').set('is_rename', true);
    }
  }
});
