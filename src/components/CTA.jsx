import React from 'react';
import './CTA.css';

const CTA = ({ onJoinCreator }) => {
  return (
    <section className="cta-section blue-grid-bg">
      {/* Floating 3D Shapes matching Figma Frame */}
      {/* 1. Top Far Left: Lime Helix */}
      <img src="/assets/shape-white-helix-green_r.png" alt="Lime Helix" className="cta-shape shape-lime-helix-topleft float-anim" />

      {/* 2. Top Inner Left: White Helix */}
      <img src="/assets/shape-white-helix-real_r.png" alt="White Helix" className="cta-shape shape-white-helix-topleft float-anim-reverse" />

      {/* 3. Bottom Far Left: White Pyramid */}
      <img src="/assets/Cone _white.png" alt="White Pyramid" className="cta-shape shape-white-pyramid-botleft float-anim" />

      {/* 4. Bottom Inner Left: Lime Torus */}
      <img src="/assets/shape-green-cone-real.png" alt="Lime Torus" className="cta-shape shape-lime-torus-botleft float-anim-reverse" />

      {/* 5. Top Inner Right: Lime Pyramid */}
      <img src="/assets/Mask_Group _green.png" alt="Lime Pyramid" className="cta-shape shape-lime-pyramid-topright float-anim" />

      {/* 6. Top Far Right: White Cylinder */}
      <img src="/assets/Cylinder-white.png" alt="White Cylinder" className="cta-shape shape-white-cylinder-topright float-anim-reverse" />

      {/* 7. Bottom Far Right: Lime Helix */}
      <img src="/assets/shape-white-helix-green.png" alt="Lime Helix" className="cta-shape shape-lime-helix-botright float-anim" />

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

