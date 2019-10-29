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

    <h1>WaterBorn Bali</h1>
    <p>
      Located in the heart of the most famous area of Canggu - Batu Bolong, our
      hostel is 15 minutes away from the beach by foot. Our villa has
      accommodation types for every traveler: a 5-bed dorm (with single beds -
      no bunks), semi-private rooms, and full privates. All rooms have AC, high
      quality mattresses, hot water, and a delicious breakfast is served every
      morning. We are ready to help with anything you need, from motorbike
      rentals, to arranging surf lessons.
    </p>

    <h1>Our pets</h1>
    <p>
      Bulan: The princess, the sassy, very first of our pets, Bulan was found in
      a dumpster and brought to hostel by our guests. The rest is history...
      Basically she is “the boss” of the hostel.
      <br />
      <br />
      Loco: This big (for an Indonesian cat) dude has appeared one day, and
      never left. Once a very scared cat, now Loco won’t miss the chance to
      sleep on an empty lap by the pool.
      <br />
      <br />
      Carlos: Our handsome Carlos’ favorite thing is having belly rubs. As the
      friendliest, and most attention seeking pet of our hostel, he is adored by
      every guest.
      <br />
      <br />
      Surya: Our only dog, she was adopted from the local shelter. This Balinese
      beauty is usually found not inside, but around the hostel, playing in the
      street and hanging out with neighbourhood dogs.
    </p>
    {/* <RoomImages /> */}
    <BookNow />
    <InstagramFeed />
  </Layout>
);

export default IndexPage;
