import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppLayoutProps } from "next/app";
import { WalletContext } from "../hooks/UseWallet";
import { useState } from "react";

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  const [wallet, setWallet] = useState({
    username: null,
    isLoading: false,
    syncWallet: false,
    isInstalled: false,
  });

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
