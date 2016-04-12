import Ember from 'ember';
import CustomDialog from '../utils/custom-dialog';
import tabSelection from '../mixins/tab-selection';

export default Ember.Route.extend(tabSelection, {

  styles: {},

  model(){
    var self = this;
    self.set('styles', this.get('pageStyles'));
    return self.get('styles');
  },

  actions:{

    showSettingsDialog( ) {
      CustomDialog.show( 'tabs-with-content', {'title': 'Page Setting'} );
    }

  }

});
