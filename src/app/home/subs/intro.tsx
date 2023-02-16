'use client';
import { Flex } from '@chakra-ui/react';
import { memo } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import BgHome from '../images/background-home.png';

const HomeIntro: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap={32}
      py={20}
      px={60}
      bgImage={`url(${BgHome.src})`}
      bgSize="contain"
      bgRepeat="no-repeat"
      h="900px"
    >
      {/* <Flex w="50%" py={60} direction="column" align="flex-end" zIndex={10}>
        <Heading
          as="h2"
          fontWeight={700}
          fontSize={54}
          color="#FFF"
          lineHeight={{ xs: '55px', '2xl': '60px' }}
          letterSpacing={1}
        >
          Proton <Typed strings={['Tech ', 'Studio ', 'Blog ']} typeSpeed={150} backSpeed={150} loop />
        </Heading>

        <ButtonPrimary title="Khám phá ngay" rightIcon={<FaArrowRight />} mt={16} />
      </Flex>

      <Flex w="50%" align="center" justify="flex-start" pr={32} zIndex={10}>
        <Image src={LogoIntro} alt="logo intro proton tech" width={250} height={400} />
      </Flex> */}
    </Flex>
  );
};

export default memo(HomeIntro);
