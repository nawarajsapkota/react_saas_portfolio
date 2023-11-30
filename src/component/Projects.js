import React from 'react'
import { images } from '../assets/image'

function Projects() {
  return (
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
  )
}

export default Projects