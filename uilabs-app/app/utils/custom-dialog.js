import Ember from 'ember';
import CustomDialogModal from 'uilabs-addon/components/ui-custom-modal';

const { $ } = Ember;

export default Ember.Object.create({

    show( innerLayout, dialogOptions ){

        let options = $.extend({

            // continer property defined by initializer...
            container: this.get("container"),

            // Layout which will be loaded inside of the dialog...
            innerLayout: innerLayout

        }, dialogOptions);  // Extending with custom option for dialog...

        const dialog = new CustomDialogModal();

        dialog.setProperties( options );
        dialog.append();

        return dialog;
    },
    hide( dialogObject ){
        dialogObject.send("hideDialog");
    }
});
