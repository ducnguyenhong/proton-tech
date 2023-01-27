'use client';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';
import { FaCheck } from 'react-icons/fa';
import ImgServiceWeb from '../images/img-intro-website.png';

const ServiceWebsite: React.FC = () => {
  return (
    <Flex mt={10} mx={80} boxShadow="md" p={14}>
      <Box w="40%">
        <Image src={ImgServiceWeb} alt="website" />
      </Box>

      <Box w="60%">
        <Heading as="h4" fontSize={23}>
          Dịch vụ Website
        </Heading>
        <Text mt={5}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout.
        </Text>
        <Flex mt={5} flexWrap="wrap" rowGap={2}>
          {[1, 2, 3, 4].map((item) => (
            <Flex key={item} alignItems="center" w="50%" gap={2}>
              <FaCheck color="green" />
              <Text>It is a long a long</Text>
            </Flex>
          ))}
        </Flex>
        <Button colorScheme="red" mt={10}>
          Trải nghiệm ngay
        </Button>
      </Box>
    </Flex>
  );
};

export default memo(ServiceWebsite);
