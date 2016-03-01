import Ember from 'ember';
import MenuMixin from '../mixins/menumixin';

export default Ember.Controller.extend(MenuMixin, {
  isMoreMenu: false,
  isContextMenu: false,
});
