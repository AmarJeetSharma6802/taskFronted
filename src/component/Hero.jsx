import React from 'react'
import About from "../component/About.jsx"

function Hero() {
  return (
    <div>
         <section className="hero">
      <div className="hero-content">
        <span className="status-pill">Amarjeet Sharma</span>

        <h1>
          Building digital <span>experiences</span> that matter
        </h1>

        <p>
          Full-Stack Developer focused on scalable web apps and modern UI with
          strong UX thinking.
        </p>

        <div className="hero-actions">
          <button className="primary-btn">
            <a href="https://portfolio-beta-dusky-34.vercel.app/#projects">View Work</a>
          </button>
          <button className="secondary-btn"><a href="">
            https://portfolio-beta-dusky-34.vercel.app/#about</a>Read About Me</button>
        </div>
      </div>
    </section>

    <About/>
    </div>
  )
}

export default Hero