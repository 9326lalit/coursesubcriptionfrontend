import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>About <span>TechwizLalit</span></h1>
          <p>Your ultimate platform for learning and growth. We provide top-notch courses and real-world projects to help you excel in your career.</p>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="mission-vision">
        <div className="mission">
          <img  alt="Our Mission" />
          <div className="text">
            <h2>Our Mission</h2>
            <p>We aim to empower students and professionals by offering high-quality, industry-relevant courses with practical projects.</p>
          </div>
        </div>
        <div className="vision">
          <div className="text">
            <h2>Our Vision</h2>
            <p>To become a global leader in online education, helping individuals master the latest technologies and build successful careers.</p>
          </div>
          <img  alt="Our Vision" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose TechwizLalit?</h2>
        <div className="features">
          <div className="feature">
            <h3>🚀 Industry-Ready Courses</h3>
            <p>Learn from real-world projects, hands-on coding, and industry best practices.</p>
          </div>
          <div className="feature">
            <h3>👨‍💻 Experienced Instructors</h3>
            <p>Get trained by professionals with years of experience in the tech industry.</p>
          </div>
          <div className="feature">
            <h3>🔒 Lifetime Access</h3>
            <p>Once you enroll, you get lifetime access to the course materials.</p>
          </div>
          <div className="feature">
            <h3>📜 Certification</h3>
            <p>Receive industry-recognized certificates upon course completion.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="cta">
        <h2>Join TechwizLalit Today!</h2>
        <p>Unlock new career opportunities by mastering in-demand skills.</p>
        <button>Explore Courses</button>
      </section>
    </div>
  );
};

export default About;
