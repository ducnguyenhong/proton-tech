'use client';
import { Image, Section } from '@/components';
import { useMediaQuery } from '@/utils/hooks';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
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
  const isMobile = useMediaQuery('(max-width: 576px)', true, { getInitialValueInEffect: false });
  const TECH_DATA = [
    {
      title: 'Làm nét ảnh',
      url: '/1',
      icon: FaImage,
      image: ImgTech1
    },
    {
      title: 'Đổi định dạng ảnh',
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
      title: 'Video',
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
    <Flex align="center" justifyContent="center" mt={52} gap={10} mx={{ xs: 5, lg: 80 }} py={10}>
      {!isMobile && (
        <Flex w="40%" pt={8}>
          <Image src={ImgIntro} alt="Proton Tech" w="400px" h="480px" />
        </Flex>
      )}
      <Flex w={{ xs: '100%', lg: '60%' }} direction="column">
        <Flex direction="column" align="center">
          <Section title="Proton Tech" />
          <Text mt={{ xs: 1, lg: 5 }} fontSize={{ xs: 15, lg: 20 }} color="text.2">
            Cung cấp các tiện ích Công Nghệ
          </Text>
        </Flex>

        <Flex flexWrap="wrap" mt={12} rowGap={5}>
          {TECH_DATA.map((item) => {
            const { url, title, icon, image } = item;
            return (
              <Box key={url} w={{ xs: '48%', lg: '31%' }}>
                <Link href={url} style={{ width: '100%', display: 'block' }}>
                  <Flex direction="column" justify="center" align="center" data-group>
                    <Flex w="150px" h="140px" pos="relative" justify="center" align="center">
                      <Box
                        pos="absolute"
                        w="full"
                        h="full"
                        top={0}
                        left={0}
                        zIndex={1}
                        transitionDuration="350ms"
                        _groupHover={{ transform: 'rotate(90deg)' }}
                      >
                        <Image
                          src={image}
                          w={{ xs: '120px', lg: '150px' }}
                          h={{ xs: '110px', lg: '140px' }}
                          alt="tech"
                        />
                      </Box>
                      <Icon as={icon} fontSize={25} zIndex={2} />
                    </Flex>

                    <Text textAlign="center" mt={-2} fontWeight={600} fontSize={18}>
                      {title}
                    </Text>
                  </Flex>
                </Link>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(HomeTech);
