const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuItems = document.getElementById('menuItems');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
