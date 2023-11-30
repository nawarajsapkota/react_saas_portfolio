import React from 'react'

function GetInTouch() {
  return (
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
  )
}

export default GetInTouch