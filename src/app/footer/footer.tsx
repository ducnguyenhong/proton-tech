import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

const Footer: React.FC = () => {
  return (
    <Flex flex={1} bgColor="#343455" color="#FFF" h={60} mt={60}>
      <Flex flex={1 / 4}>1</Flex>
      <Flex flex={1 / 4}>1</Flex>
      <Flex flex={1 / 4}>1</Flex>
      <Flex flex={1 / 4}>1</Flex>
    </Flex>
  );
};

export default memo(Footer);
