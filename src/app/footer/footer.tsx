import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

const Footer: React.FC = () => {
  return (
    <Flex flex={1} bgColor="#4A5568" color="#FFF" h={60}>
      <Flex flex={1 / 4}>1</Flex>
      <Flex flex={1 / 4}>1</Flex>
      <Flex flex={1 / 4}>1</Flex>
      <Flex flex={1 / 4}>1</Flex>
    </Flex>
  );
};

export default memo(Footer);
