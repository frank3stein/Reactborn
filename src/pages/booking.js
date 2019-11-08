import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';

const BookingPage = () => (
  <Layout>
    <h1>Booking</h1>
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
      `}
    >
      <iframe
        title="Booking"
        src="https://myallocator.com/booknow/sG2YDi-EJX0hkcHZmwL3VA"
        css={css`
          width: 410px;
          height: 520px;
        `}
        frameBorder="0"
        allowtransparency="true"
      />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default BookingPage;
