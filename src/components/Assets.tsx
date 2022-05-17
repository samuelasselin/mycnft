import React from "react";
import useAxios from "axios-hooks";
import { Loader } from "./Loader";
import { AlertMessage } from "./AlertMessage";
import _ from "lodash";
import { Collections } from "./Collections";

interface AssetsProps {
  address: string;
}

const Assets: React.FC<AssetsProps> = ({ address }) => {
  const [{ data, loading, error }] = useAxios({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/blockfrost/units/${address}`,
  });

  if (loading) return <Loader title={"Loading ..."} />;
  if (error) return <AlertMessage />;

  const assetsByCollection = _.groupBy(
    data.collectiblesWithMetaData,
    "policy_id"
  );

  if (assetsByCollection) {
    return <Collections assetsByCollection={assetsByCollection} />;
  }

  return <h1>No collectibles</h1>;
};

export default Assets;
