import Ember from 'ember';

export default Ember.Component.extend({
    value: 0,
    label: "",
    classNames: ["ui", "progress"],
    size: "",
    color: "",
    className: "",
    showPercentInBar: false,
    classNameBindings: [ "sizeClass", "colorClass", "customClass", "stateClass" ],
    attributeBindings: ["dataPercent:data-percent"],
    dataPercent: Ember.computed.alias('value'),
    sizeClass: Ember.computed.alias('size'),
    colorClass: Ember.computed.alias('color'),
    customClass: Ember.computed.alias('className'),
    stateClass: Ember.computed('value', function() {
        if( this.get( "value" ) < 100 ){
            return "success";
        }
        else{
            return "indicating active";
        }
    })
});
