'use client';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useCallback, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useRecoilState } from 'recoil';
import Menu from './menu';
import { activeNavbarAtom } from './navbar.recoil';

const Header: React.FC = () => {
  const [activeNavbar, setActiveNavbar] = useRecoilState(activeNavbarAtom);
  const handleScroll = useCallback(() => setActiveNavbar(window.pageYOffset > 50), [setActiveNavbar]);
  const [language, setLanguage] = useState('vi');

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
              <Image
                src={activeNavbar ? '/images/logo-active.png' : '/images/logo.png'}
                width={40}
                height={40}
                alt="logo"
              />
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

            {/* <Tooltip label={`Chuyển sang ${language === 'vi' ? 'Tiếng Anh' : 'Tiếng Việt'}`}>
              <Flex pos="relative" bgColor="#CCC" p={0.5} borderRadius="full" data-group>
                <Flex w={7} h={7} borderRadius="full" pos="relative">
                  <Image
                    src={language === 'vi' ? '/images/icon-vietnam-flag.png' : '/images/icon-uk-flag.png'}
                    alt="vietnam language"
                    fill
                  />
                </Flex>
                <Button
                  pos="absolute"
                  bgColor="transparent"
                  visibility="hidden"
                  opacity={0}
                  w="full"
                  h="full"
                  borderRadius="full"
                  p={0}
                  minW={0}
                  top={0}
                  left={0}
                  zIndex={2}
                  _hover={{ bgColor: 'transparent' }}
                  _active={{ bgColor: 'transparent' }}
                  _groupHover={{ opacity: 1, visibility: 'visible', bgColor: '#00000075' }}
                  onClick={() => setLanguage((prev) => (prev === 'vi' ? 'en' : 'vi'))}
                >
                  <FaSyncAlt color="#ccc" fontSize={13} />
                </Button>
              </Flex>
            </Tooltip> */}

            {/* <Flex bgColor="#e6e6e6" gap={0.5} align="center" borderRadius="full" p={1}>
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
            </Flex> */}
          </Flex>
        </Flex>
      </Flex>
    </header>
  );
};

export default memo(Header);
