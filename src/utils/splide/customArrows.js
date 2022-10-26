export const customArrows = () => {
  const customArrows = [...document.querySelectorAll('[data-custom-arrow]')];
  const standardArrows = [...document.querySelectorAll('[data-standard-arrow]')];

  customArrows.forEach((arrow, index) => {
    arrow.onclick = () => {
      standardArrows[index].click();
    };
  });
};
