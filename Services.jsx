import "./Services.css";

export default function Services() {
  return (
    <section className="services" id="services">

      <h2 className="services-title">Our Services</h2>

      <div className="services-grid">

        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            We build fast, secure and scalable websites using modern technologies
            like React, Node.js and cloud deployment.
          </p>
        </div>

        <div className="service-card">
          <h3>Mobile App Development</h3>
          <p>
            Native and cross-platform mobile apps with smooth UI, high performance
            and real-time integrations.
          </p>
        </div>

        <div className="service-card">
          <h3>UI / UX Design</h3>
          <p>
            Beautiful and user-friendly interfaces designed using Figma with
            industry-standard UX processes.
          </p>
        </div>

        <div className="service-card">
          <h3>Cloud & DevOps</h3>
          <p>
            Cloud deployment, CI/CD, Docker, AWS, Kubernetes and infrastructure
            automation.
          </p>
        </div>

        <div className="service-card">
          <h3>Digital Marketing</h3>
          <p>
            SEO, Google Ads, social campaigns and brand strategy to grow your
            online presence.
          </p>
        </div>

        <div className="service-card">
          <h3>Software Consulting</h3>
          <p>
            Professional consulting for automation, system design and technology
            planning.
          </p>
        </div>

      </div>
    </section>
  );
}
