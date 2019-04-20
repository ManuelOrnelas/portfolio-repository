import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import whiteLogo from '../img/white-logo.svg'

import {scrollUpToNextSection} from '../utils/scroll'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      path: '',
    }
  }

  componentDidMount() {
    this.setState({
      path: window.location.pathname
    })
  }

  handleArrowUpClick = (event) => {
    // get the section being shown and slide it down
    // it's the last active from the array
    let el = document.querySelectorAll('.full-page-section.active')

    scrollUpToNextSection(el[el.length - 1], !(el.length > 1))
  }

  render() {
    // get setcion from URL pathname
    let urlParts = this.state.path.split('/'),
      section = ''
    // if the URL parts array is bigger than 1
    // then it means the URL is different than "/"
    if(urlParts.length > 1) section = urlParts[1]
    
    let isPost = this.props.isPost
    
    return (
      <nav id="navbar"
        style={{
          '--nav-color': this.props.color,
          '--nav-color-secondary': this.props.postColor
        }}
        className={isPost ? 'post secondary' : undefined}>

        {/* LOGO */}
        <Link to="/" title="Logo" className='logo flex aligncontent-center'
          data-aos='fade-right'
          data-aos-delay='0'
          data-aos-offset='0'>
          <img src={(isPost ? logo : whiteLogo)} alt="NUCABE" />
        </Link>

        <div id='item-list' className='flex' style={{
          '--active-color': this.props.color, 
          '--inactive-color': 'rgba(55,51,34, .15)',
          '--inactive-color-hover': 'rgba(55, 51, 34, .2)' 
          }}>
          <Link className="flex justifycontent-center alignitems-center" to="/"
            data-target="root" data-name='Home' data-aos='fade-down'
            data-aos-delay='0'>
            <div id="root" className={(this.state.path === '/'
              ? 'square'
              : 'circle')
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/sculpture"
            data-target="sculpture" data-name='Sculpture' data-aos='fade-down'
            data-aos-delay='100'>
            <div id="sculpture" className={section.includes('sculpture')
              ? 'square'
              : 'circle'
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/graphics-design"
            data-target="graphics-design" data-name='Graphic' data-aos='fade-down'
            data-aos-delay='200'>
            <div id="graphics-design" className={section.includes('graphics-design')
              ? 'square'
              : 'circle'
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/product-design"
            data-target="product-design" data-name='Product' data-aos='fade-down'
            data-aos-delay='300'>
            <div id="product-design" className={section.includes('product-design')
              ? 'square'
              : 'circle'
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/interior-design"
            data-target="interior-design" data-name='Interior' data-aos='fade-down'
            data-aos-delay='400'>
            <div id="interior-design" className={section.includes('interior-design')
              ? 'square'
              : 'circle'
            } />
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/drawing"
            data-target="drawing" data-name='Drawing' data-aos='fade-down'
            data-aos-delay='500'>
            <div id="drawing" className={section.includes('drawing')
              ? 'square'
              : 'circle'
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/writing"
            data-target="writing" data-name='Writing' data-aos='fade-down'
            data-aos-delay='600'>
            <div id="writing" className={section.includes('writing')
              ? 'square'
              : 'circle'
            }/>
          </Link>
        </div>

        <div id='navbar-arrow'>
            <div data-aos='fade-up'data-aos-delay='0'
              data-aos-offset='0' data-aos-anchor='#arrow'>
              <span className="arrow arrow-up clickable"
                onClick={this.handleArrowUpClick}></span>
            </div>
          </div>
      </nav>
    )
  }
}
