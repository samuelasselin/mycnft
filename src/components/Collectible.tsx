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
import { getAssetImageSource } from "../utils/IpfsConverter";
import LazyLoad from "react-lazyload";
import { toString, fromHex } from "../utils/UtilsConverter";
import { CollectionModal } from "./CollectionModal";

interface CollectibleProps {
  collectibles?: CollectibleType[];
  collectible: CollectibleType;
  forCollection: boolean;
  collectionThumbnail?: string;
}

export const Collectible: React.FC<CollectibleProps> = ({
  collectibles,
  collectible,
  forCollection,
  collectionThumbnail,
}) => {
  const { onchain_metadata: onChainMetaData } = collectible;
  let { image, name } = onChainMetaData;

  let readableName = toString(fromHex(collectible.asset_name));

  const nameToLetters = (name) => {
    if (name) {
      return name.split("#")[0];
    }
  };

  if (forCollection) {
    readableName = nameToLetters(readableName);
    name = nameToLetters(name);
  }

  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.800")}
      maxW={forCollection ? "" : "350px"}
    >
      <LazyLoad>
        <Image
          src={getAssetImageSource(forCollection ? collectionThumbnail : image)}
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
          <Box fontSize="2xl" fontWeight="bold" as="h4" lineHeight="tight">
            {name ? name : readableName} <br />
            {forCollection ? (
              <CollectionModal collectibles={collectibles} />
            ) : null}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
