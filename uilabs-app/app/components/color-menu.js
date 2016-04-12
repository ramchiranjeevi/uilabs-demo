import Ember from 'ember';
import tabSelection from '../mixins/tab-selection';

export default Ember.Component.extend(tabSelection, {

  active_color: '',
  colors: { 'white': '',
            'grey': '',
            'teal': ''
          },

  didInsertElement(){
    var self = this,
    active = self.get('pageStyles.bgcolor');
    self.set('active_color', active);
    self.send('changeColor', active );
  },

  actions:{
    changeColor( color ){

      var self = this;
      self.set('colors.'+self.get('active_color'), '' );
      self.set('active_color', color );
      self.set('colors.'+self.get('active_color'), 'checked' );
      self.send('changeStyle',  'bgcolor', color );

    }
  }

});
