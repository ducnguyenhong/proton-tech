import { useMediaQuery } from '@/utils/hooks';
import { Box, Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';
import AboutUs from './subs/about-us';
import FooterIntro from './subs/intro';
import FooterNews from './subs/news';
import FooterService from './subs/service';

const Footer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 576px)', true, { getInitialValueInEffect: false });

  return (
    <footer>
      <Box
        bgColor="#29293D"
        color="#e6e6e6"
        mt={{ xs: 10, lg: 72 }}
        pt={{ xs: 8, lg: 32 }}
        px={{ xs: 5, lg: 80 }}
        pb={{ xs: 4, lg: 8 }}
      >
        <Flex flex={1} w="full" direction={{ xs: 'column', lg: 'row' }} gap={{ xs: 10, lg: 0 }}>
          <Flex w={{ xs: 'full', lg: 1 / 5 }} direction="column" gap={{ xs: 3, lg: 5 }}>
            <FooterIntro />
          </Flex>

          {!isMobile && (
            <>
              <Flex w={{ xs: 'full', lg: 2 / 5 }} pl={10}>
                <FooterNews />
              </Flex>

              <Flex w={{ xs: 'full', lg: 1 / 5 }} direction="column">
                <FooterService />
              </Flex>
            </>
          )}

          <Flex w={{ xs: 'full', lg: 1 / 5 }} direction="column">
            <AboutUs />
          </Flex>
        </Flex>

        <Box w="100%" h="1px" bgColor="#FFF" mt={{ xs: 10, lg: 20 }} mx="auto" opacity={0.2} />

        <Text textAlign="center" fontWeight={500} mt={{ xs: 3, lg: 6 }} px={5} fontSize={{ xs: 14, lg: 15 }}>
          © Copyright 2023 - Bản quyền thuộc về Proton&nbsp;Tech
        </Text>
      </Box>
    </footer>
  );
};

export default memo(Footer);
