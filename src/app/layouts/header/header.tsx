'use client';
import { Image } from '@/components';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useRecoilState } from 'recoil';
import BgHeader from './images/bg-header.png';
import Menu from './menu';
import { activeNavbarAtom } from './navbar.recoil';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [activeNavbar, setActiveNavbar] = useRecoilState(activeNavbarAtom);
  const isActiveNavbarHome = useMemo(() => activeNavbar && pathname === '/', [activeNavbar, pathname]);
  const handleScroll = useCallback(() => setActiveNavbar(window.pageYOffset > 50), [setActiveNavbar]);

  const bgColor = useMemo(() => {
    if (pathname !== '/') {
      return undefined;
    }
    return activeNavbar ? '#FFF' : 'transparent';
  }, [activeNavbar, pathname]);

  const bgImage = useMemo(() => {
    if (pathname === '/') {
      return undefined;
    }
    return `url(${BgHeader.src})`;
  }, [pathname]);

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
        bgColor={bgColor}
        alignItems="center"
        bgImage={bgImage}
        bgRepeat="no-repeat"
        bgSize="cover"
        boxShadow={activeNavbar ? 'base' : 'none'}
        justifyContent="space-between"
        px={28}
        transitionDuration="300ms"
        zIndex={100}
      >
        <Flex w={44}>
          <Link href="/">
            <Flex alignItems="center" gap={3}>
              <Image
                src={isActiveNavbarHome ? '/images/logo-active.png' : '/images/logo.png'}
                w="40px"
                h="40px"
                alt="logo"
              />
              <Text
                as="h3"
                color={isActiveNavbarHome ? 'primary.1' : '#FFF'}
                fontWeight={600}
                fontSize={20}
                transitionDuration="300ms"
              >
                Proton{' '}
                <Text
                  as="span"
                  color={isActiveNavbarHome ? 'primary.1' : '#FFF'}
                  fontWeight={400}
                  transitionDuration="300ms"
                >
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
              color={isActiveNavbarHome ? 'secondary.1' : '#FFF'}
              bgColor="transparent"
              borderRadius="full"
              w="40px"
              h="40px"
              minH={0}
              minW={0}
              p={0}
              transitionDuration="300ms"
              _active={{ bgColor: 'transparent' }}
              _hover={{ bgColor: isActiveNavbarHome ? 'secondary.1' : '#FFF' }}
              data-group
            >
              <Icon
                as={FiSearch}
                fontSize={20}
                _groupHover={{ color: isActiveNavbarHome ? '#FFF' : 'secondary.1' }}
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
