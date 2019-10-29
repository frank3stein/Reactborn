import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Footer } from './footer/footer';
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
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Waterborn Bali' },
              { name: 'keywords', content: 'Surfing, Bali, hostel, Surf Camp' },
            ]}
          />
          {index === true ? (
            <>
              <Header siteTitle={data.site.siteMetadata.title} />
              <BackgroundImage />
            </>
          ) : (
            <Header siteTitle={data.site.siteMetadata.title} />
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
          <Footer />
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
