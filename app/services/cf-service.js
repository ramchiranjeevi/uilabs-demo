import Ember from 'ember';

export default Ember.Service.extend({

  cf_obj: {},
  render_Obj:'',

  slt_fields: [{'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Single line text'},
                {'label': 'Description : ','type':'cf-text-area', 'text': 'Description'},
                {'label': 'Max. Characters : ','type':'cf-text-box', 'text': '100'},
                {'label': 'Default Value : ','type':'cf-text-box', 'text': 'Default Value'}
              ],

  mlt_fields: [{'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Multi line text'},
                {'label': 'Description : ','type':'cf-text-area', 'text': 'Description'},
              ],

  number_fields: [{'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Number'},
                {'label': 'Description : ','type':'cf-text-area', 'text': 'Description'},
                {'label': 'Min. Value : ','type':'cf-text-box', 'text': '0'},
                {'label': 'Max. Value : ','type':'cf-text-box', 'text': '100'},
                {'label': 'Default Value : ','type':'cf-text-box', 'text': 'Default Value'},
              ],

  email_fields: [{'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Email'},
                {'label': 'Description : ','type':'cf-text-area', 'text': 'Description'},
              ],

  ph_fields: [{'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Phone'},
                {'label': 'Description : ','type':'cf-text-area', 'text': 'Description'},
              ],

  date_fields: [{'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Date'},
                {'label': 'Description : ','type':'cf-text-area', 'text': 'Description'},
                {'label': 'Default Value : ','type':'cf-text-box', 'text': 'Default Value'},
              ],

  yn_fields: [{'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Yes/No'},
                {'label': 'Description : ','type':'cf-text-area', 'text': 'Description'},
              ],




  init: function(){
    var self = this;
    self._super();
    self.set('render_Obj', self.get('slt_fields'));
  },

  updateCfObj: function( obj ){
    var self = this,
    field = obj.type+'_fields';
    self.set('render_Obj', self.get(field));
  }


});
