import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function InstagramFeed() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allInstaNode {
            edges {
              node {
                id
                likes
                # comments
                # mediaType
                # preview
                # original
                # timestamp
                # caption
                localFile {
                  childImageSharp {
                    fixed(width: 150, height: 150) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
                # Only available with the public api scraper
                thumbnails {
                  src
                  config_width
                  config_height
                }
                dimensions {
                  height
                  width
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <article>
              {data.allInstaNode.edges.map((edge, index) => (
                <Img
                  fixed={edge.node.localFile.childImageSharp.fixed}
                  key={index}
                />
              ))}
            </article>
            <a href="https://www.instagram.com/waterbornbali/" target="_blank">
              See more at Instagram.
            </a>
          </div>
        </>
      )}
    />
  );
}

export default InstagramFeed;
