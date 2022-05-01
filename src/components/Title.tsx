import { Text } from "@chakra-ui/react";
import React from "react";

interface TextProps {
  title: string;
}

export const Title: React.FC<TextProps> = ({ title }) => (
  <Text
    mt={5}
    bgGradient={"linear(to-l, #7928CA, #FF0080)"}
    bgClip="text"
    fontSize="2xl"
    textAlign={"center"}
    fontWeight="semibold"
  >
    {title}
  </Text>
);
