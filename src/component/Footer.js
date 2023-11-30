import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="footer-container">
          <div className="links">
            <h3>links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#home">Skills</a></li>
              <li><a href="#home">projects</a></li>
              <li><a href="#home">Contacts</a></li>
            </ul>
          </div>
          <div className="social-links">
            <h3>Social links</h3>
            <ul>
              <li><a href="#home">LinkedIn</a></li>
              <li><a href="#skills">Facebook</a></li>
              <li><a href="#projects">Youtube</a></li>
              <li><a href="#home">X</a></li>
            </ul>
          </div>
        </div>
        <div className="copy">&copy; copy right all reserved. Made by me. 🙏</div>
      </footer>
  )
}

export default Footer