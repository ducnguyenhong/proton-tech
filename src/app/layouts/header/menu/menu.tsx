'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { activeNavbarAtom } from '../navbar.recoil';
import { MENU_DATA } from './menu.data';

const Menu: React.FC = () => {
  const pathname = usePathname();
  const activeNavbar = useRecoilValue(activeNavbarAtom);

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
                  color={activeNavbar ? '#6B01A9' : '#FFF'}
                  fontSize={19}
                  fontWeight={600}
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
                  bgColor={activeNavbar ? '#6B01A9' : '#FFF'}
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
