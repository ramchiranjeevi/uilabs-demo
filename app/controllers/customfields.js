import Ember from 'ember';

export default Ember.Controller.extend({

  ddObj: Ember.inject.service('drop-down'),

  field_types: [ {id: 1, value: "Single line text" },  // No I18N
                  {id: 2, value: "Multi line text" }, // No I18N
                  {id: 3, value: "Number" }, // No I18N
                  {id: 4, value: "Email" }, // No I18N
                  {id: 5, value: "Phone" }, // No I18N
                  {id: 6, value: "Date & Time" },  // No I18N
                  {id: 7, value: "Yes/No" }, // No I18N
                  {id: 8, value: "Choice" }
                ],

    yesOrNo_Obj: [ {id: 1, value: 'Yes'}, // No I18N
                   {id: 2, value: 'No'} // No I18N
                ]

});
