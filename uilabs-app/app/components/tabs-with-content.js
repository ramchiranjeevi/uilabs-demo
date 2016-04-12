import Ember from 'ember';
import tabSelection from '../mixins/tab-selection';

export default Ember.Component.extend(tabSelection, {

  model: {},

  didInsertElement(){
    var self = this;
    self.set( 'model', self.get('modelObj') );
   },

  actions:{

    didTabChanged( obj ){

      var self = this,
      activeObj = self.get('model').filterBy('is_active', 'active');

      if ( activeObj[0] ){
        activeObj[0].set('is_active', '');
        activeObj[0].set('visible', 'hide');
      }

      obj.set('is_active', 'active');
      obj.set('visible', '');

    }

  }

});
