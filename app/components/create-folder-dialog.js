import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    console.log('ssssss');
  },
  actions: {
    onCreate(){
      alert('ss');
    }
  }
});
