'use client';
import { Image } from '@/components';
import { useScrollTop } from '@/utils/hooks';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa';
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
          <Flex direction="column" gap={10}>
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <Flex key={item} w="full" overflow="hidden" boxShadow="base" h="270px">
                  <Link href="/" style={{ display: 'block', width: '50%', height: '100%' }}>
                    <Box h="full" w="full">
                      <Image w="full" src={ImgNews} alt="Lorem Ipsum is simply dummy text of the printing" />
                    </Box>
                  </Link>

                  <Box p={7} w="50%">
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

                    <Text mt={3} noOfLines={3}>
                      Vivamus vestibulum ut magna vitae facilisis. Maecenas laoreet lobortis tristique. Aenean accumsan
                      malesuada convallis. Suspendisse egestas luctus nisl, sit amet
                    </Text>
                  </Box>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
        <Flex flex={3 / 10}>bbbb</Flex>
      </Flex>
    </Box>
  );
};

export default Blog;
