import React from "react";
import useAxios from "axios-hooks";
import { Loader } from "./Loader";
import { AlertMessage } from "./AlertMessage";
import { Collectibles } from "./Collectibles";

interface AssetsProps {
  address: string;
}

const Assets: React.FC<AssetsProps> = ({ address }) => {
  const [{ data, loading, error }] = useAxios({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/blockfrost/units/${address}`,
  });

  if (loading) return <Loader title={"Loading ..."} />;
  if (error) return <AlertMessage />;

  const { collectiblesWithMetaData } = data;

  const units = data.units;

  if (units && collectiblesWithMetaData) {
    return (
      <Collectibles units={units} collectibles={collectiblesWithMetaData} />
    );
  }

  return <h1>No collectibles</h1>;
};

export default Assets;
