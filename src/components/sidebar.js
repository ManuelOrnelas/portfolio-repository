import React, { useState, useEffect } from "react"

const remToPx = (typeof window !== `undefined`) ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 0
/*
  Creates a sidebar navigation with 3 links.
  Can receive prop hide = true to display nothing.
*/
const Sidebar = (props) => {

  const [index, setIndex] = useState(0);

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
        document.getElementById("info-link").classList.add("active")
        document.getElementById("historical-link").classList.remove("active")
        document.getElementById("news-link").classList.remove("active")
      } else if (page === 2) {
        setIndex(1)
        document.getElementById("info-link").classList.remove("active")
        document.getElementById("historical-link").classList.add("active")
        document.getElementById("news-link").classList.remove("active")
      } else if (page === 3) {
        setIndex(1)
        document.getElementById("info-link").classList.remove("active")
        document.getElementById("historical-link").classList.remove("active")
        document.getElementById("news-link").classList.add("active")
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
        <a href="#information" id="info-link">Who and why</a>
        <a href="#historical-line" id="historical-link">Historical line</a>
        <a href="#news" id="news-link">News</a>
      </div>
    )
  }
}

export default Sidebar