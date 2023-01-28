'use client';
import { Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';
import { MENU_DATA } from './menu.data';

const Menu: React.FC = () => {
  const pathname = usePathname();

  return (
    <Flex>
      {MENU_DATA.map((item) => {
        const { title, route, subs, icon } = item;
        const isActive = route === pathname;

        if (!route) {
          return null;
        }

        return (
          <Flex mx={4} key={title}>
            <Link href={route}>
              <Flex
                alignItems="center"
                gap={2}
                bgColor={isActive ? 'primary.1' : '#FFF'}
                px={5}
                py={2}
                borderRadius="full"
                transitionDuration="400ms"
                data-group
                _hover={{ bgColor: 'primary.1' }}
              >
                <Icon
                  as={icon}
                  color={isActive ? '#FFF' : 'primary.1'}
                  _groupHover={{ color: '#FFF' }}
                  transitionDuration="400ms"
                />
                <Text
                  color={isActive ? '#FFF' : 'primary.1'}
                  fontSize={16}
                  fontWeight={isActive ? 500 : 400}
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
