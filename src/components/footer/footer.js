import React from 'react';
import FooterImage from './footer-image';

export const Footer = () => (
  <div
    style={{
      display: 'flex',
      background: '#3cb4e9',
      justifyContent: 'space-around',
    }}
  >
    <div
      style={{
        flex: 'auto',
        maxWidth: '200px',
      }}
    >
      <FooterImage />
    </div>
  </div>
);
