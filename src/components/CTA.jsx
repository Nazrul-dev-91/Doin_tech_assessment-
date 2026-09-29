import React from 'react';
import './CTA.css';

const CTA = ({ onJoinCreator }) => {
  return (
    <section className="cta-section blue-grid-bg">
      {/* Floating 3D Shapes */}
      <img src="/assets/3d-helix-white.png" alt="3D Helix" className="cta-shape shape-top-left float-anim" />
      <img src="/assets/3d-cylinder.png" alt="3D Cylinder" className="cta-shape shape-top-right float-anim-reverse" />
      <img src="/assets/3d-torus.png" alt="3D Torus" className="cta-shape shape-bottom-left float-anim" />
      <img src="/assets/3d-pyramid.png" alt="3D Pyramid" className="cta-shape shape-bottom-right float-anim-reverse" />

      <div className="container cta-container">
        <h2 className="cta-title">
          Unlock Your Potential as a<br />
          Creator with ByteSpace
        </h2>
        <p className="cta-desc">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <button className="btn-primary cta-btn" onClick={() => onJoinCreator && onJoinCreator('signup')}>
          Join as Creator
        </button>
      </div>
    </section>
  );
};

export default CTA;

