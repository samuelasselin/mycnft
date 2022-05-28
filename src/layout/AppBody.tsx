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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:alt" content="MyCnfts" />
        <meta name="og:image:width" content="650" />
        <meta name="og:image:height" content="650" />
        <meta
          name="twitter:title"
          content="Philippine Standard Geographic Code API"
        />
        <meta
          name="twitter:description"
          content="API used for listing all the region, province, city, municipality, barangay, and its data. Philippine Standard Geographic Codes (PSGC) data came from Philippine Statistics Authority."
        />
        <meta
          name="twitter:image"
          content="https://cf-ipfs.com/ipfs/QmfG2ry1y1stADHq9Ui5wZqc4LkALG2HCFPAb4kVuxDS8d"
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
