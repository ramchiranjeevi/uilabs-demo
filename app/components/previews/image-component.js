import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'img',
  attributeBindings:['src'],
  didInsertElement:function()
  {
    var self = this;
    self.set('parentView.currentPreviewItem.isLoading',true);
    self.$().off('load').on('load',function()
    {
        self.set('parentView.currentPreviewItem.isLoading',false);
    }).off('error').on('error',function()
    {
    });
  }
});
