import { Username } from "./forms/Username";
import { Loader } from "./Loader";
import React from "react";
import useAxios from "axios-hooks";
import { AlertMessage } from "./AlertMessage";
import Assets from "./Assets";

interface HomeProps {
  address: string;
}

const Home: React.FC<HomeProps> = ({ address }) => {
  const userData = JSON.stringify({ address });

  const [{ data, loading, error }] = useAxios({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/user/${userData}`,
    method: "GET",
  });

  if (loading) return <Loader title={"Loading your profile.."} />;
  if (error) return <AlertMessage />;

  if (!data.user) {
    return <Username />;
  }

  return <Assets address={address} />;
};

export default Home;
