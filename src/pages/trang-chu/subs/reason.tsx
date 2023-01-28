'use client';
import ButtonPrimary from '@/app/components/button-primary';
import { AspectRatio, Box, Flex, Heading, Icon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { memo } from 'react';
import { FaFileContract, FaGlobeAmericas, FaMobileAlt, FaThLarge } from 'react-icons/fa';

const HomeReason: React.FC = () => {
  const REASON_DATA = [
    {
      title: 'It has survived 11',
      icon: FaGlobeAmericas,
      description: 'It has survived not only five centuries'
    },
    {
      title: 'It has survived 22',
      icon: FaMobileAlt,
      description: 'It has survived not only five centuries'
    },
    {
      title: 'It has survived 33',
      icon: FaFileContract,
      description: 'It has survived not only five centuries'
    },
    {
      title: 'It has survived 44',
      description: 'It has survived not only five centuries',
      icon: FaThLarge
    }
  ];

  return (
    <Flex flexDirection="column" mt={60} px={80}>
      <Flex mt={16} w="full" gap={16}>
        <Box w="45%">
          <Heading as="h5" fontSize={18} color="secondary.1">
            Hãy chọn chúng tôi
          </Heading>
          <Box w={44} h="px" bgColor="secondary.1" mt={1} />
          <Heading as="h4" fontSize={35} mt={3} color="primary.1">
            Cung cấp các dịch vụ tiện ích về Công Nghệ
          </Heading>
          <Text mt={5} color="text.2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            <br />
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s
          </Text>
          <UnorderedList mt={10} pl={5}>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem mt={3}>Consectetur adipiscing elit</ListItem>
            <ListItem mt={3}>Integer molestie lorem at massa</ListItem>
            <ListItem mt={3}>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>

          <ButtonPrimary title="Tìm hiểu thêm" mt={16} />
        </Box>

        <Flex w="55%" flexWrap="wrap" columnGap={10}>
          {REASON_DATA.map((item, index) => {
            const { icon, title, description } = item;
            return (
              <AspectRatio ratio={4 / 3} key={title} w="45%" h={60} mt={index % 2 === 0 ? 0 : 10} boxShadow="md">
                <Flex>
                  <Box bgColor="#FFF" borderRadius={4} p={5}>
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      border="1px solid #e6e6e6"
                      borderRadius={4}
                      w={14}
                      h={14}
                    >
                      <Icon as={icon} color="secondary.1" fontSize={25} />
                    </Flex>
                    <Heading as="h5" mt={5} fontSize={23}>
                      {title}
                    </Heading>
                    <Text mt={5}>{description}</Text>
                  </Box>
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
