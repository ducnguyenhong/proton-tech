'use client';
import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { memo, useState } from 'react';
import { FaAdversal, FaFileContract, FaGlobeAmericas, FaMobileAlt, FaThLarge } from 'react-icons/fa';
import ServiceWebsite from './website';

const HomeService: React.FC = () => {
  const [service, setService] = useState('website');

  const SERVICE_DATA = [
    {
      title: 'Website',
      icon: FaGlobeAmericas,
      service: 'website'
    },
    {
      title: 'Mobile App',
      icon: FaMobileAlt,
      service: 'mobile-app'
    },
    {
      title: 'Content Marketing',
      icon: FaFileContract,
      service: 'content-marketing'
    },
    {
      title: 'Advertising',
      icon: FaAdversal,
      service: 'ads'
    },
    {
      title: 'Khác',
      icon: FaThLarge,
      service: 'other'
    }
  ];

  return (
    <Flex alignItems="center" flexDirection="column" mt={80} px={80}>
      <Heading as="h5" fontSize={18} color="secondary.1">
        Dịch vụ
      </Heading>
      <Box w={16} h="px" bgColor="secondary.1" mt={1} />
      <Heading as="h4" fontSize={35} mt={3} color="primary.1">
        Cung cấp các dịch vụ tiện ích về Công Nghệ
      </Heading>
      <Text mt={5} textAlign="center" color="text.2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        <br />
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s
      </Text>

      <Flex w="full" gap={10} mt={10}>
        {SERVICE_DATA.map((item) => {
          const { icon, title, service } = item;
          return (
            <Button
              key={title}
              w="25%"
              flexDirection="column"
              h={40}
              bgColor="#FFF"
              border="1px solid #d9d9d9"
              borderRadius={4}
              gap={5}
              onClick={() => setService(service)}
            >
              <Icon as={icon} color="secondary.1" fontSize={40} />
              <Text fontSize={18} letterSpacing={0.5}>
                {title}
              </Text>
            </Button>
          );
        })}
      </Flex>

      <Box h="500px" mt={10} boxShadow="md" p={14}>
        {service === 'website' && <ServiceWebsite />}
      </Box>
    </Flex>
  );
};

export default memo(HomeService);
