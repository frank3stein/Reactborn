import React from 'react';
import Layout from '../components/layout';
// import RoomImages from './roomImages';
import InstagramFeed from '../components/instagram/instagram-feed';
import BookNow from '../components/booknow';
import './global.css';

const IndexPage = () => (
  <Layout index={true}>
    <h1>Welcome to Canggu</h1>
    <p>
      Previously a sleepy little village, Canggu (the Gu) has evolved into “the
      Hipsters Paradise of Bali”. With all the trendy cafes, surf ready waves,
      yoga and crossfit centers, beach parties, there are plenty of things to do
      here. Fill your belly with delicious Western-Indonesian fusion food, have
      a sunset coconut on volcanic black sand beach, stroll the streets filled
      with street art, and feel the Canggu vibe.
    </p>
    {/* <RoomImages /> */}
    <BookNow />
    <InstagramFeed />
  </Layout>
);

export default IndexPage;
