import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'
import ME from '../../assets/me.png'
 const About = () => {
  return (
    <section id='about'>
     
       <h5>Lo que tenes que saber</h5>
      <h2>Sobre mi</h2>
      
 <div className="container about__container">
  <div className="about__me">
    <div className="about__me-image">
      <img src={ME} alt="About " />
    </div>

  </div>
  <div className="about__content">
    <div className="about__cards">
      <article className='about__card'>
        <FaAward className='about__icon'/>
        <h5>Skills</h5>
        <small>Conoce mis Skills</small>
      </article>
      <article className='about__card'>
        <FiUsers className='about__icon'/>
        <h5>Skills</h5>
        <small>Conoce mis Skills</small>
      </article>
      <article className='about__card'>
        <VscFolderLibrary className='about__icon'/>
        <h5>Proyectos</h5>
        <small>Proyectos que formé parte</small>
      </article>      
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reiciendis eligendi quia corporis illo? Excepturi, fugiat quaerat ratione voluptatem pariatur nostrum dicta ducimus minus illo quos explicabo. Voluptates, optio enim.</p>
  <a href="#contact" className='btn btn-primary'>Hablemos</a>
  </div>
</div>
    </section>
  )
}

export default About