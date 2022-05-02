import { useRouter } from "next/router";
import React from "react";
import AppBody from "../layout/AppBody";
import useAxios from "axios-hooks";
import { Loader } from "../components/Loader";
import { AlertMessage } from "../components/AlertMessage";
import Assets from "../components/Assets";
import { Hero } from "../components/Hero";

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
    return <Assets address={user.address} />;
  }

  return <Hero title={"Request profile not found !"} />;
};

export default CollectiblesByUsername;

CollectiblesByUsername.layout = AppBody;
