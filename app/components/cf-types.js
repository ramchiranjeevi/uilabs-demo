import Ember from 'ember';

export default Ember.Component.extend({

        dynamic_class : ['hidediv'],
        selected_type: 'Single line text',
        field_types: [ {id: 1, value: "Single line text" },  // No I18N
                        {id: 2, value: "Multi line text" }, // No I18N
                        {id: 3, value: "Number" }, // No I18N
                        {id: 4, value: "Email" }, // No I18N
                        {id: 5, value: "Phone" }, // No I18N
                        {id: 6, value: "Date & Time" },  // No I18N
                        {id: 7, value: "Yes/No" }, // No I18N
                        {id: 8, value: "Choice" }], // No I18N

        actions:{
                changeClass: function( obj ){
                        var self = this,
                        class_name = self.get('dynamic_class') === 'hidediv' ? 'showdiv' : 'hidediv';
                        self.set('dynamic_class', class_name);
                        if (obj){
                                self.set('selected_type', obj.value);
                        }
                }
        }

});
