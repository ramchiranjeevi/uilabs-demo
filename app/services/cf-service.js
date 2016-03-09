import Ember from 'ember';

export default Ember.Service.extend({

  cf_obj: [],
  field_header: '',
  render_Obj:'',

  slt_fields: [{'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Single line text', 'value': ''},
                {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''},
                {'label': 'Max. Characters : ','type':'cf-text-box', 'text': '100', 'value': ''},
                {'label': 'Default Value : ','type':'cf-text-box', 'text': 'Default Value', 'value': ''}
              ],

  mlt_fields: [{'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Multi line text', 'value': ''},
                {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''},
              ],

  number_fields: [{'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Number', 'value': ''},
                {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''},
                {'label': 'Min. Value : ','type':'cf-text-box', 'text': '0', 'value': ''},
                {'label': 'Max. Value : ','type':'cf-text-box', 'text': '100', 'value': ''},
                {'label': 'Default Value : ','type':'cf-text-box', 'text': 'Default Value', 'value': ''},
              ],

  email_fields: [{'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Email', 'value': ''},
                {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''},
              ],

  ph_fields: [{'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Phone', 'value': ''},
                {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''},
              ],

  date_fields: [{'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Date', 'value': ''},
                {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''},
                {'label': 'Default Value : ','type':'cf-text-box', 'text': 'Default Value', 'value': ''},
              ],

  yn_fields: [{'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Yes/No', 'value': ''},
                {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''},
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
  },

  addCF: function(){
    var self = this,
    dataObj = [],
    temp_obj = self.get('cfService.render_Obj');

    temp_obj.forEach(function( obj, index ){
      dataObj[ index ] = obj.value;
    });
    self.set( 'cfService.field_header', self.get('cfService.render_Obj')[0].text );
    var cfObj = self.set( 'cfService.cf_obj', dataObj );
  }


});
