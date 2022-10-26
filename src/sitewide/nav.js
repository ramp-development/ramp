export const nav = () => {
  const nav = document.querySelector('.nav');
  const navTrigger = document.querySelector('.nav-trigger');

  navTrigger.style.height = `${nav.offsetHeight}px`;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: navTrigger,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  timeline.to(nav, {
    backgroundColor: 'white',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    borderBottomColor: 'black',
    ease: 'power1.out',
    duration: 0.2,
  });
};
