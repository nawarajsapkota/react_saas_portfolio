import React from 'react';
import "./style.scss"
import {images} from "./assets/image/index"
import Header from './component/Header';
import Hero from './component/Hero';
import Banner from './component/Banner';
import Skills from './component/Skills';
import Projects from './component/Projects';
import AboutMe from './component/Aboutme';
import GetInTouch from './component/GetInTouch';
import Footer from './component/Footer';
import FloatingIcon from './component/FloatingIcon';
function App() {
  return (
    <body>
    <div className="wrapper">
      {/* <!-- Nav --> */}
      <Header/>
      {/* <!-- hero --> */}
      <Hero/>
      {/* <!-- banner --> */}
      <Banner/>
      {/* <!-- skills --> */}
     <Skills/>
      {/* <!-- projects --> */}
      <Projects/>
      {/* <!-- About me --> */}
      <AboutMe/>
      {/* <!-- get in touch --> */}
      <GetInTouch/>
      {/* <!-- footer --> */}
     <Footer/>
      {/* <!-- floating icon --> */}
      <FloatingIcon/>
    </div>
  </body>
  );
}

export default App;
