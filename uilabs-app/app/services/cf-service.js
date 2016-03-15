import Ember from 'ember';

export default Ember.Service.extend({

  field_header: '',
  render_Obj:'',
  cf_types: ['slt_fields', 'mlt_fields', 'number_fields', 'email_fields', 'ph_fields', 'date_fields', 'yn_fields', 'ch_fields'],
  cf_obj: {},
  new_fields: [],
  isMand: false,
  reqOnUpload: true,

  init(){
    var self = this,
    cf_obj= {},
    types = self.get('cf_types'),
    name_field = Ember.Object.create( {'label': 'Field Name : ', 'type': 'cf-text-box', 'text': '', 'value': ''} ),
    desc_field = Ember.Object.create( {'label': 'Description : ','type':'cf-text-area', 'text': 'Description', 'value': ''} ),
    defVal_field = Ember.Object.create( {'label': 'Default Value : ','type':'cf-text-box', 'text': 'Default Value', 'value': ''} );
    self._super();

    var type_obj =  [
                      [ name_field.set( 'text', 'Single line text' ), desc_field ,
                        name_field.set( 'label', 'Max. Characters' ),
                        name_field.set( 'text', '100' ), defVal_field ],

                      [ name_field.set( 'text', 'Multi line text' ), desc_field ],

                      [ name_field.set( 'text', 'Number' ), desc_field ,
                        name_field.set( 'label', 'Min. Value' ), name_field.set( 'text', '0' ),
                        name_field.set( 'label', 'Max. Value' ), name_field.set( 'text', '100' ), defVal_field,
                        Ember.Object.create({'label': 'No. of decimal points : ','type':'cf-drop-down', 'model': [ {value: 'Auto'}, {value: 'No decimal'}, {value: '1'},{value: '2'},{value: '3'},{value: '4'},{value: '5'}, ], 'value': 'Auto', 'def_value': 'Auto'}) ],

                      [ name_field.set( 'text', 'Email' ), desc_field ],

                      [ name_field.set( 'text', 'Phone' ), desc_field ],

                      [ name_field.set( 'text', 'Date' ), desc_field, defVal_field,
                        Ember.Object.create({'label': 'Date & Time Format : ','type':'cf-drop-down', 'model': [ {value: 'Date only'}, {value: 'Date & Time'} ], 'value': 'Date only', 'def_value': 'Date only'}) ],

                      [ name_field.set( 'text', 'Yes/No' ), desc_field,
                        Ember.Object.create({'label': 'Default Value : ','type':'cf-drop-down', 'model': [ {value: 'Yes'}, {value: 'No'} ], 'value': 'Yes', 'def_value': 'Yes'}) ],

                      [ name_field.set( 'text', 'Choice' ), desc_field,
                        Ember.Object.create({'label': 'Display Choices : ','type':'cf-drop-down', 'model': [ {value: 'Single Choice', isHeader: true }, {value: 'Drop Down'}, {value: 'Multiple Choice', isHeader: true}, {value: 'Radio'}, {value: 'Check Box'} ], 'value': 'Drop Down', 'def_value': 'Drop Down'}),
                        Ember.Object.create({'label': 'Choices : ','type':'cf-text-area', 'text': 'Enter the Choices in Separate lines', 'value': ''}) ],
                    ];

    types.forEach((obj, index) => {
      cf_obj[ obj ] = type_obj[ index ];
    });

    self.set('cf_obj', cf_obj);
    self.set('render_Obj', self.get('cf_obj.slt_fields'));
  },

  updateCfObj( obj ){
    var self = this,
    field = 'cf_obj.'+obj.type+'_fields';
    self.set('render_Obj', self.get(field));
  },

  addCF(){
    var self = this,
    dataObj = [],
    temp_obj = self.get('render_Obj');

    temp_obj.forEach(( obj, index ) => {
      if ( obj.value ) {
        dataObj[ index ] = obj.value;
      } else {
        alert( obj.label +'is empty!');
      }
    });

    self.set( 'field_header', self.get('render_Obj')[0].text );
    self.set( 'new_fields', dataObj );
    self.discard();
  },

  empty(){
      var self = this;
      self.set('field_header',  '');
      self.set('render_Obj', '');
      self.set('cf_obj',  {});
      self.set('new_fields',  []);
  },

  discard(){
    var self = this,
    temp_obj = self.get('render_Obj');
    temp_obj.forEach( (obj) => {
      if ( obj.type === 'cf-drop-down' ){
          obj.set('value', obj.def_value);
      } else {
        obj.set('value', '');
      }
    });
  }

});
