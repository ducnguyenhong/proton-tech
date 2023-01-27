'use client';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaArrowRight } from 'react-icons/fa';
import { useWindowSize } from 'usehooks-ts';

const HomeIntro: React.FC = () => {
  const { width } = useWindowSize();

  const arrImageIntro = ['/images/img-intro-1.png'];

  const arrIntro = arrImageIntro.map((item) => (
    <Image key={item} src={item} width={width / 2} height={600} alt="banner" />
  ));

  return (
    <Flex alignItems="center">
      <Box w="50%" p={32} pr={10}>
        <Heading
          as="h3"
          textTransform="uppercase"
          fontWeight={600}
          fontSize={45}
          color="#359763"
          lineHeight={{ xs: '55px', '2xl': '60px' }}
        >
          Thiết kế website, mobile app <br /> nhanh chóng, tiện ích <br /> và chuyên nghiệp
        </Heading>

        <Heading as="h5" mt={10} fontSize={16} textAlign="justify" fontWeight={500} lineHeight="24px">
          Ăn uống hợp khoa học dinh dưỡng ngoài giúp chúng ta thỏa mãn nhu cầu đầu tiên của “tứ khoái”, mà còn đảm bảo
          năng lượng, sức khỏe để có cuộc sống vui tươi, tích cực.
        </Heading>

        <Button
          colorScheme="purple"
          h="48px"
          w={48}
          borderRadius="full"
          mt={12}
          fontWeight={700}
          fontSize={16}
          alignItems="center"
        >
          <Text as="span" mr={3} mt={-0.5}>
            Khám phá ngay
          </Text>
          <FaArrowRight />
        </Button>
      </Box>
      <Flex w="50%" p={28} pl={10}>
        <AliceCarousel
          items={arrIntro}
          animationType="fadeout"
          autoPlay
          infinite
          autoPlayInterval={4000}
          disableButtonsControls
          disableDotsControls
          animationDuration={500}
        />
      </Flex>
    </Flex>
  );
};

export default memo(HomeIntro);
