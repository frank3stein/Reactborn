import React from 'react';
import { css } from '@emotion/core';

export const FormSent = () => (
  <section
    css={css`
      width: 4rem;
      height: 4rem;
      /* top: calc(50% - 2rem); */
      /* right: calc(50% - 2rem); */
      z-index: 100;
    `}
  >
    <p>Your form has successfully submitted !</p>
  </section>
);
