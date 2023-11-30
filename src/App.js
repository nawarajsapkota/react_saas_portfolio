import React from 'react';
import "./style.scss"
import { images } from "./assets/image/index"
import Header from './component/Header';
import Hero from './component/Hero';
import Banner from './component/Banner';
import Skills from './component/Skills';
import Projects from './component/Projects';
import AboutMe from './component/Aboutme';
import GetInTouch from './component/GetInTouch';
import Footer from './component/Footer';
import FloatingIcon from './component/FloatingIcon';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <body>
      <div className="wrapper">
        <Routes>
          <Route path='/' element={<Hero />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/aboutme' element={<AboutMe />}></Route>
          <Route path='/getInTouch' element={<GetInTouch />}></Route>
         

        </Routes>
      </div>
    </body>
  );
}

export default App;
