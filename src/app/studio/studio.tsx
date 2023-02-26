'use client';
import { Image } from '@/components';
import { useScrollTop } from '@/utils/hooks';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

const Studio: NextPage = () => {
  const STUDIO_DATA = [
    {
      title: 'Facebook',
      image: '/images/social/facebook.png',
      url: 'facebook'
    },
    {
      title: 'Instagram',
      image: '/images/social/instagram.png',
      url: 'instagram'
    },
    {
      title: 'Twitter',
      image: '/images/social/twitter.png',
      url: 'twitter'
    },
    {
      title: 'Youtube',
      image: '/images/social/youtube.png',
      url: 'youtube'
    },
    {
      title: 'Tiktok',
      image: '/images/social/tiktok.png',
      url: 'tiktok'
    },
    {
      title: 'Skype',
      image: '/images/social/skype.png',
      url: 'skype'
    },
    {
      title: 'Pinterest',
      image: '/images/social/pinterest.png',
      url: 'pinterest'
    },
    {
      title: 'Linkedin',
      image: '/images/social/linkedin.png',
      url: 'linkedin'
    }
  ];

  useScrollTop();

  return (
    <Box px={80} mt={40}>
      <Text fontSize={30} fontWeight={600} textAlign="center" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
        Proton Studio
      </Text>
      <Flex justify="space-between" mt={20} flexWrap="wrap" rowGap={28}>
        {STUDIO_DATA.map((item) => {
          const { title, image, url } = item;
          return (
            <Box key={url} w="22%" h={40} title={title}>
              <Link href={url} display="block" target="_blank" rel="noopener noreferrer">
                <Flex w="full" direction="column" borderRadius={30} align="center" h="full" p={5}>
                  <Image src={image} w={40} h={40} alt={title} />
                </Flex>
              </Link>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Studio;
