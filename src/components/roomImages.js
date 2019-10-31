import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ImageCarousel from './image-carousel';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const roomNames = ['King', 'Queen', 'Shared', 'Dorm', 'Patio', 'Garden'];
const RoomButton = styled('button')`
  /* Room buttons can be changed if wanted */
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
  const [roomName, setRoomName] = useState('Dorm');
  const whichRoom = event => {
    const innerText = event.target.innerText;
    switch (innerText) {
      case 'Dorm':
        console.log(innerText);
        setRoom(dormImages);
        setRoomName(innerText);
        break;
      case 'King':
        setRoom(kingImages);
        setRoomName(innerText);
        console.log(innerText);
        break;
      case 'Queen':
        setRoom(queenImages);
        setRoomName(innerText);
        console.log(innerText);
        break;
      case 'Garden':
        setRoom(gardenImages);
        setRoomName(innerText);
        console.log(innerText);
        break;
      case 'Shared':
        setRoom(sharedImages);
        setRoomName(innerText);
        console.log(innerText);
        break;
      case 'Patio':
        setRoom(patioImages);
        setRoomName(innerText);
        console.log(innerText);
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
      <ImageCarousel images={room} />
      <p
        css={css`
          text-align: center;
          font-size: 1.5rem;
          margin-top: 1rem;
        `}
      >
        {roomName === `Garden` ? roomName : roomName + ' room'}
      </p>
    </>
  );
};

export default RoomImages;
