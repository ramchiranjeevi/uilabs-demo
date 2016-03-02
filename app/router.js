import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('components-demo');
  this.route('simple-modal-template');
  this.route('selection');
  this.route('foldertree', function() {
    this.route('reopen');
  });
  this.route('menu');
  this.route('rename');
  this.route('customfields');
  this.route('tooltip');
  this.route('preview');
  this.route('notification');
  this.route('progressbar');
  this.route('spinner');
  this.route('dialog');
});

export default Router;
