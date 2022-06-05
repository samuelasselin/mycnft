import React, { ReactNode } from "react";
import { Footer } from "../components/body/Footer";
import { NavBar } from "../components/body/NavBar";
import { Container } from "../components/body/Container";
import { Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

interface AppBodyProps {
  children: ReactNode;
  title?: string;
  imgSrc?: string;
}

export const AppBody: React.FC<AppBodyProps> = ({
  children,
  title,
  imgSrc,
}) => {
  return (
    <>
      <Head>
        <title>MyCnfts</title>
        <meta
          name="twitter:description"
          content="MyCnfts Cardano arts gallery"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title}`} />
        {imgSrc && (
          <meta
            name="twitter:image"
            content={`${process.env.NEXT_PUBLIC_DOMAIN}/api/og-image?src=${imgSrc}`}
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
