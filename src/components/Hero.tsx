import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(to-r, green.200, pink.500)"
    bgClip="text"
  >
    <Heading fontSize="5vw">{title}</Heading>
  </Flex>
);
