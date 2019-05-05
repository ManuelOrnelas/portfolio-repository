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
    name = name.replace(new RegExp(/\-/g), ' ')

    return name
  }

  componentDidMount() {
    // let htmlSections = document.querySelectorAll('.full-page-section')
    // htmlSections = Array.prototype.slice.call(htmlSections)
    
    // let sections = []  
    // for (let section of htmlSections) {
    //   console.log(section)
    //   sections.push({
    //     originalID: section.id,
    //     element: section,
    //     name: this.convertIdToName(section.id),
    //     active: section.classList.contains('active') ? true : false,
    //   })
    // }
    
    // this.context.sidebar.setSections(sections)
  }

  changeSection = (event) => {
    // check if item already active
    if (event.target.classList.contains('active')) return

    let id = event.target.dataset.id
  
    let sections = this.context.sidebar.sections.slice()
    sections[this.context.sidebar.activeSection].active = false
    sections[id].active = true
    
    this.context.sidebar.setSections(sections)
    
    // get current and next sections
    let currentSection = this.context.sidebar.sections[this.context.sidebar.activeSection].element
    let nextSection = this.context.sidebar.sections[id].element

    this.context.sidebar.setActiveSection(findElementIndex(this.context.sidebar.sections[id].element) - 1)

    // animate section change
    if (findElementIndex(currentSection) > findElementIndex(nextSection)) {
      // move to top
      nextSection.classList.toggle('active')

      currentSection.classList.toggle('moveToTop')
      nextSection.classList.toggle('moveFromTop')

      if (document.documentElement.clientWidth > 720 ) toggleSecondaryNavbar(300)
      // else if (document.documentElement.clientWidth < 720 && findElementIndex(nextSection) === 0) toggleSecondaryNavbar(300)

      setTimeout(() => {
        nextSection.classList.toggle('moveFromTop')
        currentSection.classList.toggle('moveToTop')
        currentSection.classList.toggle('active')
      }, 600)

    } else {
      // move to bottom
      nextSection.classList.toggle('active')

      currentSection.classList.toggle('moveToBottom')
      nextSection.classList.toggle('moveFromBottom')
      
      enableNavbarArrow(600)
      if (document.documentElement.clientWidth > 720) toggleSecondaryNavbar(300)

      setTimeout(() => {
        currentSection.classList.toggle('moveToBottom')
        currentSection.classList.toggle('active')
        nextSection.classList.toggle('moveFromBottom')
      }, 600)
    }
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
              ? this.context.sidebar.sections.map(section => (
                <li className={section.active ? 'active' : ''}></li>
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
                <li className={this.context.sidebar.activeSection == index ? 'active' : ''}
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