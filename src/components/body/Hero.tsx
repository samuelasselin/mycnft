import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface HeroProps {
  title: string;
}

export const Hero: React.FC<HeroProps> = ({ title }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="55vh"
    p={10}
    textAlign={"center"}
  >
    <Heading fontSize="2xl">{title}</Heading>
  </Flex>
);
