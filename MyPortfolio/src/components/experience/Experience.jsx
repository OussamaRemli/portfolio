import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'



function Experience() {
  return (
    <section id="experience">
    
      <h2>My Skills</h2>
      <div className='container experience__container'>
        <div className='experience__1'>
          <h3>Programming Languages and Frameworks</h3>  <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>C/C++</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Node.js</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Spring Boot</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>SQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Git</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>HTML/CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
        </div>


      <div className='experience__1'>
          <h3>Linguistic Competences</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>English</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Frensh</h4>
                <small className='text-light'>Fluent</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Arabe</h4>
                <small className='text-light'>Native</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience