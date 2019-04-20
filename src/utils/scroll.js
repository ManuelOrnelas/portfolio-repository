function toggleBlackNavbar() {
  document.querySelector('nav').classList.toggle('black')
}

/**
 * @param {HTMLElement} currentSection 
 */
export function scrollDownToNextSection(currentSection) {
  let pageRoot = currentSection.parentElement,
    navbar = document.querySelector('nav')

  // find out index number of the section div relative to the parent
  let i = 0;
  while( (currentSection = currentSection.previousSibling) != null) i++

  // we want to scroll to the next section so we will select it
  // first, verify if section exists
  if(pageRoot.children[i + 1]) {
    // slide up next section
    pageRoot.children[i+1].classList.toggle('active')
    
    // if the navbar has its arrow disabled, enable it
    let arrow = navbar.querySelector('#navbar-arrow')
    setTimeout(() => {
      arrow.classList.add('show')
      
      // change navbar colors if next section is white
      // check if section is odd nth child
      if (i % 2) {
        toggleBlackNavbar()
      } else {
        toggleBlackNavbar()
      }
    }, 750)
  }
}

/**
 * 
 * @param {HTMLElement} currentSection Current section user is viewing
 * @param {boolean} isFirst Is this the first section of the page (not counting with the title/header)
 */
export function scrollUpToNextSection(currentSection, isFirst) {
  // slide down section
  currentSection.classList.remove('active')
  
  // hide navbar arrow
  if (isFirst) {
    let arrow = document.querySelector('#navbar-arrow')
    arrow.classList.remove('show')
  }

  // change navbar colors
  toggleBlackNavbar()
}


/**
 * @param {number} dy Represents the scroll velocity
 * @param {HTMLElement} target Element 
 */
export function handleScroll(dy, target) {
  // dY > 0 means user is trying to scroll DOWN
    // dY < 0 means user is trying to scroll UP
    let up = undefined
    if (dy > 0) up = false
    else up = true

    let activeSections = document.querySelectorAll('.full-page-section.active')
    
    if (up && activeSections.length) {
      // let's deactivate the last one and make it slide down
      scrollUpToNextSection(activeSections[activeSections.length - 1], !(activeSections.length > 1))
    } else if (!up) {
      let el = target.closest('.full-page')
      // if event's target was not .full-page div then closest will be null
      // if it wasn't .full-page it has to be .full-page-section
      if (!el) el = target.closest('.full-page-section')
      
      scrollDownToNextSection(el)
    }
}