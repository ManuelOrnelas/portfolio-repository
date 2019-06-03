import React, { Component, useState } from "react"

/*
  Creates a sidebar navigation with 3 links.
  Can receive prop hide = true to display nothing.
*/
class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 0
    }
  }

  changeSection = index => {
    this.setState({
      active: index
    })
  }

  render() {
    if (this.props.hide) {
      return (
        <React.Fragment/>
      )
    } else {
      return (
        <div className="sidebar">
          <a href="#information" className={this.state.active === 1 ? "active" : ""}  onClick={() => this.changeSection(1)}>Who and why</a>
          <a href="#historical-line" className={this.state.active === 2 ? "active" : ""} onClick={() => this.changeSection(2)}>Historical line</a>
          <a href="#news" className={this.state.active === 3 ? "active" : ""} onClick={() => this.changeSection(3)}>News</a>
        </div>
      )
    }
  }
}

export default Sidebar
