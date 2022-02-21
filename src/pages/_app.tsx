import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppLayoutProps } from "next/app";
import { WalletContext } from "../context/UseWallet";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  const [wallet, setWallet] = useState({ isWallet: true });

  useEffect(() => {
    handleNamiWallet();
  }, []);

  const handleNamiWallet = async () => {
    const isEnabled = await window.cardano.isEnabled();

    if (isEnabled) {
      setWallet({ isWallet: true });
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
