import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Logo.png'
import IMG2 from '../../assets/GestAbsss.png'

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Academic and Personnal Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3> WonderLab</h3>
          <small className='text-light'>Wonderlab is a scientific blogging platform designed to allow users to share and explore articles across various scientific fields. Utilizing HTML, CSS, JavaScript, and PHP, the site enables users to browse and publish scientific content, enhancing knowledge sharing within the community. The platform focuses on ease of use and encourages interaction among science enthusiasts.</small>
            <div classNa="portfolio__item-cta">
              <a href="https://github.com/OussamaRemli/WonderLab/tree/master" className="btn"> Github </a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>
          </div>
          <h3>Qrabs</h3>
          <small className='text-light'>The project involves developing a comprehensive absence management application for our school. It aims to streamline attendance tracking using technologies like React and Spring Boot. Key features include QR code generation and facial recognition, which enhance security and efficiency. This project is a practical solution to meet the unique needs of our educational institution, demonstrating my commitment to innovative problem-solving.</small>
          <div classNa="portfolio__item-cta">
            <a href="https://github.com/OussamaRemli/SMART-ATTENDANCE-TRACKER" className="btn"> Github </a>
          </div>
        </article>

    </div>

    </section>
  )
}

export default Portfolio