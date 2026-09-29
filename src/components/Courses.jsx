import React from 'react';
import './Courses.css';
import { FiStar, FiBarChart2 } from 'react-icons/fi';

const Courses = () => {
  const courses = [
    { id: 1, title: 'Learn Figma from Basic', author: 'purepearl studio', rating: 4.5, price: 25, img: 'bg1' },
    { id: 2, title: 'Build Digital Asset', author: 'purepearl studio', rating: 4.5, price: 25, img: 'bg2' },
    { id: 3, title: 'the Power of Big Data', author: 'purepearl studio', rating: 4.5, price: 25, img: 'bg3' },
    { id: 4, title: 'Balancing Productivity an...', author: 'purepearl studio', rating: 4.5, price: 25, img: 'bg4' },
    { id: 5, title: 'Mastering Money Manage...', author: 'purepearl studio', rating: 4.5, price: 25, img: 'bg5' },
    { id: 6, title: 'From Idea to Startup Succ...', author: 'purepearl studio', rating: 4.5, price: 25, img: 'bg6' },
  ];

  return (
    <section className="courses container">
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <div className={`course-img-placeholder ${course.img}`}>
              <div className="course-stats-overlay">
                <span>17 Lessons</span>
                <span>2 hours 16 mins</span>
                <span>59 Comments</span>
              </div>
            </div>
            <div className="course-info">
              <div className="course-header">
                <h3>{course.title}</h3>
                <div className="rating">
                  {course.rating} <FiStar className="star-icon" />
                </div>
              </div>
              <p className="author">by {course.author}</p>
              
              <div className="course-meta">
                <div className="level">
                  <FiBarChart2 /> Beginner
                </div>
                <div className="students">
                  <div className="avatar-group">
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                    <div className="avatar more">26+</div>
                  </div>
                </div>
              </div>
              
              <div className="course-price">
                <span className="price">${course.price}</span>
                <span className="period">/lifetime</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
