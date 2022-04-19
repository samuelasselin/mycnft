import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppLayoutProps } from "next/app";
import { WalletContext } from "../hooks/UseWallet";
import { useEffect, useState } from "react";
import { namiWalletSignIn } from "../utils/NamiWallet";

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  const [wallet, setWallet] = useState({
    isLoading: false,
    syncWallet: false,
    isInstalled: false,
  });

  useEffect(() => {
    const handleNamiWallet = async () => {
      await namiWalletSignIn(setWallet);
    };

    handleNamiWallet();
  }, []);

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
};

export default MyApp;
