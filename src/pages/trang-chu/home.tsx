'use client';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeCustomer from './subs/customer';
import HomeIntro from './subs/intro';
import HomeNews from './subs/news';
import HomeReason from './subs/reason';
import HomeService from './subs/service';
import ServiceWebsite from './subs/website';

const Home: NextPage = () => {
  return (
    <Box>
      <HomeIntro />
      <HomeCustomer />
      <HomeService />
      <ServiceWebsite />
      <HomeReason />
      <HomeNews />
    </Box>
  );
};

export default Home;
