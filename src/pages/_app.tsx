import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppLayoutProps } from "next/app";
import { WalletContext } from "../context/UseWallet";
import { useEffect, useState } from "react";
import { namiWalletSignIn } from "../utils/NamiWallet";

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  const [wallet, setWallet] = useState({ isWallet: false });

  useEffect(() => {
    handleNamiWallet();
  }, []);

  const handleNamiWallet = async () => {
    const isEnabled = await window.cardano.nami.isEnabled();

    if (isEnabled) {
      await namiWalletSignIn(setWallet);
    }
  };

  const value = { wallet, setWallet };

  return (
    <WalletContext.Provider value={value}>
      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </WalletContext.Provider>
  );
}

export default MyApp;
