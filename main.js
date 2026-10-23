const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

if (toggle && navigation) {
  document.documentElement.classList.add('js');
  toggle.hidden = false;

  function closeMenu(restoreFocus = false) {
    navigation.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) toggle.focus();
  }

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(expanded));
    navigation.classList.toggle('is-open', expanded);
  });

  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });

  window.matchMedia('(min-width: 761px)').addEventListener('change', () => closeMenu());
}
