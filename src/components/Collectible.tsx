import {
  Box,
  Flex,
  Image,
  Spinner,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { CollectibleType } from "../types/CollectiblesTypes";

interface CollectibleProps {
  collectible: CollectibleType;
}

export const Collectible: React.FC<CollectibleProps> = ({ collectible }) => {
  const { onchain_metadata: onChainMetaData } = collectible;
  const { image, name } = onChainMetaData;

  const cId = image.replace("ipfs://", "");

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="xlg"
      position="relative"
    >
      <Image
        src={`https://ipfs.io/ipfs/${cId}`}
        alt={name}
        roundedTop="lg"
        fallback={
          <Stack alignItems={"center"} mt={185}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#FF0080"
              size="xl"
            />
          </Stack>
        }
      />

      <Box p="6">
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
