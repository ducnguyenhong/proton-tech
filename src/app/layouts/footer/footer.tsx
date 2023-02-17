import { Box, Flex, Icon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/images/logo.png';
import { memo } from 'react';
import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhoneVolume } from 'react-icons/fa';

const Footer: React.FC = () => {
  const ABOUT_US_DATA = [
    {
      url: '/gioi-thieu',
      title: 'Giới thiệu'
    },
    {
      url: '/dieu-khoan-su-dung',
      title: 'Điều khoản sử dụng'
    },
    {
      url: '/huong-dan-thanh-toan',
      title: 'Thanh toán'
    },
    {
      url: '/khieu-nai',
      title: 'Khiếu nại'
    }
  ];

  const CONTACT_DATA = [
    {
      url: 'https://goo.gl/maps/YkawzYS2AHwjeJfe7',
      title: '20 Hồ Tùng Mậu - Hà Nội',
      icon: FaMapMarkerAlt,
      isNewTab: true
    },
    {
      url: 'tel:0376876191',
      title: '0376876191',
      icon: FaPhoneVolume
    },
    {
      url: 'mailto:protontechvn@gmail.com',
      title: 'protontechvn@gmail.com',
      icon: FaEnvelope
    },
    {
      url: 'https://facebook.com/protontechvn',
      title: 'Proton Tech',
      icon: FaFacebook,
      isNewTab: true
    }
  ];

  return (
    <footer>
      <Box bgColor="#29293D" color="#FFF" mt={60} pt={32} px={80} pb={10}>
        <Flex flex={1}>
          <Flex flex={1 / 4} flexDirection="column">
            <Image src={Logo} alt="logo" height={70} />
            <Text mt={3} fontSize={18} fontWeight={500}>
              Proton{' '}
              <Text as="span" fontWeight={200}>
                Tech
              </Text>
            </Text>
          </Flex>

          <Flex flex={1 / 4}>1</Flex>

          <Flex flex={1 / 4} flexDirection="column">
            <Text fontSize={16} fontWeight={700} textTransform="uppercase">
              Liên hệ
            </Text>
            <Flex flexDirection="column" gap={1.5} mt={5}>
              {CONTACT_DATA.map((item) => {
                const { url, icon, title, isNewTab } = item;
                return (
                  <Link
                    href={url}
                    key={url}
                    target={isNewTab ? '_blank' : '_self'}
                    rel={isNewTab ? 'noopener noreferrer' : ''}
                  >
                    <Flex alignItems="center" fontSize={14} gap={2}>
                      <Icon as={icon} mt="1px" />
                      <Text as="span">{title}</Text>
                    </Flex>
                  </Link>
                );
              })}
            </Flex>
          </Flex>

          <Flex flex={1 / 4} flexDirection="column">
            <Text fontSize={16} fontWeight={700} textTransform="uppercase">
              Về chúng tôi
            </Text>
            <UnorderedList mt={5} pl={3}>
              {ABOUT_US_DATA.map((item) => {
                const { url, title } = item;
                return (
                  <ListItem key={url} fontSize={14} mb={1.5}>
                    <Link href={url}>{title}</Link>
                  </ListItem>
                );
              })}
            </UnorderedList>
          </Flex>
        </Flex>

        <Box w="100%" h="1px" bgColor="#FFF" mt={14} mx="auto" opacity={0.2} />

        <Text fontSize={16} textAlign="center" fontWeight={500} mt={8}>
          © Copyright 2023 - Bản quyền thuộc về Proton Tech
        </Text>
      </Box>
    </footer>
  );
};

export default memo(Footer);
