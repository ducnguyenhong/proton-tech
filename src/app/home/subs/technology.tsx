'use client';
import { Section } from '@/components';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { FaImage } from 'react-icons/fa';
import ImgIntro from '../images/img-home-tech.png';
import ImgTech1 from '../images/technology-1.png';
import ImgTech2 from '../images/technology-2.png';
import ImgTech3 from '../images/technology-3.png';
import ImgTech4 from '../images/technology-4.png';
import ImgTech5 from '../images/technology-5.png';
import ImgTech6 from '../images/technology-6.png';

const HomeTech: React.FC = () => {
  const TECH_DATA = [
    {
      title: 'Hình ảnh',
      url: '/1',
      icon: FaImage,
      image: ImgTech1
    },
    {
      title: 'Hình ảnh',
      url: '/2',
      icon: FaImage,
      image: ImgTech2
    },
    {
      title: 'Hình ảnh',
      url: '/3',
      icon: FaImage,
      image: ImgTech3
    },
    {
      title: 'Hình ảnh',
      url: '/4',
      icon: FaImage,
      image: ImgTech4
    },
    {
      title: 'Hình ảnh',
      url: '/5',
      icon: FaImage,
      image: ImgTech5
    },
    {
      title: 'Hình ảnh',
      url: '/6',
      icon: FaImage,
      image: ImgTech6
    }
  ];

  return (
    <Flex align="center" justifyContent="center" mt={40} gap={10} mx={80} py={10}>
      <Flex w="40%" pt={8}>
        <Image src={ImgIntro} alt="Proton Tech" width={400} quality={100} />
      </Flex>
      <Flex w="60%" direction="column">
        <Flex direction="column" align="center">
          <Section title="Proton Tech" />
          <Text mt={5} fontSize={20} color="text.2">
            Cung cấp các tiện ích Công Nghệ
          </Text>
        </Flex>

        <Flex flexWrap="wrap" mt={12} rowGap={5}>
          {TECH_DATA.map((item) => {
            const { url, title, icon, image } = item;
            return (
              <Link href={url} key={url} style={{ width: '31%', display: 'block' }}>
                <Flex direction="column" justify="center" align="center">
                  <Flex w="150px" h="140px" pos="relative" justify="center" align="center">
                    <Box pos="absolute" w="full" h="full" top={0} left={0} zIndex={1}>
                      <Image src={image} width={150} height={140} alt="tech" />
                    </Box>
                    <Icon as={icon} fontSize={25} zIndex={2} />
                  </Flex>

                  <Text textAlign="center" mt={-2} fontWeight={600} fontSize={20}>
                    {title}
                  </Text>
                </Flex>
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(HomeTech);
