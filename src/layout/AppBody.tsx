import React, { ReactNode } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Container } from "../components/Container";
import { Stack, Text } from "@chakra-ui/react";

export const AppBody: React.FC<{}> = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <>
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
