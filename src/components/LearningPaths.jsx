import React from 'react';
import './LearningPaths.css';
import { FiUsers, FiBriefcase, FiMonitor, FiCode, FiPenTool, FiCamera } from 'react-icons/fi';

const LearningPaths = () => {
  const paths = [
    { name: 'Marketing', icon: <FiUsers /> },
    { name: 'Business', icon: <FiBriefcase /> },
    { name: 'IT & Software', icon: <FiMonitor /> },
    { name: 'Development', icon: <FiCode /> },
    { name: 'Design', icon: <FiPenTool /> },
    { name: 'Photography', icon: <FiCamera /> },
  ];

  return (
    <section className="learning-paths container">
      <div className="learning-paths-header">
        <h2 className="paths-title">Explore Diverse Learning Paths at ByteSpace</h2>
        <p className="paths-subtitle">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>
      </div>
      
      <div className="paths-grid">
        {paths.map((path, idx) => (
          <div key={idx} className="path-card">
            <div className="icon-badge">
              {path.icon}
            </div>
            <span className="path-name">{path.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningPaths;


