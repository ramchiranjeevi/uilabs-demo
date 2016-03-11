import Ember from 'ember';

export default Ember.Controller.extend({

    ddObj: Ember.inject.service('drop-down'),

    selected_type: 'Single line text',

    field_types: [ {key: 'field', value: "Single line text", type: 'slt', needToUpdate: true },  // No I18N
                    {key: 'field', value: "Multi line text", type: 'mlt', needToUpdate: true }, // No I18N
                    {key: 'field', value: "Number", type: 'number', needToUpdate: true }, // No I18N
                    {key: 'field', value: "Email", type: 'email', needToUpdate: true }, // No I18N
                    {key: 'field', value: "Phone", type: 'ph', needToUpdate: true }, // No I18N
                    {key: 'field', value: "Date & Time", type: 'date', needToUpdate: true },  // No I18N
                    {key: 'field', value: "Yes/No", type: 'yn', needToUpdate: true }, // No I18N
                    {key: 'field', value: "Choice", type: 'ch', needToUpdate: true }
                  ],

      yesOrNo_Obj: [ {key: 'yesOrNo', value: 'Yes'}, // No I18N
                     {key: 'yesOrNo', value: 'No'} // No I18N
                  ]


});
