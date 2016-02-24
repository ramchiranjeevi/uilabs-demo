import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      Ember.Object.create( {"name": "Today", "split": true} ),
      Ember.Object.create( {"name": "List One", "is_active": false} ),
      Ember.Object.create( {"name": "List Two", "is_active": false} ),
      Ember.Object.create( {"name": "Tomorrow", "split": true} ),
      Ember.Object.create( {"name": "List Three", "is_active": false} ),
      Ember.Object.create( {"name": "List Four", "is_active": false} ),
      Ember.Object.create( {"name": "List Five", "is_active": false} ),
      Ember.Object.create( {"name": "Previous 7 days", "split": true} ),
      Ember.Object.create( {"name": "List Six", "is_active": false} ),
      Ember.Object.create( {"name": "List Seven", "is_active": false} ),
      Ember.Object.create( {"name": "List Eight", "is_active": false} )
    ];
  }
});
