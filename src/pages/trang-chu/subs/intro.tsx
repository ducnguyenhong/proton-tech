'use client';
import ButtonPrimary from '@/app/components/button-primary';
import { Flex, Heading } from '@chakra-ui/react';
import { memo } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaArrowRight } from 'react-icons/fa';

const HomeIntro: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      background="linear-gradient(90deg, rgba(36,8,66,1) 0%, rgba(17,6,41,1) 50%, rgba(14,6,37,1) 100%)"
    >
      <Flex w="full" p={32} py={60} direction="column" alignItems="center">
        <Heading
          as="h1"
          fontWeight={800}
          textTransform="uppercase"
          fontSize={54}
          color="#FFF"
          lineHeight={{ xs: '55px', '2xl': '60px' }}
          letterSpacing={1}
        >
          Proton Tech
        </Heading>

        <Heading as="h3" mt={10} fontSize={24} textAlign="justify" fontWeight={500} lineHeight="24px" color="#909EC6">
          Siêu tiện ích công nghệ
        </Heading>

        <ButtonPrimary title="Khám phá ngay" rightIcon={<FaArrowRight />} mt={12} />
      </Flex>
    </Flex>
  );
};

export default memo(HomeIntro);
