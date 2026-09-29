import React from 'react';
import './Growth.css';
import { FiCheckCircle, FiTrendingUp } from 'react-icons/fi';

const Growth = () => {
  return (
    <section className="growth-section container" id="creators">
      {/* Section 1: Professional Growth */}
      <div className="growth-grid">
        <div className="growth-text-col">
          <h2 className="growth-title">
            Your Path to Professional<br />
            Growth Starts Here!
          </h2>
          <p className="growth-desc">
            Opt for ByteSpace for a dynamic learning journey. Benefit from expert-led courses, engaging practical projects, and a community dedicated to lifelong learning. Your career advancement begins with us.
          </p>

          <div className="stats-row">
            <div className="stat-card">
              <h3 className="stat-num">12K</h3>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <h3 className="stat-num">70+</h3>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <h3 className="stat-num">18</h3>
              <span className="stat-label">Mentors</span>
            </div>
          </div>
        </div>

        <div className="growth-visual-col">
          <div className="image-card-container">
            <img src="/assets/growth-boy.png" alt="Professional Growth Student" className="growth-img" />
            <img src="/assets/3d-helix-white.png" alt="Shape" className="growth-shape-helix float-anim" />

            {/* Floating Overlays */}
            <div className="floating-card float-card-top float-anim">
              <div className="card-badge-dot"></div>
              <div>
                <h5>Learn UI/UX Design</h5>
                <span>17 Lessons • 2h 16m</span>
              </div>
            </div>

            <div className="floating-card float-card-bottom float-anim-reverse">
              <span className="card-small-label">Learning Progress</span>
              <div className="progress-percent">55%</div>
              <div className="mini-progress-bar">
                <div className="mini-progress-fill" style={{ width: '55%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Create & Manage Courses */}
      <div className="growth-grid growth-grid-reversed">
        <div className="growth-visual-col">
          <div className="image-card-container">
            <img src="/assets/growth-woman.png" alt="Course Creator" className="growth-img" />
            <img src="/assets/3d-helix-white.png" alt="Shape" className="growth-shape-helix-left float-anim-reverse" />

            {/* Floating Overlays */}
            <div className="floating-card float-card-earnings float-anim">
              <div className="earnings-header">
                <span>Total Earnings</span>
                <span className="earnings-badge"><FiTrendingUp /> +12.4%</span>
              </div>
              <div className="earnings-amount">$5,140.65</div>
            </div>

            <div className="floating-card float-card-audience float-anim-reverse">
              <span>Engaged Audience</span>
              <div className="audience-avatars">
                <img src="/assets/testimonial-1.png" alt="User" className="aud-avatar" />
                <img src="/assets/testimonial-2.png" alt="User" className="aud-avatar" />
                <img src="/assets/testimonial-3.png" alt="User" className="aud-avatar" />
                <span className="aud-more">+1.4K</span>
              </div>
            </div>
          </div>
        </div>

        <div className="growth-text-col">
          <h2 className="growth-title">
            Create & Manage<br />
            Courses Easily.
          </h2>
          <p className="growth-desc">
            <strong className="text-brand">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
          </p>

          <ul className="feature-checklist">
            <li>
              <FiCheckCircle className="check-icon" />
              <span>Share Your Expertise</span>
            </li>
            <li>
              <FiCheckCircle className="check-icon" />
              <span>Monetize Your Passion</span>
            </li>
            <li>
              <FiCheckCircle className="check-icon" />
              <span>Flexibility and Autonomy</span>
            </li>
            <li>
              <FiCheckCircle className="check-icon" />
              <span>Build a Community</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Growth;

