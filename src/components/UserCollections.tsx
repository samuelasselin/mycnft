import React from "react";
import useAxios from "axios-hooks";
import { AlertMessage } from "./AlertMessage";
import { CollectibleCard } from "./CollectibleCard";
import { CollectibleType } from "../types/CollectiblesTypes";
import { assetName } from "../utils/UtilsConverter";

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

  const { onchain_metadata: onChainMetaData } = collectibles[0];
  const { name } = onChainMetaData;

  const title = assetName(name, collectibles[0].asset_name, true);

  if (data) {
    return (
      <CollectibleCard
        key={policyId}
        forCollection={true}
        collectibles={collectibles}
        name={title}
        image={data?.thumbnail}
        collectionData={data}
      />
    );
  }

  return <h1>No collectibles</h1>;
};
