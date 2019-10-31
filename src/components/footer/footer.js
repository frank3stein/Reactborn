import React from 'react';
import FooterImage from './footer-image';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

export const Footer = () => (
  <div
    css={css`
      width: 100%;
      background: #3cb4e9;
      bottom: 0;
      left: 0;
    `}
  >
    <Link to="/">
      <FooterImage />
    </Link>
  </div>
);
