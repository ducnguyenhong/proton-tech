import { Image } from '@/components';
import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import Logo from 'public/images/logo.png';
import { memo } from 'react';
import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const FooterIntro: React.FC = () => {
  const CONTACT_DATA = [
    {
      url: 'https://goo.gl/maps/YkawzYS2AHwjeJfe7',
      title: '20 Hồ Tùng Mậu - Hà Nội',
      icon: FaMapMarkerAlt,
      isNewTab: true,
      fontSize: 14
    },
    {
      url: 'tel:0376876191',
      title: '0376876191',
      icon: FaPhone,
      fontSize: 14
    },
    {
      url: 'mailto:protontechvn@gmail.com',
      title: 'protontechvn@gmail.com',
      icon: FaEnvelope,
      fontSize: 15
    },
    {
      url: 'https://facebook.com/protontechvn',
      title: 'Proton Tech',
      icon: FaFacebook,
      isNewTab: true,
      fontSize: 15.5
    }
  ];

  return (
    <>
      <Flex align="center" gap={4} justify={{ xs: 'center', lg: 'flex-start' }}>
        <Image src={Logo} alt="logo" h={{ xs: '40px', lg: '50px' }} w={{ xs: '40px', lg: '50px' }} />
        <Text fontSize={20} fontWeight={500}>
          Proton{' '}
          <Text as="span" fontWeight={200}>
            Tech
          </Text>
        </Text>
      </Flex>
      <Text textAlign={{ xs: 'center', lg: 'left' }} fontSize={{ xs: 14, lg: 15 }}>
        Công nghệ tiện ích - Dịch vụ tiện nghi
      </Text>

      <Flex align="center" gap={4} justify={{ xs: 'center', lg: 'flex-start' }}>
        {CONTACT_DATA.map((item) => {
          const { url, title, icon, isNewTab, fontSize } = item;
          return (
            <Link
              key={url}
              title={title}
              href={url}
              target={isNewTab ? '_blank' : '_self'}
              rel={isNewTab ? 'noopener noreferrer' : ''}
            >
              <Flex
                w={9}
                h={9}
                borderRadius="full"
                align="center"
                justify="center"
                bgColor="#252537"
                transitionDuration="300ms"
                _hover={{ bgColor: '#1f1f2e' }}
              >
                <Icon as={icon} fontSize={fontSize} color="#CCC" />
              </Flex>
            </Link>
          );
        })}
      </Flex>
    </>
  );
};

export default memo(FooterIntro);
