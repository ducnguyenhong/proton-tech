'use client';
import { NextPage } from 'next';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeBlog from './subs/blog';
import HomeIntro from './subs/intro';
import HomeService from './subs/service';
import HomeStudio from './subs/studio';
import HomeTech from './subs/technology';

const Home: NextPage = () => {
  return (
    <div>
      <HomeIntro />
      <HomeTech />
      <HomeService />
      <HomeStudio />
      <HomeBlog />
    </div>
  );
};

export default Home;
