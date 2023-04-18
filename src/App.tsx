import React from 'react';
import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <img className="logo" src={require("./R_logo.png")} alt="My personal Logo" /> */}
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
        <div className='animation-line'></div>
        <div className='animation-line'></div>
        <div className='animation-line'></div>
        <div className='animation-line'></div>
      </div>
      <div className='menu'>
        <ul className='menu-list'>
          <li className='menu-list-item'><Link className='menu-list-item-link' to='/about'>About Me</Link></li>
          <li className='menu-list-item'><Link className='menu-list-item-link' to='/skills'>Skills</Link></li>
          <li className='menu-list-item'><Link className='menu-list-item-link' to='/projects'>Projects</Link></li>
          <li className='menu-list-item'><Link className='menu-list-item-link' to='/future'>Future</Link></li>
        </ul>
      </div>
      <footer className='footer'>
        <ul className='footer-list'>
          <li><a className='footer-list-item' target='_blank' href="https://www.linkedin.com/in/rob-arkesteijn-394550267/"><i className="fa-brands fa-linkedin"></i></a></li>
          <li><a className='footer-list-item' target='_blank' href="https://github.com/RobArkesteijn"><i className="fa-brands fa-github"></i></a></li>
          <li><a className='footer-list-item' target='_blank' href="mailto:rarkesteijn@outlook.com"><i className="fa-solid fa-envelope"></i></a></li>
        </ul>
      </footer>
    </>
  )
}

export default App;
