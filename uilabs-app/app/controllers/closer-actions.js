import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
    createFolderModel: inject.service(),
    actions: {
        saveName(name) {
            let model = this.get('model');

            model.set('name', name);
            return this.get("createFolderModel").save();
        }
    }
});
