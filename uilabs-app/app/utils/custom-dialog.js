import Ember from 'ember';
import DialogComponent from '../components/custom-modal';

const { $ } = Ember;

export default Ember.Object.create({

    show( innerLayout, dialogOptions ){

        let app = Zoho5;

        let options = $.extend({

            container: app.__container__,

            innerLayout: innerLayout

        }, dialogOptions);

        const dialog = new DialogComponent();

        dialog.setProperties( options );
        dialog.append();

        return dialog;
    },
    hide( dialogObject ){
        dialogObject.send("hideDialog");
    }
});