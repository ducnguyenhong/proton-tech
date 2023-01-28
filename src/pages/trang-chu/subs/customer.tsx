'use client';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import LogoCVFREE from '../images/cvfree-logo.png';
import LogoGU from '../images/gu-ui-logo.png';
import LogoMintyFood from '../images/minty-food-logo.png';

const HomeCustomer: React.FC = () => {
  const CUSTOMER_DATA = [
    {
      title: 'Minty Food',
      url: 'https://github.com/autoclickvn/mintyfood',
      color: '#2F855A',
      logo: LogoMintyFood
    },
    {
      title: 'GU UI',
      url: 'https://www.npmjs.com/package/@galaxy-ultra/ui',
      color: '#9D18B5',
      logo: LogoGU
    },
    {
      title: 'CVFREE',
      url: 'https://github.com/autoclickvn/cvfree',
      color: '#2F855A',
      logo: LogoCVFREE
    },
    {
      title: 'Island 3D',
      url: 'https://github.com/autoclickvn/react-three-island',
      color: '#292D32',
      logo: LogoCVFREE
    }
  ];

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt={32}
      gap={10}
      mx={80}
      boxShadow="base"
      py={10}
    >
      <Heading as="h4" fontSize={35}>
        <Text as="h4" display="inline" color="primary.1">
          Proton
        </Text>{' '}
        <Text as="h4" display="inline" color="secondary.1">
          Tech
        </Text>{' '}
        đang được tin dùng bởi{' '}
        <Link href="/khach-hang">
          <Text
            as="span"
            color="secondary.1"
            borderBottom="2px solid #FFF"
            transitionDuration="300ms"
            _hover={{ borderBottom: '2px solid #CE124F' }}
          >
            10.000+
          </Text>{' '}
        </Link>
        khách hàng
      </Heading>

      <Flex gap={24}>
        {CUSTOMER_DATA.map((item) => {
          const { url, title, logo, color } = item;
          return (
            <Link href={url} key={title} target="_blank" rel="noopener noreferrer">
              <Flex
                alignItems="center"
                gap={2}
                px={5}
                py={2}
                borderRadius={5}
                transitionDuration="300ms"
                _hover={{ boxShadow: 'base' }}
              >
                <Image src={logo} alt={title} height={55} />
                <Text color={color} fontWeight={700} fontSize={18}>
                  {title}
                </Text>
              </Flex>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default memo(HomeCustomer);
