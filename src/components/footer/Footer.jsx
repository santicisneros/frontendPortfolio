import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'


function Footer() {
  return (
   <footer>
    <a href="#" className='footer__logo' >SC</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://linkedin.com/in/santicisneros" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/santicisneros" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/santiagocis" target="_blank" rel="noreferrer"><FiInstagram/></a>

    </div>

    <div className="footer__copyright">
      <small>&copy; SC. All rights reserved. </small>
    </div>
   </footer>
  )
}

export default Footer