import React from 'react';
import './LearningPaths.css';

const DesignIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="1.8" fill="#0F172A" />
  </svg>
);

const DevelopmentIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="3.5" strokeWidth="2.8" />
    <path d="M9 9.5L7 12l2 2.5" />
    <path d="M15 9.5l2 2.5-2 2.5" />
  </svg>
);

const ITIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="12" rx="2" strokeWidth="2.6" />
    <path d="M1 20h22" strokeWidth="3" />
  </svg>
);

const BusinessIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v15" />
    <path d="M13 21V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10" />
    <rect x="7" y="7" width="1.8" height="1.8" fill="#0F172A" />
    <rect x="10" y="7" width="1.8" height="1.8" fill="#0F172A" />
    <rect x="7" y="11" width="1.8" height="1.8" fill="#0F172A" />
    <rect x="10" y="11" width="1.8" height="1.8" fill="#0F172A" />
    <rect x="7" y="15" width="1.8" height="1.8" fill="#0F172A" />
    <rect x="10" y="15" width="1.8" height="1.8" fill="#0F172A" />
    <rect x="15" y="12" width="1.8" height="1.8" fill="#0F172A" />
    <rect x="18" y="12" width="1.8" height="1.8" fill="#0F172A" />
    <rect x="15" y="16" width="1.8" height="1.8" fill="#0F172A" />
    <rect x="18" y="16" width="1.8" height="1.8" fill="#0F172A" />
  </svg>
);

const MarketingIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5.5" cy="5.5" r="2.5" fill="#0F172A" />
    <path d="M2.5 13c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeWidth="2.6" />
    <path d="M11 6.5a5.5 5.5 0 0 1 5.5 5.5" strokeWidth="2.8" />
    <path d="M14 9.5a2.8 2.8 0 0 1 2.8 2.8" strokeWidth="2.8" />
    <circle cx="18.5" cy="18.5" r="2.5" fill="#0F172A" />
    <path d="M15.5 24c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeWidth="2.6" />
  </svg>
);

const PhotographyIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="3.5" strokeWidth="2.6" />
    <circle cx="12" cy="13" r="1.5" fill="#0F172A" />
  </svg>
);

const LearningPaths = () => {
  const paths = [
    { name: 'Design', icon: <DesignIcon /> },
    { name: 'Development', icon: <DevelopmentIcon /> },
    { name: 'IT & Software', icon: <ITIcon /> },
    { name: 'Business', icon: <BusinessIcon /> },
    { name: 'Marketing', icon: <MarketingIcon /> },
    { name: 'Photography', icon: <PhotographyIcon /> },
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




