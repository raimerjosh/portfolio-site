import React from 'react'
import "./portfolio.css";
import IMG1 from "../../assests/portfolio_1.png";
import IMG2 from "../../assests/portfolio_2.png";
import IMG3 from "../../assests/portfolio_3.png";
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
          <h3>Plant Store Ecommerce</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/raimerjosh/ecommerce" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2}/>
          </div>
          <h3>Golf Score Database</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/raimerjosh/pern-app" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3}/>
          </div>
          <h3>React & AWS Hotel</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/raimerjosh/react-aws" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4}/>
          </div>
          <h3>This is a portfolio item</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/raimerjosh" className='btn' target='_blank'>Github</a>
            {/* <a href="https://github.com/raimerjosh" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
          
        </article>

      </div>
    </section>
  )
}