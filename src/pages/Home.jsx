import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Courses from '../components/Courses';
import LearningPaths from '../components/LearningPaths';
import Growth from '../components/Growth';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import './Home.css';

const Home = ({ onNavigate }) => {
  const handleSearch = (query) => {
    if (query) {
      const coursesSection = document.getElementById('courses');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="home-page">
      <div className="hero-bg-wrapper blue-grid-bg">
        <Header currentPage="home" onNavigate={onNavigate} />
        <Hero onSearch={handleSearch} />
      </div>
      <Features onSelectCategory={handleSearch} />
      <Courses />
      <LearningPaths />
      <Growth />
      <CTA onJoinCreator={onNavigate} />
      <Testimonials />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Home;

