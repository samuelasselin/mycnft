import React from "react";
import { Stack, Spinner, Flex, Heading } from "@chakra-ui/react";

interface LoaderProps {
  title: string;
}

export const Loader: React.FC<LoaderProps> = ({ title }) => {
  return (
    <Flex flex="1" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
      <Stack alignItems={"center"} mt={265}>
        <Heading fontSize="3vw">{title}</Heading>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#FF0080"
          size="xl"
        />
      </Stack>
    </Flex>
  );
};
