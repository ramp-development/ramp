import { isVisible, simulateEvent } from '@finsweet/ts-utils';

export const modalOpened = (modalName, trigger) => {
  const modal = document.querySelector(
    `[data-modal-element="component"][data-modal="${modalName}"]`
  );

  let tabbable = [...modal.querySelectorAll('select, input, textarea, button, a')];

  setTimeout(() => {
    tabbable = tabbable.filter((element) => {
      return isVisible(element);
    });

    const firstTabbable = tabbable[0];
    const lastTabbable = tabbable[tabbable.length - 1];

    tabbable[0].focus();

    /* redirect last tab to first input */
    lastTabbable.addEventListener('keydown', (event) => {
      if (event.which !== 9 || event.shiftKey) return;
      event.preventDefault();
      firstTabbable.focus();
    });

    /* redirect first shift+tab to last input*/
    firstTabbable.addEventListener('keydown', (event) => {
      if (event.which !== 9 || !event.shiftKey) return;
      event.preventDefault();
      lastTabbable.focus();
    });

    /* allow escape key to close insiders div */
    modal.addEventListener('keydown', function (e) {
      if (e.keyCode !== 27) return;
      simulateEvent(modal.querySelector('[data-trigger="close"]'), 'click');
      // trigger.focus();
    });
  }, 500);
};

// var buttonThatOpenedModal;
// var findModal = function (elem) {
//   var tabbable = elem.find('select, input, textarea, button, a').filter(':visible');

//   var firstTabbable = tabbable.first();
//   var lastTabbable = tabbable.last();
//   /*set focus on first input*/
//   firstTabbable.focus();

//   /*redirect last tab to first input*/
//   lastTabbable.on('keydown', function (e) {
//     if (e.which === 9 && !e.shiftKey) {
//       e.preventDefault();
//       firstTabbable.focus();
//     }
//   });

//   /*redirect first shift+tab to last input*/
//   firstTabbable.on('keydown', function (e) {
//     if (e.which === 9 && e.shiftKey) {
//       e.preventDefault();
//       lastTabbable.focus();
//     }
//   });

//   /* allow escape key to close insiders div */
//   elem.on('keydown', function (e) {
//     if (e.keyCode === 27) {
//       $(elem).find('.modal-close_btn').click();
//     }
//   });
// };

// var modalOpenButton = $('.modal-open_btn');
// modalOpenButton.on('keydown', function (e) {
//   // Only activate on spacebar and enter
//   if (e.which !== 13 && e.which !== 32) {
//     return;
//   }

//   e.preventDefault();

//   // Simulate a mouseclick to trigger Webflow's IX2/Interactions
//   var evt = document.createEvent('MouseEvents');
//   evt.initMouseEvent(
//     'click',
//     true,
//     true,
//     window,
//     0,
//     0,
//     0,
//     0,
//     0,
//     false,
//     false,
//     false,
//     false,
//     0,
//     null
//   );
//   $(this).get(0).dispatchEvent(evt);
// });
// modalOpenButton.on('click', function () {
//   $(this).next().show();
//   findModal($(this).next());
//   buttonThatOpenedModal = $(this);
// });

// var modalCloseButton = $('.modal-close_btn, .modal-close_area');
// modalCloseButton.on('keydown', function (e) {
//   // Only activate on spacebar and enter
//   if (e.which !== 13 && e.which !== 32) {
//     return;
//   }

//   e.preventDefault();

//   // Simulate a mouseclick to trigger Webflow's IX2/Interactions
//   var evt = document.createEvent('MouseEvents');
//   evt.initMouseEvent(
//     'click',
//     true,
//     true,
//     window,
//     0,
//     0,
//     0,
//     0,
//     0,
//     false,
//     false,
//     false,
//     false,
//     0,
//     null
//   );
//   $(this).get(0).dispatchEvent(evt);
// });
// modalCloseButton.on('click', function () {
//   $(this).closest('.modal-wrapper').hide();
//   if (buttonThatOpenedModal) {
//     buttonThatOpenedModal.focus();
//     buttonThatOpenedModal = null;
//   }
// });
