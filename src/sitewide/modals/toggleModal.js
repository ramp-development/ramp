import { simulateEvent } from '@finsweet/ts-utils';

import { modalOpened } from './modalOpened';

export const toggleModal = () => {
  const modalTriggers = [...document.querySelectorAll('[data-modal][data-trigger]')];
  let currentTrigger;
  modalTriggers.forEach((trigger) => {
    const type = trigger.dataset.trigger;
    const { modal } = trigger.dataset;
    trigger.onclick = () => {
      const modalToggle = document.querySelector(`.contact-modal_${type}`);
      simulateEvent(modalToggle, 'click');
      if (type === 'open') {
        modalOpened(modal, trigger);
        currentTrigger = trigger;
      } else {
        currentTrigger.focus();
        currentTrigger = null;
      }
    };
  });
};
