import React from 'react'
import "./portfolio.css";
import IMG1 from "../../assests/portfolio_1.webp";
import IMG2 from "../../assests/portfolio_2.webp";
import IMG3 from "../../assests/portfolio_3.webp";
import IMG4 from "../../assests/portfolio_4.webp";

export default function Portfolio(){
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1}/>
          </div>
          <h3>This is a portfolio item</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/raimerjosh" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/raimerjosh" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2}/>
          </div>
          <h3>This is a portfolio item</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/raimerjosh" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/raimerjosh" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3}/>
          </div>
          <h3>This is a portfolio item</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/raimerjosh" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/raimerjosh" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4}/>
          </div>
          <h3>This is a portfolio item</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/raimerjosh" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/raimerjosh" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>

      </div>
    </section>
  )
}