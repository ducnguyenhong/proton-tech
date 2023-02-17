'use client';
import { Section } from '@/components';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';
import ImgIntro from '../images/img-home-tech.png';

const HomeTech: React.FC = () => {
  return (
    <Flex align="center" justifyContent="center" mt={40} gap={10} mx={60} py={10}>
      <Flex w="40%">
        <Image src={ImgIntro} alt="Proton Tech" width={300} quality={100} />
      </Flex>
      <Flex w="60%" direction="column">
        <Section title="Proton Tech" />
        <Text mt={5} fontSize={20} color="text.2">
          Cung cấp các tiện ích Công Nghệ
        </Text>
      </Flex>
    </Flex>
  );
};

export default memo(HomeTech);
