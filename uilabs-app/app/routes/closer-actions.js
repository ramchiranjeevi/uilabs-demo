import Ember from 'ember';

const { Route, Object, Logger, inject } = Ember;

let CreateFolderModelClass = Object.extend({
  name: null,

  save() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      // console.log((Math.random() < 0.26));
      if (Math.random() < 0.26 ) {
        Logger.error('server error');
        reject('Name should not be empty, please try again');
      } else {
        Logger.info('saved model');
        resolve();
      }
    });
  }
});

export default Route.extend({
    modelObject: inject.service("create-folder-model"),
    model() {
        return this.get("modelObject");
    }
});
