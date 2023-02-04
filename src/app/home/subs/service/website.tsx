import ButtonPrimary from '@/components/button-primary';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';
import { FaCheck } from 'react-icons/fa';
import ImgServiceWeb from '../../images/img-intro-website.png';

const ServiceWebsite: React.FC = () => {
  return (
    <Flex h="full">
      <Box w="40%">
        <Image src={ImgServiceWeb} alt="website" />
      </Box>

      <Box w="60%">
        <Heading as="h4" fontSize={23}>
          Thiết kế và xây dựng Website
        </Heading>
        <Text mt={5} color="text.2">
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
        <ButtonPrimary title="Trải nghiệm ngay" mt={10} />
      </Box>
    </Flex>
  );
};

export default memo(ServiceWebsite);
