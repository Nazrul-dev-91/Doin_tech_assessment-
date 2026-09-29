import React from 'react';
import './Courses.css';
import { FiStar, FiBarChart2 } from 'react-icons/fi';

const Courses = () => {
  const courses = [
    { 
      id: 1, 
      title: 'Learn Figma from Basic', 
      author: 'purepearl studio', 
      rating: 4.8, 
      price: 25, 
      img: '/assets/course-1.png',
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      students: '1500+ Students'
    },
    { 
      id: 2, 
      title: 'Build Digital Asset', 
      author: 'purepearl studio', 
      rating: 4.8, 
      price: 25, 
      img: '/assets/course-2.png',
      lessons: '22 Lessons',
      duration: '3 hours 45 mins',
      comments: '84 Comments',
      students: '1200+ Students'
    },
    { 
      id: 3, 
      title: 'the Power of Big Data', 
      author: 'purepearl studio', 
      rating: 4.8, 
      price: 111, 
      img: '/assets/course-3.png',
      lessons: '30 Lessons',
      duration: '5 hours 10 mins',
      comments: '120 Comments',
      students: '3400+ Students'
    },
    { 
      id: 4, 
      title: 'Balancing Productivity and...', 
      author: 'purepearl studio', 
      rating: 4.8, 
      price: 40, 
      img: '/assets/course-4.png',
      lessons: '14 Lessons',
      duration: '1 hour 50 mins',
      comments: '42 Comments',
      students: '950+ Students'
    },
    { 
      id: 5, 
      title: 'Mastering Money Manage...', 
      author: 'purepearl studio', 
      rating: 4.8, 
      price: 25, 
      img: '/assets/course-5.png',
      lessons: '19 Lessons',
      duration: '2 hours 30 mins',
      comments: '73 Comments',
      students: '1800+ Students'
    },
    { 
      id: 6, 
      title: 'From Idea to Startup Succ...', 
      author: 'purepearl studio', 
      rating: 4.8, 
      price: 25, 
      img: '/assets/course-6.png',
      lessons: '25 Lessons',
      duration: '4 hours 00 mins',
      comments: '98 Comments',
      students: '2100+ Students'
    },
  ];


  return (
    <section className="courses container" id="courses">
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-img-wrapper">
              <img src={course.img} alt={course.title} className="course-img" />
              <div className="course-stats-overlay">
                <span>{course.lessons}</span>
                <span>•</span>
                <span>{course.duration}</span>
                <span>•</span>
                <span>{course.comments}</span>
              </div>
            </div>
            
            <div className="course-info">
              <div className="course-header">
                <h3 className="course-title">{course.title}</h3>
                <div className="course-rating">
                  <span>{course.rating}</span>
                  <FiStar className="star-icon" />
                </div>
              </div>
              
              <p className="course-author">by {course.author}</p>
              
              <div className="course-meta">
                <div className="level-badge">
                  <FiBarChart2 className="bar-icon" /> Beginner
                </div>
                <div className="avatar-stack">
                  <img src="/assets/testimonial-1.png" alt="User" className="tiny-avatar" />
                  <img src="/assets/testimonial-2.png" alt="User" className="tiny-avatar" />
                  <img src="/assets/testimonial-3.png" alt="User" className="tiny-avatar" />
                  <span className="tiny-more">26+</span>
                </div>
              </div>
              
              <div className="course-footer">
                <div className="price-tag">
                  <span className="price">${course.price}</span>
                  <span className="period">/lifetime</span>
                </div>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;

