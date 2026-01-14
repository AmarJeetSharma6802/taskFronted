import React from 'react'

function Footer() {
  return (
    <div>
     <footer className="footer" id="contact">
      <div className="footer-container">
        <h2 className="footer-title">
          Ready to build something <br />
          <span>legendary?</span>
        </h2>

        <p className="footer-subtitle">
          I’m currently accepting freelance projects and full-time opportunities.
        </p>

        <a
          href="https://portfolio-beta-dusky-34.vercel.app/"
          className="footer-email"
        >
          PortFolio
        </a>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="https://github.com/AmarJeetSharma6802">GitHub</a>
            <a href="https://www.linkedin.com/in/amarjeet-sharma-full-stack/">LinkedIn</a>
          </div>

          <p className="footer-copy">
            © 2024 DevPortfolio. Built with precision and passion.
          </p>
        </div>
      </div>
    </footer>
 
    </div>
  )
}

export default Footer