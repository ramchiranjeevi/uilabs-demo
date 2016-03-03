import Ember from 'ember';

export default Ember.Controller.extend({

  inject_service: false,
  ddObj:'',

  initService: Ember.observer('inject_service', function() {
    var self = this;
    if (self.get('inject_service')){
      self.set('ddObj', Ember.inject.service('drop-down'));
      alert('injected..');
    } else {
      self.set('ddObj', '');
      alert('Empty..');
    }
  }),

  field_types: [ {key: 'field', value: "Single line text" },  // No I18N
                  {key: 'field', value: "Multi line text" }, // No I18N
                  {key: 'field', value: "Number" }, // No I18N
                  {key: 'field', value: "Email" }, // No I18N
                  {key: 'field', value: "Phone" }, // No I18N
                  {key: 'field', value: "Date & Time" },  // No I18N
                  {key: 'field', value: "Yes/No" }, // No I18N
                  {key: 'field', value: "Choice" }
                ],

    yesOrNo_Obj: [ {key: 'yesOrNo', value: 'Yes'}, // No I18N
                   {key: 'yesOrNo', value: 'No'} // No I18N
                ]

});
