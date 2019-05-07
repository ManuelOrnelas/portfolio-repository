/* eslint no-useless-escape: 0 */

import React from 'react'


import { findElementIndex } from '../../utils/html';
import { enableNavbarArrow, toggleSecondaryNavbar } from '../../utils/navbar';

// Context
import AppContext from '../AppContext'

// import styles
import './styles.scss'

export class SectionPanel extends React.Component {
  static contextType = AppContext

  convertIdToName = (id) => {
    let name = id

    // Change first char to uppercase
    name = name.charAt(0).toUpperCase() + name.substr(1)
    // Replace hyphens
    name = name.replace(/\-/g, ' ')

    return name
  }

  animateSectionChange = (currentSection, nextSection) => {
    // active next section (show it)
    nextSection.classList.toggle('active')

    if (findElementIndex(currentSection) > findElementIndex(nextSection)) { // scrolling up
      // Add top animation classes
      currentSection.classList.toggle('moveToTop')
      nextSection.classList.toggle('moveFromTop')

      // Navbar secondary mode is only changed when device is desktop 
      if (document.documentElement.clientWidth > 720 ) toggleSecondaryNavbar(300)
      // else if (document.documentElement.clientWidth < 720 && findElementIndex(nextSection) === 0) toggleSecondaryNavbar(300)

      // Remove animation classes and hide current section 
      setTimeout(() => {
        nextSection.classList.toggle('moveFromTop')
        currentSection.classList.toggle('moveToTop')
        currentSection.classList.toggle('active')
      }, 600)

    } else { // Scrolling down
      // Add bottom animation classes
      currentSection.classList.toggle('moveToBottom')
      nextSection.classList.toggle('moveFromBottom')
      
      // Add active class to navbar arrow
      enableNavbarArrow(600)
      // Navbar secondary mode is only changed when device is desktop
      if (document.documentElement.clientWidth > 720) toggleSecondaryNavbar(300)

      // Remove animation classes and hide current section
      setTimeout(() => {
        currentSection.classList.toggle('moveToBottom')
        currentSection.classList.toggle('active')
        nextSection.classList.toggle('moveFromBottom')
      }, 600)
    }
  }

  changeSection = (event) => {
    // check if item already active
    if (event.target.classList.contains('active')) return

    // get the id of the section selected and update sections in context
    let id = event.target.dataset.id
  
    let sections = this.context.sidebar.sections.slice()
    sections[this.context.sidebar.activeSection].active = false
    sections[id].active = true
    
    this.context.sidebar.setSections(sections)
    
    // get current and next sections
    let currentSection = this.context.sidebar.sections[this.context.sidebar.activeSection].element
    let nextSection = this.context.sidebar.sections[id].element

    // change active section to the selected section
    this.context.sidebar.setActiveSection(findElementIndex(this.context.sidebar.sections[id].element) - 1)

    this.animateSectionChange(currentSection, nextSection)
  }
  
  render() {
    // determine if device is mobile or not
    let mobile = false
    if (typeof document !== 'undefined') {
      let clientWidth = document.documentElement.clientWidth

      if (clientWidth < 720) mobile = true;
    }

    if (mobile) {
      return (
        <div id='scroll-panel'>
          <ul>
            {this.context.sidebar.sections.length
              ? this.context.sidebar.sections.map((section, index) => (
                <li className={this.context.sidebar.activeSection === index ? 'active' : ''}
                  onClick={this.changeSection} onTouchStartCapture={this.changeSection} data-id={index}><span id='bar'></span></li>
              ))
              : null
            }
          </ul>
        </div>
      )
    } else {
      return (
        <div id='scroll-panel'>
          <ul>
            {this.context.sidebar.sections.length
              ? this.context.sidebar.sections.map((section, index) => (
                <li className={this.context.sidebar.activeSection === index ? 'active' : ''}
                  onClick={this.changeSection} data-id={index}>{section.name}</li>
              ))
              : null
            }
          </ul>
        </div>
      )
    }
  }
}