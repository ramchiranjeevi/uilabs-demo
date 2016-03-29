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
  this.route('components-path');
  this.route('service-example');
  this.route('component-action-example');
  this.route('simple-modal-dialog-two');
  this.route('eventbus');
  this.route('dropdown');
  this.route('closer-actions');
  this.route('service');
  this.route('datePicker');

  this.route('modal');
  this.route('tab-selection');
});

export default Router;
