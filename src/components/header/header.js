import React from 'react';
import { Link } from 'gatsby';
import MenuItems from '../menu';

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: 'flex',
      background: '#3cb4e9',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        // maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#fec5aa',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <MenuItems />
  </div>
);

export default Header;
