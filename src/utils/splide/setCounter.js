export const setCounter = (counter, index, length) => {
  if (!counter) return;
  counter.textContent = `${String(index + 1).padStart(2, '0')}/${String(length).padStart(2, '0')}`;
};
