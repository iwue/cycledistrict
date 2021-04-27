import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Logo from '../assets/images/logo.svg'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo" ><Logo style={{ height: 90, width: 150 }}></Logo></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
