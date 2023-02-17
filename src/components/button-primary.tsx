import { Button } from '@chakra-ui/react';
import { memo, MouseEventHandler, ReactElement } from 'react';

interface ButtonProps {
  title: string;
  w?: number | string;
  h?: number | string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
  mx?: number | string;
  my?: number | string;
  px?: number | string;
  py?: number | string;
  m?: number | string;
  p?: number | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonPrimary: React.FC<ButtonProps> = (props) => {
  const {
    title,
    w = '220px',
    h = '55px',
    leftIcon,
    rightIcon,
    mt,
    mr,
    mb,
    ml,
    pt,
    pr,
    pb,
    pl,
    mx,
    my,
    px,
    py,
    m,
    p,
    onClick
  } = props;

  return (
    <Button
      bgGradient="linear(to-r, rgba(140,40,199,1), rgba(113,46,223,1), rgba(85,52,248,1))"
      h={h}
      w={w}
      color="#FFF"
      borderRadius="full"
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
      px={px}
      py={py}
      mx={mx}
      my={my}
      m={m}
      p={p}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      fontWeight={600}
      fontSize={18}
      opacity={0.9}
      justifyContent="center"
      alignItems="center"
      onClick={onClick}
      transitionDuration="150ms"
      _hover={{
        opacity: 1,
        transform: 'scale(1.01)',
        boxShadow: '0px 0px 4px 1px rgb(255 255 255)'
      }}
      _active={{ bgColor: 'secondary.3' }}
    >
      {title}
    </Button>
  );
};

export default memo(ButtonPrimary);
