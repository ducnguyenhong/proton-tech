import Image from '@/components/image';
import { AspectRatio, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import ImgNews from '../images/news.png';

const BlogSlider: React.FC = () => {
  return (
    <Flex gap={6} mt={12} justify="space-between">
      <Flex pos="relative" flex={1}>
        <Link href="/" style={{ display: 'block', width: '100%', height: '100%' }}>
          <Flex w="full" h="full" borderRadius={3} overflow="hidden">
            <Image src={ImgNews} w="full" h="full" alt="news" />
          </Flex>
        </Link>
      </Flex>
      <Flex flex={1} flexWrap="wrap" gap={5} w="full" justify="space-between">
        {[1, 2, 3, 4].map((item) => {
          return (
            <Flex key={item} w="48.5%">
              <Link href="/" style={{ display: 'block', width: '100%' }}>
                <Flex w="full" borderRadius={3} overflow="hidden">
                  <AspectRatio ratio={8 / 5} w="full">
                    <Image src={ImgNews} w="full" h="full" alt="news" />
                  </AspectRatio>
                </Flex>
              </Link>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default memo(BlogSlider);
