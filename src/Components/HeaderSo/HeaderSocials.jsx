import React from 'react'
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';

export default function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/raimerjosh" target="_blank"><BsTwitter/></a>
    </div>
  )
}