import React from 'react';
import './Testimonials.css';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
      img: '/assets/testimonial-1.png',
      rating: 5
    },
    {
      id: 2,
      name: 'James L.',
      role: 'Lifelong Learner',
      text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
      img: '/assets/testimonial-2.png',
      rating: 5
    },
    {
      id: 3,
      name: 'Alex B.',
      role: 'Inspired Creator',
      text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
      img: '/assets/testimonial-3.png',
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Discover What Our<br />
            Community Is Saying
          </h2>
          <p className="testimonials-subtitle">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <img src={review.img} alt={review.name} className="reviewer-avatar-img" />
                <div className="reviewer-info">
                  <h4 className="reviewer-name">{review.name}</h4>
                  <span className="reviewer-role">{review.role}</span>
                </div>
              </div>
              <div className="stars-row">
                {[...Array(review.rating)].map((_, i) => (
                  <FiStar key={i} className="star-filled" />
                ))}
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

