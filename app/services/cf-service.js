import Ember from 'ember';

export default Ember.Service.extend({

  cf_obj: {},
  render_Obj:'',

  slt_fields: [{'label': 'Field Name', 'type': 'cf-text-box', 'text': 'Single line text'},
                {'label': 'Description','type':'cf-text-area', 'text': 'Description'},
                {'label': 'Max. Characters','type':'cf-text-box', 'text': '100'},
                {'label': 'Default Value','type':'cf-text-box', 'text': 'Default Value'}],

  init: function(){
    var self = this;
    self.set('render_Obj', self.get('slt_fields'));
  },

  updateCfObj: function( obj ){
    var self = this,
    field = obj.type+'_fields';
    self.set('render_Obj', self.get(field));
  }


});
