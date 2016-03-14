import Ember from 'ember';
import layout from '../templates/components/date-picker';

export default Ember.Component.extend({

	layout: layout,

	attributeBindings: ['placeholder', 'placeholderTranslation', 'readonly'],

	value: null,

	moment:'',

	semantic: true,

	minDate: moment().startOf('day'),

	locale: null,

	_picker: null,

	dateFormatStr: null,

	widgetPosition: 'auto',

	replaceClassMap: {
		'glyphicon glyphicon-chevron-left': 'left arrow icon',
		'glyphicon glyphicon-chevron-right': 'right arrow icon',
		'table-condensed': '',
		'glyphicon glyphicon-chevron-up': 'up arrow icon',
		'glyphicon glyphicon-chevron-down': 'down arrow icon',
		'btn': 'btn btn-primary',
		'seperator': '', //bootstrap class = Doesn't do anything.
		'btn-primary': '',
		'col-sm-6': '',
		'row': '',
		'btn btn-primary': 'ui button'
	},

	replaceableClassesForFind: {
		'.btn': ''
	},

	pickerElement: Ember.computed({
		get() {
			return this.$(".datetimepicker");
		}
	}),

	didInsertElement: function() {
		console.log('in didInsertElement');
		let pickerElement = this.get("pickerElement");
		pickerElement.attr('data-date-format', this.get('dateFormatStr'));


		pickerElement.datetimepicker({
				widgetParent: pickerElement,
				// format: this.get('dateFormatStr'),
				useCurrent: false,
				// defaultDate: moment(this.get('value')).startOf('day'),
				minDate: this.get('minDate'),
				widgetPositioning: {
					horizontal: this.get('widgetPosition')
				},
				ignoreReadonly: true,
				locale: this.get('locale'),
				replaceClassMap: this.get('replaceClassMap'),
				replaceableClassesForFind: this.get('replaceableClassesForFind')
		});

		this.set('_picker', pickerElement.data('DateTimePicker'));

		this._setDate(this.get('value'));

		this._initPickerEvents();
	},

	onValue: Ember.observer('value', function() {
		this._setToFormat(this.get('value'));
	}),

	retractedMinDate: Ember.computed('minDate', {
		get() {
			return moment(this.get('minDate')).startOf('day');
		}
	}),

	_setDate: function(valuedate) {
		let picker = this._picker,
			currentValue = new Date(valuedate);
			picker.date(currentValue); //whenever datepicker opens it should open with the set date
	},

	_setToFormat: function(valuedate) {
		let pickerElement = this.get('pickerElement'),
			localDate = moment(valuedate);
			localDate.locale(this._picker.locale());
		pickerElement.find('input').val(localDate.format(this.get('dateFormatStr')));
	},

	dateTimePickerPosition: function() {
		const position = this.get('position');
			this.$('.bootstrap-datetimepicker-widget').css(position, '0px');
	},

	_initPickerEvents: function() {
		let self = this,
			pickerElement = this.get('pickerElement'),
			icon = this.$('.datepickerbutton');

		//when the picker shows
		pickerElement.on('dp.show.pickerEvents', function() {
			self.dateTimePickerPosition();
			self._setDate(self.get('value'));
		});

		pickerElement.find('input').click(function() {
			icon.click();
		});
	},

	willDestroyElement: function() {
		console.log('willDestroyElement');
		this.get('pickerElement').off('.pickerEvents');
		this._picker.destroy();
	}
});
