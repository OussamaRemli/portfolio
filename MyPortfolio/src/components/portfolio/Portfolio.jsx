import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.jpeg'
import IMG2 from '../../assets/project2.png'

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Academic and Personnal Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3> WonderLab scientific blog website</h3>
          <small className='text-light'>contributed to the development of the front-end , complementing the back-end functionalities built with PHP. Utilized HTML and CSS to create an intuitive and visually appealing user interface, enhancing the accessibility and engagement of scientific content for visitors.</small>
            <div classNa="portfolio__item-cta">
              <a href="https://github.com/OussamaRemli/WonderLab/tree/master" className="btn"> Github </a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>
          </div>
        </article>

    </div>

    </section>
  )
}

export default Portfolio