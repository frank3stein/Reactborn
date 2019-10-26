import React from 'react';
import { Link } from 'gatsby';

function BookNow() {
  return (
    <Link
      to="/booking"
      style={{
        display: 'block',
      }}
    >
      <button>Book now</button>
    </Link>
  );
}

export default BookNow;
