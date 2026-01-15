import React from 'react'
import Stack from './Stack'

function About() {
  return (
    <div>
           <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-bento">
          <div className="about-main glass-card">
            <h3>Product-minded Engineer</h3>
            <p>
              I build real-world products with clean architecture, performance
              focus and user-first design. I don’t just write code — I solve
              problems that actually matter.
            </p>
          </div>

          <div className="about-side">
            <div className="about-mini glass-card">
              <strong>Developer</strong>
              <span>Clean, scalable code</span>
            </div>

            <div className="about-mini glass-card">
              <strong>Learner</strong>
              <span>AI & modern tech</span>
            </div>

            <div className="about-mini glass-card">
              <strong>Builder</strong>
              <span>Real-world projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Stack/>
    </div>
  )
}

export default About