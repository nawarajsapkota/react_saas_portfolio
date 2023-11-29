import React from 'react';
import "./style.scss"
import {images} from "./assets/image/index"

function App() {
  return (
    <body>
    <div className="wrapper">
      {/* <!-- Nav --> */}
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
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>
      {/* <!-- hero --> */}
      <section className="section1" id="hero">
        <div className="hero">
          <div className="left">
            <div className="name">Hi, My name is Nawaraj sapkota</div>
            <div className="tag">Full stack Developer</div>
            <div className="sub_tag">I love coding and teaching</div>
            <a href={images.projectImage} download>
              <button>
                download cv
                <i className="fa-solid fa-download"></i>
              </button>
            </a>
          </div>
          <div className="right">
            <img src={images.userImage} alt="" />
          </div>
        </div>
      </section>
      {/* <!-- banner --> */}
      <section className="section2">
        <div className="info-container">
          <div className="info-list">
            <div className="info-content">
              <div className="icon-container">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <h5>IT</h5>
                <p>Graduate</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="info-content">
              <div className="icon-container">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <h5>IT</h5>
                <p>Graduate</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="info-content">
              <div className="icon-container">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <h5>IT</h5>
                <p>Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- skills --> */}
      <section className="section3" id="skills">
        <div className="skills_container">
          <div>
            <i className="fa-brands fa-html5"></i>
            <div>HTML</div>
          </div>
          <div>
            <i className="fa-brands fa-html5"></i>
            <div>CSS</div>
          </div>
          <div>
            <i className="fa-brands fa-html5"></i>
            <div>JAVASCRIPT</div>
          </div>
          <div>
            <i className="fa-brands fa-html5"></i>
            <div>REACT</div>
          </div>
        </div>
      </section>
      {/* <!-- projects --> */}
      <section className="section4" id="projects">
        <h2 className="title">My recent works</h2>
        <div className="project-container">
          <div className="project-card">
            <div className="top">
              <img
                src={images.projectImage}
                alt="project"
                width="100%"
              />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>portfolio with react</p>
              <p>nov 1, 2023</p>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img
                src={images.projectImage}
                alt="project"
                width="100%"
              />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <div>
                <p>portfolio with react</p>
                <p>nov 1, 2023</p>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img
                src={images.projectImage}
                alt="project"
                width="100%"
              />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>portfolio with react</p>
              <p>nov 1, 2023</p>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img
                src={images.projectImage}
                alt="project"
                width="100%"
              />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>portfolio with react</p>
              <p>nov 1, 2023</p>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img
                src={images.projectImage}
                alt="project"
                width="100%"
              />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>portfolio with react</p>
              <p>nov 1, 2023</p>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img
                src={images.projectImage}
                alt="project"
                width="100%"
              />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>portfolio with react</p>
              <p>nov 1, 2023</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- section 5 --> */}
      <section className="section5" id="about">
        <section className="about-me">
          <h2 className="title">About me</h2>
          <div className="about-container">
            <div className="left">
              <img src="./assets/image/nawaraj.png" alt="" width="60%" />
            </div>
            <div className="right">
              <h2>Nawaraj sapkota</h2>
              <p className="detail">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                natus a labore beatae eaque. Praesentium atque culpa, velit
                perspiciatis, quod voluptates soluta temporibus rerum odit,
                error vero dolor voluptate repudiandae.
              </p>
              <div className="interest-container">
                <div className="tag">
                  <h2>interests</h2>
                </div>
                <div className="interests">
                  <span>coding</span>
                  <span>Football</span>
                  <span>Movies</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <!-- get in touch --> */}
      <section className="section6" id="contact">
        <h2 className="title">Get in Touch</h2>
        <div className="socials">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        <h2>OR</h2>
        <a href="mailto:sapkotan511@gmail.com">
          <div className="email-section">
            <div className="email">
              <p>sapkotan511@gmail.com</p>
              <div className="send">
                <i className="fa-solid fa-envelope"></i>
              </div>
            </div>
          </div>
        </a>
      </section>
      {/* <!-- footer --> */}
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
      {/* <!-- floating icon --> */}
      <a href="#hero">
        <div className="floating">
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </a>
    </div>
  </body>
  );
}

export default App;
