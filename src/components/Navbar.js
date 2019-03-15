import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {

  setActive = (event) => {
    if (event.target.children.length === 0) { //Carregou diretamente na bolinha
      event.target.classList.remove('circle')
      event.target.classList.add('square')
    } else { //Carregou na div logo a bolinha é o primeiro filho
      event.target.children[0].remove('circle')
      event.target.children[0].add('square')
    }
  }

  render() {
    return (
      <nav>
        <Link to="/" title="Logo">
          <img src={logo} alt="NUCABE" style={{ width: '60px' }} />
        </Link>
        <Link className="flex-center" to="/sculpture" onClick={this.setActive}>
          <div className="circle"/>
        </Link>
        <Link className="flex-center" to="/graphics-design" onClick={this.setActive}>
          <div className="circle"/>
        </Link>
        <Link className="flex-center" to="/product-design" onClick={this.setActive}>
          <div className="circle"/>
        </Link>
        <Link className="flex-center" to="/drawing" onClick={this.setActive}>
          <div className="circle"/>
        </Link>
        <Link className="flex-center" to="/writing" onClick={this.setActive}>
          <div className="circle"/>
        </Link>
        <Link className="flex-center" to="/interior-design" onClick={this.setActive}>
          <div className="circle"/>
        </Link>
      </nav>
    )
  }
}

export default Navbar
