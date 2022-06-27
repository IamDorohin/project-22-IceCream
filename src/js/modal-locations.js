const buttonLocation = document.querySelectorAll('.contacts__location');
const buttonFranchise = document.querySelectorAll('.contacts__franchise');
const overlayLocation = document.querySelector('.overlay-location');

buttonLocation.forEach(buttonLocation => {
  buttonLocation.addEventListener('click', () => {
    overlayLocation.classList.add('overlay-active');
  });
});

buttonFranchise.forEach(buttonFranchise => {
  buttonFranchise.addEventListener('click', () => {
    overlayLocation.classList.add('overlay-active');
  });
});

overlayLocation.addEventListener('click', event => {
  const target = event.target;

  if (target === overlayLocation || target.closest('.close-button')) {
    overlayLocation.classList.remove('overlay-active');
  }
});
