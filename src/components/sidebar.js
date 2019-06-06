import React, { useState, useEffect } from "react"

/*
  Creates a sidebar navigation with 3 links.
  Can receive prop hide = true to display nothing.
*/
const Sidebar = (props) => {

  const [index, setIndex] = useState(0);
  const remToPx = (typeof window !== `undefined`) ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 0

  useEffect(() => {

    //ComponentDidMount
    window.addEventListener('scroll', stickyMode)

    return function cleanup() {
      //ComponentWillUnmount
      window.removeEventListener('scroll', stickyMode)
    }
  }, [])

  const stickyMode = () => {
    if (typeof window !== `undefined`) {
      const currentScroll = window.pageYOffset + 3.5 * remToPx
      // Now we get the viewports height.
      const maxHeight = window.innerHeight

      const page = ~~(currentScroll / maxHeight)

      if (page === 0) {
        setIndex(0)
      } else if (page === 1) {
        setIndex(1)
      } else if (page === 2) {
        setIndex(2)
      } else if (page === 3) {
        setIndex(3)
      }
    }
  }

  if (index === 0) {
    return (
      <>
      </>
    )
  } else {
    return (
      <div className="sidebar">
        <a href="#information" className={index === 1 ? "active" : ""} onClick={() => setIndex(1)}>Who and why</a>
        <a href="#historical-line" className={index === 2 ? "active" : ""} onClick={() => setIndex(2)}>Historical line</a>
        <a href="#news" className={index === 3 ? "active" : ""} onClick={() => setIndex(3)}>News</a>
      </div>
    )
  }
}

export default Sidebar