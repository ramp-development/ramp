import * as sitewide from './sitewide';
import * as utils from './utils';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(ScrollTrigger);
  sitewide.nav();
  sitewide.modal();
  sitewide.forms();

  if (document.querySelector('.splide')) utils.splide();

  const confettiTriggers = [...document.querySelectorAll('.confetti_trigger')];
  confettiTriggers.forEach((trigger) => {
    trigger.onclick = () => {
      utils.launchConfetti();
    };
  });
});
