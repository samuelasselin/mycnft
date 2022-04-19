import { Username } from "../components/forms/Username";
import { Loader } from "../components/Loader";
import React from "react";
import useAxios from "axios-hooks";
import { AlertMessage } from "./AlertMessage";

interface HomeProps {
  address: string;
}

const Home: React.FC<HomeProps> = ({ address }) => {
  const [{ data, loading, error }] = useAxios({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/user/${address}`,
    method: "GET",
  });

  if (loading) return <Loader title={"Loading your profile.."} />;
  if (error) return <AlertMessage />;

  if (!data.user) {
    return <Username address={address} />;
  }

  return <h1>show user nft and actions</h1>;
};

export default Home;
