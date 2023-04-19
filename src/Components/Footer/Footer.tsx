import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <footer className='footer'>
      <ul className='footer-list'>
        <li><a className='footer-list-item' target='_blank' href="https://www.linkedin.com/in/rob-arkesteijn-394550267/"><i className="fa-brands fa-linkedin"></i></a></li>
        <li><a className='footer-list-item' target='_blank' href="https://github.com/RobArkesteijn"><i className="fa-brands fa-github"></i></a></li>
        <li><a className='footer-list-item' target='_blank' href="mailto:rarkesteijn@outlook.com"><i className="fa-solid fa-envelope"></i></a></li>
      </ul>
    </footer>
  )
}

export default Footer