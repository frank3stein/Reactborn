import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Logo } from './logo-image/logo';
import Header from './header/header';
import './variables.css';
import BackgroundImage from './backgroundImage';
import { css } from '@emotion/core';

const Layout = ({ children, index }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              instagram
              facebook
              twitter
            }
          }
        }
      `}
      render={data => (
        <section
          css={css`
            position: relative;
            height: 100%;
            height: 100vh;
            /* display: flex; */
            /* flex-wrap: wrap; */
            /* flex-direction: column; */
            /* justify-content: space-around; */
          `}
        >
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Waterborn Bali' },
              { name: 'keywords', content: 'Surfing, Bali, hostel, Surf Camp' },
            ]}
          />
          {index === true ? (
            <>
              <Header
                siteTitle={data.site.siteMetadata.title}
                instagram={data.site.siteMetadata.instagram}
                facebook={data.site.siteMetadata.facebook}
                twitter={data.site.siteMetadata.twitter}
              />
              <BackgroundImage />
            </>
          ) : (
            <Header
              siteTitle={data.site.siteMetadata.title}
              instagram={data.site.siteMetadata.instagram}
              facebook={data.site.siteMetadata.facebook}
              twitter={data.site.siteMetadata.twitter}
            />
          )}
          <main
            css={css`
              text-align: center;
              padding: 1rem;
              max-width: 960px;
              margin: 0 auto;
            `}
          >
            {children}
          </main>
          <Logo />
        </section>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
