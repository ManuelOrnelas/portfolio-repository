import React, { Component } from "react"

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

  setActiveWhoAndWhy = () => {
    console.log("Triggered")
    this.setState({
      active: 1
    })
  }

  setActiveHistoricalLine = () => {
    console.log("Triggered")
    this.setState({
      active: 2
    })
  }

  setActiveNews = () => {
    console.log("Triggered")
    this.setState({
      active: 3
    })
  }

  render() {
    if (this.props.hide) {
      return (
        <React.Fragment>
        <React.Fragment/>
      )
    } else {
      
      return (
        <div className="sidebar">
          <a href="#information" className={this.state.active === 1 ? "active" : ""}  onClick={this.setActiveWhoAndWhy}>Who and why</a>
          <a href="#historical-line" className={this.state.active === 2 ? "active" : ""} onClick={this.setActiveHistoricalLine}>Historical line</a>
          <a href="#news" className={this.state.active === 3 ? "active" : ""} onClick={this.setActiveNews}>News</a>
        </div>
      )
    }
  }
}

export default Sidebar
