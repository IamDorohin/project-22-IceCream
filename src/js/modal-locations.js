const buttonLocation = document.querySelectorAll('.contacts__location');
const overlayLocation = document.querySelector('.overlay-location');

buttonLocation.forEach(buttonLocation => {
  buttonLocation.addEventListener('click', () => {
    overlayLocation.classList.add('overlay-active');
    const order = overlayLocation.querySelector('.modal');
    order.value = buttonLocation.dataset.order;
  });
});

overlayLocation.addEventListener('click', event => {
  const target = event.target;

  if (target === overlayLocation || target.closest('.close-button')) {
    overlayLocation.classList.remove('overlay-active');
  }
});
