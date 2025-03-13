import React from 'react';

const Logo = () => {
  const logos = [
    { src: "/images/ibeauty logo.png", label: "iBeauty" },
    { src: "/images/holding1.png", label: "Inspire Holding" },
    // { src: "/logo3.png", label: "Brand 3" }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', padding: '20px' }}>
      {logos.map((logo, index) => (
        <div key={index} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={logo.src} alt={logo.label} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
          <p style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500', color: '#333' }}>{logo.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Logo;
