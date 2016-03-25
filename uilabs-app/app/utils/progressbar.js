import Ember from 'ember';
import ProgressBar from '../components/progress-bar';

const { Object, $ } = Ember;

export default Object.create({

    show( progressObject ){

        let options = $.extend({

            container: this.get('container')

        }, progressObject);

        const progressBar = new ProgressBar();

        progressBar.setProperties( options );
        progressBar.append();

        return progressBar;
    }

});
