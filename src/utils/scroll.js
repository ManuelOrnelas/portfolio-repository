import { findElementIndex } from './html'
import { enableNavbarArrow, toggleSecondaryNavbar } from './navbar'
import { shuffle } from './shuffle'

let animationDirections = [
  "Top",
  "Right",
  "Bottom",
  "Left"
]

/**
 * @param {HTMLElement} currentSection 
 */
export function scrollDownToNextSection(currentSection) {
  let pageRoot = currentSection.parentElement

  // find out index number of the section div relative to the parent
  let i = findElementIndex(currentSection)

  // we want to scroll to the next section so we will select it
  // first, verify if section exists
  if (pageRoot.children[i + 1]) {
    // change next section visibility
    pageRoot.children[i + 1].classList.toggle('active')
    // if the current section visibility is hidden
    // then change it to visible
    if (!pageRoot.children[i].classList.contains('active')) {
      pageRoot.children[i].classList.toggle('active')
    }

    // shuffle animations array
    animationDirections = shuffle(animationDirections)

    // animate next section with moveFrom animation
    pageRoot.children[i+1].classList.toggle(`moveFrom${animationDirections[0]}`)
    // hide current active section with moveTo animation
    pageRoot.children[i].classList.toggle(`moveTo${animationDirections[0]}`)

    // remove classes after animation
    setTimeout(() => {
      pageRoot.children[i].classList.toggle(`moveTo${animationDirections[0]}`)
      pageRoot.children[i].classList.toggle('active')
      pageRoot.children[i+1].classList.toggle(`moveFrom${animationDirections[0]}`)
    }, 750);

    // if the navbar has its arrow disabled, enable it
    // change navbar mode
    enableNavbarArrow(750)
    toggleSecondaryNavbar(250)
  }
}

/**
 * 
 * @param {HTMLElement} currentSection Current section user is viewing
 * @param {boolean} isFirst Is this the first section of the page (not counting with the title/header)
 */
export function scrollUpToNextSection(currentSection, isFirst) {
  currentSection.previousSibling.classList.toggle('active')

  // shuffle animations array
  animationDirections = shuffle(animationDirections)
  
  // animate current section with moveTo animation
  currentSection.classList.toggle(`moveTo${animationDirections[0]}`)
  // show previous section with moveFrom animation
  currentSection.previousSibling.classList.toggle(`moveFrom${animationDirections[0]}`)

  setTimeout(() => {
    currentSection.previousSibling.classList.toggle(`moveFrom${animationDirections[0]}`)
    currentSection.classList.toggle(`moveTo${animationDirections[0]}`)
    currentSection.classList.toggle('active')
  }, 750)


  // hide navbar arrow if the next section is the first section
  if (isFirst) {
    let arrow = document.querySelector('#navbar-arrow')
    arrow.classList.remove('show')
  }

  // change navbar colors
  toggleSecondaryNavbar(250)
}


/**
 * @param {number} dy Represents the scroll velocity
 * @param {HTMLElement} target Element 
 */
export function handleScroll(dy, target) {
  //window.outerWidth > 720
  if (true) {
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
}