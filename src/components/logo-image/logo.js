import React from 'react';
import LogoImage from './logo-image';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

export const Logo = ({ alt }) => (
  <div
    css={css`
      /* position: fixed; */
      /* width: 100vw; */
      /* position: absolute; */

      background: #3cb4e9;
      /* bottom: 0; */
      /* left: 0; */
    `}
  >
    <Link to="/">
      <LogoImage alt={alt} />
    </Link>
  </div>
);
