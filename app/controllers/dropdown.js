import Ember from 'ember';

export default Ember.Controller.extend({
  
    inject_service: false,
    ddObj:'',

    initService: Ember.observer('inject_service', function() {
      var self = this;
      self.set('ddObj', self.get('inject_service') ? Ember.inject.service('drop-down') : '' );
    }),

    field_types: [ {key: 'field', value: "Single line text", type: 'slt'},  // No I18N
                    {key: 'field', value: "Multi line text", type: 'mlt'}, // No I18N
                    {key: 'field', value: "Number", type: 'number'}, // No I18N
                    {key: 'field', value: "Email", type: 'email'}, // No I18N
                    {key: 'field', value: "Phone", type: 'ph'}, // No I18N
                    {key: 'field', value: "Date & Time", type: 'date'},  // No I18N
                    {key: 'field', value: "Yes/No", type: 'yn'}, // No I18N
                    {key: 'field', value: "Choice", type: 'ch'}
                  ],

      yesOrNo_Obj: [ {key: 'yesOrNo', value: 'Yes'}, // No I18N
                     {key: 'yesOrNo', value: 'No'} // No I18N
                  ]


});
