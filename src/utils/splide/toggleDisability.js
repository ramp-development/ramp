export const toggleDisability = (slider, direction) => {
  const section = slider.closest('section');
  const customArrows = [...section.querySelectorAll('[data-custom-arrow]')];

  if (customArrows.length === 0) return;

  if (!direction) {
    customArrows.forEach((arrow) => {
      arrow.disabled = false;
    });
  } else if (direction === 'prev') {
    customArrows[0].disabled = true;
    customArrows[1].disabled = false;
  } else if (direction === 'next') {
    customArrows[0].disabled = false;
    customArrows[1].disabled = true;
  }
};
