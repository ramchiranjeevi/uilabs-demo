import Ember from 'ember';

export default Ember.Route.extend({

    model(){
  return[
        Ember.Object.create({
          "res_name": 'Renuga',
          "is_rename": false,
          "res_id": '1'
        }),
        Ember.Object.create({
          "res_name": 'Priya',
          "is_rename": false,
          "res_id": '2'
        }),
        Ember.Object.create({
          "res_name": 'Balu',
          "is_rename": false,
          "res_id": '3'
        }),
        Ember.Object.create({
          "res_name": 'Mohamed',
          "is_rename": false,
          "res_id": '4'
        }),
        Ember.Object.create({
          "res_name": 'Ram',
          "is_rename": false,
          "res_id": '5'
        })
      ];

    }
});
