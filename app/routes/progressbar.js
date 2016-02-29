import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return[
            Ember.Object.create({ "filename": "File_name.png", "value": 40, "label": "PROGRESS (Custom Color)", "showPercentInBar": true, "color": "blue", "className": "active"}),
            Ember.Object.create({ "filename": "File_name.txt", "value": 100, "label": "SUCCESS", "className": "success" }),
            Ember.Object.create({ "filename": "File_name.jpg", "value": 100, "label": "WARNING", "className": "warning" }),
            Ember.Object.create({ "filename": "File_name.docx", "value": 100, "label": "ERROR", "className": "error" })
        ]
    }
});
