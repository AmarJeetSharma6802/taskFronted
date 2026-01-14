export default function Work() {
  return (
     <section className="work-section" id="work">
      <div className="work-container">
        <h2 className="section-title">Selected Work</h2>

        <div className="project-card">
          <div className="project-overlay"></div>

          <div className="project-content">
            <div className="project-text">
              <span className="project-tag">Fintech Platform</span>
              <h3>NexFlow Dashboard</h3>
              <p>
                A high-performance financial monitoring suite handling over
                $2M in daily transactions with sub-100ms latency.
              </p>
            </div>

            <button className="project-btn">
              View Case Study →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
