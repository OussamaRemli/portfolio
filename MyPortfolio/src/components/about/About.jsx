import React from 'react'
import './about.css'

import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineProject} from 'react-icons/ai'
function About() {
  return (
    <section id='about'>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__content">
              <article className='about__card'>
                  <p>
                      I am deeply fascinated by the science of computing, its origins, workings, and future prospects. I enjoy problem-solving and strive to enhance my experience by engaging with various technologies. My curiosity about AI drives me to explore its potential and applications. I am eager to apply my knowledge and skills in a practical setting, contributing to innovative solutions and learning from real-world challenges.                  </p>
              </article>
          </div>
            <a href="MyPortfolio/static/Resume-An.pdf" className='btn btn-primary' download="Oussama_Remli.pdf">My resume</a>
        </div>
       
    </section>
  )
}

export default About

