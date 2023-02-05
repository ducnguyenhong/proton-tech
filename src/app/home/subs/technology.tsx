'use client';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import ImgIntro from '../images/img-home-tech.png';

const HomeTech: React.FC = () => {
  return (
    <Flex alignItems="center" justifyContent="center" mt={60} gap={10} mx={80} py={10}>
      <Flex w="40%">
        <Image src={ImgIntro} alt="Proton Tech" width={300} />
      </Flex>
      <Flex w="60%">
        <Heading as="h4" fontSize={35}>
          <Text as="span" color="primary.1">
            Proton
          </Text>{' '}
          <Text as="span" color="secondary.1">
            Tech
          </Text>{' '}
          đang được tin dùng bởi{' '}
          <Link href="/khach-hang">
            <Text
              as="span"
              color="secondary.1"
              borderBottom="2px solid #FFF"
              transitionDuration="300ms"
              _hover={{ borderBottom: '2px solid #CE124F' }}
            >
              10.000+
            </Text>{' '}
          </Link>
          khách hàng
        </Heading>
      </Flex>
    </Flex>
  );
};

export default memo(HomeTech);
