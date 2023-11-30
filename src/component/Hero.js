import React from 'react'
import { images } from '../assets/image'

function Hero() {
  return (
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
  )
}

export default Hero