import React, { useState } from 'react'
import "./nav.css";
import { BiHome, BiUserCircle, BiBook, BiMessage } from "react-icons/bi";
import { BsFiles } from 'react-icons/bs';

export default function Nav(){

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>{<BiHome/>}</a>

      <a href="#about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}>{<BiUserCircle/>}</a>

      <a href="#experience" onClick={() => setActiveNav('experience')} className={activeNav === 'experience' ? 'active' : ''}>{<BiBook/>}</a>

      <a href="#portfolio" onClick={() => setActiveNav('portfolio')} className={activeNav === 'portfolio' ? 'active' : ''}>{<BsFiles/>}</a>

      <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}>{<BiMessage/>}</a>
    </nav>
  )
}
