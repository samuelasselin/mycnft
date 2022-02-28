import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppLayoutProps } from "next/app";
import { WalletContext } from "../hooks/UseWallet";
import { useEffect, useState } from "react";
import { namiWalletSignIn } from "../utils/NamiWallet";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  const [wallet, setWallet] = useState({ isWallet: false });

  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    const handleNamiWallet = async () => {
      const isEnabled = await window.cardano.nami.isEnabled();
      if (isEnabled) await namiWalletSignIn(setWallet);
    };

    handleNamiWallet();
  }, []);

  const value = { wallet, setWallet };

  return (
    <ApolloProvider client={client}>
      <WalletContext.Provider value={value}>
        <ChakraProvider resetCSS theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </WalletContext.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
