import React from 'react';
import { Search, Star, BarChart, PenTool, Code, Camera, Briefcase, PlayCircle, Users } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section bg-grid-pattern">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Get Access to Hundreds<br/>Courses Available</h1>
            <p className="hero-subtitle">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>
            
            <div className="hero-search-wrapper">
              <div className="search-input-container">
                <Search className="search-icon" size={20} />
                <input 
                  type="text" 
                  placeholder="Course, topic, creator" 
                  className="search-input"
                />
              </div>
              <button className="btn-search">Search</button>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <div className="hero-circle"></div>
            <img 
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Student" 
              className="hero-main-img" 
            />
            
            <div className="floating-card card-uiux">
              <h4>UI/UX Design</h4>
              <p>200 Courses • 1000+ Students</p>
            </div>
            
            <div className="floating-card card-progress">
              <p className="progress-label">Learning Progress</p>
              <h3 className="progress-value">55%</h3>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill"></div>
              </div>
            </div>
            
            <div className="floating-card card-students">
              <div className="students-info">
                <h4>Happy Students</h4>
                <p>4.5 (240) <Star className="star" size={12} fill="#facc15" stroke="none"/></p>
              </div>
              <div className="students-avatars">
                <div className="avatar bg-blue"></div>
                <div className="avatar bg-red"></div>
                <div className="avatar bg-yellow"></div>
                <div className="avatar bg-green">2K+</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="brands-section">
        <div className="container brands-logos">
          <div className="brand-logo">LogoIpsum</div>
          <div className="brand-logo">LogoIpsum</div>
          <div className="brand-logo">LogoIpsum</div>
          <div className="brand-logo">LogoIpsum</div>
          <div className="brand-logo">LogoIpsum</div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section container">
        <div className="section-header text-center">
          <h2>Discover Your Passion,<br/>Build Your Skills</h2>
          <p>Explore thousands of courses on highly demanding topics. Learn from industry experts and take your career to the next level.</p>
        </div>
        
        <div className="category-tabs">
          <button className="tab active">See all</button>
          <button className="tab">Design</button>
          <button className="tab">Development</button>
          <button className="tab">Marketing</button>
          <button className="tab">Data Science</button>
          <button className="tab">Photography</button>
          <button className="tab">Business</button>
        </div>
        
        <div className="courses-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div className="course-card" key={i}>
              <div className="course-img-wrapper">
                <img src={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80`} alt="Course" />
                <div className="course-badges">
                  <span className="badge-lessons">17 Lessons</span>
                  <span className="badge-time">2 hours 16 mins</span>
                </div>
              </div>
              <div className="course-content">
                <div className="course-title-row">
                  <h3>Learn Figma UI/UX Design</h3>
                  <div className="rating">4.5 <Star size={14} fill="#facc15" stroke="none"/></div>
                </div>
                <p className="author">by purepearl studio</p>
                <div className="course-level">
                  <BarChart size={16} /> Beginner
                </div>
                <div className="course-footer">
                  <div className="price"><strong>$25</strong>/lifetime</div>
                  <div className="students-avatars small">
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                    <div className="avatar more">2K+</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section container text-center">
        <h2>Explore Diverse Learning Paths at ByteSpace</h2>
        <p className="subtitle">Discover a world of knowledge and skill enhancement across multiple domains. Explore these categories to find exactly what you're looking for.</p>
        
        <div className="categories-grid">
          <div className="category-box">
            <div className="icon-box"><PenTool /></div>
            <h4>Design</h4>
          </div>
          <div className="category-box">
            <div className="icon-box"><Code /></div>
            <h4>Development</h4>
          </div>
          <div className="category-box">
            <div className="icon-box"><Briefcase /></div>
            <h4>Business</h4>
          </div>
          <div className="category-box">
            <div className="icon-box"><Camera /></div>
            <h4>Photography</h4>
          </div>
          <div className="category-box">
            <div className="icon-box"><BarChart /></div>
            <h4>Marketing</h4>
          </div>
          <div className="category-box">
            <div className="icon-box"><PlayCircle /></div>
            <h4>Music</h4>
          </div>
        </div>
      </section>

      {/* Split Section 1 */}
      <section className="split-section container">
        <div className="split-content">
          <h2>Your Path to Professional<br/>Growth Starts Here!</h2>
          <p>Gain the knowledge and skills needed to thrive in today's competitive landscape. Take the first step towards a brighter future by enrolling in our expert-led courses.</p>
          <div className="stats-row">
            <div className="stat-item">
              <h3>12K</h3>
              <p>Students</p>
            </div>
            <div className="stat-item">
              <h3>70+</h3>
              <p>Courses</p>
            </div>
            <div className="stat-item">
              <h3>18</h3>
              <p>Mentors</p>
            </div>
          </div>
        </div>
        <div className="split-image">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Growth" />
          <div className="floating-badge top-right">
            <span>Learning Progress</span>
            <h4>55%</h4>
          </div>
        </div>
      </section>

      {/* Split Section 2 */}
      <section className="split-section container reverse">
        <div className="split-image">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Manage" />
        </div>
        <div className="split-content">
          <h2>Create & Manage<br/>Courses Easily.</h2>
          <p>ByteSpace provides a seamless and user-friendly platform for instructors to build and manage their courses.</p>
          <ul className="feature-list">
            <li><span className="check">✓</span> Effortless Creation</li>
            <li><span className="check">✓</span> Centralized Dashboard</li>
            <li><span className="check">✓</span> Flexibility and Autonomy</li>
            <li><span className="check">✓</span> Active Community</li>
          </ul>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner container">
        <div className="cta-content bg-grid-pattern">
          <h2>Unlock Your Potential as a<br/>Creator with ByteSpace</h2>
          <p>Join thousands of instructors around the globe who are monetizing their knowledge and impacting lives. Create courses, earn money, and be a part of our growing community.</p>
          <button className="btn-join">Join as Creator</button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section container">
        <div className="section-header text-center">
          <h2>Discover What Our<br/>Community is Saying</h2>
        </div>
        <div className="testimonials-grid">
          {[1,2,3].map(i => (
            <div className="testimonial-card" key={i}>
              <div className="testi-header">
                <img src={`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80`} alt="User" />
                <div>
                  <h4>Jane D.</h4>
                  <p>UI/UX Designer</p>
                </div>
              </div>
              <p className="testi-text">"ByteSpace is the best platform I've used for learning. The courses are top-notch and the community is super helpful. I landed a job right after completing a course here!"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
