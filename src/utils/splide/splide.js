import { customArrows } from './customArrows';
import { setCounter } from './setCounter';
import { toggleDisability } from './toggleDisability';

export const splide = () => {
  const splides = [...document.querySelectorAll('.splide')];
  customArrows();

  splides.forEach((splide) => {
    const options = {
      type: 'slide',
      pagination: false,
      speed: 350,
      easing: 'cubic-bezier(.165, .84, .44, 1)',
      keyboard: true,
    };

    if (splide.classList.contains('is-testimonials')) {
      options.type = 'loop';
      options['focus'] = 'center';
      options['gap'] = '0.5rem';
    }

    const slider = new Splide(splide, options).mount();
    const counter = splide.querySelector('[data-slider="counter"]');
    const noSlides = slider.length;
    setCounter(counter, 0, noSlides);

    slider.on('moved', (newIndex) => {
      if (newIndex === 0) {
        toggleDisability(splide, 'prev');
      } else if (newIndex === noSlides - 1) {
        toggleDisability(splide, 'next');
      } else {
        toggleDisability(splide);
      }

      setCounter(counter, newIndex, noSlides);
    });
  });
};
