import React, { useState } from "react";
import useAxios from "axios-hooks";
import { Loader } from "./Loader";
import { AlertMessage } from "./AlertMessage";
import { useWallet } from "../hooks/UseWallet";
import { Collectible } from "./Collectible";

const Collectibles: React.FC = () => {
  const {
    wallet: { address },
  } = useWallet();

  const [{ data, loading, error }] = useAxios({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/blockfrost/assets/${address}`,
  });

  if (loading) return <Loader title={"Loading your nfts.."} />;
  if (error) return <AlertMessage />;

  const { units } = data;

  const [unitsToShow, setUnitsToShow] = useState({
    units,
    maxIndexToShow: 10,
  });

  if (unitsToShow.units.length > 0) {
    return <Collectible unitsToShow={unitsToShow} />;
  }

  return <h1>No nfts</h1>;
};

export default Collectibles;
