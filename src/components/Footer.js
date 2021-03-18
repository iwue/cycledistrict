import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://www.instagram.com/cycledistrict_east/" target="_blank" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
            <ul className="index">
                <li><Link onClick={props.onToggleMenu} to="/landing">Landing</Link></li><li><Link onClick={props.onToggleMenu} to="/generic">Generic</Link></li><li><Link onClick={props.onToggleMenu} to="/elements">Elements</Link></li>
            </ul>
        </div>
    </footer>
)

export default Footer
