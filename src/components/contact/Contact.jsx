import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3d33pyi', 'template_inzlnfe', form.current,'Yk6qJpv6Bruuxzgna')
    e.target.reset()
  };
  
  return (
    <section id='contact'>
<h5>Get In Touch</h5>
<h2>Contact Me</h2>

<div className="container contact__container">
<div className="contact__options">
  <article className='contact__option'>
    <MdOutlineEmail className='contact__option-icon'/>
    <h4>Email</h4>
    <h5>santiag.cis@gmail.com</h5>
    <a href="mailto:santiag.cis@gmail.com" target="_blank" rel="noreferrer"> Send a message</a>
  </article>
  <article className='contact__option'>
    <BsWhatsapp className='contact__option-icon'/>
    <h4>WhatsApp</h4>
    <h5>+5492215918717</h5>
    <a href="https://api.whatsapp.com/send?phone=5492215918717&text=Hi!%20Santiago%20could%20I%20talk%20to%20you%20about" target="_blank" rel="noreferrer"> Send a message</a>
  </article>
</div>
<form ref={form} onSubmit={sendEmail}>
  <input type="text" name='name' placeholder='Your Full Name' required />
  <input type="text" name='email' placeholder='Your Email' required />
  <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
  <button id="send"className='btn btn-primary btn-input'type='submit'>Send Message</button>
</form>
</div>

    </section>
  )
}

export default Contact