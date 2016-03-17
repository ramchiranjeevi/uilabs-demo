import Ember from 'ember';
import createFolderMixin from '../mixins/createfolder';
import uploadMixin from '../mixins/upload';

export default Ember.Route.extend( createFolderMixin, uploadMixin, {
});
