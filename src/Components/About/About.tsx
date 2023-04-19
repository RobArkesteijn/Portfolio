import React from 'react'
import './About.scss'
import Footer from '../Footer/Footer'

function About() {
  return (
    <>
      <h1 className='about-title'>A little bit about who I am..</h1>
      <div className='about-text'>
        <ul className='about-text-list'>
          <li className='about-text-list-item-first'>My name is <strong><i>Rob Arkesteijn</i></strong> and I'm a <strong><i>Full Stack JavaScript Developer</i></strong>. I began my journey as a developer back in April 2022, when I first started learning the basics of HTML and CSS. Soon after, I delved into the world of JavaScript, starting with writing functions on Edabit to become familiar with the language's many methods. As I gained more knowledge, I wanted to put it to the test by creating my own projects. It was through these projects that I truly began to learn how to implement JavaScript in a website, and I discovered just how complex the code can become as the project grows larger and more intricate. In January 2023, I took my learning to the next level by attending a bootcamp at SALT. During this program, I was exposed to a variety of tech stacks that allowed me to broaden my skills and ultimately develop my own Full Stack Application. But what drove me to start learning web development in the first place? <i>(Scroll to the right)</i></li>
          <li className='about-text-list-item'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam ut quasi dolor! Repellat ut eaque consequuntur doloremque, odio voluptatibus molestiae.</li>
          <li className='about-text-list-item'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam aliquam voluptatibus architecto numquam perspiciatis, quia inventore atque molestias dolor!</li>
          <li className='about-text-list-item-last'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam aliquam voluptatibus architecto numquam perspiciatis, quia inventore atque molestias dolor!</li>
        </ul>
      </div>
      <div className='footer-aboutlocation'>
        <Footer/>
      </div>
    </>
  )
}

export default About