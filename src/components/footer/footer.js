import React from 'react';
import FooterImage from './footer-image';
import { css } from '@emotion/core';

export const Footer = () => (
  <div
    css={css`
      width: 100%;
      position: relative;
      background: #3cb4e9;
      bottom: 0;
    `}
  >
    <FooterImage />
  </div>
);
