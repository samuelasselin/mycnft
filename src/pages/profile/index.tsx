import { Hero } from "../../components/Hero";
import { AppBody } from "../../layout/AppBody";
import { useWallet } from "../../hooks/UseWallet";
import { Loader } from "../../components/Loader";
import React, { useEffect } from "react";
import Home from "../../components/Home";
import { namiWalletSignIn } from "../../utils/NamiWallet";

const Index: React.FC & { layout: any } = () => {
  const { setWallet, wallet } = useWallet();

  // useEffect(() => {
  //   const handleNamiWallet = async () => {
  //     await namiWalletSignIn(setWallet);
  //   };
  //   handleNamiWallet();
  // }, []);

  const { isInstalled, address, walletLoading, syncWallet } = wallet;

  if (walletLoading) return <Loader title={"Loading ..."} />;
  if (!isInstalled) return <Hero title={"Install nami wallet to continue"} />;
  if (!syncWallet) return <Hero title={"Please connect to your nami wallet"} />;

  if (address) {
    return <Home address={address} />;
  }
};

export default Index;

Index.layout = AppBody;
