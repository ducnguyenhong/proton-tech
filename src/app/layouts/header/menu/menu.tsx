'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { activeNavbarAtom } from '../navbar.recoil';
import { MENU_DATA } from './menu.data';

const Menu: React.FC = () => {
  const pathname = usePathname();
  const activeNavbar = useRecoilValue(activeNavbarAtom);
  const isActiveNavbarHome = useMemo(() => activeNavbar && pathname === '/', [activeNavbar, pathname]);

  return (
    <Flex>
      {MENU_DATA.map((item) => {
        const { title, route } = item;
        const isActive = route === pathname;

        return (
          <Flex mx={4} key={route}>
            <Link href={route}>
              <Flex
                pos="relative"
                direction="column"
                alignItems="center"
                px={5}
                py={2}
                borderRadius="full"
                transitionDuration="400ms"
                data-group
              >
                <Text
                  bgGradient={isActiveNavbarHome ? 'linear(to-l, #7928CA, #FF0080)' : 'linear(to-l, #FFF, #FFF)'}
                  bgClip="text"
                  fontSize={19}
                  fontWeight={700}
                  transitionDuration="400ms"
                >
                  {title}
                </Text>
                <Box
                  pos="absolute"
                  bottom={0}
                  h={isActive ? 0.5 : '1px'}
                  w={isActive ? 0.5 : 0}
                  borderRadius="full"
                  bgGradient={isActiveNavbarHome ? 'linear(to-l, #7928CA, #FF0080)' : 'linear(to-l, #FFF, #FFF)'}
                  transitionDuration="400ms"
                  _groupHover={{
                    w: isActive ? 0.5 : '80%'
                  }}
                />
              </Flex>
            </Link>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default memo(Menu);
