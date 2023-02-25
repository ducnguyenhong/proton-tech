'use client';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeBlog from './subs/blog';
import HomeIntro from './subs/intro';
import HomeService from './subs/service';
import HomeStudio from './subs/studio';
import HomeTech from './subs/technology';

const Home: NextPage = () => {
  return (
    <Box mt="-80px">
      <HomeIntro />
      <HomeTech />
      <HomeService />
      <HomeStudio />
      <HomeBlog />
    </Box>
  );
};

export default Home;
