import { findElementIndex } from './html'
import { enableNavbarArrow, toggleSecondaryNavbar } from './navbar'
import { shuffle } from './shuffle'

let animationDirections = [
  "Top",
  "Right",
  "Bottom",
  "Left"
]

function isScrolling() {
  console.log('Verifying the page scroll state')
  let firstSection = document.querySelector('.full-page.active')
  let activeElements = document.querySelector('.full-page-section.active')

  console.log(firstSection)
  console.log(activeElements)
  if (activeElements && activeElements.length >= 2) {
    console.log('PAGE IS SCROLLING', 'color: red')
    return true
  } else if (activeElements && activeElements.length === 1 && firstSection) {
    console.log('PAGE IS SCROLLING', 'color: red')
    return true
  }
}

/**
 * @param {HTMLElement} currentSection 
 */
export function scrollDownToNextSection(currentSection) {
  // if the page is currently scrolling, don't fuck it up
  if (isScrolling()) return

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

    // animate next section with moveFrom animation
    pageRoot.children[i+1].classList.toggle(`moveFromBottom`)
    // hide current active section with moveTo animation
    pageRoot.children[i].classList.toggle(`moveToBottom`)

    // if the navbar has its arrow disabled, enable it
    // change navbar mode
    // TODO: remove if clauses after historical line is finished on mobile version
    enableNavbarArrow(600)
    if (document.documentElement.clientWidth > 720) toggleSecondaryNavbar(300)
    else if (document.documentElement.clientWidth < 720 && i+1 === 1) toggleSecondaryNavbar(300)

    // add timer to remove classes after animation
    setTimeout(() => {
      pageRoot.children[i].classList.toggle(`moveToBottom`)
      pageRoot.children[i].classList.toggle('active')
      pageRoot.children[i+1].classList.toggle(`moveFromBottom`)
    }, 600);
  }
}

/**
 * 
 * @param {HTMLElement} currentSection Current section user is viewing
 * @param {Boolean} isNextSectionFirst
 */
export function scrollUpToNextSection(currentSection, isNextSectionFirst) {
  // if the page is currently scrolling, don't fuck it up
  if (isScrolling()) return

  currentSection.previousSibling.classList.toggle('active')

  // animate current section with moveTo animation
  currentSection.classList.toggle(`moveToTop`)
  // show previous section with moveFrom animation
  currentSection.previousSibling.classList.toggle(`moveFromTop`)

  // hide navbar arrow if the next section is the first section
  if (isNextSectionFirst) {
    let arrow = document.querySelector('#navbar-arrow')
    arrow.classList.remove('show')
  }

  // change navbar colors
  // TODO: remove if clauses after historical line is finished on mobile version
  if (document.documentElement.clientWidth > 720) toggleSecondaryNavbar(300)
  else if (document.documentElement.clientWidth < 720 && findElementIndex(currentSection.previousSibling) === 0) toggleSecondaryNavbar(300)

  // add timer to remove classes after animation
  setTimeout(() => {
    currentSection.previousSibling.classList.toggle(`moveFromTop`)
    currentSection.classList.toggle(`moveToTop`)
    currentSection.classList.toggle('active')
  }, 600)
}

/**
 * @param {number} dy Represents the scroll velocity
 * @param {HTMLElement} section Element 
 */
export function handleScroll(dy, section) {
  //window.outerWidth > 720
  if (true) {
    // dY > 0 means user is trying to scroll DOWN
    // dY < 0 means user is trying to scroll UP
    let up = undefined
    if (dy > 0) up = false
    else up = true

    let nextSectionIndex = findElementIndex(section)

    if (up && section.previousElementSibling) scrollUpToNextSection(section, !(nextSectionIndex > 1))
    else if (!up) scrollDownToNextSection(section)
  }
}

/**
 * @param {HTMLElement} currentSection
 * @param {Number} sectionIndex
 */
export function scrollToFirstSection(currentSection, sectionIndex) {
  let firstSection = document.querySelector('.full-page')
  // add visibility to first section
  firstSection.classList.toggle('active')

  // shuffle animations array
  animationDirections = shuffle(animationDirections)

  // hide current section
  currentSection.classList.toggle(`moveToTop`)
  // show first section
  firstSection.classList.toggle(`moveFromTop`)


  // hide navbar arrow if the next section is the first section
  if (sectionIndex === 1) {
    let arrow = document.querySelector('#navbar-arrow')
    arrow.classList.remove('show')
  }

  // change navbar colors
  if ((sectionIndex % 2)) toggleSecondaryNavbar(300)

  setTimeout(() => {
    currentSection.classList.toggle('active')
  }, 400)

  // add timer to remove classes after animation
  setTimeout(() => {
    currentSection.classList.toggle(`moveToTop`)
    firstSection.classList.toggle(`moveFromTop`)
  }, 600)
}