import Ember from 'ember';

export default Ember.Service.extend({

  field_header: '',
  render_Obj:'',
  cf_types: ['slt_fields', 'mlt_fields', 'number_fields', 'email_fields', 'ph_fields', 'date_fields', 'yn_fields'],
  cf_obj: {},
  new_fields: [],

  init: function(){
    var self = this,
    cf_obj= {},
    types = self.get('cf_types');
    self._super();

    var type_obj =  [
                      [ {'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Single line text', 'value': ''},
                        {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''},
                        {'label': 'Max. Characters : ','type':'cf-text-box', 'text': '100', 'value': ''},
                        {'label': 'Default Value : ','type':'cf-text-box', 'text': 'Default Value', 'value': ''}
                      ],

                      [ {'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Multi line text', 'value': ''},
                        {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''},
                      ],

                      [ {'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Number', 'value': ''},
                        {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''},
                        {'label': 'Min. Value : ','type':'cf-text-box', 'text': '0', 'value': ''},
                        {'label': 'Max. Value : ','type':'cf-text-box', 'text': '100', 'value': ''},
                        {'label': 'Default Value : ','type':'cf-text-box', 'text': 'Default Value', 'value': ''},
                      ],

                      [ {'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Email', 'value': ''},
                        {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''},
                      ],

                      [ {'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Phone', 'value': ''},
                        {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''},
                      ],

                      [ {'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Date', 'value': ''},
                        {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''},
                        {'label': 'Default Value : ','type':'cf-text-box', 'text': 'Default Value', 'value': ''},
                      ],

                      [ {'label': 'Field Name : ', 'type': 'cf-text-box', 'text': 'Yes/No', 'value': ''},
                        {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''},
                      ]
                    ];

    types.forEach(function(obj, index){
      cf_obj[ obj ] = type_obj[ index ];
    });

    self.set('cf_obj', cf_obj);
    self.set('render_Obj', self.get('cf_obj.slt_fields'));
  },

  updateCfObj: function( obj ){
    var self = this,
    field = 'cf_obj.'+obj.type+'_fields';
    self.set('render_Obj', self.get(field));
  },

  addCF: function(){
    var self = this,
    dataObj = [],
    temp_obj = self.get('cfService.render_Obj');


    temp_obj.forEach(function( obj, index ){
      if ( obj.value ) {
        dataObj[ index ] = obj.value;
      } else {
        alert( obj.label +'is empty!');

      }
    });

    self.set( 'cfService.field_header', self.get('cfService.render_Obj')[0].text );
    self.set( 'cfService.new_fields', dataObj );

  },

  empty(){
      var self = this;
      self.set('field_header',  '');
      self.set('render_Obj', '');
      self.set('cf_obj',  {});
      self.set('new_fields',  []);
  }

});
