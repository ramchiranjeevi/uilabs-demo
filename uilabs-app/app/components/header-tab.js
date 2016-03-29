import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'a',
  classNames: ['item'],
  tab_name: '',

  click( e, obj ){
    var self = this;
    self.attrs.update( obj );
  }

});
