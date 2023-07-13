import React from 'react'
import CV from "../../assests/josh-raimer-resume.pdf";

export default function CTA(){
  return (
    <div className="cta">
        <a href={CV} className='btn' target='_blank'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}