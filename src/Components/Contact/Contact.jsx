import React from 'react'
import "./contact.css";
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookMessenger } from 'react-icons/fa';

import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l2t3mxg', 'template_noy4rqp', form.current, 'SHOnZ2Fc5X9ruvbnp')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>

        <div className="contact_options">

          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>joshraimer@gmail.com</h5>
            <a href='mailto:joshraimer@gmail.com'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <FaFacebookMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Josh Raimer</h5>
            <a href='https://m.me/joshua.raimer.3'>Send a Message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message...' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}