import React, { useState } from 'react';
import './App.scss';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  const [aboutState, setAboutState] = useState(false);
  const [skillsState, setSkillsState] = useState(false);
  const [projectState, setProjectState] = useState(false);
  const [futureState, setFutureState] = useState(false);
  return (
    <>
      <div className='title'>
        <div className='title-box'>
          <p className='title-welcome'>Welcome.</p>
          <div className='title-textbox'>
            <p className='title-text'>Hi my name is <strong><i>Rob Arkesteijn</i></strong>, After gaining valuable life skills and experiences during my time in the Marines, I pursued a more theoretical path.</p>
            <p className='title-text title-text-middle'>Driven by a passion for programming, I transitioned to the field of software development, where I have sharpened my skills & expertise to become a successful <strong><i>Full Stack JavaScript Developer</i></strong>.</p>
            <p className='title-text'>I am committed to continuous learning and eager to contribute my knowledge and expertise to a dynamic organisation.</p>
          </div>
        </div>
      </div>
      <div className='line-container'>
        <div className={aboutState ? 'animation-line animation-line-hover' : 'animation-line'}></div>
        <div className={skillsState ? 'animation-line animation-line-hover' : 'animation-line'}></div>
        <div className={projectState ? 'animation-line animation-line-hover' : 'animation-line'}></div>
        <div className={futureState ? 'animation-line animation-line-hover' : 'animation-line'}></div>
      </div>
      <div className='menu'>
        <ul className='menu-list'>
          <li className='menu-list-item'><Link onMouseOver={() => setAboutState(true)} onMouseOut={() => setAboutState(false)} className='menu-list-item-link' to='/about'>About Me</Link></li>
          <li className='menu-list-item'><Link onMouseOver={() => setSkillsState(true)} onMouseOut={() => setSkillsState(false)} className='menu-list-item-link' to='/skills'>Skills</Link></li>
          <li className='menu-list-item'><Link onMouseOver={() => setProjectState(true)} onMouseOut={() => setProjectState(false)} className='menu-list-item-link' to='/projects'>Projects</Link></li>
          <li className='menu-list-item'><Link onMouseOver={() => setFutureState(true)} onMouseOut={() => setFutureState(false)} className='menu-list-item-link' to='/future'>Future</Link></li>
        </ul>
      </div>
      <div className='footer-location'>
        <Footer/>
      </div>
    </>
  )
}

export default App;
