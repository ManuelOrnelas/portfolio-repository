import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {

  setActiveSculpture = (event) => {
    console.log('batata')
    let el = document.getElementById('sculpture')
    console.log(el)
    el.classList.add('square')
    console.log(el.classList)
    el.classList.remove('circle')
    console.log(el.classList)
  }

  setActiveGraphicsDesign = (event) => {
    console.log('batata')
    let el = document.getElementById('graphics-design')
    console.log(el)
    el.classList.add('square')
    console.log(el.classList)
    el.classList.remove('circle')
    console.log(el.classList)
  }

  setActiveProductDesign = (event) => {
    console.log('batata')
    let el = document.getElementById('product-design')
    console.log(el)
    el.classList.add('square')
    console.log(el.classList)
    el.classList.remove('circle')
    console.log(el.classList)
  }

  setActiveDrawing = (event) => {
    console.log('batata')
    let el = document.getElementById('drawing')
    console.log(el)
    el.classList.add('square')
    console.log(el.classList)
    el.classList.remove('circle')
    console.log(el.classList)
  }

  setActiveWriting = (event) => {
    console.log('batata')
    let el = document.getElementById('writing')
    console.log(el)
    el.classList.add('square')
    console.log(el.classList)
    el.classList.remove('circle')
    console.log(el.classList)
  }

  setActiveInteriorDesign = (event) => {
    console.log('batata')
    let el = document.getElementById('interior-design')
    console.log(el)
    el.classList.add('square')
    console.log(el.classList)
    el.classList.remove('circle')
    console.log(el.classList)
  }

  render() {
    return (
      <nav id="navbar">
        <Link to="/" title="Logo">
          <img src={logo} alt="NUCABE" style={{ width: '60px' }} />
        </Link>
        <Link className="flex-center" to="/sculpture" onClick={this.setActiveSculpture}>
          <div id="sculpture" className="circle"/>
        </Link>
        <Link className="flex-center" to="/graphics-design" onClick={this.setActiveGraphicsDesign}>
          <div id="graphics-design" className="circle"/>
        </Link>
        <Link className="flex-center" to="/product-design" onClick={this.setActiveProductDesign}>
          <div id="product-design" className="circle"/>
        </Link>
        <Link className="flex-center" to="/drawing" onClick={this.setActiveDrawing}>
          <div id="drawing" className="circle"/>
        </Link>
        <Link className="flex-center" to="/writing" onClick={this.setActiveWriting}>
          <div id="writing" className="circle"/>
        </Link>
        <Link className="flex-center" to="/interior-design" onClick={this.setActiveInteriorDesign}>
          <div id="interior-design" className="circle"/>
        </Link>
      </nav>
    )
  }
}

export default Navbar
