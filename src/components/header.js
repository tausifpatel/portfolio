import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../images/R-logo-blue.svg'
import './header.scss'
import './layout.scss'

const Header = () => (
  <div className="nav container-ultrawide">
    <div className="nav__left">
      <Link to="/">
        <img className="nav__left-logo" src={logo} alt="Logo"/>
      </Link>
    </div>
    <div className="nav__right">
      <Link className="nav__link" to="#projects">Work</Link>
      <Link className="nav__link" to="about">About</Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
