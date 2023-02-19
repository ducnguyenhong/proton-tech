'use client';
import { ButtonGradient } from '@/components';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { memo } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaArrowRight } from 'react-icons/fa';
import ReactTyped from 'react-typed';
import BgHome from '../images/background-home.png';

const HomeIntro: React.FC = () => {
  return (
    <Flex
      py={20}
      px={{ xs: 5, lg: 60 }}
      bgImage={`url(${BgHome.src})`}
      bgSize="contain"
      bgRepeat="no-repeat"
      h={{ xs: '300px', lg: '900px' }}
    >
      <Flex py={{ xs: 10, lg: 40 }} direction="column" zIndex={10} w={{ xs: '100%', lg: '37%' }} gap={16}>
        <Heading
          as="h2"
          fontWeight={700}
          fontSize={{ xs: 25, lg: 54 }}
          color="#FFF"
          lineHeight={{ xs: '55px', '2xl': '60px' }}
          letterSpacing={1}
        >
          Proton <ReactTyped strings={['Tech ', 'Service ', 'Studio ', 'Blog ']} typeSpeed={150} backSpeed={150} loop />
        </Heading>

        <Text fontWeight={500} fontSize={{ xs: 20, lg: 26 }} color="#FFF" textAlign="justify">
          Khám phá các công nghệ mới, trải nghiệm các dịch vụ tiện ích và cập nhật tin tức nhanh chóng
        </Text>

        <ButtonGradient title="Khám phá ngay" rightIcon={<FaArrowRight />} />
      </Flex>
    </Flex>
  );
};

export default memo(HomeIntro);
