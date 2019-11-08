import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const backgroundImage = ({ className }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: allFile(filter: { name: { eq: "waterborn-bali-garden" } }) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100, maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  const imageData = image.edges[0].node.childImageSharp.fluid;
  return (
    <BackgroundImage
      tag="main"
      className={className}
      backgroundColor="var(--mainColor)"
      style={{
        position: 'relative',
        backgroundSize: 'cover',
        height: '100vh',
      }}
      fluid={imageData}
    ></BackgroundImage>
  );
};

export default backgroundImage;
