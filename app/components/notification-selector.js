import Ember from 'ember';

export default Ember.Component.extend({

    tagName: 'div',
    classNameBindings: ['ui','color','Ncomp'],
    attributeBindings:['background-color':"Ncolor"],

    Ncolor:'',



    didInsertElement:function () {
      
      this.set('Ncolor',this.get('controller').get('color')+'!important');

    }




});
