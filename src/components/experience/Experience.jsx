import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
function Experience() {
  return (
    <section id='experience'>
      <h5>Que skills tengo</h5>
      <h2>Mi experiencia</h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
         <h3>Frontend Development</h3>
         <div className='experience__content'>
          <article className='experience__details'>
           <BsPatchCheckFill className="experience__details-icon"/>
          <div>
            <h4>HTML</h4>
            </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill className="experience__details-icon"/>
           <div>
            <h4>CSS</h4>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>Tailwindcss</h4>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>bootstrap</h4>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill className="experience__details-icon"/>
           <h4>React</h4>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>Javascript</h4>
           </div>
          </article>
         </div>
        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
        <div className="experience__content">
        <article className='experience__details'>
           <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>Node JS</h4>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>express</h4>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>Mysql</h4>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>Javascript</h4>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>Sequelize</h4>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>MySQL</h4>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill className="experience__details-icon"/>
           <div>
           <h4>PYTHON</h4>
           </div>
          </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience