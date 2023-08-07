import React from 'react'
import "./footer.css";
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
export default function Footer(){
  return (
    <footer>
      <a href='#' className='footer_logo'>Josh Raimer</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://facebook.com'><BsFacebook/></a>
        <a href='https://twitter.com'><BsTwitter/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Joshua Raimer. All rights reserved.</small>
      </div>
    </footer>
  )
}