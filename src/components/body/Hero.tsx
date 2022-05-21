import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface HeroProps {
  title: string;
}

export const Hero: React.FC<HeroProps> = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="60vh">
    <Heading fontSize="2vw">{title}</Heading>
  </Flex>
);
