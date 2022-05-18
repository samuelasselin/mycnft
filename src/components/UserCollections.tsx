import React from "react";
import useAxios from "axios-hooks";
import { AlertMessage } from "./AlertMessage";
import { CollectibleCard } from "./CollectibleCard";
import { CollectibleType } from "../types/CollectiblesTypes";

interface CollectibleByCollectionProps {
  policyId: string;
  collectibles: CollectibleType[];
}

export const UserCollections: React.FC<CollectibleByCollectionProps> = ({
  policyId,
  collectibles,
}) => {
  const [{ data, loading, error }] = useAxios({
    url: `https://api.opencnft.io/1/policy/${policyId}`,
    method: "GET",
  });

  if (loading) return <h1 />;
  if (error) return <AlertMessage />;

  if (data) {
    return (
      <CollectibleCard
        forCollection={true}
        collectible={collectibles[0]}
        collectionData={data}
        collectibles={collectibles}
      />
    );
  }
};
