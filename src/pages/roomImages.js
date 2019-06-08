import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ImageCarousel from '../components/image-carousel';

const roomNames = ['Dorm', 'King', 'Garden', 'Shared', 'Patio'];
const roomsList = roomNames.map(room => <li key={room}>{room}</li>); // navigation list items
console.log(roomsList);
const RoomImages = () => {
  const data = useStaticQuery(graphql`
    query {
      dormImages: allFile(filter: { name: { regex: "/dorm[0-9]{2}/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
      gardenImages: allFile(filter: { name: { regex: "/garden[0-9]{2}/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      kingImages: allFile(filter: { name: { regex: "/king[0-9]{2}/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      queenImages: allFile(filter: { name: { regex: "/queen[0-9]{2}/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      sharedImages: allFile(filter: { name: { regex: "/shared[0-9]{2}/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      patioImages: allFile(filter: { name: { regex: "/patio[0-9]{2}/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const [room, setRoom] = useState(data.dormImages); //Default state is set here
  const whichRoom = event => {
    switch (event.target.innerText) {
      case 'Dorm':
        console.log(event.target.innerText, room);
        setRoom(data.dormImages);
        break;
      case 'King':
        setRoom(data.kingImages);
        console.log(event.target.innerText);
        break;
      case 'Garden':
        setRoom(data.gardenImages);
        console.log(event.target.innerText);
        break;
      case 'Shared':
        setRoom(data.sharedImages);
        console.log(event.target.innerText);
        break;
      case 'Patio':
        setRoom(data.patioImages);
        console.log(event.target.innerText);
        break;
      default:
        console.log('Does not work, try again.');
    }
  };
  return (
    <div>
      <ul onClick={whichRoom}>{roomsList}</ul>
      <p>Room Images</p>
      <ImageCarousel images={room} />
    </div>
  );
};

export default RoomImages;
