import React from 'react';
import Layout from '../components/layout';
// import RoomImages from './roomImages';
import InstagramFeed from '../components/instagram/instagram-feed';
import BookNow from '../components/booknow';
import './global.css';
import styled from '@emotion/styled';

const PaddedP = styled('p')`
  padding: 0.25rem;
  margin: 1rem;
`;
const IndexPage = () => (
  <Layout page="index">
    <h1>Welcome to Canggu</h1>
    <PaddedP>
      Previously a sleepy little village, Canggu (the Gu) has evolved into “the
      Hipsters Paradise of Bali”. With all the trendy cafes, surf ready waves,
      yoga and crossfit centers, beach parties, there are plenty of things to do
      here. Fill your belly with delicious Western-Indonesian fusion food, have
      a sunset coconut on volcanic black sand beach, stroll the streets filled
      with street art, and feel the Canggu vibe.
    </PaddedP>
    {/* <RoomImages /> */}
    <BookNow />
    <InstagramFeed />
  </Layout>
);

export default IndexPage;
