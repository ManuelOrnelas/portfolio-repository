import React from 'react'

export default React.createContext({
  animatePages: true,
  sidebar: {
    sections: [],
    setSections: () => {},
    activeSection: 0,
    setActiveSection: () => {}
  }
})