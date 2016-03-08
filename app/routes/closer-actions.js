import Ember from 'ember';

const { Route, Object, Logger } = Ember;

let CreateFolderModelClass = Object.extend({
  name: null,

  save() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      // console.log((Math.random() < 0.26));
      if (Math.random() < 0.26 ) {
        Logger.error('server error');
        reject('Server error, please try again');
      } else {
        Logger.info('saved model');
        resolve();
      }
    });
  }
});

export default Route.extend({
  model() {
    return CreateFolderModelClass.create({
      name: 'Create Folder'
    });
  }
});
