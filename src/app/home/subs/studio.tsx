'use client';
import ButtonPrimary from '@/components/button-primary';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

const HomeStudio: React.FC = () => {
  const SOCIAL_DATA = [
    {
      url: 'https://www.facebook.com/prstudiovn',
      image: '',
      title: 'Facebook'
    },
    {
      url: 'https://www.youtube.com/channel/UCLO94_1jrZLbzLJdsxsjrGA',
      image: '',
      title: 'Youtube'
    },
    {
      url: 'https://www.tiktok.com/@protonstudio',
      image: '',
      title: 'Tiktok'
    },
    {
      url: 'https://www.instagram.com/protonstudiovn',
      image: '',
      title: 'Instagram'
    }
  ];

  return (
    <Flex flexDirection="column" mt={60} px={60}>
      <Flex mt={16} w="full" gap={16}>
        <Box w="45%">
          <Heading as="h4" fontSize={35} mt={3} color="#FAFBFB">
            Proton Studio
          </Heading>
          <Text mt={5} fontSize={20} color="text.2">
            Proton Studio hiện đang có mặt trên đa nền tảng
          </Text>

          <Flex justify="space-between" w="full" gap={10} mt={20}>
            {SOCIAL_DATA.map((item) => {
              const { title, url, image } = item;
              return (
                <Link href={url} key={title} target="_blank" rel="noopener noreferrer">
                  <Flex w={20} h={20} border="1px solid #CCC">
                    <Image src={image} alt={title} />
                  </Flex>
                </Link>
              );
            })}
          </Flex>

          <ButtonPrimary title="Xem chi tiết" mt={16} />
        </Box>

        <Flex w="55%" flexWrap="wrap" columnGap={10} direction="column" align="center">
          <Image
            src="https://img.freepik.com/free-vector/dark-themed-mobile-phone-surrounded-by-apps_52683-23826.jpg?w=826&t=st=1675682713~exp=1675683313~hmac=44353ccd21a0c817d3fa4f6d3f71c6cdd2c184515c05a5efef0d083dbb9bd9c1"
            alt="img"
            width={500}
            height={700}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(HomeStudio);
