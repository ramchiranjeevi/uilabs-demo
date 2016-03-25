import Ember from 'ember';
import CreateFolderMixin from '../mixins/createfolder';
import UploadMixin from '../mixins/upload';

export default Ember.Route.extend( CreateFolderMixin, UploadMixin, {
});
