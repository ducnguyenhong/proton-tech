import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';

const AboutUs: React.FC = () => {
  const ABOUT_US_DATA = [
    {
      url: '/introduce',
      title: 'Giới thiệu'
    },
    {
      url: '/terms-of-use',
      title: 'Điều khoản sử dụng'
    },
    {
      url: '/payment-guide',
      title: 'Thanh toán'
    },
    {
      url: '/report',
      title: 'Khiếu nại'
    }
  ];

  return (
    <Box>
      <Text
        fontWeight={700}
        textTransform="uppercase"
        textAlign={{ xs: 'center', lg: 'left' }}
        fontSize={{ xs: 15, lg: 16 }}
      >
        Về chúng tôi
      </Text>
      <Flex mt={5} ml={1} gap={2} direction="column" align={{ xs: 'center', lg: 'flex-start' }}>
        {ABOUT_US_DATA.map((item) => {
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

export default memo(AboutUs);
