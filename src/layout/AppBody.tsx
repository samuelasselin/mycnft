import React, { ReactNode } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Container } from "../components/Container";
import { Title } from "../components/Title";

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
          <Title title={"Made with ❤️ for Cardano"} />
        </Footer>
      </Container>
    </>
  );
};

export default AppBody;
