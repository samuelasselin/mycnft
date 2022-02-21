import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Container } from "../components/Container";

export const AppBody: React.FC<{}> = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <>
      <NavBar />
      <Container height="100vh">
        {children}
        <Footer>
          <Text>Made with ❤️ for Cardano</Text>
        </Footer>
      </Container>
    </>
  );
};

export default AppBody;
