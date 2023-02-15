'use client';
import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import { FaAdversal, FaFileContract, FaGlobeAmericas, FaMobileAlt, FaThLarge } from 'react-icons/fa';

const HomeService: React.FC = () => {
  const SERVICE_DATA = [
    {
      title: 'Website',
      icon: FaGlobeAmericas,
      service: 'website',
      description: 'Thiết kế và xây dựng Website đa nền tảng'
    },
    {
      title: 'Mobile App',
      icon: FaMobileAlt,
      service: 'mobile-app',
      description: 'Thiết kế và xây dựng Ứng dụng Mobile'
    },
    {
      title: 'Content Marketing',
      icon: FaFileContract,
      service: 'content-marketing',
      description: 'Dịch vụ viết nội dung cho Marketing'
    },
    {
      title: 'Advertising',
      icon: FaAdversal,
      service: 'advertising',
      description: 'Chạy quảng cáo trên mọi nền tảng'
    },
    {
      title: 'Design',
      icon: FaThLarge,
      service: 'design',
      description: 'Thiết kế logo, banner, topic, ảnh...'
    },
    {
      title: 'Xem thêm',
      icon: FaThLarge,
      service: 'other',
      description: 'Xem thêm rất nhiều dịch vụ tiện ích khác'
    }
  ];

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      mt={60}
      px={80}
      // bgGradient="linear(to-r, #1B0738, #0E0625, #1E0739)"
      py={20}
    >
      <Heading as="h4" fontSize={35} mt={3} color="red">
        Proton Service
      </Heading>
      <Text mt={5} fontSize={20} textAlign="center" color="text.2">
        Cung cấp các dịch vụ Công Nghệ, Marketing
      </Text>

      <Flex w="full" columnGap={20} rowGap={20} mt={16} flexWrap="wrap">
        {SERVICE_DATA.map((item) => {
          const { icon, title, service, description } = item;
          return (
            <Link href={`/service/${service}`} key={title} style={{ display: 'block', width: '28%' }}>
              <Flex direction="column" borderRadius={4} gap={6} align="center">
                <Flex w={20} h={20} bgColor="#f5e9fc" borderRadius={5} justify="center" align="center">
                  <Icon as={icon} color="#7f1bb1" fontSize={40} />
                </Flex>

                <Heading as="h3" fontSize={24} letterSpacing={0.5} color="#7f1bb1" textAlign="center">
                  {title}
                </Heading>

                <Text fontSize={18} letterSpacing={0.5} color="text.2" textAlign="center">
                  {description}
                </Text>
              </Flex>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default memo(HomeService);
