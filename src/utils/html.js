/**
 * @param {HTMLElement} element Element whose index is going to be determined
 */
export function findElementIndex(element) {
  // find out index number of the element relative to the parent
  let i = 0;
  while ((element = element.previousSibling) != null) i++

  return i
}