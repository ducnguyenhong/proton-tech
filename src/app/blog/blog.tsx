'use client';
import { Image } from '@/components';
import { useScrollTop } from '@/utils/hooks';
import { AspectRatio, Box, Flex, Icon, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa';
import BlogSection from './components/blog-section';
import ImgNews from './images/news.png';

const Blog: NextPage = () => {
  useScrollTop();

  return (
    <Box px={60} mt={40}>
      <Text fontSize={30} fontWeight={600} textAlign="center" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
        Proton Blog
      </Text>
      <Flex mt={20} gap={14}>
        <Flex flex={7 / 10} direction="column">
          <BlogSection title="Danh sách bài viết" color="#20B120" route="/blog/news" />
          <Flex direction="column" gap={10}>
            {[1, 2, 3, 4].map((item) => {
              return (
                <Flex key={item} w="full" overflow="hidden" boxShadow="base" h="250px">
                  <Link href="/" style={{ display: 'block', width: '40%', height: '100%' }}>
                    <Box h="full" w="full">
                      <Image w="full" src={ImgNews} alt="Lorem Ipsum is simply dummy text of the printing" />
                    </Box>
                  </Link>

                  <Box p={7} w="60%">
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
                        Lorem Ipsum is simply dummy text of the printing
                      </Text>
                    </Link>

                    <Flex mt={2} gap={10}>
                      <Flex align="center" gap={1.5}>
                        <Icon as={FaRegCalendarAlt} fontSize={13} color="#808080" />
                        <Text fontWeight={500} fontSize={14} mt="2px" color="#808080">
                          28/01/2023
                        </Text>
                      </Flex>

                      <Flex align="center" gap={1.5}>
                        <Icon as={FaUser} fontSize={13} color="#808080" />
                        <Text fontWeight={500} fontSize={14} mt="2px" color="#808080">
                          28/01/2023
                        </Text>
                      </Flex>
                    </Flex>

                    <Text mt={3} noOfLines={2}>
                      Vivamus vestibulum ut magna vitae facilisis. Maecenas laoreet lobortis tristique. Aenean accumsan
                      malesuada convallis. Suspendisse egestas luctus nisl, sit amet
                    </Text>
                  </Box>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
        <Flex flex={3 / 10} direction="column">
          <BlogSection title="Tin mới" color="#1295EF" route="/blog/newest" />
          <Flex direction="column" gap={8}>
            <Box w="full" boxShadow="base" overflow="hidden">
              <Link href="/">
                <AspectRatio ratio={16 / 9}>
                  <Image src={ImgNews} alt="Lorem Ipsum is simply dummy text of the printing" />
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
                    Lorem Ipsum is simply dummy text of the printing
                  </Text>
                </Link>

                <Flex mt={2} gap={10}>
                  <Flex align="center" gap={1.5}>
                    <Icon as={FaRegCalendarAlt} fontSize={13} color="#808080" />
                    <Text fontWeight={500} fontSize={14} mt="2px" color="#808080">
                      28/01/2023
                    </Text>
                  </Flex>

                  <Flex align="center" gap={1.5}>
                    <Icon as={FaUser} fontSize={13} color="#808080" />
                    <Text fontWeight={500} fontSize={14} mt="2px" color="#808080">
                      28/01/2023
                    </Text>
                  </Flex>
                </Flex>

                <Text mt={3} noOfLines={2}>
                  Vivamus vestibulum ut magna vitae facilisis. Maecenas laoreet lobortis tristique. Aenean accumsan
                  malesuada convallis. Suspendisse egestas luctus nisl, sit amet
                </Text>
              </Box>
            </Box>

            <Flex direction="column" gap={6}>
              {[1, 2, 3].map((item) => {
                return (
                  <Flex key={item} w="full" overflow="hidden" boxShadow="base" h="110px">
                    <Link href="/" style={{ display: 'block', width: '40%', height: '100%' }}>
                      <Box h="full" w="full">
                        <Image w="full" src={ImgNews} alt="Lorem Ipsum is simply dummy text of the printing" />
                      </Box>
                    </Link>

                    <Box p={4} w="60%">
                      <Link href="/">
                        <Text fontWeight={700} fontSize={15} noOfLines={2}>
                          Lorem Ipsum is simply dummy text of the printing
                        </Text>
                      </Link>

                      <Flex align="center" gap={1.5} mt={4}>
                        <Icon as={FaRegCalendarAlt} fontSize={13} color="#808080" />
                        <Text fontSize={14} mt="2px" color="#808080">
                          28/01/2023
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Blog;
