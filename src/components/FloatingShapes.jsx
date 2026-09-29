import React from 'react';

export const ShapeCone = ({ className }) => (
  <svg className={className} width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.15))' }}>
    <path d="M50 0L100 90H0L50 0Z" fill="url(#coneGrad1)"/>
    <path d="M100 90C100 105 50 120 0 90L50 0L100 90Z" fill="url(#coneGrad2)"/>
    <defs>
      <linearGradient id="coneGrad1" x1="0" y1="0" x2="100" y2="90">
        <stop stopColor="#ffffff"/>
        <stop offset="1" stopColor="#e2e8f0"/>
      </linearGradient>
      <linearGradient id="coneGrad2" x1="100" y1="90" x2="0" y2="120">
        <stop stopColor="#f8fafc"/>
        <stop offset="1" stopColor="#cbd5e1"/>
      </linearGradient>
    </defs>
  </svg>
);

export const ShapeDonut = ({ className, color = 'white' }) => {
  const stop1 = color === 'green' ? '#ecff80' : '#ffffff';
  const stop2 = color === 'green' ? '#bceb00' : '#e2e8f0';
  return (
    <svg className={className} width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.15))' }}>
      <circle cx="60" cy="60" r="40" stroke="url(#donutGrad)" strokeWidth="35"/>
      <defs>
        <linearGradient id="donutGrad" x1="0" y1="0" x2="120" y2="120">
          <stop stopColor={stop1}/>
          <stop offset="1" stopColor={stop2}/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ShapeCylinder = ({ className, color = 'white' }) => {
  const fill1 = color === 'green' ? '#d9f95d' : '#f8fafc';
  const fill2 = color === 'green' ? '#bceb00' : '#e2e8f0';
  return (
    <svg className={className} width="100" height="140" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.15))' }}>
      <ellipse cx="50" cy="25" rx="50" ry="25" fill={fill1}/>
      <path d="M0 25V115C0 128.8 22.4 140 50 140C77.6 140 100 128.8 100 115V25C100 38.8 77.6 50 50 50C22.4 50 0 38.8 0 25Z" fill={fill2}/>
    </svg>
  );
};

export const ShapeSpring = ({ className, color = 'white' }) => {
  const fill = color === 'green' ? '#d9f95d' : '#ffffff';
  return (
    <svg className={className} width="140" height="180" viewBox="0 0 140 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.15))' }}>
      <path d="M30 20C70 -10 120 10 130 50C140 90 90 110 50 90C10 70 -10 120 20 150C50 180 110 190 130 150" stroke={fill} strokeWidth="35" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
