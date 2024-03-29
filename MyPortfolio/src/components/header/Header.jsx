import React from 'react'
import './header.css'
// import Resume from "../../assets/sabri_mahmoudRes.pdf";
import {BsGithub, BsLinkedin} from "react-icons/bs";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello World I'm</h5>
        <h1>Oussama Remli</h1>
        <h5 className="text-light">4th year student in Computer Engineering at the National School of Applied Sciences</h5><br></br>
        <div className='cta'>
          {/*<a href={Resume} download className='btn'>Download My Resume</a>*/}
          <a href="#contact" className='btn btn-primary'>Contact me</a>
        </div>
        <div className='header__socials'>
          <a href="https://www.linkedin.com/in/sabri-mahmoud-a30b101b7/" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/SabriMahmoud" target="_blank"><BsGithub/></a>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header