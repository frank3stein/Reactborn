import React from 'react';
import { Link } from 'gatsby';
import MenuItems from './menu';
import { css } from '@emotion/core';
import Facebook from '../../images/social-icons/facebook.svg';
import Instagram from '../../images/social-icons/instagram.svg';
// import Twitter from '../../images/social-icons/twitter.svg';
// import styled from '@emotion/styled';
// import InstagramLogo from '../../images/social-icons/instagram-logo.png';

// const socialLi = styled('li')`
//   min-width: 44px;
//   min-height: 44px;
//   & svg {
//     min-width: 44px;
//     min-height: 44px;
//   }
// `;
const Header = ({ siteTitle, instagram, facebook, twitter }) => (
  <div
    css={css`
      position: relative;
      width: 100%;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;
      text-align: center;
      background: #3cb4e9;
    `}
  >
    <nav
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        & a {
          color: inherit; /* blue colors for links too */
          text-decoration: inherit; /* no underline */
        }
        & svg {
          padding: 0.5rem;
          width: 2rem;
          fill: white;
        }
      `}
    >
      <a href={instagram} target="_blank">
        {/* <img
          src={InstagramLogo}
          alt=""
          css={css`
            width: 2rem;
            margin: 0 1rem;
            border-radius: 50%;
            &:hover {
              background-color: #e4405f;
            }
          `}
        /> */}
        <Instagram
          css={css`
            &:hover {
              background-color: #e4405f;
            }
          `}
        />
      </a>

      <a href={facebook} target="_blank">
        <Facebook
          css={css`
            &:hover {
              background-color: #4172b8;
            }
          `}
        />
      </a>

      {/* <a href={twitter} target="_blank">
        <Twitter
          css={css`
            &:hover {
              background-color: #1da1f2;
            }
          `}
        />
      </a> */}
    </nav>
    {/* <Instagram />

    <Facebook />

    <Twitter /> */}

    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        css={css`
          color: #fec5aa;
          text-decoration: none;
        `}
      >
        {siteTitle}
      </Link>
    </h1>
    <MenuItems />
  </div>
);

export default Header;
