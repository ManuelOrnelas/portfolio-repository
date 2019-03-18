import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {

  render() {
    console.log(window.location.pathname)
    return (
      <nav id="navbar">
        <Link to="/" title="Logo" className='logo'>
          <img src={logo} alt="NUCABE" style={{ width: '60px' }} />
        </Link>
        <div id='item-list' className='flex'>
          <Link className="flex justifycontent-center alignitems-center" to="/sculpture" data-target="sculpture">
            <div id="sculpture" className={window.location.pathname==='/sculpture' ? 'square' : 'circle'}/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/graphics-design" data-target="graphics-design">
            <div id="graphics-design" className={window.location.pathname==='/graphics-design' ? 'square' : 'circle'}/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/product-design" data-target="product-design">
            <div id="product-design" className={window.location.pathname==='/product-design' ? 'square' : 'circle'}/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/drawing" data-target="drawing">
            <div id="drawing" className={window.location.pathname==='/drawing' ? 'square' : 'circle'}/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/writing" data-target="writing">
            <div id="writing" className={window.location.pathname==='/writing' ? 'square' : 'circle'}/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/interior-design" data-target="interior-design">
            <div id="interior-design" className={window.location.pathname==='/interior-design' ? 'square' : 'circle'}/>
          </Link>
        </div>
      </nav>
    )
  }
}

export default Navbar
