import React, { ReactNode } from "react";
import { Footer } from "../components/body/Footer";
import { NavBar } from "../components/body/NavBar";
import { Container } from "../components/body/Container";
import { Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { getAssetImageSource } from "../utils/IpfsConverter";

interface AppBodyProps {
  children: ReactNode;
  image?: string;
}

export const AppBody: React.FC<AppBodyProps> = ({ children, image }) => {
  return (
    <>
      <Head>
        <title>MyCnfts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="test" key="ogtitle" />
        {image && (
          <meta
            property="og:image"
            content={getAssetImageSource(image)}
            key="ogimage"
          />
        )}
      </Head>
      <NavBar />
      <Container minHeight="100vh">
        {children}
        <Footer>
          <Stack pt={10} align={"center"}>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                Made with❤️ for Cardano
              </Text>
            </Stack>
            <Text color={"gray.500"} fontSize={"sm"}>
              Some data obtained from opencnft.io
            </Text>
          </Stack>
        </Footer>
      </Container>
    </>
  );
};

export default AppBody;
