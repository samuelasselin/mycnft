import { Alert, AlertIcon } from "@chakra-ui/alert";
import React from "react";
import { Hero } from "./Hero";

interface AlertMessageProps {
  message?: string;
}

export const AlertMessage: React.FC<AlertMessageProps> = ({
  message = "There was an error processing your request",
}) => (
  <>
    <Alert status="error">
      <AlertIcon />
      {message}
    </Alert>
    <Hero title={"Please try again."} />
  </>
);
