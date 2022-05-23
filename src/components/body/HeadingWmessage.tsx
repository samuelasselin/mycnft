import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface HeroWmessageProps {
  title: string;
  message: string;
}

export const HeroWmessage: React.FC<HeroWmessageProps> = ({
  title,
  message,
}) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="55vh"
    direction={"column"}
  >
    <Heading fontSize="2xl">{title}</Heading>
    <Text mt={5} fontSize="md">
      {message}
    </Text>
  </Flex>
);
