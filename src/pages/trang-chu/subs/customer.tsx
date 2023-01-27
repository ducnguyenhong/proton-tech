'use client';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';
import ImgCustomer from '../images/customer.png';

const HomeCustomer: React.FC = () => {
  return (
    <Flex alignItems="center" justifyContent="center" flexDirection="column" mt={32} gap={10}>
      <Heading as="h4" fontSize={35}>
        Proton Tech hiện đang được tin dùng bởi{' '}
        <Text as="span" color="red">
          10.000+
        </Text>{' '}
        khách hàng
      </Heading>

      <Image src={ImgCustomer} alt="cutomer" />
    </Flex>
  );
};

export default memo(HomeCustomer);
