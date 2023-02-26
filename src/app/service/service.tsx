'use client';
import { useScrollTop } from '@/utils/hooks';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';
import { FaAdversal, FaFileContract, FaGlobeAmericas, FaMobileAlt, FaPencilRuler } from 'react-icons/fa';

const Service: NextPage = () => {
  const SERVICE_DATA = [
    {
      title: 'Thiết kế Website',
      icon: FaGlobeAmericas,
      content: 'Thiết kế, xây dựng Website đa nền tảng',
      route: '/service/website',
      bgGradient1: '#3bde3b',
      bgGradient2: '#1eae1e',
      iconColor: '#21C421'
    },
    {
      title: 'Thiết kế Mobile app',
      icon: FaMobileAlt,
      content: 'Thiết kế, phát triển Ứng dụng Mobile',
      bgGradient1: '#57b5f4',
      bgGradient2: '#0F94EF',
      iconColor: '#29A0F1',
      route: '/service/mobile-app'
    },
    {
      title: 'Content Marketing',
      icon: FaFileContract,
      content: 'Viết nội dung (Content Marketing)',
      bgGradient1: '#a77dcf',
      bgGradient2: '#8D55C0',
      iconColor: '#9460C4',
      route: '/service/content-marketing'
    },
    {
      title: 'Advertising',
      icon: FaAdversal,
      content: 'Chạy quảng cáo nhiều nền tảng',
      bgGradient1: '#ffbb80',
      bgGradient2: '#ff9233',
      iconColor: '#FF9F4C',
      route: '/service/advertising'
    },
    {
      title: 'Design',
      icon: FaPencilRuler,
      content: 'Thiết kế logo, banner, topic, ảnh...',
      bgGradient1: '#fe80bd',
      bgGradient2: '#FE3B99',
      iconColor: '#FE51A5',
      route: '/service/design'
    },
    {
      title: 'Content Marketing',
      icon: FaFileContract,
      content: 'Viết nội dung (Content Marketing)',
      bgGradient1: '#01C5ED',
      bgGradient2: '#0688EB',
      iconColor: '#03A5EB',
      route: '/service/content-marketinga'
    }
  ];

  useScrollTop();

  return (
    <Box px={80} mt={40}>
      <Text fontSize={30} fontWeight={600} textAlign="center" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
        Các dịch vụ cung cấp
      </Text>
      <Flex justify="space-between" mt={20} flexWrap="wrap" rowGap={20}>
        {SERVICE_DATA.map((item, index) => {
          const { icon, title, content, route, bgGradient1, bgGradient2, iconColor } = item;
          return (
            <Box key={route} w="28%" h={60}>
              <Link href={route} style={{ width: '100%', height: '100%', display: 'block' }}>
                <Flex
                  direction="column"
                  boxShadow="md"
                  borderRadius={30}
                  gap={10}
                  h="full"
                  p={5}
                  _hover={{ boxShadow: 'lg' }}
                  transitionDuration="300ms"
                >
                  <Flex pos="relative">
                    <Flex
                      pos="absolute"
                      top={0}
                      left={0}
                      w="70px"
                      h="70px"
                      borderRadius="full"
                      boxShadow="base"
                      bgColor="#FFF"
                      p={2}
                    >
                      <Flex
                        bgGradient={`linear(to-r, ${bgGradient1}, ${bgGradient2})`}
                        w="full"
                        h="full"
                        borderRadius="full"
                        justify="center"
                        align="center"
                      >
                        <Text color="#FFF" fontWeight={600} fontSize={20}>
                          {index + 1}
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex flex={1} h="70px" ml={10} align="center">
                      <Flex
                        h="45px"
                        w="full"
                        align="center"
                        bgGradient={`linear(to-r, ${bgGradient2}, ${bgGradient1})`}
                        pl={10}
                      >
                        <Text textTransform="uppercase" fontWeight={600} color="#FFF">
                          {title}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex direction="column" align="center" gap={5}>
                    <Icon as={icon} color={iconColor} fontSize={30} />
                    <Text>{content}</Text>
                  </Flex>
                </Flex>
              </Link>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Service;
