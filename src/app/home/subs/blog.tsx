'use client';
import { Section } from '@/components';
import ButtonPrimary from '@/components/button-primary';
import { AspectRatio, Box, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa';
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
    },
    {
      id: 'abcdg',
      title: 'Lorem Ipsum is simply dummy text of the printing',
      url: '/blog/4',
      createdAt: '28/01/2023',
      thumbnail: ImgNews
    }
  ];

  return (
    <Flex alignItems="center" flexDirection="column" mt={80} px={80}>
      <Section title="Proton Blog" />
      <Text mt={5} fontSize={20} color="text.2">
        Cập nhật các tin tức mới
      </Text>

      <Flex w="full" justify="space-between" mt={14}>
        <Box w="48.5%">
          <Box w="full" boxShadow="base" overflow="hidden">
            <Link href="/">
              <AspectRatio ratio={16 / 9}>
                <Image src={SERVICE_DATA[0].thumbnail} alt={SERVICE_DATA[0].title} quality={100} borderRadius={3} />
              </AspectRatio>
            </Link>

            <Box p={5}>
              <Flex gap={2} align="center">
                {[1, 2, 3].map((item) => (
                  <Link href="/" key={item}>
                    <Text color="#FFF" fontSize={14} px={3} py={1} borderRadius={4} bgColor="#81D742">
                      Công nghệ
                    </Text>
                  </Link>
                ))}
              </Flex>

              <Link href="/">
                <Text fontWeight={700} mt={3} fontSize={24} noOfLines={2} lineHeight="32px">
                  {SERVICE_DATA[0].title}
                </Text>
              </Link>

              <Flex mt={2} gap={10}>
                <Flex align="center" gap={1.5}>
                  <Icon as={FaRegCalendarAlt} fontSize={13} color="#808080" />
                  <Text fontWeight={500} fontSize={14} mt="2px" color="#808080">
                    {SERVICE_DATA[0].createdAt}
                  </Text>
                </Flex>

                <Flex align="center" gap={1.5}>
                  <Icon as={FaUser} fontSize={13} color="#808080" />
                  <Text fontWeight={500} fontSize={14} mt="2px" color="#808080">
                    {SERVICE_DATA[0].createdAt}
                  </Text>
                </Flex>
              </Flex>

              <Text mt={3}>
                Vivamus vestibulum ut magna vitae facilisis. Maecenas laoreet lobortis tristique. Aenean accumsan
                malesuada convallis. Suspendisse egestas luctus nisl, sit amet
              </Text>
            </Box>
          </Box>
        </Box>

        <Flex w="48.5%" flexWrap="wrap" direction="column" justify="space-between" h="auto">
          {SERVICE_DATA.map((item) => {
            const { url, createdAt, thumbnail, id, title } = item;
            return (
              <Link href={url} key={id} style={{ display: 'block', width: '100%' }}>
                <Flex w="full" overflow="hidden" boxShadow="base">
                  <Link href="/">
                    <Box h={32} w={48}>
                      <Image src={thumbnail} alt={title} quality={100} borderRadius={3} />
                    </Box>
                  </Link>

                  <Box px={5} py={3}>
                    <Link href="/">
                      <Text fontWeight={700} fontSize={18} noOfLines={2} lineHeight="20px">
                        {title}
                      </Text>
                    </Link>

                    <Flex mt={2} gap={10}>
                      <Flex align="center" gap={1.5}>
                        <Icon as={FaRegCalendarAlt} fontSize={12} color="#808080" />
                        <Text fontWeight={500} fontSize={13} mt="2px" color="#808080">
                          {createdAt}
                        </Text>
                      </Flex>

                      <Flex align="center" gap={1.5}>
                        <Icon as={FaUser} fontSize={12} color="#808080" />
                        <Text fontWeight={500} fontSize={13} mt="2px" color="#808080">
                          {createdAt}
                        </Text>
                      </Flex>
                    </Flex>

                    <Flex gap={2} align="center" mt={2}>
                      {[1, 2, 3].map((item) => (
                        <Link href="/" key={item}>
                          <Text color="#FFF" fontSize={13} px={2} py={0.5} borderRadius={4} bgColor="#81D742">
                            Công nghệ
                          </Text>
                        </Link>
                      ))}
                    </Flex>
                  </Box>
                </Flex>
              </Link>
            );
          })}
        </Flex>
      </Flex>

      <ButtonPrimary title="Xem thêm" mt={16} />
    </Flex>
  );
};

export default memo(HomeBlog);
