import { useRouter } from "next/router";
import React from "react";
import AppBody from "../layout/AppBody";
import useAxios from "axios-hooks";
import { Loader } from "../components/body/Loader";
import { AlertMessage } from "../components/body/AlertMessage";
import UserAssets from "../components/UserAssets";
import { Hero } from "../components/body/Hero";

export const CollectiblesByUsername: React.FC & { layout: any } = () => {
  const router = useRouter();
  const { username } = router.query;

  const userData = JSON.stringify({ username });

  const [{ data, loading, error }] = useAxios({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/user/${userData}`,
    method: "GET",
  });

  if (loading) return <Loader title={`Loading ...`} />;
  if (error) return <AlertMessage />;

  const { user } = data;

  if (user) {
    return <UserAssets address={user.address} username={user.username} />;
  }

  return <Hero title={"Request profile not found !"} />;
};

export default CollectiblesByUsername;

CollectiblesByUsername.layout = AppBody;
