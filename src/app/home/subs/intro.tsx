'use client';
import ButtonPrimary from '@/components/button-primary';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { memo } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaArrowRight } from 'react-icons/fa';
import ReactTyped from 'react-typed';
import BgHome from '../images/background-home.png';

const HomeIntro: React.FC = () => {
  return (
    <Flex gap={32} py={20} px={60} bgImage={`url(${BgHome.src})`} bgSize="contain" bgRepeat="no-repeat" h="900px">
      <Flex py={40} direction="column" zIndex={10} w="37%" gap={16}>
        <Heading
          as="h2"
          fontWeight={700}
          fontSize={54}
          color="#FFF"
          lineHeight={{ xs: '55px', '2xl': '60px' }}
          letterSpacing={1}
        >
          Proton <ReactTyped strings={['Tech ', 'Service ', 'Studio ', 'Blog ']} typeSpeed={150} backSpeed={150} loop />
        </Heading>

        <Text fontWeight={500} fontSize={26} color="#FFF" textAlign="justify">
          Khám phá các công nghệ mới, trải nghiệm các dịch vụ tiện ích và cập nhật tin tức nhanh chóng
        </Text>

        <ButtonPrimary title="Khám phá ngay" rightIcon={<FaArrowRight />} />
      </Flex>
    </Flex>
  );
};

export default memo(HomeIntro);
