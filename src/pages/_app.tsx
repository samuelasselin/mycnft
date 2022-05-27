import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppLayoutProps } from "next/app";
import { WalletProvider } from "../hooks/UseWallet";

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <WalletProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </WalletProvider>
  );
};

export default MyApp;
