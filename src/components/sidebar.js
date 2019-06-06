import React, { useState } from "react"

/*
  Creates a sidebar navigation with 3 links.
  Can receive prop hide = true to display nothing.
*/
const Sidebar = (props) => {

  const [index, setIndex] = useState(0);

  if (props.hide) {
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