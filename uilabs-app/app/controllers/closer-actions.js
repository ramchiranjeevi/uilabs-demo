import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
//    createFolderModel: inject.service(),
    actions: {
        saveName(name) {
          console.log('1');
            let model = this.get('model');
            return new Ember.RSVP.Promise(function(resolve, reject) {
              if(Ember.isEmpty(name.trim())){
                 reject('Name is empty');
              } else if(name.length > 5){
                reject('Name length is greater than 5');
              } else {
                resolve('success');
              }
            });
              // if (Math.random() < 0.26) {
              //   Logger.error('server error');
              //   reject('Server error, please try again');
              // } else {
              //   Logger.info('saved model');
              //   resolve();
              // }

            // if(Ember.isEmpty(name)){
            //   return error;
            // }
            // model.set('name', name);
            // //return this.get("createFolderModel").save();
        }
    }
});
