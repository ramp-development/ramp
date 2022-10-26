export const forms = () => {
  const forms = [...document.querySelectorAll('form')];
  forms.forEach((form) => {
    const button = form.querySelector('[data-form="button"]');
    const submit = form.querySelector('[data-form="submit"]');

    button.onclick = () => {
      form.requestSubmit(submit);
    };
  });
};
