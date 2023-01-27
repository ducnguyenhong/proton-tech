'use client';
import { AspectRatio, Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { FaFileContract, FaGlobeAmericas, FaMobileAlt, FaThLarge } from 'react-icons/fa';

const HomeReason: React.FC = () => {
  const SERVICE_DATA = [
    {
      title: 'Website',
      icon: FaGlobeAmericas
    },
    {
      title: 'Mobile App',
      icon: FaMobileAlt
    },
    {
      title: 'Content Marketing',
      icon: FaFileContract
    },
    {
      title: 'Xem thêm',
      icon: FaThLarge
    }
  ];

  return (
    <Flex flexDirection="column" mt={80} px={80}>
      <Flex mt={16} w="full" gap={10}>
        <Box w="45%">
          <Heading as="h5" fontSize={18} color="green">
            Hãy chọn chúng tôi
          </Heading>
          <Box w={44} h="px" bgColor="green" mt={1} />
          <Heading as="h4" fontSize={35} mt={3}>
            Cung cấp các dịch vụ tiện ích về Công Nghệ
          </Heading>
          <Text mt={5}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            <br />
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s
          </Text>
        </Box>

        <Flex w="55%" flexWrap="wrap" columnGap={10}>
          {SERVICE_DATA.map((item, index) => {
            const { icon, title } = item;
            return (
              <AspectRatio ratio={4 / 3} key={title} w="45%" h={60} mt={index % 2 === 0 ? 0 : 10}>
                <Flex flexDirection="column" bgColor="#FFF" border="1px solid #e6e6e6" borderRadius={4} gap={5}>
                  <Icon as={icon} color="#38A169" fontSize={40} />
                  <Text>{title}</Text>
                </Flex>
              </AspectRatio>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(HomeReason);
