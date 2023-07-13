import React from 'react'
import "./header.css";
import CTA from './CTA';
import ME from "../../assests/IMG_0450-PhotoRoom.png";
import HeaderSocials from '../HeaderSo/HeaderSocials';

export default function Header(){
  return (
  <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Joshua Raimer</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA/>

      <div className="me">
        <img src={ME} alt="Me"/>
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
      <HeaderSocials/>

    </div>
  </header>
  )
}