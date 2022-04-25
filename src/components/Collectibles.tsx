import React, { useState } from "react";

import { SimpleGrid } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { FetchIncrementBy } from "../utils/infiniteScrollFetchBy";
import { AlertMessage } from "./AlertMessage";
import { Title } from "./Title";
import { Collectible } from "./Collectible";
import {
  CollectibleUnitsType,
  CollectibleType,
} from "../types/CollectiblesTypes";

interface CollectiblesProps {
  units: CollectibleUnitsType[];
  collectibles: CollectibleType[];
}

export const Collectibles: React.FC<CollectiblesProps> = ({
  units,
  collectibles,
}) => {
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
      loader={<Title title={"Scroll to load more nfts !"} />}
      endMessage={<Title title={"No more nft to load"} />}
    >
      <SimpleGrid columns={3} spacing={10} mt={10}>
        {collectiblesWithMetaData.map((collectible, index) => {
          return <Collectible key={index} collectible={collectible} />;
        })}
      </SimpleGrid>
    </InfiniteScroll>
  );
};
