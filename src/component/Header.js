import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="primary-header" id="home">
            <div className="left">
                <div><h1>Nawaraj</h1></div>
                <div className="line"></div>
                <div>
                    <h1>Full stack</h1>
                    <h1>Developer</h1>
                </div>
            </div>
            <div className="right">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="menu-icon">
                    <i className="fa-solid fa-bars"></i>
                </label>

                <ul className="navigation">
                    <li><Link to="/Skills">Skills</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/aboutme">About</Link></li>
                    <li><Link to="/getInTouch">Contact</Link></li>

                </ul>
            </div>
        </header>
    )
}

export default Header