import { Username } from "./forms/Username";
import { Loader } from "./Loader";
import React from "react";
import useAxios from "axios-hooks";
import { AlertMessage } from "./AlertMessage";
import UserAssets from "./UserAssets";

interface HomeProps {
  address: string;
}

const Home: React.FC<HomeProps> = ({ address }) => {
  const userData = JSON.stringify({ address });

  const [{ data, loading, error }] = useAxios({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/user/${userData}`,
    method: "GET",
  });

  if (loading) return <Loader title={"Loading ..."} />;
  if (error) return <AlertMessage />;

  if (!data.user) {
    return <Username />;
  }

  return <UserAssets address={address} />;
};

export default Home;
