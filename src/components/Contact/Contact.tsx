import React from 'react'

import './contact.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>

      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>joana_querido7@hotmail.com</h5>
            <a href="mailto:mekomerikomg@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+351 915 782 755</h5>
            <a href="https://wa.me/915782755">Send a message</a>
          </article>
        </div>
      </div>
      <br></br>
      <a href="/" className="container contact__container">
        Back to Home Page
      </a>
    </section>
  )
}

export default Contact
