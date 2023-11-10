import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

interface CardProps extends BoxProps {
  children: JSX.Element[] | JSX.Element;
  variant?: string;
}
function Card({ variant, children, ...rest }: CardProps) {

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest} >
      {children}
    </Box>
  );
}

export default Card;
