
const navLinks = document.querySelectorAll('.section-navigation')
const sectionNavigationLinks = document.querySelectorAll('.section-navigation')
const navRight = document.querySelector('.nav-right')
const navHeader = document.querySelector('.nav-header')
const navbar = document.getElementById('navbar')


const sections = document.querySelectorAll('.section')

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
  else { navRight.style.height = ''; }
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

/* FIX SCROLL THROUGHT WEBSITE */
sectionNavigationLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()

    // only toggle the menu view if it's opened
    if (navRight.style.height != '')
      toggleMenuView()

    // get the href atribute and remove the '#'
    let href = link.getAttribute("href").slice(1)

    // get the refered section Y start offset
    const referedSection_Y = document.getElementById(href).offsetTop

    const navbarHeight = navHeader.clientHeight

    // console.log(referedSection_Y + ' - ' + navbarHeight + ' = ' + (referedSection_Y - navbarHeight))
    scroll(0, (referedSection_Y - navbarHeight))
  })
});
/* SET FOOTER COPYRIGHT YEAR */
footerYear = document.querySelector('.copyright-year')
const year = new Date().getFullYear()
footerYear.innerHTML = year