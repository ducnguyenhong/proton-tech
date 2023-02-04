'use client';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useCallback, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
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
        bgGradient="linear(to-r, rgba(36,8,66,1), rgba(17,6,41,1), rgba(14,6,37,1))"
        top={0}
        left={0}
        borderBottom={activeNavbar ? '1px solid #29126e' : '1px solid transparent'}
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
                <Text
                  as="span"
                  color={activeNavbar ? '#FFF' : 'secondary.1'}
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

        <Flex gap={6} align="center">
          <Button
            color="#FFF"
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

          <Flex>
            <Button
              w={7}
              h={7}
              p={0}
              minW={0}
              bgColor="transparent"
              borderRadius="full"
              _hover={{ bgColor: 'transparent' }}
              _active={{ bgColor: 'transparent' }}
            >
              <Image src="/images/icon-vietnam-flag.png" alt="vietnam language" fill />
            </Button>
          </Flex>

          <Flex bgColor="#e6e6e6" gap={0.5} align="center" borderRadius="full" px={1} py={1}>
            <Button w={7} h={7} borderRadius="full" p={0} minW={0} bgColor="transparent">
              <FaSun />
            </Button>
            <Button
              w={7}
              h={7}
              borderRadius="full"
              p={0}
              minW={0}
              bgGradient="linear(to-r, #7855FF, #491BFF)"
              _hover={{ bgGradient: 'linear(to-r, #7855FF, #491BFF)' }}
            >
              <FaMoon color="#FFF" />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </header>
  );
};

export default memo(Header);
