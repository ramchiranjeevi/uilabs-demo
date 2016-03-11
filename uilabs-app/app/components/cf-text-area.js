import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['ui', 'form', 'fluid'],
  placeholder: 'Description',
  value: '',

  keyUp( e ){
    var self = this;
    self.set('model.value', e.target.value);
  }


});
