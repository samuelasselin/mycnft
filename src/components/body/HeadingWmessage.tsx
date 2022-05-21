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
    <Heading fontSize="2vw">{title}</Heading>
    <Text mt={5} fontSize="1vw">
      {message}
    </Text>
  </Flex>
);
