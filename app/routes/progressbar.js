import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return[
            Ember.Object.create({ "value": 40, "label": "PROGRESS", "showPercentInBar": true, "className": "active indicating"}),
            Ember.Object.create({ "value": 100, "label": "SUCCESS", "className": "success" }),
            Ember.Object.create({ "value": 100, "label": "WARNING", "className": "warning" }),
            Ember.Object.create({ "value": 100, "label": "ERROR", "className": "error" })
        ]
    }
});
