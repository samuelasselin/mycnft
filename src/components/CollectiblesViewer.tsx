import React, { useState } from "react";

import {
  Flex,
  Spinner,
  Box,
  Image,
  useColorModeValue,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { FetchIncrementBy } from "../utils/infiniteScrollFetchBy";
import { AlertMessage } from "./AlertMessage";
import { Title } from "./Title";

export const CollectiblesViewer = ({ units, collectibles }) => {
  const [collectiblesData, setCollectiblesData] = useState({
    collectiblesWithMetaData: collectibles,
    units,
  });

  const { collectiblesWithMetaData } = collectiblesData;

  const fetchMoreData = async () => {
    const from = collectiblesWithMetaData.length;
    const end = from + FetchIncrementBy;

    const unitsToFetch = units.slice(from, end);

    await axios
      .post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/blockfrost/assets`, {
        units: unitsToFetch,
      })
      .then(
        ({ data }) => {
          setCollectiblesData((prevState) => {
            return {
              ...prevState,
              collectiblesWithMetaData: [
                ...collectiblesWithMetaData,
                ...data.collectibles,
              ],
            };
          });
        },
        (error) => {
          return <AlertMessage />;
        }
      );
  };

  return (
    <InfiniteScroll
      dataLength={collectiblesWithMetaData.length}
      next={fetchMoreData}
      hasMore={units.length != collectiblesWithMetaData.length}
      loader={<Title title={"Scroll to load more collectibles"} />}
      endMessage={<Title title={"No more collectibles to load"} />}
    >
      <SimpleGrid columns={3} spacing={10} mt={10}>
        {collectiblesWithMetaData.map((i, index) => {
          const { onchain_metadata: onChainMetaData } = i;
          const cId = onChainMetaData.image.replace("ipfs://", "");

          return (
            <Box
              key={index}
              bg={useColorModeValue("white", "gray.800")}
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative"
            >
              <Image
                src={`https://ipfs.io/ipfs/${cId}`}
                alt={onChainMetaData.name}
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
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {onChainMetaData.name}
                  </Box>
                </Flex>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </InfiniteScroll>
  );
};
