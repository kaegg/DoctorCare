window.addEventListener('scroll', onScroll)

onScroll() //quando executar o arquivo executa o onScroll uma vez
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navegação.classList.add('scroll')
  } else {
    navegação.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 530) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900
}).reveal(`
  #home,
  #home img, 
  #home .infos, 
  #services, 
  #services header, 
  #services .card,
  #about,
  #about header,
  #about .content`)
