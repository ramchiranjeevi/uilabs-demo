import Ember from 'ember';
import layout from '../templates/components/ui-tabs-with-content';

export default Ember.Component.extend({
  layout: layout,
  model:{},
  default_menu: '',

  didInsertElement(){
    var self = this;
    Ember.run.later(() => {
      self.send('didTabChanged', self.get('default_menu'));
    });
   },

  actions:{

    didTabChanged( menu ){

      var self = this,
      activeObj = self.get('model').filterBy('is_active', 'active')[0],
      obj = menu === '' ? self.get('model')[0] : self.get('model').filterBy( 'tab_name', menu )[0];
      obj = obj === undefined ? self.get('model')[0] : obj;

      if ( activeObj )
      {
        activeObj.set('is_active', '');
        activeObj.set('visible', 'hide');
      }

      obj.set('is_active', 'active');
      obj.set('visible', '');
    }

  }

});
