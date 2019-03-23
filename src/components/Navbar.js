import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

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

  render() {
    let urlParts = this.state.path.split('/')

    // get setcion from URL pathname
    let section = ''

    // if the URL parts array is bigger than 1
    // then it means the URL is different than "/"
    if(urlParts.length > 1) section = urlParts[1]

    return (
      <nav id="navbar" style={{backgroundColor: this.props.color }}>
        <Link to="/" title="Logo" className='logo flex aligncontent-center'>
          <img src={logo} alt="NUCABE" />
        </Link>
        <div id='item-list' className='flex'>
          <Link className="flex justifycontent-center alignitems-center" to="/" data-target="root">
            <div id="root" className={this.state.path === '/'
              ? 'square'
              : 'circle'
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/sculpture" data-target="sculpture">
            <div id="sculpture" className={section.includes('sculpture')
              ? 'square'
              : 'circle'
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/graphics-design" data-target="graphics-design">
            <div id="graphics-design" className={section.includes('graphics-design')
              ? 'square'
              : 'circle'
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/product-design" data-target="product-design">
            <div id="product-design" className={section.includes('product-design')
              ? 'square'
              : 'circle'
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/interior-design" data-target="interior-design">
            <div id="interior-design" className={section.includes('interior-design')
              ? 'square'
              : 'circle'
            } />
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/drawing" data-target="drawing">
            <div id="drawing" className={section.includes('drawing')
              ? 'square'
              : 'circle'
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/writing" data-target="writing">
            <div id="writing" className={section.includes('writing')
              ? 'square'
              : 'circle'
            }/>
          </Link>
        </div>
      </nav>
    )
  }
}
