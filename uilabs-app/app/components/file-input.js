import Ember from 'ember';

export default Ember.TextField.extend({
    type: "file",
    change( ev ){
        this.sendAction("on-change", ev.target.files);
    }
});
