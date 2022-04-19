import {
  Button,
  FormControl,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Form, Formik } from "formik";
import { InputField } from "../InputField";
import axios from "axios";

interface UsernameProps {
  address: string;
}

export const Username: React.FC<UsernameProps> = ({ address }) => {
  return (
    <Stack
      spacing={4}
      w={"full"}
      maxW={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      rounded={"xl"}
      p={6}
      my={20}
    >
      <Heading
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        lineHeight={1.1}
        fontSize={{ base: "2xl", md: "3xl" }}
      >
        Please chose a username
      </Heading>
      <Text
        fontSize={{ base: "sm", sm: "md" }}
        color={useColorModeValue("gray.800", "gray.400")}
      >
        Username will be use to access your <strong>mycnft.io/profile</strong>
      </Text>
      <Formik
        initialValues={{ username: "" }}
        onSubmit={async ({ username }, { setSubmitting, setErrors }) => {
          if (!username) setErrors({ username: "Username is required" });
          else {
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_DOMAIN}/api/user`,
              {
                username,
                address: address,
              }
            );
            console.log(response);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormControl id="username">
              <InputField placeholder="Enter username" name="username" />
            </FormControl>
            <Stack spacing={6}>
              <Button
                mt={6}
                colorScheme={"teal"}
                type="submit"
                isLoading={isSubmitting}
              >
                Save
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};
