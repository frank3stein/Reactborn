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
      Book now
    </Link>
  );
}

export default BookNow;
