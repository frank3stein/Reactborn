import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const BookingPage = () => (
  <Layout>
    <h1>Booking</h1>
    <div
      style={{
        display: 'flex',
        alignItems: 'strech',
      }}
    >
      <iframe
        title="Booking"
        src="https://myallocator.com/booknow/sG2YDi-EJX0hkcHZmwL3VA"
        style={{
          flexGrow: '1',
          width: '410px',
          height: '520px',
          border: 'none',
        }}
        frameBorder="0"
        allowtransparency="true"
      />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default BookingPage;
