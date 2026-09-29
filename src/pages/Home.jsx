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

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-bg-wrapper">
        <Header />
        <Hero />
      </div>
      <Features />
      <Courses />
      <LearningPaths />
      <Growth />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
