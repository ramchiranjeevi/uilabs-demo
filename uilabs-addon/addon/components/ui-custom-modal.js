import Ember from 'ember';

import layout from '../templates/components/ui-custom-modal';

const { Component } = Ember;

export default Component.extend({

    layout: layout,
    innerLayout: '',
    classNames: 'ui modal small'.w(),
    classNameBindings: 'size'.w(),
    size: 'small',
    title: 'Title',
    height: 'auto',
    width: 'auto',
    buttons: {},
    dialogType: '',    // alert || confirm || modal
    alertType: '',   // warning, error
    successLabel: '',
    cancelLabel: '',

    initialisation: function(){

        let buttonLabels = Object.keys( this.get('buttons') );
        this.set( 'successLabel', buttonLabels[0] ? buttonLabels[0] : '' );
        this.set( 'cancelLabel', buttonLabels[1] ? buttonLabels[1] : '' );

    }.on('didReceiveAttrs'),

    didInsertElement(){

        this.$().modal({

            allowMultiple: true,
            onApprove: ()=>{
                this.get('buttons')[this.get('successLabel')]();
                return false;
            },

            onDeny: ()=>{
                this.get('buttons')[this.get('cancelLabel')]();
            },

            onHidden: ()=>{
                this.send("destroy");
            }
        });
        this.send('showDialog');
    },

    actions: {
        showDialog(){
            this.$().modal('show');
        },
        hideDialog(){
            this.$().modal('hide');
        },
        destroy(){
            this.destroy();
        }
    }

});
