'use client';
import { NextPage } from 'next';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeCustomer from './subs/customer';
import HomeIntro from './subs/intro';
import HomeNews from './subs/news';
import HomeReason from './subs/reason';
import HomeService from './subs/service';

const Home: NextPage = () => {
  return (
    <div>
      <HomeIntro />
      <HomeCustomer />
      <HomeService />
      <HomeReason />
      <HomeNews />
    </div>
  );
};

export default Home;
