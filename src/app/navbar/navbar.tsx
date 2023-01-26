'use client';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
// 00B5D8
const Navbar: React.FC = () => {
  return (
    <Flex h="68px" w="full" bgColor="#FFF" position="fixed" top={0} left={0} boxShadow="base">
      <Flex>
        <Link href="/">
          <Flex>
            <Text as="h3" color="#e3594a" fontWeight={600} fontSize={20}>
              Proton{' '}
              <Text as="span" color="#36af5c" fontWeight={400}>
                Tech
              </Text>
            </Text>
          </Flex>
        </Link>
      </Flex>

      <Flex></Flex>
    </Flex>
  );
};

export default memo(Navbar);
