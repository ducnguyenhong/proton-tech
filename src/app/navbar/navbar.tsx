'use client';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useCallback, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useRecoilState } from 'recoil';
import Menu from './menu';
import { activeNavbarAtom } from './navbar.recoil';

const Navbar: React.FC = () => {
  const [activeNavbar, setActiveNavbar] = useRecoilState(activeNavbarAtom);
  const handleScroll = useCallback(() => setActiveNavbar(window.pageYOffset > 50), [setActiveNavbar]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Flex
      h="68px"
      w="full"
      bgColor={activeNavbar ? 'primary.1' : '#FFF'}
      position="fixed"
      top={0}
      left={0}
      boxShadow="base"
      alignItems="center"
      justifyContent="space-between"
      px={28}
      transitionDuration="300ms"
      zIndex={100}
    >
      <Flex>
        <Link href="/">
          <Flex alignItems="center" gap={3}>
            <Image src="/images/logo.png" width={40} height={40} alt="logo" />
            <Text
              as="h3"
              color={activeNavbar ? '#FFF' : 'primary.1'}
              fontWeight={600}
              fontSize={20}
              transitionDuration="300ms"
            >
              Proton{' '}
              <Text as="span" color={activeNavbar ? '#FFF' : 'secondary.1'} fontWeight={400} transitionDuration="300ms">
                Tech
              </Text>
            </Text>
          </Flex>
        </Link>
      </Flex>

      <Flex alignItems="center">
        <Menu />

        <Button
          color={activeNavbar ? '#FFF' : 'secondary.1'}
          bgColor="transparent"
          borderRadius="full"
          w="2.375rem"
          h={9}
          minH={0}
          minW={0}
          p={0}
          _active={{ bgColor: 'transparent' }}
          _hover={{ bgColor: activeNavbar ? '#FFF' : 'secondary.1' }}
          data-group
        >
          <Icon
            as={FiSearch}
            fontSize={20}
            _groupHover={{ color: activeNavbar ? 'secondary.1' : '#FFF' }}
            transitionDuration="300ms"
          />
        </Button>
      </Flex>
    </Flex>
  );
};

export default memo(Navbar);
