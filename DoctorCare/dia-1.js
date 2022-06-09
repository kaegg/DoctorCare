function onScroll() {
  if (scrollY > 0) {
    navegação.classList.add('scroll')
  } else {
    navegação.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
