import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';

interface BlogSectionProps {
  title: string;
  color: string;
  route: string;
}

const BlogSection: React.FC<BlogSectionProps> = (props) => {
  const { title, color, route } = props;
  return (
    <Flex borderBottom="2px solid" borderBottomColor={color} mb={3} h={10} justify="space-between">
      <Flex bgColor={color} h="full" align="center" px={8}>
        <Text color="#FFF">{title}</Text>
      </Flex>

      <Link href={route}>
        <Flex bgColor="gray.700" px={6} py={1.5} borderRadius={2}>
          <Text color="#FFF">Xem thêm</Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default memo(BlogSection);
