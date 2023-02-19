import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';

const FooterService: React.FC = () => {
  const SERVICE_DATA = [
    {
      url: '/service/website',
      title: 'Website'
    },
    {
      url: '/service/mobile-app',
      title: 'Mobile app'
    },
    {
      url: '/service/marketing',
      title: 'Marketing'
    },
    {
      url: '/service/design',
      title: 'Thiết kế'
    }
  ];

  return (
    <Box>
      <Text fontSize={16} fontWeight={700} textTransform="uppercase">
        Dịch vụ
      </Text>
      <Flex mt={5} ml={1} gap={2} direction="column">
        {SERVICE_DATA.map((item) => {
          const { url, title } = item;
          return (
            <Flex
              align="center"
              gap={2}
              key={url}
              fontSize={14}
              color="#CCC"
              _hover={{ color: '#FFF' }}
              transitionDuration="200ms"
            >
              <Box h="2px" w="2px" borderRadius="full" bgColor="#CCC" />
              <Link href={url}>{title}</Link>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default memo(FooterService);
