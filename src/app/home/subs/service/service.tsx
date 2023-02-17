'use client';
import { Image, Section } from '@/components';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import { FaAdversal, FaFileContract, FaGlobeAmericas, FaMobileAlt, FaPencilRuler, FaThLarge } from 'react-icons/fa';
import BgService from '../../images/bg-service.png';
import ImgShadow from '../../images/shadow-service.png';

const HomeService: React.FC = () => {
  const SERVICE_DATA = [
    {
      title: 'Website',
      icon: FaGlobeAmericas,
      service: 'website',
      description: 'Thiết kế, xây dựng Website đa nền tảng',
      bgGradient: '#25da25, #1eae1e'
    },
    {
      title: 'Mobile App',
      icon: FaMobileAlt,
      service: 'mobile-app',
      description: 'Thiết kế, phát triển Ứng dụng Mobile',
      bgGradient: '#3fabf3, #0F94EF'
    },
    {
      title: 'Marketing',
      icon: FaFileContract,
      service: 'content-marketing',
      description: 'Viết nội dung (Content Marketing)',
      bgGradient: '#9b6ac8, #8D55C0'
    },
    {
      title: 'Advertising',
      icon: FaAdversal,
      service: 'advertising',
      description: 'Chạy quảng cáo nhiều nền tảng',
      bgGradient: '#ffad66, #ff9233'
    },
    {
      title: 'Design',
      icon: FaPencilRuler,
      service: 'design',
      description: 'Thiết kế logo, banner, topic, ảnh...',
      bgGradient: '#fe67b0, #FE3B99'
    },
    {
      title: 'Xem thêm',
      icon: FaThLarge,
      service: 'other',
      description: 'Và rất nhiều dịch vụ tiện ích khác',
      bgGradient: '#d55d5d, #cb3434'
    }
  ];

  return (
    <Flex alignItems="center" flexDirection="column" mt={60} px={60} py={20}>
      <Section title="Proton Service" />
      <Text mt={5} fontSize={20} textAlign="center" color="text.2">
        Cung cấp các dịch vụ tiện ích về Công Nghệ, Marketing, Content
      </Text>

      <Flex
        w="full"
        rowGap={10}
        justify="space-between"
        mt={16}
        flexWrap="wrap"
        bgImage={`url(${BgService.src})`}
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        {SERVICE_DATA.map((item) => {
          const { icon, title, service, description, bgGradient } = item;
          const iconColor = bgGradient.split(' ')[1];
          return (
            <Link href={`/service/${service}`} key={title} style={{ display: 'block', width: '30%' }}>
              <Flex h={80}>
                <Image src={ImgShadow} h="full" w="70px" alt="shadow service" opacity={0.5} />
                <Flex direction="column" gap={5} h="full" justify="center" flex={1}>
                  <Box ml={5}>
                    <Icon as={icon} color={iconColor} fontSize={35} />
                  </Box>

                  <Flex
                    clipPath="polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)"
                    bgGradient={`linear(to-r, ${bgGradient})`}
                    w={48}
                    h="70px"
                    align="center"
                    pl={5}
                  >
                    <Text fontSize={25} letterSpacing={0.5} fontWeight={600} color="#FFF">
                      {title}
                    </Text>
                  </Flex>

                  <Text fontSize={17} letterSpacing={0.5} ml={5} fontWeight={600} h="50px">
                    {description}
                  </Text>
                </Flex>
              </Flex>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default memo(HomeService);
