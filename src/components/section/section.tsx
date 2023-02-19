import { Heading } from '@chakra-ui/react';
import { memo } from 'react';

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = (props) => {
  return (
    <Heading
      as="h4"
      fontSize={{ xs: 24, lg: 35 }}
      mt={3}
      color="red"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
    >
      {props.title}
    </Heading>
  );
};

export default memo(Section);
