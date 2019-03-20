import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

export default class Navbar extends React.Component {
  render() {
    // fetch color
    // let color = '';
    // if (this.props.color) color = this.props.color.replace('\\','')
    
    // define window
    const windowGlobal = typeof window !== 'undefined' && window;
    if(windowGlobal) console.log(windowGlobal.location.pathname)

    return (
      <nav id="navbar" style={{backgroundColor: this.props.color }}>
        <Link to="/" title="Logo" className='logo'>
          <img src={logo} alt="NUCABE" style={{ width: '60px' }} />
        </Link>
        <div id='item-list' className='flex'>
          <Link className="flex justifycontent-center alignitems-center" to="/sculpture" data-target="sculpture">
            <div id="sculpture" className={windowGlobal ?
              (windowGlobal.location.pathname==='/sculpture' ? 'square' : 'circle')
              : null
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/graphics-design" data-target="graphics-design">
            <div id="graphics-design" className={windowGlobal ?
              (windowGlobal.location.pathname==='/graphics-design' ? 'square' : 'circle')
              : null
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/product-design" data-target="product-design">
            <div id="product-design" className={windowGlobal ?
              (windowGlobal.location.pathname==='/product-design' ? 'square' : 'circle')
              : null
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/drawing" data-target="drawing">
            <div id="drawing" className={windowGlobal ?
              (windowGlobal.location.pathname==='/drawing' ? 'square' : 'circle')
              : null
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/writing" data-target="writing">
            <div id="writing" className={windowGlobal ? 
              (windowGlobal.location.pathname==='/writing' ? 'square' : 'circle')
              : null
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/interior-design" data-target="interior-design">
            <div id="interior-design" className={windowGlobal ? 
              (windowGlobal.location.pathname==='/interior-design' ? 'square' : 'circle')
              : null
            }/>
          </Link>
        </div>
      </nav>
    )
  }
}
