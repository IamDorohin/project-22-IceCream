// Модальне вікно Buy Now

const buttonOrder = document.querySelectorAll('.btn-modal-open');
const overlayOrder = document.querySelector('.overlay-order');

buttonOrder.forEach(buttonOrder => {
  buttonOrder.addEventListener('click', () => {
    overlayOrder.classList.add('overlay-active');
    const order = overlayOrder.querySelector('.modal');
    order.value = buttonOrder.dataset.order;
  });
});

overlayOrder.addEventListener('click', event => {
  const target = event.target;

  if (target === overlayOrder || target.closest('.close-button')) {
    overlayOrder.classList.remove('overlay-active');
  }
});
