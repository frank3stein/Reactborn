import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

function BookNow() {
  return (
    <Link
      to="/booking"
      style={{
        display: 'block',
      }}
    >
      <button
        css={css`
          margin-bottom: 1rem;
        `}
      >
        Book now
      </button>
    </Link>
  );
}

export default BookNow;
