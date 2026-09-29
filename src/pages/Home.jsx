import React from 'react';
import { Search, Star, BarChart, PenTool, Code, Camera, Briefcase, PlayCircle } from 'lucide-react';
import { ShapeCone, ShapeDonut, ShapeCylinder, ShapeSpring } from '../components/FloatingShapes';
import { BrandLogo1, BrandLogo2, BrandLogo3, BrandLogo4, BrandLogo5 } from '../components/BrandLogos';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section bg-grid-pattern">
        <img src="/hero-shapes.png" alt="3D Shapes" className="hero-shapes-img" />
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
            {/* The boy hero image */}
            <div className="hero-circle"></div>
            <img src="/hero-boy.png" alt="Student" className="hero-main-img" />
            
            {/* Floating Cards */}
            <img src="/card-uiux.png" alt="UI/UX Design" className="floating-img card-uiux-img" />
            <img src="/card-progress.png" alt="Learning Progress" className="floating-img card-progress-img" />
            <img src="/card-students.png" alt="Happy Students" className="floating-img card-students-img" />
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="brands-section">
        <div className="container brands-logos">
          <BrandLogo1 />
          <BrandLogo2 />
          <BrandLogo3 />
          <BrandLogo4 />
          <BrandLogo5 />
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section container">
        <div className="section-header text-center">
          <h2>Discover Your Passion,<br/>Build Your Skills</h2>
          <p>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
        </div>
        
        <div className="category-tabs">
          <button className="tab active">Featured</button>
          <button className="tab">Music</button>
          <button className="tab">Drawing & Painting</button>
          <button className="tab">Marketing</button>
          <button className="tab">Animation</button>
          <button className="tab">Social Media</button>
          <button className="tab">UI/UX Design</button>
        </div>
        
        <div className="courses-grid">
          {[
            { id: 1, title: 'Learn Figma from Basic', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
            { id: 2, title: 'Build Digital Asset', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
            { id: 3, title: 'the Power of Big Data', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
            { id: 4, title: 'Balancing Productivity an...', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
            { id: 5, title: 'Mastering Money Manage...', img: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
            { id: 6, title: 'From Idea to Startup Succ...', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' }
          ].map((course) => (
            <div className="course-card" key={course.id}>
              <div className="course-img-wrapper">
                <img src={course.img} alt={course.title} />
                <div className="course-badges">
                  <span className="badge-lessons">17 Lessons</span>
                  <span className="badge-time">2 hours 16 mins</span>
                  <span className="badge-time">59 Comments</span>
                </div>
              </div>
              <div className="course-content">
                <div className="course-title-row">
                  <h3>{course.title}</h3>
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
                    <div className="avatar more">26+</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section container text-center">
        <h2>Explore Diverse Learning Paths at Bytespace</h2>
        <p className="subtitle">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.</p>
        
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
            <h4>IT & Software</h4>
          </div>
          <div className="category-box">
            <div className="icon-box"><BarChart /></div>
            <h4>Business</h4>
          </div>
          <div className="category-box">
            <div className="icon-box"><PlayCircle /></div>
            <h4>Marketing</h4>
          </div>
          <div className="category-box">
            <div className="icon-box"><Camera /></div>
            <h4>Photography</h4>
          </div>
        </div>
      </section>

      {/* Split Section 1 */}
      <section className="split-section container">
        <div className="split-content">
          <h2>Your Path to Professional<br/>Growth Starts Here!</h2>
          <p>Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey.<br/><br/>Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
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
              <h3>16</h3>
              <p>Creators</p>
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
        <div className="split-image girl-image-wrapper">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Manage" />
          
          <div className="revenue-card top-left">
            <p>Total Revenue</p>
            <span>July 1-28</span>
            <h4>$120.29</h4>
            <div className="progress-bar-bg"><div className="progress-bar-fill"></div></div>
          </div>
          
          <div className="revenue-card bottom-left">
            <p>Year to Date</p>
            <span>2023</span>
            <h4>$1,200.38</h4>
            <div className="badge-green">+12$</div>
          </div>
          
          <div className="floating-card card-students bottom-right">
            <div className="students-info">
              <h4>Happy Students</h4>
              <p>4.5 (240) <Star size={12} fill="#facc15" stroke="none"/></p>
            </div>
            <div className="students-avatars">
              <div className="avatar bg-blue"></div>
              <div className="avatar bg-red"></div>
              <div className="avatar bg-yellow"></div>
              <div className="avatar bg-green">2K+</div>
            </div>
          </div>
        </div>
        <div className="split-content">
          <h2>Create & Manage<br/>Courses Easily.</h2>
          <p>ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p>
          <ul className="feature-list">
            <li><span className="check check-blue">✓</span> Share Your Expertise</li>
            <li><span className="check check-blue">✓</span> Monetize Your Passion</li>
            <li><span className="check check-blue">✓</span> Flexibility and Autonomy</li>
            <li><span className="check check-blue">✓</span> Build a Community</li>
          </ul>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner container">
        <div className="cta-content bg-grid-pattern">
          <h2>Unlock Your Potential as a<br/>Creator with ByteSpace</h2>
          <p>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
          <button className="btn-join">Join as Creator</button>
          
          <img src="/shape-cone.png" alt="" className="cta-shape cta-cone" />
          <img src="/shape-donut.png" alt="" className="cta-shape cta-donut" />
          <img src="/shape-cylinder.png" alt="" className="cta-shape cta-cylinder" />
          <img src="/shape-spring-green.png" alt="" className="cta-shape cta-spring" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section container">
        <div className="section-header split-testi">
          <h2>Discover What Our<br/>Community Is Saying</h2>
          <p>At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testi-header">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="Sarah M." />
              <div>
                <h4>Sarah M.</h4>
                <p>Enthusiastic Learner</p>
              </div>
            </div>
            <p className="testi-text">"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."</p>
          </div>

          <div className="testimonial-card">
            <div className="testi-header">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="James L." />
              <div>
                <h4>James L.</h4>
                <p>Lifelong Learner</p>
              </div>
            </div>
            <p className="testi-text">"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."</p>
          </div>

          <div className="testimonial-card">
            <div className="testi-header">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="Alex B." />
              <div>
                <h4>Alex B.</h4>
                <p>Inspired Creator</p>
              </div>
            </div>
            <p className="testi-text">"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
