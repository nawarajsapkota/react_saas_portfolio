import React from 'react'
import { images } from '../assets/image'
import Layout from './Layout'

function Aboutme() {
  return (
    <>
    <Layout>
    <section className="section5" id="about">
    <section className="about-me">
      <h2 className="title">About me</h2>
      <div className="about-container">
        <div className="left">
          <img src={images.userImage} alt="" width="60%" />
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
  </Layout>
  </>
  )
}

export default Aboutme