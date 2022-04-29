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
import { Icon } from "@chakra-ui/icons";
import { FiShoppingCart } from "react-icons/fi";
import { getAssetImageSource } from "../utils/ipfsConverter";
import LazyLoad from "react-lazyload";

interface CollectibleProps {
  collectible: CollectibleType;
}

export const Collectible: React.FC<CollectibleProps> = ({ collectible }) => {
  const { onchain_metadata: onChainMetaData } = collectible;
  const { image, name } = onChainMetaData;

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      <LazyLoad>
        <Image
          src={getAssetImageSource(image)}
          alt={name}
          roundedTop="lg"
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
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>
          <Tooltip
            label="Twitter"
            bg="white"
            placement={"top"}
            color={"gray.800"}
            fontSize={"1.2em"}
          >
            <chakra.a href={""} display={"flex"}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </chakra.a>
          </Tooltip>
        </Flex>
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
            Official website
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};
