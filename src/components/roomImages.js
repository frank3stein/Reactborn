import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ImageCarousel from './image-carousel';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const roomNames = ['Dorm', 'King', 'Queen', 'Garden', 'Shared', 'Patio'];
const RoomButton = styled('button')`
  min-height: 40px;
  min-width: 40px;
  &:hover {
    color: red;
  }
  &:active {
    color: yellow;
  }
`;
const roomsList = roomNames.map(room => (
  <RoomButton key={room}>{room}</RoomButton>
)); // navigation list items
console.log(roomsList);
const RoomImages = () => {
  const {
    dormImages,
    kingImages,
    gardenImages,
    queenImages,
    sharedImages,
    patioImages,
  } = useStaticQuery(graphql`
    query {
      dormImages: allFile(filter: { name: { regex: "/dorm[0-9]{2}/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      gardenImages: allFile(filter: { name: { regex: "/garden[0-9]{2}/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      kingImages: allFile(filter: { name: { regex: "/king[0-9]{2}/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      queenImages: allFile(filter: { name: { regex: "/queen[0-9]{2}/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      sharedImages: allFile(filter: { name: { regex: "/shared[0-9]{2}/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      patioImages: allFile(filter: { name: { regex: "/patio[0-9]{2}/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  const [room, setRoom] = useState(dormImages); //Default state is set here
  const whichRoom = event => {
    switch (event.target.innerText) {
      case 'Dorm':
        console.log(event.target.innerText, room);
        setRoom(dormImages);
        break;
      case 'King':
        setRoom(kingImages);
        console.log(event.target.innerText);
        break;
      case 'Queen':
        setRoom(queenImages);
        console.log(event.target.innerText);
        break;
      case 'Garden':
        setRoom(gardenImages);
        console.log(event.target.innerText);
        break;
      case 'Shared':
        setRoom(sharedImages);
        console.log(event.target.innerText);
        break;
      case 'Patio':
        setRoom(patioImages);
        console.log(event.target.innerText);
        break;
      default:
        console.log('Does not work, try again.');
    }
  };
  return (
    <>
      <ul onClick={whichRoom} css={css``}>
        {roomsList}
      </ul>
      <p>Room Images</p>
      <ImageCarousel images={room} />
    </>
  );
};

export default RoomImages;
