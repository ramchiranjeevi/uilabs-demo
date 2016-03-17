import ModalDialog from '../utils/custom-dialog';

export function initialize(container, app) {
    ModalDialog.reopen({
        container: app.__container__
    });
}

export default {
  name: 'container-injection',
  initialize
};
