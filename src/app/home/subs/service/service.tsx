'use client';
import { Image, Section } from '@/components';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import { FaAdversal, FaFileContract, FaGlobeAmericas, FaMobileAlt, FaThLarge } from 'react-icons/fa';
import BgService from '../../images/bg-service.png';
import ImgShadow from '../../images/shadow-service.png';

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
      title: 'Marketing',
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
    <Flex alignItems="center" flexDirection="column" mt={60} px={60} py={20}>
      <Section title="Proton Service" />
      <Text mt={5} fontSize={20} textAlign="center" color="text.2">
        Cung cấp các dịch vụ Công Nghệ, Marketing
      </Text>

      <Flex
        w="full"
        columnGap={20}
        rowGap={10}
        mt={16}
        flexWrap="wrap"
        bgImage={`url(${BgService.src})`}
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        {SERVICE_DATA.map((item) => {
          const { icon, title, service, description } = item;
          return (
            <Link href={`/service/${service}`} key={title} style={{ display: 'block', width: '28%' }}>
              <Flex h={80}>
                <Image src={ImgShadow} h="full" w={20} alt="shadow service" opacity={0.4} />
                <Flex direction="column" gap={5} h="full" justify="center">
                  <Box ml={5}>
                    <Icon as={icon} color="#7f1bb1" fontSize={35} />
                  </Box>

                  <Flex
                    clipPath="polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)"
                    bgColor="red"
                    w={52}
                    h="70px"
                    align="center"
                    pl={5}
                  >
                    <Text fontSize={25} letterSpacing={0.5} fontWeight={600} color="#FFF">
                      {title}
                    </Text>
                  </Flex>

                  <Text fontSize={18} letterSpacing={0.5} color="text.2" ml={5}>
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
