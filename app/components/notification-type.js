import Ember from 'ember';

export default Ember.Component.extend({

	tagName:'button',

	click:function(){

		if(this.id == "1"){
				$('.Ndiv').css('background-color', 'green'),
				$('.Ndiv').transition({animation : 'scale',interval  : 200})
			}

		if(this.id == "2"){
				$('.Ndiv').css('background-color', 'orange'),
				$('.Ndiv').transition('horizontal flip', '500ms');
			}

		if(this.id == "3"){
				$('.Ndiv').css('background-color', 'red'),
				$('.Ndiv').transition('horizontal flip', '500ms');
			}

		if(this.id == "4"){
				$('.Ndiv').css('background-color', 'teal'),
				$('.Ndiv').transition('horizontal flip', '500ms');
			}



		}



});
