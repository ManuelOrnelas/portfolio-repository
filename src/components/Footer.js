import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

class Footer extends React.Component {
  render() {
    const { data } = this.props;
    const color = this.props.color;
    
    return (
      <footer className="footer has-background-black has-text-white-ter" style={{ backgroundColor: color }}>
        <div className="content flex justifycontent-center">
          <img
            src={logo}
            alt="NUCABE"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li><Link to="/" className="navbar-item">Home</Link></li>
                    <li><Link className="navbar-item" to="/about">About</Link></li>
                    <li><Link className="navbar-item" to="/products">Products</Link></li>
                    <li><Link className="navbar-item" to="/contact/examples">Form Examples</Link></li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >Admin</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                    </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                    </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                {data.facebook ?
                  <a title="facebook" target='_blank' rel='noopener noreferrer' href={data.facebook}>
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                : null
                }
                {data.twitter ?
                  <a title="twitter" target='_blank' rel='noopener noreferrer' href={data.twitter}>
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  : null
                }
                {data.instagram ?
                  <a title="instagram" rel='noopener noreferrer' href={data.instagram}>
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                : null
                }
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query test {
        allMarkdownRemark (filter: { fileAbsolutePath: { regex: "/data/" } }) {
          edges {
            node {
              frontmatter {
                facebook
              }
            }
          }
        }
      }
    `}
    render={data => {
      let social = data.allMarkdownRemark.edges[0].node.frontmatter;
      
      return (
        <Footer data={social} {...props} />
      )
    }}
  ></StaticQuery>
)