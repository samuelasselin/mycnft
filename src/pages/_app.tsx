import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppLayoutProps } from "next/app";
import { WalletContext } from "../context/UseWallet";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  const [isWallet, setWallet] = useState(false);

  useEffect(() => {
    handleNamiWallet();

  }, []);

  const handleNamiWallet = async () => {
    const namiWallet = window.cardano;
    const isEnabled = await namiWallet.isEnabled();

    if (isEnabled) {
      setWallet(true);
    }
  };

  const value = { isWallet, setWallet };

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
