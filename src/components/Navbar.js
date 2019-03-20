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
    // fetch color
    // let color = '';
    // if (this.props.color) color = this.props.color.replace('\\','')
    
    // define window
    // const windowGlobal = typeof window !== 'undefined' && window;
    // if(windowGlobal) console.log(windowGlobal.location.pathname)

    return (
      <nav id="navbar" style={{backgroundColor: this.props.color }}>
        <Link to="/" title="Logo" className='logo'>
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
            <div id="sculpture" className={this.state.path  === '/sculpture'
              ? 'square'
              : 'circle'
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/graphics-design" data-target="graphics-design">
            <div id="graphics-design" className={this.state.path  === '/graphics-design'
              ? 'square'
              : 'circle'
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/product-design" data-target="product-design">
            <div id="product-design" className={this.state.path === '/product-design'
              ? 'square'
              : 'circle'
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/drawing" data-target="drawing">
            <div id="drawing" className={this.state.path === '/drawing'
              ? 'square'
              : 'circle'
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/writing" data-target="writing">
            <div id="writing" className={this.state.path === '/writing'
              ? 'square'
              : 'circle'
            }/>
          </Link>
          <Link className="flex justifycontent-center alignitems-center" to="/interior-design" data-target="interior-design">
            <div id="interior-design" className={this.state.path === '/interior-design'
              ? 'square'
              : 'circle'
            }/>
          </Link>
        </div>
      </nav>
    )
  }
}
