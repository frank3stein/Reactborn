import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Footer } from './footer/footer';

import Header from './header/header';
import './layout.css';
import './variables.css';

const Layout = ({ children }) => (
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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            textAlign: 'center',
          }}
        >
          {children}
        </div>

        {/* <div
          style={{
            position: 'fixed',
            zIndex: '-99',
            width: '100%',
            height: '100%',
          }}
        > */}
        {/* <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Max2ZTj9Rqc"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Canggu Background Video"
        /> */}
        {/* </div> */}
        <Footer
          style={{
            bottom: '0',
          }}
        />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
