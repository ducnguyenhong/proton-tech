'use client';
import { Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useCallback, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { activeNavbarAtom } from '../navbar.recoil';
import { MENU_DATA } from './menu.data';

const Menu: React.FC = () => {
  const pathname = usePathname();
  const activeNavbar = useRecoilValue(activeNavbarAtom);

  const textColor = useMemo(() => (activeNavbar ? '#FFF' : 'primary.1'), [activeNavbar]);
  const activeTextColor = useMemo(() => (activeNavbar ? 'primary.1' : '#FFF'), [activeNavbar]);

  const getNavBgColor = useCallback((isActive: boolean) => (isActive ? textColor : 'transparent'), [textColor]);

  const getTextColor = useCallback(
    (isActive: boolean) => (isActive ? activeTextColor : textColor),
    [activeTextColor, textColor]
  );

  return (
    <Flex>
      {MENU_DATA.map((item) => {
        const { title, route, icon } = item;
        const isActive = route === pathname;
        const textMenuColor = getTextColor(isActive);

        return (
          <Flex mx={4} key={route}>
            <Link href={route}>
              <Flex
                alignItems="center"
                gap={2}
                bgColor={getNavBgColor(isActive)}
                px={5}
                py={2}
                borderRadius="full"
                transitionDuration="400ms"
                data-group
                _hover={{ bgColor: textColor }}
              >
                <Icon
                  as={icon}
                  color={textMenuColor}
                  _groupHover={{ color: activeTextColor }}
                  transitionDuration="400ms"
                />
                <Text
                  color={textMenuColor}
                  fontSize={16}
                  fontWeight={isActive ? 500 : 400}
                  _groupHover={{ color: activeTextColor }}
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
