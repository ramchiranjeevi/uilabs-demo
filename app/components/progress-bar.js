import Ember from 'ember';

export default Ember.Component.extend({
    value: 0,
    label: "",
    classNames: ["ui", "progress"],
    size: "",
    color: "",
    className: "",
    showPercentInBar: false,
    classNameBindings: [ "sizeClass", "colorClass", "customClass" ],
    attributeBindings: ["dataPercent:data-percent"],
    dataPercent: Ember.computed.alias('value'),
    sizeClass: Ember.computed.alias('size'),
    colorClass: Ember.computed.alias('color'),
    customClass: Ember.computed.alias('className')
});