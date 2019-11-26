import React from 'react';
import Layout from '../components/layout';
import styled from '@emotion/styled';

const PaddedP = styled('p')`
  padding: 0.25rem;
  margin: 1rem;
`;

const About = () => (
  <Layout>
    <PaddedP style={{ marginTop: '1rem' }}>
      Located in the heart of the most famous area of Canggu - Batu Bolong, our
      hostel is 15 minutes away from the beach by foot. Our villa has
      accommodation types for every traveler: a 5-bed dorm (with single beds -
      no bunks), semi-private rooms, and full privates. All rooms have AC, high
      quality mattresses, hot water, and a delicious breakfast is served every
      morning. We are ready to help with anything you need, from motorbike
      rentals, to arranging surf lessons.
    </PaddedP>

    <h1>Our pets</h1>
    <PaddedP>
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
      Casper: Our handsome Carlos’ favorite thing is having belly rubs. As the
      friendliest, and most attention seeking pet of our hostel, he is adored by
      every guest.
      <br />
      <br />
      Surya: Our only dog, she was adopted from the local shelter. This Balinese
      beauty is usually found not inside, but around the hostel, playing in the
      street and hanging out with neighbourhood dogs.
    </PaddedP>
  </Layout>
);

export default About;
