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
  url?: string;
}

export const AppBody: React.FC<AppBodyProps> = ({ children, image, url }) => {
  return (
    <>
      <Head>
        <title>MyCnfts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/*FACEBOOK*/}
        <meta property="og:title" content="MyCnfts" />
        <meta property="og:type" content="siteweb" />
        // TODO
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content="https://og-image.vercel.app/Hello%20World.png"
        />
        {/*TWITTER*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="" />
        <meta name="twitter:title" content="MyCnfts" />
        <meta name="twitter:description" content="MyCnfts description" />
        <meta
          name="twitter:image"
          content={`https://og-image.vercel.app/Hello%20World.png`}
        />
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
