import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Learn, Grow, and Succeed with <span>CoursePro</span></h1>
          <p>Join thousands of learners and gain skills with our premium courses.</p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn explore-btn">Explore Courses</Link>
            <Link to="/signup" className="btn join-btn">Join Now</Link>
          </div>
        </div>
        <img src="https://w3-lab.com/wp-content/uploads/2019/12/Get-the-Most-Fancied-Web-Development-Services-min-scaled.jpg" alt="Learning" className="hero-image" />
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose CoursePro?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="https://img.icons8.com/ios/100/000000/online.png" alt="Online Courses" />
            <h3>1000+ Online Courses</h3>
            <p>Get access to high-quality courses curated by industry experts.</p>
          </div>
          <div className="feature-card">
            <img src="https://img.icons8.com/ios/100/000000/teacher.png" alt="Expert Instructors" />
            <h3>Expert Instructors</h3>
            <p>Learn from top educators and professionals from around the world.</p>
          </div>
          <div className="feature-card">
            <img src="https://img.icons8.com/ios/100/000000/certificate.png" alt="Certification" />
            <h3>Certified Learning</h3>
            <p>Earn industry-recognized certificates for your career growth.</p>
          </div>
          <div className="feature-card">
            <img src="https://img.icons8.com/ios/100/000000/support.png" alt="24/7 Support" />
            <h3>24/7 Support</h3>
            <p>Our support team is always available to assist you anytime.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"This platform has changed my life. I landed a job after completing the AI course!"</p>
            <h4>- Rahul Sharma</h4>
          </div>
          <div className="testimonial">
            <p>"Best learning experience! The instructors are fantastic and the courses are well-structured."</p>
            <h4>- Priya Verma</h4>
          </div>
          <div className="testimonial">
            <p>"I love the flexibility and the quality of content. Highly recommended!"</p>
            <h4>- Arjun Mehta</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Upskill?</h2>
        <p>Start learning today and achieve your career goals.</p>
        <Link to="/signup" className="btn cta-btn">Get Started</Link>
      </section>
    </div>
  );
};

export default Home;
