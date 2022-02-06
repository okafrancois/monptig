/*
  Index
  ---------- ---------- ---------- ---------- ----------
  • Mobile navigation toggle
*/

/*
  • Mobile navigation toggle
  ---------- ---------- ---------- ---------- ----------
*/

// Toogle active class for mobile menu on click event
const headerMenu = document.getElementsByClassName('dynamic-header')[0]
const menuToggles = document.getElementsByClassName('menu-control')
for (const menuToggle of menuToggles) {
    menuToggle.addEventListener('click', () => {
        headerMenu.classList.toggle('dynamic-header--mobile-active')
    })
}
