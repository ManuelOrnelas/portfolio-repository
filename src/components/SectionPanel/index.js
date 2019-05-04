import React from 'react'

// import styles
import './styles.scss'

export class SectionPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sections: (this.props.sections && this.props.sections.length ? this.props.sections : [])
    }
  }

  fecthSectionNodes() {
    /*
    let nodeList = document.querySelectorAll('.full-page-section')
    let sections = Array.prototype.slice.call(nodeList)
    

    if (this.state.sections.length !== sections.length) this.setState({
      sections
    })
    */
  }
  
  render() {
    // determine if device is mobile or not
    let mobile = false
    if (typeof document !== 'undefined') {
      let clientWidth = document.documentElement.clientWidth

      if (clientWidth < 720) mobile = true;
    }

    // fetch all the sections
    console.log(this.state.sections)

    if (mobile) {
      return (
        <div id='scroll-panel'>
          <ul>
            {this.state.sections.length
              ? this.state.sections.map((section => {
                  if (section.querySelector('h1#title')) {
                    return (
                      <li>{section.querySelector("h1#title").innerText}</li>
                    )
                  }
                }))
              : null
            }
          </ul>
        </div>
      )
    } else {
      return ("PC version")
    }
  }
}