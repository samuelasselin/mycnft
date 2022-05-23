import { Hero } from "../../components/body/Hero";
import { AppBody } from "../../layout/AppBody";
import { useWallet } from "../../hooks/UseWallet";
import { Loader } from "../../components/body/Loader";
import React, { useEffect } from "react";
import Home from "../../components/Home";
import { namiWalletSignIn } from "../../utils/NamiWallet";
import { HeroWmessage } from "../../components/body/HeadingWmessage";
import { isMobile } from "react-device-detect";

const Index: React.FC & { layout: any } = () => {
  const { setWallet, wallet } = useWallet();

  useEffect(() => {
    const handleNamiWallet = async () => {
      await namiWalletSignIn(setWallet);
    };
    handleNamiWallet();
  }, []);

  const { isInstalled, address, walletLoading, syncWallet } = wallet;

  if (isMobile)
    return (
      <Hero
        title={
          "We cant register you on mobile, please use a chrome-based browser to continue !"
        }
      />
    );
  if (walletLoading) return <Loader title={"Loading ..."} />;
  if (!isInstalled)
    return (
      <HeroWmessage
        title={"Install nami wallet on a chrome-based browser to continue !"}
        message={"Only Nami Wallet is supported at the moment (Beta)"}
      />
    );
  if (!syncWallet) return <Hero title={"Please connect to your nami wallet"} />;

  if (address) {
    return <Home address={address} />;
  }
};

export default Index;

Index.layout = AppBody;
