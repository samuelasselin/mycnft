import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { Collection } from "./Collection";
import { CollectibleType } from "../types/CollectiblesTypes";

interface CollectiblesByCollectionProps {
  assetsByCollection: {
    [key: string]: CollectibleType[];
  };
}

export const Collections: React.FC<CollectiblesByCollectionProps> = ({
  assetsByCollection,
}) => {
  return (
    <>
      <Box px={10} margin={10} w={"100%"}>
        <Text fontSize="2xl" fontWeight="bold">
          Collections
        </Text>
        <hr />
      </Box>
      <SimpleGrid columns={4} spacing={5} margin={10} minChildWidth="300px">
        {Object.entries(assetsByCollection).map(([policyId, collectibles]) => (
          <Collection policyId={policyId} collectibles={collectibles} />
        ))}
      </SimpleGrid>
    </>
  );
};
