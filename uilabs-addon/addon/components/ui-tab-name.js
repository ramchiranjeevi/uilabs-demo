import Ember from 'ember';
import layout from '../templates/components/ui-tab-name';

export default Ember.Component.extend({
  layout: layout,

  click(){
    var self = this;
    self.attrs.onClick();
  }

});
