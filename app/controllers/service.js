import Ember from 'ember';
// import DialogComponent from '../components/ui-dialog';
// import dialogUtil from '../utils/dialog-util';

export default Ember.Controller.extend({
    actions: {
      showDialog(){
          dialogUtil.alert({
             name: "Balu"
          });
      }
    }
});
