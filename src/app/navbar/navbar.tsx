'use client';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { FiSearch } from 'react-icons/fi';
import Menu from './menu';

const Navbar: React.FC = () => {
  return (
    <Flex
      h="68px"
      w="full"
      bgColor="#FFF"
      position="fixed"
      top={0}
      left={0}
      boxShadow="base"
      alignItems="center"
      justifyContent="space-between"
      px={28}
      zIndex={100}
    >
      <Flex>
        <Link href="/">
          <Flex alignItems="center" gap={3}>
            <Image src="/images/logo.png" width={40} height={40} alt="logo" />
            <Text as="h3" color="#e3594a" fontWeight={600} fontSize={20}>
              Proton{' '}
              <Text as="span" color="#38A169" fontWeight={400}>
                Tech
              </Text>
            </Text>
          </Flex>
        </Link>
      </Flex>

      <Flex alignItems="center">
        <Menu />

        <Button
          color="#38A169"
          bgColor="transparent"
          borderRadius="full"
          w="2.375rem"
          h={9}
          minH={0}
          minW={0}
          p={0}
          _active={{ bgColor: 'transparent' }}
          _hover={{ bgColor: '#38A169' }}
          transitionDuration="300ms"
          data-group
        >
          <Icon as={FiSearch} fontSize={20} _groupHover={{ color: '#FFF' }} transitionDuration="300ms" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default memo(Navbar);
