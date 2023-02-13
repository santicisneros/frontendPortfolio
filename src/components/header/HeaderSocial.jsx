import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/santicisneros" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/santicisneros" target="_blank" rel="noreferrer"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocial