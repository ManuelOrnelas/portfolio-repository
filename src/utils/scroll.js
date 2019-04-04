/**
 * @param {HTMLElement} currentSection 
 */
export function scrollToNextSection(currentSection) {
  let pageRoot = document.querySelector('div#home'),
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
    }, 750)
  }
}