const navigationDrawer = document.getElementById('__navigation-drawer');
const buttonBurger = document.getElementById('__button-burger');

buttonBurger.addEventListener('click', () => {
  navigationDrawer.classList.toggle('open');
});
