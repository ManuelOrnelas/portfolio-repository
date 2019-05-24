import React from 'react'

export default React.createContext({
  animatePages: true,
  scroll: {
    arrowDownClick: () => {},
    arrowUpClick: () => {},
    scrollbar: () => {},
  },
  sidebar: {
    sections: [],
    setSections: () => {},
    activeSection: 0,
    setActiveSection: () => {},
  },
})