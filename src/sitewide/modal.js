import { simulateEvent } from '@finsweet/ts-utils';

export const modal = () => {
  // toggle scrolling
  const toggleOverflow = () => {
    document.body.classList.toggle('overflow-hidden');
  };

  let abortListeners = new AbortController();

  // when a modal is opened
  const modalToggled = (dataModal, direction) => {
    const modal = document.querySelector(
      `[data-modal-element="component"][data-modal="${dataModal}"]`
    );

    // find all tabbable elements
    let tabbable = [...modal.querySelectorAll('select, input, textarea, button, a')];
    tabbable = tabbable.filter((element) => {
      return element.tabIndex !== -1;
    });

    // get a reference to the first and last tabbables
    const firstTabbable = tabbable[0];
    const lastTabbable = tabbable[tabbable.length - 1];

    // redirect last tab to first tabbable
    const lastTab = (event) => {
      if (event.which !== 9 || event.shiftKey) return;
      event.preventDefault();
      firstTabbable.focus();
    };

    // redirect first shift+tab to last tabbable
    const firstTab = (event) => {
      if (event.which !== 9 || !event.shiftKey) return;
      event.preventDefault();
      lastTabbable.focus();
    };

    // allow escape key to close insiders div
    const esc = (event) => {
      if (event.keyCode !== 27) return;
      console.log('esc');
      simulateEvent(document.querySelector('[data-trigger="close"]'), 'click');
      // simulateEvent(modalToggle, 'click');
      // toggleOverflow();
    };

    if (direction === 'open') {
      // focus the first tabbable
      setTimeout(() => {
        tabbable[0].focus();
      }, 10);

      lastTabbable.addEventListener('keydown', lastTab);
      firstTabbable.addEventListener('keydown', firstTab);
      modal.addEventListener('keydown', esc, { signal: abortListeners.signal });
    } else {
      // remove all event listeners
      abortListeners.abort();
      abortListeners = new AbortController();
    }
  };

  // find all modal triggers and the toggle element
  const modalTriggers = [...document.querySelectorAll('[data-modal][data-trigger]')];
  const modalToggle = document.querySelector('.contact-modal_toggle');
  let currentTrigger = true;

  modalTriggers.forEach((trigger) => {
    // when the trigger is clicked
    trigger.onclick = () => {
      // find what it does and for what modal
      const direction = trigger.dataset.trigger;
      const { modal } = trigger.dataset;

      simulateEvent(modalToggle, 'click');
      toggleOverflow();
      modalToggled(modal, direction);
      if (direction === 'open') {
        currentTrigger = trigger;
      } else {
        currentTrigger.focus();
        currentTrigger = null;
      }
    };
  });
};
