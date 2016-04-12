import Ember from 'ember';
import tabSelection from '../mixins/tab-selection';

export default Ember.Component.extend(tabSelection, {

  model: {},

  didInsertElement(){
    var self = this;
    self.set( 'model', self.get('modelObj') );
    self.send('didTabChanged', 'Color');
   },

  actions:{

    didTabChanged( menu ){

      var self = this,
      activeObj = self.get('model').filterBy('is_active', 'active')[0],
      obj = self.get('model').filterBy( 'tab_name', menu )[0];

      if ( activeObj ){
        activeObj.set('is_active', '');
        activeObj .set('visible', 'hide');
      }

      obj.set('is_active', 'active');
      obj.set('visible', '');

    }

  }

});
