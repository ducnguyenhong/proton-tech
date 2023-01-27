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
                bgColor={isActive ? '#38A169' : '#FFF'}
                px={5}
                py="0.4rem"
                borderRadius="full"
              >
                <Icon as={icon} color={isActive ? '#FFF' : '#38A169'} />
                <Text color={isActive ? '#FFF' : '#38A169'} fontSize={17} fontWeight={isActive ? 500 : 400}>
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
