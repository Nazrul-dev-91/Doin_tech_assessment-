import React from 'react';
import './Growth.css';

const Growth = () => {
  return (
    <section className="growth-section container" id="creators">
      {/* Background Blur Color Glows matching Figma design */}
      <img src="/assets/bg-glow-lime-center.png" alt="" className="growth-bg-glow glow-top-center" />
      <img src="/assets/bg-glow-blue-dark.png" alt="" className="growth-bg-glow glow-mid-left" />
      <img src="/assets/bg-glow-lime-top.png" alt="" className="growth-bg-glow glow-bot-left" />
      <img src="/assets/bg-glow-blue-soft.png" alt="" className="growth-bg-glow glow-bot-right" />

      {/* Section 1: Professional Growth */}
      <div className="growth-grid">
        <div className="growth-text-col">
          <h2 className="growth-title">
            Your Path to Professional<br />
            Growth Starts Here!
          </h2>
          <p className="growth-desc">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>

          <div className="growth-stats-row">
            <div className="growth-stat-item">
              <span className="growth-stat-num">12K</span>
              <span className="growth-stat-label">Students</span>
            </div>
            <div className="growth-stat-item">
              <span className="growth-stat-num">70+</span>
              <span className="growth-stat-label">Courses</span>
            </div>
            <div className="growth-stat-item">
              <span className="growth-stat-num">16</span>
              <span className="growth-stat-label">Creators</span>
            </div>
          </div>
        </div>

        <div className="growth-visual-col">
          <div className="growth-collage-container">
            {/* Background Course Card */}
            <img src="/assets/course-card-1.png" alt="Figma Course Card" className="collage-bg-card" />
            
            {/* 3D Lime Helix Shape */}
            <img src="/assets/shape-white-helix-green.png" alt="Lime Helix" className="collage-helix-shape float-anim" />

            {/* Clean Learning Progress 55% Card PNG from Figma */}
            <img src="/assets/card-progress-clean.png" alt="Learning Progress 55%" className="floating-progress-pill-img float-anim-reverse" />

            {/* Foreground Student Boy */}
            <img src="/assets/hero-student.png" alt="Student" className="collage-student-boy" />
          </div>
        </div>
      </div>

      {/* Section 2: Create & Manage Courses Easily */}
      <div className="growth-grid growth-grid-reversed">
        <div className="growth-visual-col">
          <div className="growth-collage-container cta-collage-container">
            {/* 3D Helix Shape */}
            <img src="/assets/shape-white-helix-green_r.png" alt="Lime Helix" className="cta-helix-shape float-anim" />

            {/* Blue Card 1: Total Revenue */}
            <div className="blue-stat-card card-revenue float-anim-reverse">
              <div className="blue-card-top">
                <div>
                  <div className="blue-card-title">Total Revenue</div>
                  <div className="blue-card-sub">July 1-28</div>
                </div>
              </div>
              <div className="blue-card-val">$120.29</div>
              <div className="blue-card-progress">
                <div className="blue-card-fill" style={{ width: '30%' }}></div>
              </div>
            </div>

            {/* Blue Card 2: Year to Date */}
            <div className="blue-stat-card card-ytd float-anim">
              <div className="blue-card-title">Year to Date</div>
              <div className="blue-card-sub">2023</div>
              <div className="blue-card-val">$1,200.38</div>
              <span className="blue-card-badge">+12$</span>
            </div>

            {/* Foreground Woman */}
            <img src="/assets/growth-woman.png" alt="Creator Woman" className="collage-creator-woman" />

            {/* Clean Happy Students Card PNG from Figma */}
            <img src="/assets/card-happy-students-clean.png" alt="Happy Students" className="happy-students-card-img float-anim-reverse" />
          </div>
        </div>

        <div className="growth-text-col">
          <h2 className="growth-title">
            Create & Manage<br />
            Courses Easily.
          </h2>
          <p className="growth-desc">
            <strong className="text-bold-brand">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
          </p>

          <ul className="cta-checklist-vertical">
            <li>
              <svg className="blue-check-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#0048FE"/>
                <path d="M7 12.5L10.5 16L17.5 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Share Your Expertise</span>
            </li>
            <li>
              <svg className="blue-check-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#0048FE"/>
                <path d="M7 12.5L10.5 16L17.5 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Monetize Your Passion</span>
            </li>
            <li>
              <svg className="blue-check-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#0048FE"/>
                <path d="M7 12.5L10.5 16L17.5 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Flexibility and Autonomy</span>
            </li>
            <li>
              <svg className="blue-check-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#0048FE"/>
                <path d="M7 12.5L10.5 16L17.5 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Build a Community</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Growth;
