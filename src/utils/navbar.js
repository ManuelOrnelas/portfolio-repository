
/**
 * @param {Number} time Miliseconds to wait until arrow is shown
 */
export function enableNavbarArrow(time) {
  let arrow = document.querySelector('nav #navbar-arrow')
  setTimeout(() => {
    arrow.classList.add('show')
  }, time)
}

/**
 * @description Toggles secondary navbar mode
 * @param {Number} time Miliseconds to wait until navbar mode is toggled
 */
export function toggleSecondaryNavbar(time) {
  setTimeout(() => {
    document.querySelector('nav').classList.toggle('secondary')  
  }, time)
}
  