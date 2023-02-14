'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';
import { MENU_DATA } from './menu.data';

const Menu: React.FC = () => {
  const pathname = usePathname();

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
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  opacity={isActive ? 1 : 0.75}
                  bgClip="text"
                  fontSize={19}
                  fontWeight={600}
                  _groupHover={{ opacity: 1 }}
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
                  bgColor="#4E2CD6"
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
