import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';

const FooterNews: React.FC = () => {
  const NEWS_DATA = [
    {
      url: '/introduce',
      title: 'Giới thiệu Giới thiệu Giới thiệu Giới thiệu'
    },
    {
      url: '/terms-of-use',
      title: 'Điều khoản sử dụng Điều khoản sử dụng'
    },
    {
      url: '/payment-guide',
      title: 'Thanh toán Thanh toán Thanh toán Thanh toán'
    },
    {
      url: '/report',
      title: 'Khiếu nại Khiếu nại Khiếu nại Khiếu nại'
    }
  ];

  return (
    <Box>
      <Text fontSize={16} fontWeight={700} textTransform="uppercase">
        Tin nổi bật
      </Text>
      <Flex mt={5} ml={1} gap={2} direction="column">
        {NEWS_DATA.map((item) => {
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

export default memo(FooterNews);
