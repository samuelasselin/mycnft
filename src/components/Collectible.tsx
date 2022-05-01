import {
  Badge,
  Box,
  chakra,
  Flex,
  Image,
  Spinner,
  Stack,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { CollectibleType } from "../types/CollectiblesTypes";
import { getAssetImageSource } from "../utils/ipfsConverter";
import LazyLoad from "react-lazyload";

interface CollectibleProps {
  collectible: CollectibleType;
}

export const Collectible: React.FC<CollectibleProps> = ({ collectible }) => {
  const { onchain_metadata: onChainMetaData } = collectible;
  const { image, name } = onChainMetaData;

  return (
    <Box bg={useColorModeValue("gray.200", "gray.800")}>
      <LazyLoad>
        <Image
          src={getAssetImageSource(image)}
          alt={name}
          roundedTop="lg"
          shadow="lg"
          fallback={
            <Stack alignItems={"center"} mt={100}>
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
      </LazyLoad>

      <Box p="6">
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="1xl"
            fontWeight="bold"
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
