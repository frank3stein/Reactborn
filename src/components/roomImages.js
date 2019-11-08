import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ImageCarousel from './image-carousel';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const roomNames = ['King', 'Queen', 'Shared', 'Dorm', 'Patio', 'Garden'];
const RoomButton = styled('button')`
  /* Room buttons can be changed if wanted */
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  margin-top: 1rem;
  margin-left: 0.2rem;
  text-decoration: none;
  /* background: #0069ed; */
  background: none;
  color: black;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &.clicked,
  &:hover,
  &:focus {
    /* background: #0053ba; */
    background: var(--secondaryColor-light);
  }

  &:focus {
    outline: 1px solid #fff;
    /* outline-offset: -4px; */
  }

  &:active {
    transform: scale(0.99);
  }
`;
const roomsList = roomNames.map(room => (
  <RoomButton key={room}>{room}</RoomButton>
)); // navigation list items
// console.log(roomsList);
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
  const [roomName, setRoomName] = useState('King');
  const unclickButtons = () => {
    document
      .querySelectorAll('button')
      .forEach(button => button.classList.remove('clicked'));
  };
  useEffect(() => {
    document.querySelector('button').classList.add('clicked');
  }, []);
  const whichRoom = event => {
    const innerText = event.target.innerText;
    unclickButtons();
    switch (innerText) {
      case 'Dorm':
        console.log(innerText);
        event.target.classList.add('clicked');
        setRoom(dormImages);
        setRoomName(innerText);
        break;
      case 'King':
        event.target.classList.add('clicked');
        setRoom(kingImages);
        setRoomName(innerText);
        console.log(innerText);
        break;
      case 'Queen':
        event.target.classList.add('clicked');
        setRoom(queenImages);
        setRoomName(innerText);
        console.log(innerText);
        break;
      case 'Garden':
        event.target.classList.add('clicked');
        setRoom(gardenImages);
        setRoomName(innerText);
        console.log(innerText);
        break;
      case 'Shared':
        event.target.classList.add('clicked');
        setRoom(sharedImages);
        setRoomName(innerText);
        console.log(innerText);
        break;
      case 'Patio':
        event.target.classList.add('clicked');
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
