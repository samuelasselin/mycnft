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
import { SetStateWithPrev } from "../utils/SetStateWithPrev";

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
          SetStateWithPrev(setCollectiblesData, {
            collectiblesWithMetaData: [
              ...collectiblesWithMetaData,
              ...data.collectibles,
            ],
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
    >
      <SimpleGrid columns={4} spacing={5} margin={20}>
        {collectiblesWithMetaData.map((collectible, index) => {
          return <Collectible key={index} collectible={collectible} />;
        })}
      </SimpleGrid>
    </InfiniteScroll>
  );
};
