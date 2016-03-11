import Ember from 'ember';

const { Logger } = Ember;

export default Ember.Service.extend({
    name: "Default",
    save() {
      return new Ember.RSVP.Promise(function(resolve, reject) {
        if (Math.random() < 0.26) {
          Logger.error('server error');
          reject('Server error, please try again');
        } else {
          Logger.info('saved model');
          resolve();
        }
      });
    }
});
