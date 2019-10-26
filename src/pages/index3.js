import React from 'react';
import backgroundImage from '../comingSoon/bg.jpg';
// import '../comingSoon/workInProgress.css';

import Layout from '../components/layout';
import RoomImages from './roomImages';
import InstagramFeed from '../components/instagram/instagram-feed';
import BookNow from '../components/booknow';

const IndexPage = () => (
  <main
    style={{
      display: 'block',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      overflow: 'hidden',
      height: '100vh',
      width: '100vw',
    }}
  ></main>
);

export default IndexPage;
