import Ember from 'ember';
import tabSelection from '../mixins/tab-selection';

export default Ember.Component.extend(tabSelection, {

  active_font: '',
  fonts: { 'inherit': '','monospace': '','serif': '','cursive': '','fantacy': '' },

  didInsertElement(){
    var self = this,
    active = self.get('pageStyles.font');
    self.set('active_font', active);
    self.send('changeFont', active );
  },

  actions: {

    changeFont( font ){
      var self = this;
      self.set('fonts.'+self.get('active_font'), '' );
      self.set('active_font', font );
      self.set('fonts.'+self.get('active_font'), 'checked' );
      self.send('changeStyle',  'font', font );
    }

  }

});
