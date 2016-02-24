import Ember from 'ember';

export default Ember.Component.extend({

        actions:{
                change: function( obj ){
                        var self = this;
                        self.get('change')(obj);
                }
        }
});
