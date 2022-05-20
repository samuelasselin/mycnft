import { Alert, AlertIcon } from "@chakra-ui/alert";
import React from "react";
import { Hero } from "./Hero";

interface AlertMessageProps {
  message?: string;
  status?: "error" | "info" | "warning" | "success";
  hero?: boolean;
}

export const AlertMessage: React.FC<AlertMessageProps> = ({
  message = "There was an error processing your request",
  status = "error",
  hero = true,
}) => (
  <>
    <Alert status={status}>
      <AlertIcon />
      {message}
    </Alert>
    {hero ? <Hero title={"Please try again."} /> : null}
  </>
);
