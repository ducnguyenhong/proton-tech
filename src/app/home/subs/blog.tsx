'use client';
import ButtonPrimary from '@/components/button-primary';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import ImgNews from '../images/news.png';

const HomeBlog: React.FC = () => {
  const SERVICE_DATA = [
    {
      id: 'abcde',
      title: 'Lorem Ipsum is simply dummy text of the printing',
      url: '/blog/1',
      createdAt: '28/01/2023',
      thumbnail: ImgNews
    },
    {
      id: 'abcdf',
      title: 'Lorem Ipsum is simply dummy text of the printing',
      url: '/blog/2',
      createdAt: '28/01/2023',
      thumbnail: ImgNews
    },
    {
      id: 'abcdg',
      title: 'Lorem Ipsum is simply dummy text of the printing',
      url: '/blog/3',
      createdAt: '28/01/2023',
      thumbnail: ImgNews
    }
  ];

  return (
    <Flex alignItems="center" flexDirection="column" mt={80} px={60}>
      <Heading as="h4" fontSize={35} mt={3} color="red">
        Proton Blog
      </Heading>
      <Text mt={5} fontSize={20} color="text.2">
        Cập nhật các tin tức mới
      </Text>

      <Flex w="full" gap={14} mt={10}>
        {SERVICE_DATA.map((item) => {
          const { url, createdAt, thumbnail, id, title } = item;
          return (
            <Link href={url} key={id} style={{ display: 'block', width: '30%' }}>
              <Box w="full" h={60} bgColor="red" borderRadius={4} overflow="hidden" position="relative">
                <Box position="absolute" top={0} left={0} w="full" h="full" zIndex={1}>
                  <Image src={thumbnail} alt={title} />
                </Box>
                <Box
                  position="absolute"
                  bgColor="#000d1a"
                  opacity={0.55}
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  zIndex={2}
                />
                <Flex
                  position="absolute"
                  flexDirection="column"
                  justifyContent="space-between"
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  zIndex={3}
                  p={4}
                  color="#FFF"
                >
                  <Box>
                    <Text fontWeight={600}>{createdAt}</Text>
                    <Text fontWeight={700} mt={3} fontSize={20}>
                      {title}
                    </Text>
                  </Box>
                  <Box>share</Box>
                </Flex>
              </Box>
            </Link>
          );
        })}
      </Flex>

      <ButtonPrimary title="Xem thêm" mt={10} rightIcon={<FaChevronRight />} />
    </Flex>
  );
};

export default memo(HomeBlog);
