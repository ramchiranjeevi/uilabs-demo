import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('components-demo');
  this.route('simple-modal-template');
});

export default Router;
