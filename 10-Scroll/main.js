
const navLinks = document.querySelectorAll('.nav-links')
navRight = document.querySelector('.nav-right')

console.log (navRight.style.height)


/* - MOBILE NAVIGATION - */
function toggleMenuView() {
  if (navRight.style.height === '0px' || navRight.style.height === '') {
    const navLinksLenght = navLinks.length
    const navLinkHeight = navLinks[0].clientHeight
    const containerSize = navLinksLenght * navLinkHeight

    /* SET THE HEIGHT OF THE MOBILE MENU */
    navRight.style.height = containerSize.toString().concat('px')
  }
  else { navRight.style.height = '0px'; }
}

/* SET FOOTER COPYRIGHT YEAR */
footerYear = document.querySelector('.copyright-year')
const year = new Date().getFullYear()
footerYear.innerHTML = year

