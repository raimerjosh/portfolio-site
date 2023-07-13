import React from 'react'
import "./about.css";
import ME from "../../assests/IMG_0288-PhotoRoom.png";
import { FaAward, FaUsers, FaFolderOpen } from 'react-icons/fa';

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME}/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>

            <article className='about_card'>
              <FaUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className='about_card'>
              <FaFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>My name is Joshua Raimer and I am a Software Developer in Austin, TX. I have a Doctorate in Physical Therapy as well as a Codecademy certification in Fullstack Development. When I am not coding, I enjoy being outside. I love to climb and play with my 2 dogs.</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}