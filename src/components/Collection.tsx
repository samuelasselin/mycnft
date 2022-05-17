import React from "react";
import useAxios from "axios-hooks";
import { Loader } from "./Loader";
import { AlertMessage } from "./AlertMessage";
import { Collectible } from "./Collectible";
import { CollectibleType } from "../types/CollectiblesTypes";

interface CollectibleByCollectionProps {
  policyId: string;
  collectibles: CollectibleType[];
}

export const Collection: React.FC<CollectibleByCollectionProps> = ({
  policyId,
  collectibles,
}) => {
  const [{ data, loading, error }] = useAxios({
    url: `https://api.opencnft.io/1/policy/${policyId}`,
    method: "GET",
  });

  if (loading) return <Loader title={"Loading ..."} />;
  if (error) return <AlertMessage />;

  console.log(data);

  return (
    <Collectible
      forCollection={true}
      collectible={collectibles[0]}
      collectionThumbnail={data.thumbnail}
      collectibles={collectibles}
    />
  );
};
