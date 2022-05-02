import React, { ReactNode } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Container } from "../components/Container";
import { Text } from "@chakra-ui/react";

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
          <Text mt={5} fontSize="2xl" textAlign={"center"} fontWeight="bold">
            Made with ❤️ for Cardano
          </Text>
        </Footer>
      </Container>
    </>
  );
};

export default AppBody;
