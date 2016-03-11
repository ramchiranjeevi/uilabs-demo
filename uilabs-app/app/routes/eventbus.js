import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
  return Ember.A([
    Ember.Object.create({id: 1, title: 'Dr.', name: "Priya"}),
    Ember.Object.create({id: 2, title: 'Mr.', name: "Balu"}),
    Ember.Object.create({id: 3, title: 'Miss.', name: "Renu"}),
    Ember.Object.create({id: 3, title: 'Mr.', name: "Ali"}),
    Ember.Object.create({id: 3, title: 'Mr.', name: "Ram"})

  ]);
}
});
