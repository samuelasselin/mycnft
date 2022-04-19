import { Hero } from "../components/Hero";
import { AppBody } from "../layout/AppBody";
import { useWallet } from "../hooks/UseWallet";
import { Loader } from "../components/Loader";
import React from "react";
import Home from "../components/Home";

const Index: React.FC & { layout: any } = () => {
  const { wallet } = useWallet();
  const { isInstalled, address, walletLoading } = wallet;

  if (walletLoading) return <Loader title={"Loading your profile.."} />;
  if (!isInstalled) return <Hero title={"Install nami wallet to continue."} />;
  if (!address) return <Hero title={"Please connect to your nami wallet."} />;

  if (address) {
    return <Home address={address} />;
  }

  return;
};

export default Index;

Index.layout = AppBody;
