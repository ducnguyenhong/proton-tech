'use client';
import { Image } from '@/components';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo, useCallback, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useRecoilState } from 'recoil';
import Menu from './menu';
import { activeNavbarAtom } from './navbar.recoil';

const Header: React.FC = () => {
  const [activeNavbar, setActiveNavbar] = useRecoilState(activeNavbarAtom);
  const handleScroll = useCallback(() => setActiveNavbar(window.pageYOffset > 50), [setActiveNavbar]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header>
      <Flex
        h="80px"
        w="full"
        position="fixed"
        top={0}
        left={0}
        bgColor={activeNavbar ? '#FFF' : 'transparent'}
        alignItems="center"
        boxShadow={activeNavbar ? 'base' : 'none'}
        justifyContent="space-between"
        px={28}
        transitionDuration="300ms"
        zIndex={100}
      >
        <Flex w={44}>
          <Link href="/">
            <Flex alignItems="center" gap={3}>
              <Image src={activeNavbar ? '/images/logo-active.png' : '/images/logo.png'} w="40px" h="40px" alt="logo" />
              <Text
                as="h3"
                color={activeNavbar ? 'primary.1' : '#FFF'}
                fontWeight={600}
                fontSize={20}
                transitionDuration="300ms"
              >
                Proton{' '}
                <Text as="span" color={activeNavbar ? 'primary.1' : '#FFF'} fontWeight={400} transitionDuration="300ms">
                  Tech
                </Text>
              </Text>
            </Flex>
          </Link>
        </Flex>

        <Flex align="center">
          <Menu />
        </Flex>

        <Flex pos="relative" w={44}>
          <Flex gap={6} align="center" pos="absolute" top={0} bottom={0} right={0}>
            <Button
              color={activeNavbar ? 'secondary.1' : '#FFF'}
              bgColor="transparent"
              borderRadius="full"
              w="40px"
              h="40px"
              minH={0}
              minW={0}
              p={0}
              transitionDuration="300ms"
              _active={{ bgColor: 'transparent' }}
              _hover={{ bgColor: activeNavbar ? 'secondary.1' : '#FFF' }}
              data-group
            >
              <Icon
                as={FiSearch}
                fontSize={20}
                _groupHover={{ color: activeNavbar ? '#FFF' : 'secondary.1' }}
                transitionDuration="300ms"
              />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </header>
  );
};

export default memo(Header);
