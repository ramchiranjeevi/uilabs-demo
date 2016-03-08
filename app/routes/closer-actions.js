import Ember from 'ember';

const { Route, Object, Logger, inject } = Ember;

export default Route.extend({
    modelObject: inject.service("create-folder-model"),
    model() {
        return this.get("modelObject");
    }
});
