'use client';
import ButtonPrimary from '@/components/button-primary';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { memo } from 'react';

const HomeStudio: React.FC = () => {
  return (
    <Flex flexDirection="column" mt={60} px={80}>
      <Flex mt={16} w="full" gap={16}>
        <Box w="45%">
          <Heading as="h4" fontSize={35} mt={3} color="#FAFBFB">
            Proton Studio
          </Heading>
          <Text mt={5} fontSize={20} color="text.2">
            Proton Studio hiện đang có mặt trên đa nền tảng
          </Text>

          <ButtonPrimary title="Xem chi tiết" mt={16} />
        </Box>

        <Flex w="55%" flexWrap="wrap" columnGap={10}></Flex>
      </Flex>
    </Flex>
  );
};

export default memo(HomeStudio);
