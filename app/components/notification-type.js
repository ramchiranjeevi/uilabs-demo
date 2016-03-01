import Ember from 'ember';

export default Ember.Component.extend({
	tagName:'button',


	didInsertElement:function () {
		console.log('in Component');
	},
	click:function(){
		alert('hi');
		
	}


});
