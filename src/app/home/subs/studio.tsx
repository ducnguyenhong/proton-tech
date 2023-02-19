'use client';
import { ButtonGradient, Image, Section } from '@/components';
import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import LogoFacebook from '../images/facebook-studio.png';
import LogoInstagram from '../images/instagram-studio.png';
import ImgIntro from '../images/intro-studio.png';
import LogoTiktok from '../images/tiktok-studio.png';
import LogoYoutube from '../images/youtube-studio.png';

const HomeStudio: React.FC = () => {
  const SOCIAL_DATA = [
    {
      url: 'https://www.facebook.com/prstudiovn',
      image: LogoFacebook,
      title: 'Facebook'
    },
    {
      url: 'https://www.youtube.com/channel/UCLO94_1jrZLbzLJdsxsjrGA',
      image: LogoYoutube,
      title: 'Youtube'
    },
    {
      url: 'https://www.tiktok.com/@protonstudio',
      image: LogoTiktok,
      title: 'Tiktok'
    },
    {
      url: 'https://www.instagram.com/protonstudiovn',
      image: LogoInstagram,
      title: 'Instagram'
    }
  ];

  return (
    <Flex flexDirection="column" mt={{ xs: 10, lg: 60 }} px={{ xs: 5, lg: 80 }}>
      <Flex mt={16} w="full" gap={16}>
        <Box w={{ xs: '100%', lg: '45%' }}>
          <Section title="Proton Studio" />
          <Text mt={8} fontSize={20} color="text.2">
            Là một studio nhỏ lưu trữ các video thú vị
            <br />
            PR Studio hiện đang có mặt trên đa nền tảng
          </Text>

          <Flex justify="space-between" w="full" pr={20} mt={12}>
            {SOCIAL_DATA.map((item) => {
              const { title, url, image } = item;
              return (
                <Link href={url} key={title} target="_blank" rel="noopener noreferrer">
                  <Flex w={20} h={20} _hover={{ transform: 'scale(1.1)' }} transitionDuration="300ms">
                    <Image w={20} h={20} src={image} alt={title} />
                  </Flex>
                </Link>
              );
            })}
          </Flex>

          <ButtonGradient title="Xem chi tiết" mt={16} />
        </Box>

        <Flex
          w="55%"
          display={{ xs: 'none', lg: 'flex' }}
          flexWrap="wrap"
          columnGap={10}
          direction="column"
          align="center"
          pl={40}
        >
          <Image src={ImgIntro} alt="img" w="480px" h="450px" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(HomeStudio);
