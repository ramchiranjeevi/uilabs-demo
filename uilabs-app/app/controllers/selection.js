import Ember from 'ember';
import CommonactionsMixin from '../mixins/commonactions';

export default Ember.Controller.extend(CommonactionsMixin, {
  // PROPERTIES DECLARATION
  currentModelIndex: -1,
  viewType: "grid"
});
