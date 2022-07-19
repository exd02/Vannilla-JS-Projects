
const navLinks = document.querySelectorAll('.nav-links')
const navRight = document.querySelector('.nav-right')
const navbar = document.getElementById('navbar')

console.log (navRight.style.height)


/* - MOBILE NAVIGATION - */
function toggleMenuView() {
  if (navRight.style.height === '0px' || navRight.style.height === '') {
    let containerSize = 0
    /* LOOP THROUGHT ALL */
    navLinks.forEach (element => {
      containerSize += element.clientHeight
    });

    navRight.style.height = `${containerSize}.px`
  }
  else { navRight.style.height = '0px'; }
}


/* FIXED NAVBAR ON SCROLL */
window.addEventListener("scroll", function(){
  const scrollHeight = window.pageYOffset
  const navbarHeight = navbar.clientHeight
  if (scrollHeight >= navbarHeight)
    navbar.classList.add('fixed-nav')
  else 
    navbar.classList.remove('fixed-nav')
})

/* SET FOOTER COPYRIGHT YEAR */
footerYear = document.querySelector('.copyright-year')
const year = new Date().getFullYear()
footerYear.innerHTML = year