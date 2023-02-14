import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
<div className="container header__container">
  <h3>Hola, yo soy</h3>
  <h1>Santiago Cisneros</h1>
  <h2 className='text-light'>FullStack developer</h2>
  <CTA/>
  <HeaderSocial/>

  <div className='me'>
    <img src={me} alt="carnet" />
  </div>

  <a href="#contact" className='scroll_down'> Scroll Down</a>
</div>
    </header>
  )
}

export default Header