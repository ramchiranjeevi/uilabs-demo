import Ember from 'ember';

export default Ember.Mixin.create({

  pageStyles: {'bgcolor': 'grey', 'font': 'inherit'},
  modelObj: [   Ember.Object.create({
                                    'tab_name': 'Color',
                                    'tab_component': 'color-menu',
                                    'is_active': 'active',
                                    'visible': ''
                                  }),
                Ember.Object.create({
                                    'tab_name': 'Font',
                                    'tab_component': 'font-menu',
                                    'is_active': '',
                                    'visible': 'hide'
                                  })
          ],

  actions:{

    changeStyle( style, value ){
      var self = this;
      self.set('pageStyles.'+style, value );
    }

  }

});
