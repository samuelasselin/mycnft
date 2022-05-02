import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface HeroProps {
  title: string;
}

export const Hero: React.FC<HeroProps> = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="70vh">
    <Heading fontSize="5vw">{title}</Heading>
  </Flex>
);
