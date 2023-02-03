'use client';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { activeNavbarAtom } from '../navbar.recoil';
import { MENU_DATA } from './menu.data';

const Menu: React.FC = () => {
  const pathname = usePathname();
  const activeNavbar = useRecoilValue(activeNavbarAtom);

  const textColor = useMemo(() => (activeNavbar ? '#FFF' : 'primary.1'), [activeNavbar]);
  const activeTextColor = useMemo(() => (activeNavbar ? 'primary.1' : '#FFF'), [activeNavbar]);

  return (
    <Flex>
      {MENU_DATA.map((item) => {
        const { title, route, icon } = item;
        const isActive = route === pathname;

        return (
          <Flex mx={4} key={route}>
            <Link href={route}>
              <Flex alignItems="center" gap={2} px={5} py={2} borderRadius="full" transitionDuration="400ms" data-group>
                <Text
                  color={isActive ? '#FFF' : '#ccc'}
                  fontSize={19}
                  fontWeight={600}
                  _groupHover={{ color: '#FFF' }}
                  transitionDuration="400ms"
                >
                  {title}
                </Text>
              </Flex>
            </Link>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default memo(Menu);
