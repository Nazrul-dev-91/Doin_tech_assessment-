import React from 'react';
import './Courses.css';

const Courses = () => {
  const courses = [
    { 
      id: 1, 
      title: 'Learn Figma from Basic', 
      img: '/assets/course-card-1.png'
    },
    { 
      id: 2, 
      title: 'Build Digital Asset', 
      img: '/assets/course-card-2.png'
    },
    { 
      id: 3, 
      title: 'the Power of Big Data', 
      img: '/assets/course-card-3.png'
    },
    { 
      id: 4, 
      title: 'Balancing Productivity and...', 
      img: '/assets/course-card-4.png'
    },
    { 
      id: 5, 
      title: 'Mastering Money Manage...', 
      img: '/assets/course-card-5.png'
    },
    { 
      id: 6, 
      title: 'From Idea to Startup Succ...', 
      img: '/assets/course-card-6.png'
    },
  ];

  return (
    <section className="courses container" id="courses">
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card-item">
            <img src={course.img} alt={course.title} className="course-card-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;


