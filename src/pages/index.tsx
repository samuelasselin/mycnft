import { Hero } from "../components/Hero";
import { AppBody } from "../layout/AppBody";
import { useWallet } from "../hooks/UseWallet";
import { CreateUsername } from "../components/CreateUsername";

const Index = () => {
  const { wallet } = useWallet();

  if (!wallet.isInstalled)
    return <Hero title={"Install nami wallet to continue."} />;

  if (!wallet.address)
    return <Hero title={"Please connect to your nami wallet."} />;

  if (wallet.address) {
    return <CreateUsername />;
  }

  return <Hero title={"Welcome to mycnft.io"} />;
};

export default Index;

Index.layout = AppBody;
