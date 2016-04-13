import ModalDialogUtil from '../utils/custom-dialog';
import ProgressBarUtil from '../utils/progressbar';

export function initialize(app) {
    ModalDialogUtil.reopen({
        container: app.__container__
    });
    ProgressBarUtil.reopen({
        container: app.__container__
    });
}

export default {
  name: 'container-injection',
  initialize
};
