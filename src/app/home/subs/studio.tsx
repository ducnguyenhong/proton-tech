'use client';
import ButtonPrimary from '@/components/button-primary';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
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
    <Flex flexDirection="column" mt={60} px={80}>
      <Flex mt={16} w="full" gap={16}>
        <Box w="45%">
          <Heading as="h4" fontSize={35} mt={3} color="red">
            Proton Studio
          </Heading>
          <Text mt={5} fontSize={20} color="text.2">
            Chỉ là một studio nhỏ lưu trữ các video thú vị
            <br />
            PR Studio hiện đang có mặt trên đa nền tảng
          </Text>

          <Flex justify="space-between" w="full" mt={10} pr={20}>
            {SOCIAL_DATA.map((item) => {
              const { title, url, image } = item;
              return (
                <Link href={url} key={title} target="_blank" rel="noopener noreferrer">
                  <Flex w={20} h={20}>
                    <Image src={image} alt={title} />
                  </Flex>
                </Link>
              );
            })}
          </Flex>

          <ButtonPrimary title="Xem chi tiết" mt={16} />
        </Box>

        <Flex w="55%" flexWrap="wrap" columnGap={10} direction="column" align="center" pl={40}>
          <Image src={ImgIntro} alt="img" width={600} height={580} quality={100} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(HomeStudio);
