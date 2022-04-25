import React from "react";
import useAxios from "axios-hooks";
import { Loader } from "./Loader";
import { AlertMessage } from "./AlertMessage";
import { useWallet } from "../hooks/UseWallet";
import { Collectibles } from "./Collectibles";

const Assets: React.FC = () => {
  const {
    wallet: { address },
  } = useWallet();

  const [{ data, loading, error }] = useAxios({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/blockfrost/units/${address}`,
  });

  if (loading) return <Loader title={"Loading your nfts.."} />;
  if (error) return <AlertMessage />;

  const { units, collectiblesWithMetaData } = data;

  if (units && collectiblesWithMetaData) {
    return (
      <Collectibles units={units} collectibles={collectiblesWithMetaData} />
    );
  }

  return <h1>No nfts</h1>;
};

export default Assets;
