import React from 'react';
import { Link } from 'gatsby';
import MenuItems from './menu';

const Header = ({ siteTitle }) => (
  <div
    style={{
      width: '100%',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.45rem 1.0875rem',
      textAlign: 'center',
      background: '#3cb4e9',
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
    <MenuItems />
  </div>
);

export default Header;
