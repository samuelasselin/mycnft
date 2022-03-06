import { Hero } from "../components/Hero";
import { AppBody } from "../layout/AppBody";
import { useMeQuery } from "../generated/graphql";
import { useWallet } from "../hooks/UseWallet";

const Index = () => {
  const { wallet } = useWallet();

  if (!wallet.address) return <Hero title={"Loading.."} />;

  if (!wallet.isInstalled)
    return (
      <Hero title={"Please install nami wallet extensions to continue !"} />
    );

  if (wallet.address) {
    const { data, loading, error } = useMeQuery({
      variables: { address: wallet.address },
    });

    if (loading) return <h1>Loading..</h1>;
    if (error) return <h1>{error}</h1>;

    if (!data.me) {
      return <Hero title={"Please choose a username"} />;
    }
  }

  return <Hero title={"Welcome to mycnft.io"} />;
};

export default Index;

Index.layout = AppBody;
