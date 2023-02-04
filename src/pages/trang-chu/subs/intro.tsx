'use client';
import ButtonPrimary from '@/app/components/button-primary';
import { Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaArrowRight } from 'react-icons/fa';
import LogoIntro from '../images/logo-intro.png';

const HomeIntro: React.FC = () => {
  return (
    <Flex alignItems="center">
      <Flex w="50%" p={20} py={60} direction="column" alignItems="center">
        <Heading
          as="h1"
          fontWeight={700}
          textTransform="uppercase"
          fontSize={54}
          color="#FFF"
          lineHeight={{ xs: '55px', '2xl': '60px' }}
          letterSpacing={1}
        >
          Proton Tech
        </Heading>

        <Heading as="h3" mt={16} fontSize={24} textAlign="justify" fontWeight={500} lineHeight="24px" color="#909EC6">
          Siêu tiện ích công nghệ
        </Heading>

        <ButtonPrimary title="Khám phá ngay" rightIcon={<FaArrowRight />} mt={16} />
      </Flex>

      <Flex w="50%" align="center" justify="center" pr={32}>
        <Image src={LogoIntro} alt="logo intro proton tech" width={800} height={600} />
      </Flex>
    </Flex>
  );
};

export default memo(HomeIntro);
