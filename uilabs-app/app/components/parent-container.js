import Ember from 'ember';

export default Ember.Component.extend({

  model: {},
  header_obj:[],
  desc_obj:[],
  selected_tab: '',
  selected_desc: '',

  didInsertElement(){

    var self = this,
    model_obj = self.get('model'),
    temp_obj = [],
    keys = Object.keys( model_obj );
    keys.forEach( ( obj )=>{
      temp_obj.push( model_obj[ obj ] );
    });

    self.set( 'header_obj', keys );
    self.set( 'desc_obj', temp_obj );
    self.set('selected_tab', keys[0] );
    self.set('selected_desc', temp_obj[0] );
  },

  actions:{
    updateDesc( tab ){
      var self = this;
      self.set(tab, 'active');
      self.set('selected_desc', self.get('model')[tab] );
    }
  }

});
